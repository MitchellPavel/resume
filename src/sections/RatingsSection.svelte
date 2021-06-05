<script>
  import { Divider, Rating } from '../components';
  import { favorites, skills } from '../data';
  import { personalMode } from '../data/stores.js';
</script>

<section id={$personalMode ? 'favorites' : 'skills'}>
  <h2>{$personalMode ? 'Favorites' : 'Skills'}</h2>
  <ul class=skills-list>
    {#each ($personalMode ? favorites : skills) as {item, reasoning}}
      <li class=skill-container>
        <div class=skill>
          <h3>{item}</h3>
          {#if reasoning}
            <p>{reasoning}</p>
          {/if}
        </div>
      </li>
    {/each}
  </ul>
  <Divider/>
</section>

<style>
  p {
    color: var(--light-color);
  }
  :global(body.dark-mode) p {
    color: var(--dark-color);
  }

  li {
    margin: .5em 0;
  }

  .skills-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    width: 100%;
  }

  .skill-container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    min-width: 15em;
    max-width: 20em;
    height: auto;
  }

  .skill { width: 12em; }
</style>
