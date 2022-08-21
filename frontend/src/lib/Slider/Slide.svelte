<script>
  import { SwiperSlide } from "swiper/svelte";

  import HTML from "$lib/HTML/HTML.svelte";
  import Star from "$lib/Star/Star.svelte";

  import Profile from "$lib/assets/profile.svg";

  export let firstName = "";
  export let lastName = "";
  export let comment = "";
  export let rating = "";
</script>

<SwiperSlide>
  <div class="review">
    <header class="review__header">
      <img src={Profile} alt="image profile" />
    </header>
    <main class="review__main">
      <div class="review__stars">
        {#each Array(5) as _, i}
          <Star filled={rating >= i + 1} starId={i} />
        {/each}
      </div>
      {#if comment}
        <div class="review__comment">
          <HTML text={comment} />
        </div>
      {/if}
    </main>
    <footer class="review__footer">
      {#if firstName || lastName}
        {firstName && firstName}
        {lastName && lastName}
      {/if}
    </footer>
  </div>
</SwiperSlide>

<style lang="scss">
  @import "./Slide.scss";
</style>
