<script>
  export let metaTitle = "";
  export let metaDescription = "";
</script>

<svelte:head>
  <title>{metaTitle}</title>
  <meta name="description" content={metaDescription} />
</svelte:head>
