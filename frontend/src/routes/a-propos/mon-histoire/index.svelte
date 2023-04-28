<script context="module">
  import { query } from "./graphqlQuery.js";
  import { getData } from "$utils/api.js";

  export const prerender = true;

  export const load = async () => {
    const {
      histoire: { data },
    } = await getData(query, "https://nutrisportcoach.onrender.com/graphql");

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

  export let data = null;

  let mounted = false;

  const {
    seo: { metaTitle, metaDescription },
    title,
    description,
    titleBeforeAfter,
    beforePicture: {
      data: {
        attributes: { hash: imageBeforeUrl, alternativeText: imageBeforeAlt },
      },
    },
    afterPicture: {
      data: {
        attributes: { hash: imageAfterUrl, alternativeText: imageAfterAlt },
      },
    },
  } = data?.attributes;

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
        <h2>{titleBeforeAfter}</h2>
        <div class="images-container">
          <div class="image">
            <picture in:fade={{ duration: 500 }}>
              <source
                srcset="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto/{imageBeforeUrl}"
                media="(min-width: 1024px)"
              />

              <img
                src="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto/{imageBeforeUrl}"
                alt={imageBeforeAlt}
              />
            </picture>
            <span>Avant</span>
          </div>
          <div class="image">
            <picture in:fade={{ duration: 500 }}>
              <source
                srcset="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto/{imageAfterUrl}"
                media="(min-width: 1024px)"
              />

              <img
                src="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto/{imageAfterUrl}"
                alt={imageAfterAlt}
              />
            </picture>
            <span>Après</span>
          </div>
        </div>
      </div>
    </section>
  {/if}
{/if}

<style lang="scss">
  @import "./index.scss";
</style>
