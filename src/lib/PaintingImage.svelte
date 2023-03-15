<script>
  import Image from "./Image.svelte";
  export let rowData = {};
  export let format;
  let imageUrl = `${rowData?.primaryimageurl}`; // /full/full/0/default.jpg`;
  let renderedSize = format === "table" ? "100" : "300";
</script>

{#if rowData.primaryimageurl}
  <Image title={rowData.title} size={renderedSize} url={imageUrl} />
{:else}
  <p>Image not available</p>
{/if}
