<script>
  export let weight = '1px';
</script>

<div class=divider style='height: {weight}'></div>

<style>
  .divider {
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 var(--side-margin);
    background-color: var(--light-color);
  }

  :global(body.dark-mode) .divider {
    background-color: var(--dark-color);
  }
</style>
