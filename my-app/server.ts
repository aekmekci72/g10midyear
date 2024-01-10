// server.ts
import express, { Request, Response } from 'express';
import { createConnection } from './src/lib/db/mysql.cjs';

const app: express.Application = express();
const PORT = process.env.PORT || 3000;

app.get('/api/courses', async (req: Request, res: Response) => {
  try {
    const connection = await createConnection();

    const [rows] = await connection.execute('SELECT * FROM courses');
    connection.end();

    res.json(rows);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
