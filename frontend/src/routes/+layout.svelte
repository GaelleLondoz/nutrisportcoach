<script>
  import Header from "$lib/header/Header.svelte";
  import { dynamicOffsetHeight as mainHeaderHeight } from "$lib/header/Header.svelte";
  import data from "../data/index.js";
  import "$src/styles/index.scss";
</script>

{#if data}
  <Header data={data.menu} />
{/if}
<main style={`--headerHeigth: ${$mainHeaderHeight}px`}>
  <slot />
</main>

<style>
  main {
    padding-top: var(--headerHeigth);
  }
</style>
