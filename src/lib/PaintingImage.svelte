<script>
  import Image from "./Image.svelte";
  export let rowData = {};
  export let format;
  let imageUrl = `${rowData?.primaryimageurl}`; // /full/full/0/default.jpg`;
  let width;
  let height = "100%"
  if (format === "table") {
    width = "100";
  } else if (format = "detail") {
    height = "calc(100vh - 190px)";
  }
</script>

{#if rowData.primaryimageurl}
  {#if format === 'detail'}
    <Image 
      title={rowData.title}
      {height}
      url={imageUrl} 
    />
  {:else}
    <Image 
      title={rowData.title}
      {width}
      url={imageUrl} 
    />
  {/if}
{:else}
  <p>Image not available</p>
{/if}
