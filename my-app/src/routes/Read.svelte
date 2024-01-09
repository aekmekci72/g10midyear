<script context="module" lang="ts">
    import { get } from '$lib/routes/api/read.cjs';

    export const load = async () => {
        const data = await get();
        console.log('Data in load:', data);
        return { props: { data } };
    };
</script>

<script>
    import { onMount } from 'svelte';
    import { get } from '$lib/routes/api/read.cjs';

    export let data;

    onMount(async () => {
        data = await get();
        console.log('Data in onMount:', data);
    });
</script>

<main>
    <h1>Data from API</h1>
    {#if data}
        <ul>
            {#each data as item (item.id)}
                <li>{item.name}</li>
            {/each}
        </ul>
    {:else}
        <p>Loading data...</p>
    {/if}
</main>
