<script>
  import axios from "axios";
  import Table from "./lib/Table/Table.svelte";
  import Grid from "./lib/CardGrid/Grid.svelte";
  import PaintingImage from "./PaintingImage.svelte";
  import Artist from "./lib/Artist.svelte";
  import Title from "./lib/Title.svelte";

  let isFetching = null;
  let displayType = "card";
  let tableData = [];

  const API_URL = "https://api.harvardartmuseums.org/";

  const API_KEY = "e938f66b-e744-4a93-befd-c5f17231e3e0";

  const FIELDS = "primaryimageurl, title, people";

  const TOTAL_ITEMS = 250;

  const CULTURES = {
    American: "37526778",
    Netherlands: "37528173",
    French: "37527426",
    German: "37527453",
    Greek: "37527534",
    // Japanese: "37527795",
  };

  if (isFetching === null) {
    let objectUrl = `${API_URL}object/?size=${TOTAL_ITEMS}&hasimage=1&classification=26&culture=${Object.values(
      CULTURES
    ).join("|")}&q=imagepermissionlevel:0&apikey=${API_KEY}`;
    isFetching = true;
    axios
      .get(objectUrl)
      .then((json) => {
        console.log("Results:", json.data.records);
        tableData = json.data.records;
      })
      .catch((e) => {
        console.error("Problem fetching object data: ", e);
      })
      .then(() => {
        isFetching = false;
      });
  }
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
      <Table {headers} {fieldOrder} {decorators} data={tableData} />
    {:else}
      <Grid
        {headers}
        {fieldOrder}
        {decorators}
        data={tableData}
        featureField="image"
      />
    {/if}
  </div>
</main>

<style>
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
</style>
