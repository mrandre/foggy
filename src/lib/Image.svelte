<script>
  export let url = "";
  export let title = "Need an alt tag";
</script>

<img alt={title} src={url} width="100" />

<style>
  img {
    box-shadow: 4px 4px 9px 0px #ddd;
    border: 1px solid rgba(0, 0, 0, 0.4);
    margin: 8px 0;
  }
</style>
