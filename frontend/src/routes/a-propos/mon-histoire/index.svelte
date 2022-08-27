<script context="module">
  import { query } from "./graphqlQuery.js";
  import { getData } from "$utils/api.js";

  export const prerender = true;

  export const load = async () => {
    const {
      histoire: { data },
    } = await getData(query, "https://nutrisportcoach.herokuapp.com/graphql");

    return {
      props: { data },
    };
  };
</script>

<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { breakpoint } from "$stores/store-breakpoint";

  import Head from "$lib/Head/Head.svelte";
  import HTML from "$lib/HTML/HTML.svelte";

  import Histoire from "$lib/assets/histoire/histoire.png";
  import HistoireMobile from "$lib/assets/histoire/histoire-mobile.png";

  export let data = null;

  let mounted = false;

  const {
    seo: { metaTitle, metaDescription },
    title,
    description,
  } = data?.attributes;

  $: smallViewport = ["xs", "sm", "md", "lg"].includes($breakpoint?.name);

  onMount(() => {
    const body = document.querySelector("body");
    body.id = "histoire";
    setTimeout(() => {
      mounted = true;
    }, 500);
  });
</script>

{#if data}
  <Head {metaTitle} {metaDescription} />
  {#if mounted}
    <section in:fade class="container">
      <div class="content">
        <h1>{title}</h1>
        <HTML text={description} />
      </div>

      {#if !smallViewport}
        <img
          in:fade
          src={Histoire}
          alt="Isabelle"
          class="image image--histoire"
        />
      {/if}
    </section>
  {/if}
{/if}

<style lang="scss">
  @import "./index.scss";
</style>
