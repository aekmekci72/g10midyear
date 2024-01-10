<!-- src/routes/CoursePage.svelte -->
<script context="module" lang="ts">
  export async function load() {
    const res = await fetch('/api/courses');
    const courses = await res.json();
    console.log(courses);
    return { props: { courses } };
  }
</script>

<script lang="ts">
  export let courses: any[];

  // Handle the received course data
  console.log(courses);
</script>

<h1>All Courses</h1>

<ul>
  {#each courses as course (course.id)}
    <li>{course.name}</li>
  {/each}
</ul>

  <style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style>
  