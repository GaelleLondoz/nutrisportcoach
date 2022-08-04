<script context="module">
  export const prerender = true;

  export const load = async ({ fetch, params }) => {
    const res = await fetch(`http://localhost:1337/api/homepage?populate=deep`);
    if (res.ok) {
      const { data } = await res.json();
      return {
        props: { data },
      };
    }
  };
</script>

<script>
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import { lazyLoad } from "../utils/lazyload";

  import HTML from "$lib/HTML/HTML.svelte";
  import { breakpoint } from "$stores/store-breakpoint";

  $: smallViewport = ["xs", "sm", "md"].includes($breakpoint?.name);

  import { dynamicOffsetHeight as mainHeaderHeight } from "$lib/header/Header.svelte";

  export let data = null;

  let animate = false;

  const {
    title,
    description,
    button,
    metaTitle,
    metaDescription,
    imageTop,
    imageBottom,
    imageTopMobile,
    imageBottomMobile,
  } = data?.attributes;

  onMount(() => {
    const body = document.querySelector("body");
    body.id = "homepage";
    setTimeout(() => {
      animate = true;
    }, 500);
  });
</script>

<svelte:head>
  <title>{metaTitle}</title>
  <meta name="description" content={metaDescription} />
</svelte:head>

{#if data && animate && $mainHeaderHeight}
  <picture in:fade={{ duration: 500 }}>
    <source
      srcset="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto/{imageTop
        ?.data?.attributes?.hash}"
      media="(min-width: 768px)"
    />

    <img
      style={`--headerHeigth: ${$mainHeaderHeight}px`}
      src="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto/{imageTop
        ?.data?.attributes?.hash}"
      alt={imageTop?.data?.attributes?.alternativeText}
      class="absolute top-0  right-0 image-t-r"
    />
  </picture>

  <section
    in:fly={{ x: -200, duration: 500 }}
    class="container relative z-10 flex justify-start md:items-center"
    style={`--headerHeigth: ${$mainHeaderHeight}px`}
  >
    <div class="content flex flex-col items-start justify-center">
      {@html title}
      <p>{description}</p>
      <div>
        <a
          class="text-white"
          sveltekit:prefetch
          href={button.url.data.attributes.url}>{button.text}</a
        >
      </div>
    </div>
  </section>

  <picture in:fade={{ duration: 500 }}>
    <source
      srcset="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto/{imageBottom
        ?.data?.attributes?.hash}"
      media="(min-width: 768px)"
    />

    <img
      src="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto/{imageBottom
        ?.data?.attributes?.hash}"
      alt={imageBottom?.data?.attributes?.alternativeText}
      class="absolute bottom-0 left-0  image-b-l"
    />
  </picture>
{/if}

<style lang="scss">
  @import "./index.scss";
</style>
