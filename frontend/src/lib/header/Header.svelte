<script context="module">
  import { writable } from "svelte/store";
  export const dynamicOffsetHeight = writable(0);
</script>

<script>
  import { page } from "$app/stores";
  import { getMenuData } from "./index.js";
  import { Icon, MenuAlt2, X } from "svelte-hero-icons";

  export let open = false;

  let data = null;

  $: menu = data?.data?.attributes?.items;
  $: logo = data?.data?.attributes?.logoBig;

  const loadMenuData = async () => {
    data = await getMenuData();
  };

  loadMenuData();
</script>

{#if data}
  <header
    bind:offsetHeight={$dynamicOffsetHeight}
    class="md:flex md:items-center"
  >
    <nav class="container md:flex md:justify-between md:items-center">
      <div>
        <a sveltekit:prefetch href="/" class="no-underline"
          ><img class="logo" src={logo.data.attributes.url} alt="logo" /></a
        >
      </div>
      <ul class="md:flex p-0 list-none">
        {#each menu as { label, page: { data: { attributes: { url } } } }}
          <li class:active={$page.url.pathname === url}>
            <a sveltekit:prefetch href={url} class="no-underline">{label}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </header>
{/if}

<style lang="scss">
  @import "./Header.scss";
</style>
