<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import data from "../../../data/index.js";

  import Head from "$lib/Head/Head.svelte";
  import HTML from "$lib/HTML/HTML.svelte";

  import Tree from "$lib/assets/bien-etre/arbre.png";

  let mounted = false;

  const {
    seo: { metaTitle, metaDescription },
    title,
    description,
  } = data?.bienEtre;

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
