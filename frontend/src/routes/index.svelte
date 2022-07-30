<script context="module">
  export const prerender = true;

  export const load = async ({ fetch, params }) => {
    const res = await fetch(
      `https://nutrisportcoach.herokuapp.com/api/homepage?populate=deep`
    );
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

  const { title, description, button, metaTitle, metaDescription } =
    data?.attributes;

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
  <section
    in:fly={{ x: -200, duration: 750 }}
    class="container flex justify-end md:justify-start md:items-center"
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
{/if}

<style lang="scss">
  @import "./index.scss";
</style>
