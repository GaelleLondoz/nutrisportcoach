<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { dynamicOffsetHeight as mainHeaderHeight } from "$lib/header/Header.svelte";
  import { breakpoint } from "$stores/store-breakpoint";
  import data from "../data/index.js";

  import Head from "$lib/Head/Head.svelte";
  import HTML from "$lib/HTML/HTML.svelte";

  let animate = false;
  let imageUrl;
  let mounted = false;

  $: smallViewport = ["xs", "sm"].includes($breakpoint?.name);
  $: mediumViewport = ["md"].includes($breakpoint?.name);
  $: largeViewport = ["lg", "xl", "xxl"].includes($breakpoint?.name);

  $: if (smallViewport) {
    imageUrl = imageMobileUrl;
  } else if (mediumViewport) {
    imageUrl = imageTabletUrl;
  } else if (largeViewport) {
    imageUrl = imageDesktopUrl;
  }

  $: url = `url(https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto/${imageUrl})`;

  $: if (mounted) {
    document.documentElement.style.setProperty("--background", url);
  }

  const {
    seo: { metaTitle, metaDescription },
    title,
    description,
    button: { text: buttonText, url: buttonUrl },
    imageBackgroundMobile: imageMobileUrl,
    imageBackgroundTablet: imageTabletUrl,
    imageBackgroundDesktop: imageDesktopUrl,
  } = data?.homepage;

  onMount(() => {
    const body = document.querySelector("body");
    body.id = "homepage";
    mounted = true;
    setTimeout(() => {
      animate = true;
    }, 500);
  });
</script>

{#if data}
  <Head {metaTitle} {metaDescription} />
  {#if animate}
    <section
      in:fly={{ x: -200, duration: 500 }}
      class="container"
      style={`--headerHeigth: ${$mainHeaderHeight}px;`}
    >
      <div class="content">
        <HTML text={title} />
        <p>{description}</p>
        <div>
          <a sveltekit:prefetch href={buttonUrl}>{buttonText}</a>
        </div>
      </div>
    </section>
  {/if}
{/if}

<style lang="scss">
  @import "./index.scss";
</style>
