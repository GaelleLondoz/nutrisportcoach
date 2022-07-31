<script context="module">
  import { writable } from "svelte/store";
  export const dynamicOffsetHeight = writable(0);
</script>

<script>
  import { page } from "$app/stores";
  import { getMenuData } from "./index.js";
  import { onMount } from "svelte";

  let body = undefined;
  let data = null;
  let checked = false;

  $: menu = data?.data?.attributes?.items;
  $: logo = data?.data?.attributes;

  const loadMenuData = async () => {
    data = await getMenuData();
  };

  const toggleOpen = () => {
    checked = !checked;
    body.style.position = checked ? "fixed" : "relative";
    body.style.width = checked ? "100vw" : "100%";
    body.style.heigth = checked ? "100vh" : "100%";
  };

  onMount(() => {
    body = document.querySelector("body");
  });

  loadMenuData();
</script>

{#if data}
  <header
    bind:offsetHeight={$dynamicOffsetHeight}
    class="md:flex md:items-center relative z-20"
  >
    <nav class="nav container md:flex md:justify-between md:items-center">
      <input
        class="checkbox"
        type="checkbox"
        name=""
        id=""
        bind:checked
        on:click={() => {
          toggleOpen();
        }}
      />
      <div
        class="nav__background"
        on:click={() => {
          toggleOpen();
        }}
      />

      <div class="nav__header">
        <div class="hamburger-lines">
          <span class="line line1" />
          <span class="line line2" />
          <span class="line line3" />
        </div>

        <a sveltekit:prefetch href="/" class="no-underline"
          ><img
            class="logo logo--big"
            src={logo.logoBig.data.attributes.url}
            alt="logo"
          /></a
        >
      </div>

      <div class="menu-items">
        <a
          sveltekit:prefetch
          href="/"
          on:click={() => {
            toggleOpen();
          }}
          class="no-underline"
          ><img
            class="logo logo--small"
            src={logo.logoSmall.data.attributes.url}
            alt="logo"
          /></a
        >
        <ul class="md:flex p-0 list-none">
          {#each menu as { label, page: { data: { attributes: { url } } } }}
            <li
              class:active={$page.url.pathname === url}
              on:click={() => {
                toggleOpen();
              }}
            >
              <a sveltekit:prefetch href={url} class="no-underline">{label}</a>
            </li>
          {/each}
        </ul>
      </div>
    </nav>
  </header>
{/if}

<style lang="scss">
  @import "./Header.scss";
</style>
