<script>
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import { breakpoint } from "$stores/store-breakpoint";

  export let url = "";
  export let label = "";
  export let alternativeText = "";
  export let cloudinaryHash = "";
  export let numberOfTabs = 0;

  $: smallViewport = ["xs", "sm", "md", "lg"].includes($breakpoint?.name);
</script>

<li
  class:active={$page.url.pathname.includes(url)}
  class:with-image={cloudinaryHash && alternativeText}
  style={`--numberOfTabs: ${numberOfTabs}`}
>
  <a sveltekit:prefetch href={url} class="no-underline">
    {#if cloudinaryHash && alternativeText && smallViewport}
      <picture in:fade={{ duration: 500 }}>
        <source
          srcset="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_250/{cloudinaryHash}"
          media="(min-width: 1024px)"
        />

        <img
          src="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_80/{cloudinaryHash}"
          alt={alternativeText}
        />
      </picture>
    {/if}
    {#if label}
      {#if smallViewport}
        {#if !cloudinaryHash && !alternativeText}
          {label}
        {/if}
      {:else}
        {label}
      {/if}
    {/if}
  </a>
</li>

<style lang="scss">
  @import "./TabsItem.scss";
</style>
