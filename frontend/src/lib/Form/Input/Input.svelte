<script>
  export let label = "";
  export let required = false;
  export let attributes = {};
  export let value = "";
</script>

<label>
  {label}
  {#if required}<sup>*</sup>{:else}<span>(Facultatif)</span>{/if}
  <input bind:value {...attributes} {required} />
</label>
