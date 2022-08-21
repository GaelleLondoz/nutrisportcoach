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
            url={tabsWithImages
              ? tab?.url?.page?.data?.attributes?.url
              : tab?.page?.data?.attributes?.url}
            label={tabsWithImages ? tab?.url?.label : tab?.label}
            alternativeText={tab?.image?.data?.attributes?.alternativeText}
            cloudinaryHash={tab?.image?.data?.attributes?.hash}
          />
        {/each}
      </ul>
    </div>
  </nav>
{/if}

<style lang="scss">
  @import "./TabsList.scss";
</style>
