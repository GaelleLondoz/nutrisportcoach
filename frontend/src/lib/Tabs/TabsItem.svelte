<script>
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import { breakpoint } from "$stores/store-breakpoint";

  export let url = "";
  export let label = "";
  export let alternativeText = "";
  export let cloudinaryHash = "";

  $: smallViewport = ["xs", "sm", "md"].includes($breakpoint?.name);
</script>

<li class:active={$page.url.pathname.includes(url)}>
  <a sveltekit:prefetch href={url} class="no-underline">
    {#if cloudinaryHash && alternativeText && smallViewport}
      <picture in:fade={{ duration: 500 }}>
        <img
          src="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_150/{cloudinaryHash}"
          alt={alternativeText}
        />
      </picture>
    {/if}
    {#if label}
      {label}
    {/if}
  </a>
</li>
