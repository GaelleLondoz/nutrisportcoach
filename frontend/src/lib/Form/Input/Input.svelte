<script>
  export let label = "";
  export let required = false;
  export let attributes = {};
</script>

<label>
  {label}
  {#if required}<sup>*</sup>{:else}<span>(Facultatif)</span>{/if}
  <input {...attributes} {required} />
</label>
