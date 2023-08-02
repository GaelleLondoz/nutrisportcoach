<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import data from "../../data/index.js";
  import { dynamicOffsetHeight as mainHeaderHeight } from "$lib/header/Header.svelte";
  import supabase from "$lib/db.js";
  import "swiper/css";
  import "swiper/css/pagination";

  import Head from "$lib/Head/Head.svelte";
  import Filters from "$lib/Filters/Filters.svelte";
  import Slider from "$lib/Slider/Slider.svelte";

  let {
    reviewsPage: {
      seo: { metaTitle, metaDescription },
      title,
      button: { text: buttonText, url: buttonUrl },
    },
  } = data;

  let mounted = false;
  let reviews = [];

  onMount(async () => {
    const body = document.querySelector("body");
    body.id = "reviews";

    let { data } = await supabase
      .from("reviews")
      .select("*")
      .order("order", { ascending: true });

    reviews = data.filter((review) => review.published);

    setTimeout(() => {
      mounted = true;
    }, 500);
  });
</script>

{#if data}
  <Head {metaTitle} {metaDescription} />

  {#if mounted}
    <div
      in:fade
      class="reviews"
      style={`--headerHeigth: ${$mainHeaderHeight}px`}
      class:no-reviews={!reviews?.length}
    >
      <section class="container">
        <header>
          <h1>{title}</h1>
          {#if reviews.length > 1}
            <Filters bind:reviews />
          {/if}
        </header>
        {#if reviews.length}
          <Slider {reviews} />
        {:else}
          <p>Nous n'avons pas encore de témoignages</p>
        {/if}
        <div class="link-to-creation-page">
          <a sveltekit:prefetch href={buttonUrl}>{buttonText}</a>
        </div>
      </section>
    </div>
  {/if}
{/if}

<style lang="scss">
  @import "./index.scss";
</style>
