<script>
  import { slide } from "svelte/transition";

  export let reviews = [];

  let openFilters = false;
  let chosenValues = [];

  const toggleOpenFilters = () => {
    openFilters = !openFilters;
  };

  const sortBy = (value = "order", order = "asc") => {
    reviews = reviews.sort((a, b) => {
      let first = order === "asc" ? a : b;
      let second = order === "asc" ? b : a;
      return first[value] - second[value];
    });
  };

  const handleChange = (ev) => {
    chosenValues = [];
    const { checked, value } = ev.target;
    if (checked) {
      if (value === "1") {
        sortBy("rating", "asc");
      }
      if (value === "2") {
        sortBy("rating", "desc");
      }
      chosenValues = [value];
    } else {
      chosenValues = [];
      sortBy("order", "asc");
    }
  };
</script>

<button class="filters" on:click={toggleOpenFilters}>Trier</button>

{#if openFilters}
  <div class="filters__container" transition:slide|local>
    <label class="checkbox">
      <input
        value={1}
        checked={chosenValues.includes("1")}
        on:change={handleChange}
        type="checkbox"
      />
      <span class="mark" />
      Du moins bien noté au mieux noté
    </label>
    <label class="checkbox">
      <input
        value={2}
        checked={chosenValues.includes("2")}
        on:change={handleChange}
        type="checkbox"
      />
      <span class="mark" />
      Du mieux noté au moins bien noté
    </label>
  </div>
{/if}

<style lang="scss">
  @import "./Filters.scss";
</style>
