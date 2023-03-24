<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  import PaintingImage from "$lib/PaintingImage.svelte";
  import Artist from "$lib/Artist.svelte";
  import Title from "$lib/Title.svelte";

</script>
<main>
  <button on:click={() => history.back()}>&#10132;</button>
  <header>
    <div>
      <h1>Harvard Art Museums: Paintings: {data.title}</h1>
    </div>
  </header>
  <div class="card">
    <PaintingImage rowData={data} format="detail" />
  </div>
</main>

<style>
  h1 {
    color: red;
    margin: 0;
  }

  .card {
    display: flex;
    justify-content: center;
    /* max-height: calc(100vh - 200px); */
  }

  header {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
    align-items: center;
  }

  button {
    rotate: 180deg;
    cursor: pointer;
    position: absolute; 
    top: 8px;
    left: 8px;
    text-transform: capitalize;
    font-weight: bold;
    margin-right: 8px;
    border-radius: 20px;
    border: none;
    box-shadow: 0 0 2px;
    padding: 8px 10px;
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