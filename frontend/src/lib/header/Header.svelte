<script context="module">
  import { writable } from "svelte/store";

  export const dynamicOffsetHeight = writable(0);
</script>

<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";
  import { breakpoint } from "$stores/store-breakpoint";

  $: smallViewport = ["xs", "sm", "md", "lg"].includes($breakpoint?.name);

  export let data = null;

  let body = undefined;
  let checked = false;
  let mounted = false;

  const {
    items,
    logoBig: {
      data: {
        attributes: { hash: logoBigUrl, alternativeText: logoBigAlt },
      },
    },
    logoSmall: {
      data: {
        attributes: { hash: logoSmallUrl, alternativeText: logoSmallAlt },
      },
    },
  } = data?.attributes;

  const toggleOpen = () => {
    checked = !checked;
    body.style.position = checked ? "fixed" : "relative";
    body.style.width = checked ? "100vw" : "100%";
    body.style.heigth = checked ? "100vh" : "100%";
  };

  onMount(() => {
    body = document.querySelector("body");
    setTimeout(() => {
      mounted = true;
    }, 500);
  });
</script>

{#if data && mounted}
  <header in:fade={{ duration: 500 }} bind:offsetHeight={$dynamicOffsetHeight}>
    <nav class="nav container">
      {#if smallViewport}
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
      {/if}

      <div class="nav__header">
        {#if smallViewport}
          <div class="hamburger-lines">
            <span class="line line1" />
            <span class="line line2" />
            <span class="line line3" />
          </div>
        {/if}

        <a sveltekit:prefetch href="/" class="no-underline">
          <img
            in:fade={{ duration: 500 }}
            src="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto/{logoBigUrl}"
            alt={logoBigAlt}
            class="logo logo--big"
          />
        </a>
      </div>

      {#if !smallViewport}
        <div class="menu-items--desktop">
          <ul>
            {#each items as { label, page: { data: { attributes: { url } } } }}
              <li
                class:active={!$page.url.pathname.includes("/a-propos")
                  ? $page.url.pathname.includes(url)
                  : url.includes("/a-propos")}
              >
                <a sveltekit:prefetch href={url}>{label}</a>
              </li>
            {/each}
          </ul>
        </div>
      {:else}
        <div class="menu-items--mobile">
          <a
            sveltekit:prefetch
            href="/"
            on:click={() => {
              toggleOpen();
            }}
            class="no-underline"
          >
            <img
              in:fade={{ duration: 500 }}
              src="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto/{logoSmallUrl}"
              alt={logoSmallAlt}
              class="logo logo--small"
            />
          </a>

          <ul>
            {#each items as { label, page: { data: { attributes: { url } } } }}
              <li
                class:active={$page.url.pathname.includes(url)}
                on:click={() => {
                  toggleOpen();
                }}
              >
                <a sveltekit:prefetch href={url}>{label}</a>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </nav>
  </header>
{/if}

<style lang="scss">
  @import "./Header.scss";
</style>
