<script>
  export let url = "";
  export let title = "Need an alt tag";
  export let width = "auto";
</script>

<img alt={title} {width} src={url} />

<style>
  img {
    box-shadow: 4px 4px 9px 0px #999;
    margin: 8px 0;
    max-width: 100%;
    max-height: 100%;
  }
</style>
