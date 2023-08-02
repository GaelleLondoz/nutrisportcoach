<script>
  import TabsList from "$lib/Tabs/TabsList.svelte";
  import data from "../../data/index.js";
</script>

<TabsList data={data?.about?.tabs} />
<slot />
