<script>
  export let text;
</script>

<div class=chip>
  <p>{text}</p>
</div>

<style>
  .chip {
    display: inline-block;
    background-color: var(--primary-color);
    border-radius: 25px;
    height: 1.5em;
    margin: .1em;
    padding: 0 .5em;
  }

  p {
    color: var(--light-color);
    margin: .25em;
  }

  :global(body.dark-mode) .chip {
    background-color: var(--secondary-color);
  }
</style>
