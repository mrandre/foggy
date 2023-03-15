<script>
  import TD from "./TD.svelte";
  import TH from "./TH.svelte";
  export let data;
  export let fieldOrder;
  export let headers;
  export let decorators = {};
</script>

<table cellspacing="0">
  <thead>
    <tr>
      {#each fieldOrder as field}
        <TH>
          <div>{headers[field]}</div>
        </TH>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each data as dataRow}
      <tr>
        {#each fieldOrder as field}
          {#if decorators[field]}
            <TD>
              <svelte:component
                this={decorators[field]}
                rowData={dataRow}
                format="table"
              />
            </TD>
          {:else}
            <TD>{dataRow[field]}</TD>
          {/if}
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    display: block;
    position: relative;
    max-height: calc(100vh - 200px);
    width: auto;
    overflow-y: scroll;
  }

  thead {
    position: sticky;
    top: 0;
  }
</style>
