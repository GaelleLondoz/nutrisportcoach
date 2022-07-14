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

  $: menu = data?.data?.attributes?.menu;
  $: logo = data?.data?.attributes?.logo;

  const loadMenuData = async () => {
    data = await getMenuData();
  };

  loadMenuData();
</script>

{#if data}
  <header bind:offsetHeight={$dynamicOffsetHeight}>
    <nav class="container md:flex md:justify-between md:items-center">
      <div>
        <img class="logo" src={logo.data.attributes.url} alt="logo" />
      </div>
      <!-- 
      <div on:click={() => (open = !open)}>
        <Icon src={MenuAlt2} solid size="32" />
      </div> -->

      <!-- <aside
        class="absolute w-80 h-full bg-gray-200 border-r-2 shadow-lg"
        class:open
      > -->
      <ul class="md:flex p-0 list-none">
        {#each menu as menuItems}
          <li class:active={$page.url.pathname === menuItems.link}>
            <a sveltekit:prefetch href={menuItems.link} class="no-underline"
              >{menuItems.name}</a
            >
            <hr />
          </li>
        {/each}
      </ul>

      <!-- <div on:click={() => (open = !open)}> -->
      <!-- <Icon src={X} solid size="32" />
      </div> -->
      <!-- </aside> -->
    </nav>
  </header>
{/if}

<style lang="scss">
  @import "./Header.scss";
</style>
