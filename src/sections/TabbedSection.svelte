<script>
  import { Divider } from '../components';
  import { hobbies, education } from '../data';
  import { personalMode } from '../data/stores.js';

  const toKebabCase = str => str.toLowerCase().replace(/ |\./g, '-');
  const activateTab = (tabId) => {
    data = data.map(tab => {
      tab.active = tab.id == tabId;
      return tab;
    });
  };

  $: data = ($personalMode ? hobbies : education).map((tab, i) => {
    tab.id = toKebabCase(tab.label);
    tab.active = i == 0;
    return tab;
  });
</script>

<section id={$personalMode ? 'hobbies' : 'education'}>
  <h2>{$personalMode ? 'Hobbies' : 'Education'}</h2>
  <div class='wrapper'>
    <div class='tabs'>
      {#each data as {id, label, active}}
        <button class={active ? 'tab-active' : 'tab'} on:click={() => activateTab(id)} id='{id}-tab'>{label}</button>
      {/each}
    </div>
    <div class=panels>
      {#each data as {content, title, id, active}}
        <div class={active ? 'panel-active' : 'panel'} id='{id}-panel'>
          <h3>{title}</h3>
          {@html content}
        </div>
      {/each}
    </div>
  </div>
  <Divider/>
</section>

<style>
  .wrapper {
    margin: 1em;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .tabs {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
  }

  .tab {
    cursor: pointer;
    padding: .5em 1em;
    margin: 0px 2px 0px 0px;
    background: var(--primary-color);
    display: inline-block;
    color: var(--light-color);
    border-radius: 3px 3px 0px 0px;
    box-shadow: 0 0.5rem 0.8rem #00000080;
  }
  :global(body.dark-mode) .tab {
    background: var(--secondary-color);
  }
  .tab-active {
    background: var(--light-color);
    color: var(--primary-color);
    border-top: 3px solid var(--primary-color);
    padding: .5em 1em;
    margin: 0px 2px 0px 0px;
  }
  :global(body.dark-mode) .tab-active {
    color: var(--secondary-color);
    border-top: 3px solid var(--secondary-color);
  }
  .panels {
    background: var(--light-color);
    box-shadow: 0 2rem 2rem #00000080;
    height: 18em;
    width: 100%;
    border-radius: 3px;
    overflow: auto;
    padding: 1.5em;
  }

  .panel {
    display: none;
    animation: fadein 1.8s;
  }
  .panel-active {
    display:block
  }
  @keyframes fadein {
      from {
          opacity:0;
      }
      to {
          opacity:1;
      }
  }
  h3 {
    font-size: 1.5em;
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 1em;
  }
</style>
