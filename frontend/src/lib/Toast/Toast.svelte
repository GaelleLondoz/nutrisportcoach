<script>
  import { fly } from "svelte/transition";
  import { Icon, X } from "svelte-hero-icons";

  export const open = () => {
    active = true;
    timer = setTimeout(() => {
      active = false;
    }, 7500);
  };

  const close = () => {
    active = false;
    clearTimeout(timer);
  };

  let active = false;
  let timer = null;
</script>

{#if active}
  <div class="toast" transition:fly={{ x: -200, duration: 400 }}>
    <div class="toast-content">
      <slot />
    </div>
    <span on:click={close}>
      <Icon src={X} size="16" class="close" />
    </span>
  </div>
{/if}

<style lang="scss">
  @import "./Toast.scss";
</style>
