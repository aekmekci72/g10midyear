<!-- src/routes/+page.svelte -->
<script>
    export let data;
    console.log(data);
  </script>
  
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  
  {#if data && data.length > 0}
    <ul>
      {#each data as item (item.id)}
        <li>{item.name}</li>
      {/each}
    </ul>
  {:else}
    
    <p>No data available</p>
  {/if}
  
  <style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style>
  