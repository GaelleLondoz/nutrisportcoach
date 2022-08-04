<script context="module">
  export const prerender = true;

  export const load = async ({ fetch, params }) => {
    const res = await fetch(
      `http://localhost:1337/api/philosophie?populate=deep`
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
  import { fly, fade } from "svelte/transition";
  import { onMount } from "svelte";
  import HTML from "$lib/HTML/HTML.svelte";
  import { dynamicOffsetHeight as mainHeaderHeight } from "$lib/header/Header.svelte";

  export let data = null;

  const { title, description, metaTitle, metaDescription, programs } =
    data?.attributes;

  onMount(() => {
    const body = document.querySelector("body");
    body.id = "philosophy";
  });
</script>

<svelte:head>
  <title>{metaTitle}</title>
  <meta name="description" content={metaDescription} />
</svelte:head>

{#if data}
  <section class="container" style={`--headerHeigth: ${$mainHeaderHeight}px`}>
    <div class="content flex flex-col  ">
      <h1 class="font-bold  ">{@html title}</h1>
      <p>{@html description}</p>

      <div class="programs">
        {#each programs as program}
          <div class="program">
            <div class="program__card">
              <picture in:fade={{ duration: 500 }}>
                <source
                  srcset="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_225/{program
                    ?.image?.data?.attributes?.hash}"
                  media="(min-width: 768px)"
                />

                <img
                  src="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_150/{program
                    ?.image?.data?.attributes?.hash}"
                  alt={program?.image?.data?.attributes?.alternativeText}
                />
              </picture>

              <span>{program.title}</span>
            </div>

            <a
              class="btn-more"
              sveltekit:prefetch
              href={program?.button?.url?.data?.attributes?.url}
              >{program.button.text}</a
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
