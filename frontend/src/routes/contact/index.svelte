<script context="module">
  export const prerender = true;
</script>

<form
  name="contact"
  method="post"
  netlify
  netlify-honeypot="bot-field"
  data-netlify="true"
>
  <input type="hidden" name="form-name" value="contact" />
  <input type="text" name="bot-field" />
  <p>
    <label>Nom: <input type="text" name="first-name" /></label>
  </p>
  <p>
    <label>Prénom: <input type="text" name="last-name" /></label>
  </p>
  <p>
    <label>Téléphone: <input type="text" name="phone" /></label>
  </p>
  <p>
    <label>Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
