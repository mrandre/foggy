<script>
  export let url = "";
  export let title = "Need an alt tag";
  export let size = "100";
</script>

<img alt={title} src={url} width={size} />

<style>
  img {
    box-shadow: 4px 4px 9px 0px #999;
    margin: 8px 0;
  }
</style>
