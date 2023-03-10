<script>
  export let onClick;
  export let sortingField;
  export let activeSort;
</script>

<th
  on:click={() => {
    onClick(sortingField, sortingField === activeSort);
  }}
  class={sortingField ? "sortable" : ""}
>
  <div class="wrap">
    <div>
      <slot />
    </div>
    {#if sortingField}
      <div class={`sortIndicator ${sortingField === activeSort ? "" : ""}`}>
        {#if sortingField}
          &rsaquo;
        {:else}
          &chev;
        {/if}
      </div>
    {/if}
  </div>
</th>

<style>
  th {
    background: white;
    color: black;
    border-bottom: 1px solid rgba(0, 0, 0, 0.9);
    padding: 8px;
    text-align: left;
  }

  th.sortable {
    cursor: pointer;
  }

  th.sortable:hover {
    color: white;
    background: rgba(0, 0, 0, 0.1);
  }

  th.sortable:hover .sortIndicator {
    display: block;
  }
  .wrap {
    display: flex;
    justify-content: space-between;
  }

  .sortIndicator {
    display: none;
    rotate: 90deg;
  }
</style>
