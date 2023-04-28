<script>
  import { page } from "$app/stores";
  import TabsList from "$lib/Tabs/TabsList.svelte";

  let data = null;

  import { request, gql } from "graphql-request";

  const query = gql`
    {
      philosophie {
        data {
          attributes {
            tabs {
              image {
                data {
                  attributes {
                    hash
                    alternativeText
                  }
                }
              }
              url {
                label
                page {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  request("https://nutrisportcoach.onrender.com/graphql", query).then(
    (res) => (data = res.philosophie.data.attributes.tabs)
  );
</script>

{#if $page.url.pathname !== "/philosophie"}
  <TabsList {data} tabsWithImages={true} />
  <slot />
{:else}
  <slot />
{/if}
