<script>
  import { Hamburger, Switch } from '../components';
  import { personalMode } from '../data/stores.js';

  let open = false;

  $: if($personalMode) {
    window.document.body.classList.add('dark-mode');
  } else {
    window.document.body.classList.remove('dark-mode');
  }
</script>

<Hamburger bind:open />

<aside class=sidebar-container class:open>
  <nav class=sidebar>
    <ul>
      {#if $personalMode}
        <li>
          <img src='/icons/strava.svg' alt='Strava logo' height=24px>
          <a href='https://www.strava.com/athletes/18544071'>Follow me on Strava</a>
        </li>
      {:else}
        <li>
          <img src='/icons/linkedin.svg' alt='linkedin logo'>
          <a href='https://www.linkedin.com/in/mitchell-pavel-930b0a108/'>Connect with me on LinkedIn</a>
        </li>
      {/if}
      <li>
        <img src='/icons/email.svg' alt='email'>
        <a href='mailto:mitchellpavel1@gmail.com'>Send me an email</a>
      </li>
      <li>
        <Switch bind:checked={$personalMode}/>
        <label for=Switch>Professional/Personal</label>
      </li>
    </ul>
  </nav>
</aside>

<style>
  .sidebar-container {
    position: fixed;
    top: calc(2em + 24px);
    left: -100%;
    transition: left 0.3s ease-in-out;
    width: 20em;
    height: auto;
    z-index: 10;
    background-color:rgba(0, 0, 0, 0.5);
  }

  .sidebar {
    margin-left: .25em;
  }

  .open {
    left: 0.25em;
  }

  ul {
    padding: 0.25em;
    margin: 0;
  }

  li {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  label {
    color: var(--light-color);
  }

  img {
    margin: .25em;
  }

  a {
    color: var(--light-color);
  }
</style>
