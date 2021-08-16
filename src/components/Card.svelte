<div class=card><slot/></div>

<style>
  .card {
    display: inline-block;
    position: relative;
    background-color: var(--light-color);
    box-shadow: 0 1rem 2rem 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: .5em;
    width: 18em;
    padding: 1.5em;
    margin: 1em;
  }
  .card:hover {
    box-shadow: 0 2rem 4rem 0 rgba(0,0,0,0.2);
  }
</style>
