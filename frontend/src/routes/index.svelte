<script context="module">
  import { query } from "./graphqlQuery.js";
  import { getData } from "$utils/api.js";

  export const prerender = true;

  export const load = async () => {
    const {
      homepage: { data },
    } = await getData(query, "https://nutrisportcoach.herokuapp.com/graphql");

    return {
      props: { data },
    };
  };
</script>

<script>
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import { dynamicOffsetHeight as mainHeaderHeight } from "$lib/header/Header.svelte";

  import Head from "$lib/Head/Head.svelte";
  import HTML from "$lib/HTML/HTML.svelte";

  export let data = null;

  let animate = false;

  const {
    seo: { metaTitle, metaDescription },
    title,
    description,
    button: {
      text: buttonText,
      url: {
        data: {
          attributes: { url: buttonUrl },
        },
      },
    },
    imageTop: {
      data: {
        attributes: { hash: imageTopUrl, alternativeText: imageTopAlt },
      },
    },
    imageBottom: {
      data: {
        attributes: { hash: imageBottomUrl, alternativeText: imageBottomAlt },
      },
    },
  } = data?.attributes;

  onMount(() => {
    const body = document.querySelector("body");
    body.id = "homepage";
    setTimeout(() => {
      animate = true;
    }, 500);
  });
</script>

{#if data}
  <Head {metaTitle} {metaDescription} />
  {#if animate}
    <picture in:fade={{ duration: 500 }}>
      <source
        srcset="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_713/{imageTopUrl}"
        media="(min-width: 768px)"
      />

      <img
        style={`--headerHeigth: ${$mainHeaderHeight}px`}
        src="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_500/{imageTopUrl}"
        alt={imageTopAlt}
        class="image--t-r"
      />
    </picture>

    <section
      in:fly={{ x: -200, duration: 500 }}
      class="container"
      style={`--headerHeigth: ${$mainHeaderHeight}px`}
    >
      <div class="content">
        <HTML text={title} />
        <p>{description}</p>
        <div>
          <a sveltekit:prefetch href={buttonUrl}>{buttonText}</a>
        </div>
      </div>
    </section>

    <picture in:fade={{ duration: 500 }}>
      <source
        srcset="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_885/{imageBottomUrl}"
        media="(min-width: 768px)"
      />

      <img
        src="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_500/{imageBottomUrl}"
        alt={imageBottomAlt}
        class="image--b-l"
      />
    </picture>
  {/if}
{/if}

<style lang="scss">
  @import "./index.scss";
</style>
