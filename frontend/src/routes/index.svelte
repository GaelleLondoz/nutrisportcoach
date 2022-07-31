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
  import { fly } from "svelte/transition";

  import HTML from "$lib/HTML/HTML.svelte";

  import { dynamicOffsetHeight as mainHeaderHeight } from "$lib/header/Header.svelte";

  export let data = null;

  const {
    title,
    description,
    button,
    metaTitle,
    metaDescription,
    imageTop,
    imageBottom,
  } = data?.attributes;

  onMount(() => {
    const body = document.querySelector("body");
    body.id = "homepage";
  });
</script>

<svelte:head>
  <title>{metaTitle}</title>
  <meta name="description" content={metaDescription} />
</svelte:head>

{#if data}
  <img
    src={imageTop.data.attributes.url}
    alt="haltere"
    class="absolute top-0 right-0 image-t-r"
  />
  <section
    in:fly={{ x: -200, duration: 750 }}
    class="container relative z-10 flex justify-end md:justify-start md:items-center"
    style={`--headerHeigth: ${$mainHeaderHeight}px`}
  >
    <div class="content flex flex-col items-end md:items-start justify-center">
      <HTML text={title} />
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
  <img
    src={imageBottom.data.attributes.url}
    alt="food"
    class="absolute bottom-0 left-0 image-b-l"
  />
{/if}

<style lang="scss">
  @import "./index.scss";
</style>
