// In read.cjs
export async function get() {
  try {
      const [rows, fields] = await mysqlconn.query('SELECT * FROM courses');
      console.log('API Response:', rows);

      return {
          body: rows,
      };
  } catch (error) {
      console.error('Error:', error);
      return {
          status: 500,
          body: 'Internal Server Error',
      };
  }
}
