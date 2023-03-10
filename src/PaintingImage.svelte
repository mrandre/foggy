<script>
  import Image from "./lib/Image.svelte";
  export let rowData = {};
</script>

<Image
  title={rowData.title}
  url={`${rowData.images[0].iiifbaseuri}/full/full/0/default.jpg`}
/>
