<script context="module">
  import { query } from "./graphqlQuery.js";
  import { getData } from "$utils/api.js";

  export const prerender = true;

  export const load = async () => {
    const {
      philosophie: { data },
    } = await getData(query, "https://nutrisportcoach.onrender.com/graphql");

    return {
      props: { data },
    };
  };
</script>

<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import Head from "$lib/Head/Head.svelte";

  export let data = null;

  let mounted = false;

  const {
    seo: { metaTitle, metaDescription },
    title,
    description,
    programs,
  } = data?.attributes;

  onMount(() => {
    const body = document.querySelector("body");
    body.id = "philosophie";
    mounted = true;
  });
</script>

{#if data}
  <Head {metaTitle} {metaDescription} />
  {#if mounted}
    <section class="container">
      <div class="content">
        <h1>{title}</h1>
        <p>{description}</p>

        <div class="programs">
          {#each programs as { title, button: { text: buttonText, url: { data: { attributes: { url: buttonUrl } } } }, image: { data: { attributes: { hash: imageUrl, alternativeText: imageAlt } } } }}
            <div class="program">
              <a class="program__link" sveltekit:prefetch href={buttonUrl}>
                <div class="program__card">
                  <picture in:fade={{ duration: 500 }}>
                    <source
                      srcset="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto/{imageUrl}"
                      media="(min-width: 1024px)"
                    />
                    <source
                      srcset="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto/{imageUrl}"
                      media="(min-width: 768px)"
                    />
                    <img
                      src="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto/{imageUrl}"
                      alt={imageAlt}
                    />
                  </picture>
                  <div class="program__content">
                    <span class="program__title">{title}</span>
                    <span class="program__btn">{buttonText}</span>
                  </div>
                </div>
              </a>
            </div>
          {/each}
        </div>
      </div>
    </section>
  {/if}
{/if}

<style lang="scss">
  @import "./index.scss";
</style>
