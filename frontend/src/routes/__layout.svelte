<script context="module">
  import { query } from "./graphqlQuery.js";
  import { getData } from "$utils/api.js";

  export const load = async () => {
    const {
      menu: { data },
    } = await getData(query, "https://nutrisportcoach.herokuapp.com/graphql");

    return {
      props: { data },
    };
  };
</script>

<script>
  import Header from "$lib/header/Header.svelte";
  import { dynamicOffsetHeight as mainHeaderHeight } from "$lib/header/Header.svelte";
  import "$src/app.css";
  import "$src/styles/index.scss";

  export let data = null;
</script>

{#if data}
  <Header {data} />
{/if}
<main style={`--headerHeigth: ${$mainHeaderHeight}px`}>
  <slot />
</main>

<style>
  main {
    padding-top: var(--headerHeigth);
  }
</style>
