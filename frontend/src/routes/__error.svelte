<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";
  import { dynamicOffsetHeight as mainHeaderHeight } from "$lib/header/Header.svelte";
  import errors from "./errors.js";

  import Head from "$lib/Head/Head.svelte";
  import HTML from "$lib/HTML/HTML.svelte";

  import Avocado from "$lib/assets/errors/avocado.svg";

  const errorStatus = String($page.status).split("");
  const errorMessage = errors[$page.status].message;

  let mounted = false;

  onMount(() => {
    const body = document.querySelector("body");
    body.id = "error";
    setTimeout(() => {
      mounted = true;
    }, 500);
  });
</script>

<Head metaTitle={$page.status} metaDescription={errorMessage} />
{#if mounted}
  <section
    in:fade
    class="container container--error"
    style={`--headerHeigth: ${$mainHeaderHeight}px`}
  >
    <h1>
      {#each errorStatus as letter}
        {#if letter === "0"}
          <img in:fade src={Avocado} alt="avocat" class="image--avocado" />
        {:else}
          <span>{letter}</span>
        {/if}
      {/each}
    </h1>

    <HTML text={errorMessage} />
  </section>
{/if}

<style lang="scss">
  @import "./error.scss";
</style>
