<script>
  import { fly } from "svelte/transition";
  import { Icon, X } from "svelte-hero-icons";
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
    <div
      class="toast absolute bg-white overflow-hidden"
      transition:fly={{ x: -200, duration: 400 }}
    >
      <div class="toast-content flex items-center">
        <slot />
      </div>
      <span class="absolute cursor-pointer close" on:click={close}>
        <Icon src={X} size="16" />
      </span>
    </div>
  </Portal>
{/if}

<style lang="scss">
  @import "./Toast.scss";
</style>
