<script>
  import TD from "./TD.svelte";
  import TH from "./TH.svelte";
  export let data;
  export let fieldOrder;
  export let headers;
  export let defaultSortField = null;
  export let decorators = {};
  let sortField = defaultSortField;
  const sortComparator = (field) => {
    return (a, b) => {
      if (a[field] > b[field]) {
        return 1;
      }
      if (a[field] < b[field]) {
        return -1;
      }
      return 0;
    };
  };
  const sortData = (sortingField) => {
    if (sortingField === sortField) {
      data.reverse();
    }
    return data.sort(sortComparator(sortingField));
  };
</script>

<table cellspacing="0">
  <thead>
    <tr>
      {#each fieldOrder as field}
        <TH
          onClick={sortData(field)}
          activeSort={sortField}
          sortingField={field}
        >
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
              <svelte:component this={decorators[field]} rowData={dataRow} />
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
    max-height: 600px;
    max-width: 450px;
    overflow-y: scroll;
  }

  thead {
    position: sticky;
    top: 0;
  }
</style>
