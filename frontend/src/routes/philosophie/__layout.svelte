<script>
  import { page } from "$app/stores";
  import TabsList from "$lib/Tabs/TabsList.svelte";
  import data from "../../data/index.js";
</script>

{#if $page.url.pathname !== "/philosophie"}
  <TabsList data={data?.philosophie?.tabs} tabsWithImages={true} />
  <slot />
{:else}
  <slot />
{/if}
