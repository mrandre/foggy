<script>
  export let rowData = {};
  export let format = "table";
  let artist = rowData.people?.find((person) => person.role === "Artist");
</script>

{#if artist}
  <strong>
    {#if format === "card"} by {/if}
    {artist.name}
  </strong>
{:else}
  <strong>
    {#if format === "card"} by {/if}
    Unknown
  </strong>
{/if}

<style>
  span {
    font-style: italic;
  }
</style>
