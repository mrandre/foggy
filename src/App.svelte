<script>
  import axios from "axios";
  import Table from "./lib/Table/Table.svelte";
  import PaintingImage from "./PaintingImage.svelte";

  let isFetching = null;
  let tableData = [];

  const API_URL = "https://api.harvardartmuseums.org/";

  const API_KEY = "e938f66b-e744-4a93-befd-c5f17231e3e0";

  const TOTAL_ITEMS = 20;

  if (isFetching === null) {
    let objectUrl = `${API_URL}object/?size=${TOTAL_ITEMS}&hasimage=1&classification=26&apikey=${API_KEY}`;
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
  let fieldOrder = ["title", "image"];
  let headers = {
    image: "Image",
    title: "Title",
  };
  let decorators = {
    image: PaintingImage,
  };
</script>

<main>
  <h1>Paintings</h1>

  <div class="card">
    <Table {headers} {fieldOrder} {decorators} data={tableData} />
  </div>
</main>

<style>
</style>
