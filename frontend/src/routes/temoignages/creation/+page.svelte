<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { dynamicOffsetHeight as mainHeaderHeight } from "$lib/header/Header.svelte";
  import { Icon, CheckCircle, XCircle } from "svelte-hero-icons";
  import data from "../../../data/index.js";
  import supabase from "$lib/db.js";

  import Head from "$lib/Head/Head.svelte";
  import Star from "$lib/Star/Star.svelte";
  import Toast from "$lib/Toast/Toast.svelte";
  import Input from "$lib/Form/Input/Input.svelte";
  import Textarea from "$lib/Form/Textarea/Textarea.svelte";

  let hoverRating = null;
  let firstName = "";
  let lastName = "";
  let comment = "";
  let rating = 0;
  let form = null;
  let toast = null;
  let formSentSuccess = false;

  const firstNameAttributes = {
    name: "first-name",
    type: "text",
    placeholder: "Entrez votre nom",
  };

  const lastNameAttributes = {
    name: "last-name",
    type: "text",
    placeholder: "Entrez votre prénom",
  };

  const reviewAttributes = {
    name: "message",
    placeholder: "Écrire...",
  };

  const handleHover = (id) => () => {
    hoverRating = id;
  };

  const handleRate = (id) => (event) => {
    rating = id;
  };

  const handleSubmit = async () => {
    const { data, error } = await supabase
      .from("reviews")
      .insert([{ firstName, lastName, rating, comment }])
      .select();

    toast.open();

    if (error) {
      formSentSuccess = false;
    } else {
      formSentSuccess = true;
      form.reset();
      rating = 0;
    }
  };

  const {
    reviewsPageCreation: {
      seo: { metaTitle, metaDescription },
      title,
      terms,
    },
  } = data;

  let mounted = false;

  onMount(() => {
    const body = document.querySelector("body");
    body.id = "reviews-creation";

    setTimeout(() => {
      mounted = true;
    }, 500);
  });
</script>

{#if data}
  <Head {metaTitle} {metaDescription} />
  {#if mounted}
    <div
      in:fade
      class="reviews-creation"
      style={`--headerHeigth: ${$mainHeaderHeight}px`}
    >
      <section class="container">
        <h1>{title}</h1>
        <div class="form__container">
          <form
            name="review"
            method="post"
            netlify=""
            netlify-honeypot="bot-field"
            data-netlify="true"
            on:submit|preventDefault={handleSubmit}
            bind:this={form}
          >
            <div class="form__inputs">
              <input type="hidden" name="form-name" value="review" />
              <p class="hidden">
                <label
                  >Don’t fill this out if you’re human: <input
                    name="bot-field"
                  />
                </label>
              </p>

              <Input
                bind:value={firstName}
                label="Nom"
                attributes={firstNameAttributes}
              />
              <Input
                bind:value={lastName}
                label="Prénom"
                attributes={lastNameAttributes}
              />
              <div class="feedback">
                <label>Note sur 5 <sup>*</sup> </label>
                <span id="feedbackContiner" class="feedbackContainer">
                  <span class="starContainer">
                    {#each Array(5) as _, i}
                      <Star
                        filled={hoverRating
                          ? hoverRating >= i + 1
                          : rating >= i + 1}
                        starId={i + 1}
                        on:mouseover={handleHover(i + 1)}
                        on:mouseleave={() => (hoverRating = null)}
                        on:click={handleRate(i + 1)}
                      />
                    {/each}
                  </span>
                </span>
              </div>
              <Textarea
                bind:value={comment}
                label="Témoignage"
                attributes={reviewAttributes}
              />
            </div>
            <button type="submit">Publier</button>
          </form>
        </div>
      </section>
    </div>

    <Toast bind:this={toast}>
      {#if formSentSuccess}
        <Icon src={CheckCircle} class="check" solid size="35" />
        <div class="message">
          Le formulaire a bien été envoyé.<br />Nous allons analyser votre
          témoignage.
        </div>
      {:else}
        <Icon src={XCircle} class="error" solid size="35" />
        <div class="message">
          Le formulaire n'a pas été correctement envoyé.<br /> Veillez réessayer
          ou contactez-moi directement.
        </div>
      {/if}
    </Toast>
  {/if}
{/if}

<style lang="scss">
  @import "./index.scss";
</style>
