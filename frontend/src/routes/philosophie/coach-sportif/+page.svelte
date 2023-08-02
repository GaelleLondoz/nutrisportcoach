<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import data from "../../../data/index.js";
  import { breakpoint } from "$stores/store-breakpoint";

  import Head from "$lib/Head/Head.svelte";
  import HTML from "$lib/HTML/HTML.svelte";

  import Ball from "$lib/assets/sport/ballon.png";
  import BallMobile from "$lib/assets/sport/ballon-mobile.png";

  $: smallViewport = ["xs", "sm"].includes($breakpoint?.name);

  let mounted = false;

  const {
    seo: { metaTitle, metaDescription },
    title,
    description,
  } = data?.sport;

  onMount(() => {
    const body = document.querySelector("body");
    body.id = "sport";
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
      src={smallViewport ? BallMobile : Ball}
      alt="accessoires"
      class="image image--ball"
    />
  {/if}
{/if}

<style lang="scss">
  @import "./index.scss";
</style>
