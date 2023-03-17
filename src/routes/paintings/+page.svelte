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
  <header>
    <div>
      <h1>Harvard Art Museums: Paintings</h1>
    </div>
    <div class="button-box">
      <button on:click={() => window.location.reload()} ><span class="refresh">&#8635;</span></button>
      <button on:click={toggleDisplayType}>
        View as: {displayType === "table" ? "Gallery" : "List"}
      </button>
    </div>
  </header>
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
    margin: 0;
  }

  .refresh {
    font-size: 16px;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .button-box {
    display: flex;
  }

  button {
    cursor: pointer;
    text-transform: capitalize;
    margin-right: 8px;
    border-radius: 20px;
    border: none;
    box-shadow: 0 0 2px;
    padding: 4px 20px;
  }

  button:last-of-type {
    margin-right: 0;
  }

  button:hover {
    background-color: red;
    border-color: red;
    color: white;
  }

</style>