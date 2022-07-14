<script context="module">
  export const prerender = true;
</script>

<script>
  import Toast from "$lib/Toast/Toast.svelte";
  import { Icon, CheckCircle, XCircle, X } from "svelte-hero-icons";

  let form = null;
  let toast = null;
  let formSentSuccess = false;

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
      })
      .catch(() => {
        toast.open();
        formSentSuccess = false;
      });
  };
</script>

<section class="container">
  <div />
  <div class="form__container">
    <h1>Formulaire de contact</h1>

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
        <!-- <input type="text" name="bot-field" /> -->

        <label
          >Nom <sup>*</sup><input
            type="text"
            name="first-name"
            placeholder="Entrez votre nom"
            required
          /></label
        >

        <label
          >Prénom <sup>*</sup><input
            type="text"
            name="last-name"
            placeholder="Entrez votre prénom"
            required
          /></label
        >

        <label
          >E-mail <sup>*</sup><input
            type="email"
            name="email"
            placeholder="Entrez votre e-mail"
            required
          /></label
        >

        <label
          >Téléphone <span>*</span><input
            type="tel"
            name="phone"
            placeholder="Entrez votre numéro de téléphone"
            required
          /></label
        >

        <label class="label--message"
          >Message <span>(Facultatif)</span><textarea
            name="message"
            placeholder="Entrez votre message…"
          /></label
        >
      </div>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</section>

<Toast bind:this={toast}>
  {#if formSentSuccess}
    <Icon src={CheckCircle} class="check" solid size="35" />
    <div class="message">
      Le formulaire a bien été envoyé.<br />Vous serez bientôt contact.
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
