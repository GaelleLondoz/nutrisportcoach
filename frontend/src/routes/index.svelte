<script context="module">
  export const prerender = true;

  export const load = async ({ fetch, params }) => {
    const res = await fetch(
      `https://nutrisportcoach.herokuapp.com/api/homepage`
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
  import { fly } from "svelte/transition";

  import HTML from "$lib/HTML/HTML.svelte";
  import { dynamicOffsetHeight as mainHeaderHeight } from "$lib/header/Header.svelte";

  export let data = null;

  const { title, buttonText, buttonLink, metaTitle, metaDescription } =
    data?.attributes;
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
      <h1 class="font-bold text-right md:text-left"><HTML text={title} /></h1>
      <div>
        <a class="text-white" sveltekit:prefetch href={buttonLink}
          >{buttonText}</a
        >
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import "./index.scss";
</style>
