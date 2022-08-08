<script>
  import TabsItem from "./TabsItem.svelte";

  export let data = [];
  export let tabsWithImages = false;
</script>

{#if data?.length}
  <nav class="nav container md:flex md:justify-between md:items-center">
    <div class="tabs-items">
      <ul class="md:flex p-0 list-none">
        {#each data as tab}
          <TabsItem
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
