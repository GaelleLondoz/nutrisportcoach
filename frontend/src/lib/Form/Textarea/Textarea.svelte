<script>
  export let label = "";
  export let required = false;
  export let value = "";
  export let attributes = {};
</script>

<label class="label--message"
  >{label}
  {#if required}<sup>*</sup>{:else}<span>(Facultatif)</span>{/if}
  <textarea bind:value {...attributes} {required} /></label
>
