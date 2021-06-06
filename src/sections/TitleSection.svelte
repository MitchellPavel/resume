<script>
  import { personalMode } from '../data/stores.js';
</script>

<section id='title-section'>
  <div class=introduction>
    <p>Hello, my name is</p>
    <h1>Mitch</h1>
    <h1>Pavel</h1>
    <p>
      I love working with others to develop software solutions,<br/>
      automating complex tasks to make them simpler, <br/>
      and learning new things.
    </p>
  </div>
  <div class=profile-pic-container>
    <img id='profile-pic' src='/profile-{$personalMode ? 'personal' : 'professional'}.jpg' alt='My profile'>
  </div>
</section>

<style>
  section, p {
    margin: 0 auto;
  }

  p {
    color: var(--primary-color);
  }
  :global(body.dark-mode) p {
    color: var(--secondary-color);
  }

  section {
    padding: 10em 5em;
    position: relative;
    background-color: var(--light-color);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
  :global(body.dark-mode) section {
    background-color: var(--dark-color);
  }

  .introduction {
    display: inline-block;
  }

  .profile-pic-container {
    height: 14em;
  }

  img {
    border-radius: 50%;
    width: auto;
    height: 100%;
  }
</style>
