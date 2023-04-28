<script context="module">
  export const prerender = true;

  import { request, gql } from "graphql-request";

  export const load = async () => {
    const query = gql`
      {
        about {
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

    const res = await request(
      "https://nutrisportcoach.onrender.com/graphql",
      query
    );

    const { data } = await res.about;
    return {
      props: { data },
    };
  };
</script>

<script>
  import TabsList from "$lib/Tabs/TabsList.svelte";

  export let data = null;
</script>

<TabsList data={data?.attributes?.tabs} />
<slot />
