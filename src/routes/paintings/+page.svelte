<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  import Table from "$lib/Table/Table.svelte";
  import Grid from "$lib/CardGrid/Grid.svelte";
  import PaintingImage from "$lib/PaintingImage.svelte";
  import Artist from "$lib/Artist.svelte";
  import Title from "$lib/Title.svelte";

  let displayType = "card";
  let tableData = [];
  let fieldOrder = ["title", "artist", "image"];
  let headers = {
    artist: "Artist",
    image: "Image",
    title: "Title",
  };
  let decorators = {
    image: PaintingImage,
    artist: Artist,
    title: Title,
  };
  const toggleDisplayType = () => {
    if (displayType === "card") {
      displayType = "table";
    } else {
      displayType = "card";
    }
  };
</script>
<main>
  <h1>Paintings of the Harvard Art Museums</h1>
  <button on:click={toggleDisplayType}>
    Switch to: {displayType === "table" ? "Cards" : "Table"}
  </button>
  <div class="card">
    {#if displayType === "table"}
      <Table {headers} {fieldOrder} {decorators} data={data.records} />
    {:else}
      <Grid
        {headers}
        {fieldOrder}
        {decorators}
        data={data.records}
        featureField="image"
      />
    {/if}
  </div>
</main>

<style>
  h1 {
    color: red;
    margin-top: 0;
  }

  button {
    cursor: pointer;
    text-transform: capitalize;
    position: absolute;
    top: 48px;
    right: 60px;
    border: 1px solid #666;
    border-radius: 20px;
    padding: 8px 20px;
  }

  button:hover {
    background-color: red;
    color: white;
  }

  p {
    background-color: yellow;
    width: 80%;
    height: 200px;
    overflow-y: scroll;
  }
</style>