<script>
  import { request, gql } from "graphql-request";
  import TabsList from "$lib/Tabs/TabsList.svelte";

  let data = null;

  const query = gql`
    {
      aPropo {
        data {
          attributes {
            tabs {
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
  `;

  request("http://localhost:1337/graphql/", query).then(
    (res) => (data = res.aPropo.data.attributes.tabs)
  );
</script>

<TabsList {data} />
<slot />
