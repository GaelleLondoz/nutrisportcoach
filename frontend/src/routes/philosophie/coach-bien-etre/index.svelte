<script context="module">
  import { query } from "./graphqlQuery.js";
  import { getData } from "$utils/api.js";

  export const prerender = true;

  export const load = async () => {
    const {
      bienEtre: { data },
    } = await getData(query, "http://localhost:1337/graphql/");

    return {
      props: { data },
    };
  };
</script>

<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import Head from "$lib/Head/Head.svelte";
  import HTML from "$lib/HTML/HTML.svelte";

  import Tree from "$lib/assets/bien-etre/arbre.png";

  export let data = null;

  let mounted = false;

  const {
    seo: { metaTitle, metaDescription },
    title,
    description,
  } = data?.attributes;

  onMount(() => {
    const body = document.querySelector("body");
    body.id = "bien-etre";
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

      <img in:fade src={Tree} alt="arbre" class="image image--tree" />
    </section>
  {/if}
{/if}

<style lang="scss">
  @import "./index.scss";
</style>
