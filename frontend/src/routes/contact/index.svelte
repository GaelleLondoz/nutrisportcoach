<script context="module">
  export const prerender = true;

  export const load = async ({ fetch, params }) => {
    const res = await fetch(
      `https://nutrisportcoach.herokuapp.com/api/contact`
    );
    if (res.ok) {
      const { data } = await res.json();
      return {
        props: { data },
      };
    }
  };
</script>

<script>
  import { onMount } from "svelte";
  import Toast from "$lib/Toast/Toast.svelte";
  import Input from "$lib/Form/Input/Input.svelte";
  import Textarea from "$lib/Form/Textarea/Textarea.svelte";
  import { Icon, CheckCircle, XCircle } from "svelte-hero-icons";

  let form = null;
  let toast = null;
  let formSentSuccess = false;
  export let data;

  const formComponents = { Input, Textarea };

  const { title, metaTitle, metaDescription, inputs } = data?.attributes;
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
  });

  $: console.log(inputs);
</script>

<svelte:head>
  <title>{metaTitle}</title>
  <meta name="description" content={metaDescription} />
</svelte:head>

<section class="container">
  <div />
  <div class="form__container">
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
