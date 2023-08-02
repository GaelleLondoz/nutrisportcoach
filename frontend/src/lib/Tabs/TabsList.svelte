<script>
  import TabsItem from "./TabsItem.svelte";

  export let data = [];
  export let tabsWithImages = false;
</script>

{#if data?.length}
  <nav class="nav container">
    <div class="tabs-items">
      <ul class:with-image={tabsWithImages}>
        {#each data as tab}
          <TabsItem
            numberOfTabs={data?.length}
            url={tabsWithImages ? tab?.url?.url : tab?.url}
            label={tabsWithImages ? tab?.url?.label : tab?.label}
            alternativeText={tab?.image?.alternativeText}
            cloudinaryHash={tab?.image?.hash}
          />
        {/each}
      </ul>
    </div>
  </nav>
{/if}

<style lang="scss">
  @import "./TabsList.scss";
</style>
