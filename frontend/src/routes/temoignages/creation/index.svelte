<script>
  import { GraphQLClient, gql } from "graphql-request";
  let firstName = "";
  let lastName = "";
  let comment = "";
  let rating = null;

  import Star from "$lib/Star/Star.svelte";

  let hoverRating = null;

  const handleHover = (id) => () => {
    hoverRating = id;
  };
  const handleRate = (id) => (event) => {
    rating = id;
  };

  let form = null;

  const handleSubmit = async () => {
    const endpoint = "http://localhost:1337/graphql/";

    const graphQLClient = new GraphQLClient(endpoint);

    const mutation = gql`
      mutation createReview(
        $firstName: String!
        $lastName: String!
        $comment: String!
        $rating: Int!
      ) {
        createReview(
          data: {
            firstName: $firstName
            lastName: $lastName
            comment: $comment
            rating: $rating
          }
        ) {
          data {
            id
            attributes {
              rating
            }
          }
        }
      }
    `;

    const variables = {
      firstName: firstName,
      lastName: lastName,
      comment: comment,
      rating: rating,
    };

    await graphQLClient.request(mutation, variables);
  };
</script>

<section class="container">
  <div />
  <div class="form__container">
    <!-- <h1>{title}</h1> -->

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

        <label for="firstName">Nom</label>
        <input type="text" id="firstName" bind:value={firstName} />
        <label for="lastName">Prénom</label>
        <input type="text" id="lastName" bind:value={lastName} />
        <label for="comment">Comment</label>
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="10"
          bind:value={comment}
        />

        <div class="feedback">
          <span id="feedbackContiner" class="feedbackContainer">
            <span class="starContainer">
              {#each Array(5) as _, i}
                <Star
                  filled={hoverRating ? hoverRating >= i + 1 : rating >= i + 1}
                  starId={i + 1}
                  on:mouseover={handleHover(i + 1)}
                  on:mouseleave={() => (hoverRating = null)}
                  on:click={handleRate(i + 1)}
                />
              {/each}
            </span>
          </span>
        </div>

        <label for="rating">Rating</label>
        <input type="number" id="rating" bind:value={rating} required />
      </div>

      <button type="submit">Publier</button>
    </form>
  </div>
</section>
