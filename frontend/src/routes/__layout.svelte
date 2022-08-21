<script>
  import Header from "$lib/header/Header.svelte";
  import { dynamicOffsetHeight as mainHeaderHeight } from "$lib/header/Header.svelte";
  import "$src/app.css";
  import "$src/styles/index.scss";
</script>

<Header />

<main style={`--headerHeigth: ${$mainHeaderHeight}px`}>
  <slot />
</main>

<style>
  main {
    padding-top: var(--headerHeigth);
  }
</style>
