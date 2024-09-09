<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { breakpoint } from "$stores/store-breakpoint";
  import data from "../../../data/index.js";

  import Head from "$lib/Head/Head.svelte";
  import HTML from "$lib/HTML/HTML.svelte";

  import Mission from "$lib/assets/mission/mission.png";

  let mounted = false;

  const {
    seo: { metaTitle, metaDescription },
    title,
    titleVideo,
    description,
  } = data?.mission;

  $: smallViewport = ["xs", "sm", "md", "lg"].includes($breakpoint?.name);

  onMount(() => {
    const body = document.querySelector("body");
    body.id = "mission";
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
        <h1>{titleVideo}</h1>
        <div class="video-container">
          <iframe
            src="https://res.cloudinary.com/gaellecloudinary/video/upload/v1725871379/sew0gueqpuktpch7mgrj.mp4"
            title={titleVideo}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <h2>{title}</h2>
        <HTML text={description} />
      </div>
    </section>

    {#if !smallViewport}
      <img in:fade src={Mission} alt="fond" class="image image--mission" />
    {/if}
  {/if}
{/if}

<style lang="scss">
  @import "./index.scss";
</style>
