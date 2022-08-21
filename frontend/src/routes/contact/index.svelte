<script context="module">
  import { query } from "./graphqlQuery.js";
  import { getData } from "$utils/api.js";

  export const prerender = true;

  export const load = async () => {
    const {
      contact: { data },
    } = await getData(query, "http://localhost:1337/graphql/");

    return {
      props: { data },
    };
  };
</script>

<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { dynamicOffsetHeight as mainHeaderHeight } from "$lib/header/Header.svelte";
  import { Icon, CheckCircle, XCircle } from "svelte-hero-icons";

  import Head from "$lib/Head/Head.svelte";
  import Toast from "$lib/Toast/Toast.svelte";
  import Input from "$lib/Form/Input/Input.svelte";
  import Textarea from "$lib/Form/Textarea/Textarea.svelte";

  import Phone from "$lib/assets/contact/phone.svg";
  import Mail from "$lib/assets/contact/mail.svg";

  export let data;

  let form = null;
  let toast = null;
  let mounted = false;
  let formSentSuccess = false;

  const formComponents = { Input, Textarea };

  const {
    seo: { metaTitle, metaDescription },
    title,
    name,
    inputs,
    phoneNumber,
    emailAddress,
    buttonText,
    terms,
    image: {
      data: {
        attributes: { hash: imageUrl, alternativeText: imageAlt },
      },
    },
  } = data?.attributes;

  const handleSubmit = () => {
    let formData = new FormData(form);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        toast.open();
        formSentSuccess = true;
        form.reset();
      })
      .catch(() => {
        toast.open();
        formSentSuccess = false;
      });
  };

  onMount(() => {
    const body = document.querySelector("body");
    body.id = "contact";
    setTimeout(() => {
      mounted = true;
    }, 500);
  });
</script>

{#if data}
  <Head {metaTitle} {metaDescription} />
  {#if mounted}
    <div class="background" />
    <section in:fade class="container">
      <div
        class="details__container"
        style={`--headerHeigth: ${$mainHeaderHeight}px`}
      >
        <div class="details__container-background" />
        <picture in:fade={{ duration: 500 }}>
          <source
            srcset="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_254/{imageUrl}"
            media="(min-width: 1024px)"
          />

          <img
            src="https://res.cloudinary.com/gaellecloudinary/image/upload/f_auto,q_auto,w_142/{imageUrl}"
            alt={imageAlt}
            class="image--isa"
          />
        </picture>
        <h2>{name}</h2>
        <div class="phone">
          <img in:fade src={Phone} alt="icone gsm" class="image image--phone" />
          <span>{phoneNumber}</span>
        </div>
        <div class="mail">
          <img in:fade src={Mail} alt="icone mail" class="image image--mail" />
          <span>{emailAddress}</span>
        </div>
      </div>
      <div
        class="form__container"
        style={`--headerHeigth: ${$mainHeaderHeight}px`}
      >
        <h1>{title}</h1>

        <form
          name="contact"
          method="post"
          netlify
          netlify-honeypot="bot-field"
          data-netlify="true"
          on:submit|preventDefault={handleSubmit}
          bind:this={form}
        >
          <div class="form__inputs">
            <input type="hidden" name="form-name" value="contact" />
            <p class="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            {#if inputs}
              {#each inputs as input}
                <svelte:component
                  this={formComponents[input.tag]}
                  label={input.label}
                  required={input.required}
                  attributes={input.attributes}
                />
              {/each}
            {/if}
          </div>
          <p class="terms">{terms}</p>
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    </section>
  {/if}
{/if}
<Toast bind:this={toast}>
  {#if formSentSuccess}
    <Icon src={CheckCircle} class="check" solid size="35" />
    <div class="message">
      Le formulaire a bien été envoyé.<br />Vous serez bientôt contacté.
    </div>
  {:else}
    <Icon src={XCircle} class="error" solid size="35" />
    <div class="message">
      Le formulaire n'a pas été correctement envoyé.<br /> Veillez réessayer ou contactez-moi
      directement.
    </div>
  {/if}
</Toast>

<style lang="scss">
  @import "./index.scss";
</style>
