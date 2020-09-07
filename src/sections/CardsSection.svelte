<script>
  import { Card, Chip } from '../components';
  import { projects, travels } from '../data';
  import { personalMode } from '../data/stores.js';

  let modalOpen = false;
</script>

<section id={$personalMode ? 'travels' : 'projects'}>
  <h2>{$personalMode ? 'Travels' : 'Projects'}</h2>
  <div class={modalOpen ? 'modal-container' : 'modal-conatiner-background'}>
    {#if modalOpen}
      <div class=modal></div>
    {/if}
    <div class=container>
      {#each ($personalMode ? travels : projects) as {title, shortDescription, longDescription, tags, link}}
        <Card>
          {#if link}
            <a href={link}><h3>{title}</h3></a>
          {:else}
            <h3>{title}</h3>
          {/if}
          <h4>{shortDescription}</h4>
          <p>{longDescription}</p>
          {#if tags}
            <div class=footer>
              {#each tags as tag}
                <Chip text={tag}/>
              {/each}
            </div>
          {/if}
        </Card>
      {/each}
    </div>
  </div>
</section>

<style>
  h4 {
    margin: 1em 0 0 0;
  }

  p {
    margin: .5em 0;
  }

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
   h3 {
    font-size: 1.5em;
    font-weight: bold;
    color: var(--primary-color);
  }
</style>
