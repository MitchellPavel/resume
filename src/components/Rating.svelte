<script>
  export let rating = 2;
</script>

<div class="Stars" style="--rating: {rating};" aria-label="Rating of this skill is {rating} out of 5."></div>

<style>
  .Stars {
    --percent: calc(var(--rating) / 5 * 100%);
    display: inline-block;
    font-size: 2em;
    font-family: Times;
    line-height: 1;
  }
  .Stars::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(90deg, var(--secondary-color) var(--percent), var(--light-color) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  :global(body.dark-mode) .Stars::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(90deg, var(--primary-color) var(--percent), var(--dark-color) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
