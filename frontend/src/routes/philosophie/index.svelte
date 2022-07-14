<script context="module">
  export const prerender = true;

  export const load = async ({ fetch, params }) => {
    const res = await fetch(
      `https://nutrisportcoach.herokuapp.com/api/philosophie?populate=deep`
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
  import HTML from "$lib/HTML/HTML.svelte";
  import { dynamicOffsetHeight as mainHeaderHeight } from "$lib/header/Header.svelte";

  export let data = null;

  const { title, description, metaTitle, metaDescription, programs } =
    data?.attributes;
</script>

<svelte:head>
  <title>{metaTitle}</title>
  <meta name="description" content={metaDescription} />
</svelte:head>

{#if data}
  <section class="container" style={`--headerHeigth: ${$mainHeaderHeight}px`}>
    <div class="content flex flex-col items-end md:items-start justify-center">
      <h1 class="font-bold text-right md:text-left"><HTML text={title} /></h1>
      <p><HTML text={description} /></p>

      <div class="programs">
        {#each programs.data as program}
          <div class="program">
            <div
              class="program__card"
              style={`--background: ${program.attributes.background}`}
            >
              <img
                alt={program.attributes.image.data.attributes.alternativeText}
                src={program.attributes.image.data.attributes.url}
              />
              <span>{program.attributes.title}</span>
            </div>
            <a
              class="btn-more"
              sveltekit:prefetch
              href="/programs/{program.attributes.buttonLink}"
              >{program.attributes.buttonText}</a
            >
          </div>
        {/each}
      </div>

      <div />
    </div>
  </section>
{/if}

<style lang="scss">
  @import "./index.scss";
</style>
