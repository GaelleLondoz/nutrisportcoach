<script>
  import { fly } from "svelte/transition";
  import { Icon, XMark } from "svelte-hero-icons";
  import Portal from "svelte-portal";

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
  <Portal target="body">
    <div class="toast" transition:fly={{ x: -200, duration: 400 }}>
      <div class="toast-content">
        <slot />
      </div>
      <span class="close" on:click={close}>
        <Icon src={XMark} size="16" />
      </span>
    </div>
  </Portal>
{/if}

<style lang="scss">
  @import "./Toast.scss";
</style>
