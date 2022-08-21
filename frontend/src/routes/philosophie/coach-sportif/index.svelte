<script context="module">
  import { query } from "./graphqlQuery.js";
  import { getData } from "$utils/api.js";

  export const prerender = true;

  export const load = async () => {
    const {
      sport: { data },
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

  import Ball from "$lib/assets/sport/ballon.png";
  import BallMobile from "$lib/assets/sport/ballon-mobile.png";

  $: smallViewport = ["xs", "sm", "md"].includes($breakpoint?.name);

  export let data = null;

  let mounted = false;

  const {
    seo: { metaTitle, metaDescription },
    title,
    description,
  } = data?.attributes;

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
