<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import { breakpoint } from "$stores/store-breakpoint";
  import data from "../../../data/index.js";

  import Head from "$lib/Head/Head.svelte";
  import HTML from "$lib/HTML/HTML.svelte";

  import Mojito from "$lib/assets/nutrition/mojito.png";
  import Plate from "$lib/assets/nutrition/plate.png";
  import PlateMobile from "$lib/assets/nutrition/plate-mobile.png";

  let mounted = false;

  const {
    seo: { metaTitle, metaDescription },
    title,
    description,
  } = data?.nutrition;

  $: smallViewport = ["xs", "sm", "md", "lg"].includes($breakpoint?.name);

  onMount(() => {
    const body = document.querySelector("body");
    body.id = "nutrition";
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
    </section>

    <img
      in:fade
      src={smallViewport ? PlateMobile : Plate}
      alt="plat"
      class="image image--plate"
    />
    {#if !smallViewport}
      <img src={Mojito} in:fade alt="mojito" class="image image--mojito" />
    {/if}
  {/if}
{/if}

<style lang="scss">
  @import "./index.scss";
</style>
