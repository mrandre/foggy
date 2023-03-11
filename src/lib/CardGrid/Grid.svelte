<script>
  import Card from "./Card.svelte";
  export let data;
  export let fieldOrder;
  export let featureField;
  export let headers;
  export let showHeaders = false;
  export let decorators = {};

  if (featureField) {
    fieldOrder = fieldOrder.filter((field) => field !== featureField);
  }
</script>

<div class="card-grid">
  {#each data as dataRow}
    <Card
      {dataRow}
      {featureField}
      {showHeaders}
      {fieldOrder}
      {headers}
      {decorators}
    />
  {/each}
</div>

<style>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 12px;
    overflow-y: auto;
    padding: 8px;
    max-height: calc(100vh - 200px);
    overflow-y: scroll;
  }

  .card-grid {
    background-color: white;
  }
</style>
