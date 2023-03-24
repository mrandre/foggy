<script>
  export let dataRow = {};
  export let fieldOrder = [];
  export let featureField = null;
  export let headers = {};
  export let showHeaders = false;
  export let decorators = {};
</script>

<div class="grid-card">
  <a href={`/paintings/${dataRow.objectid}`}>
  <div class="featured">
    <svelte:component this={decorators[featureField]} rowData={dataRow} />
  </div>
  <div class="card-content">
    <dl>
      {#each fieldOrder as field}
        {#if showHeaders}
          <dt>{headers[field]}</dt>
        {/if}
        <dd class="item">
          {#if decorators[field]}
            <svelte:component
              this={decorators[field]}
              format="card"
              rowData={dataRow}
            />
          {:else}
            {dataRow[field]}
          {/if}
        </dd>
      {/each}
    </dl>
  </div>
</a>
</div>

<style>

  a {
    cursor: pointer;
    color: black;
    text-decoration: none;
  }
  .grid-card {
    padding: 8px;
  }

  .featured {
    display: flex;
    justify-content: center;
  }

  .card-content {
    margin: auto;
    width: fit-content;
  }

  dt {
    font-weight: bold;
    clear: both;
  }

  dd {
    margin-left: 0;
  }

  p {
    margin: 0;
  }
</style>
