<script>
  import { Swiper } from "swiper/svelte";
  import { Pagination, Mousewheel } from "swiper";

  import Slide from "$lib/Slider/Slide.svelte";

  export let reviews = [];
</script>

<div id="reviews__slider">
  <Swiper
    spaceBetween={20}
    slidesPerView={1}
    breakpoints={{
      "600": {
        slidesPerView: 2,
        spaceBetween: 50,
      },

      "1024": {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      "1200": {
        slidesPerView: 3,
        spaceBetween: 120,
      },
    }}
    mousewheel={true}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination, Mousewheel]}
  >
    {#each reviews as { attributes: { firstName, lastName, comment, rating } }}
      <Slide {firstName} {lastName} {comment} {rating} />
    {/each}
  </Swiper>
</div>

<style lang="scss">
  @import "./Slider.scss";
</style>
