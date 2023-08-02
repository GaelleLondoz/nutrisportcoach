<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import data from "../../../data/index.js";

  import Head from "$lib/Head/Head.svelte";
  import HTML from "$lib/HTML/HTML.svelte";

  let mounted = false;

  const {
    seo: { metaTitle, metaDescription },
    title,
    description,
    titleBeforeAfter,
    beforePicture: { hash: imageBeforeUrl, alternativeText: imageBeforeAlt },
    afterPicture: { hash: imageAfterUrl, alternativeText: imageAfterAlt },
  } = data?.histoire;

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
