<script context="module">
  export const prerender = true;
  import { request, gql } from "graphql-request";

  export const load = async () => {
    const query = gql`
      {
        reviews(sort: "order") {
          data {
            attributes {
              rating
              firstName
              lastName
              comment
              order
            }
          }
        }
      }
    `;

    const res = await request("http://localhost:1337/graphql/", query);

    const { data } = await res.reviews;
    return {
      props: { data },
    };
  };
</script>

<script>
  import { onMount } from "svelte";
  export let data = null;

  const sortBy = (value = "order", order = "asc") => {
    data = data.sort((a, b) => {
      let first = order === "asc" ? a : b;
      let second = order === "asc" ? b : a;
      return first.attributes[value] - second.attributes[value];
    });
  };

  onMount(() => {
    const body = document.querySelector("body");
    body.id = "reviews";
  });

  let group;
</script>

<label>
  <input
    type="radio"
    bind:group
    name="scoops"
    value={1}
    on:click={() => sortBy("rating", "asc")}
  />
  Moins à plus
</label>
<label>
  <input
    type="radio"
    bind:group
    name="scoops"
    value={2}
    on:click={() => sortBy("rating", "desc")}
  />
  Plus à moins
</label>
<button
  on:click={() => {
    sortBy("order", "asc");
    group = null;
  }}>empty</button
>
{#if data}
  {#each data as { attributes: { order, firstName, lastName, comment, rating } }}
    <b>{order}</b>
    {rating}
  {/each}
{/if}
