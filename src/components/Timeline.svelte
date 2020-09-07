<script>
  export let events;
</script>

<div class="timeline">
  {#each events as {date, location, title, descriptions}}
    <div class="entry">
      <div class="title">
        <h3>{date}</h3>
        <p>{location}</p>
      </div>
      <div class="body">
        <p>{title}</p>
        <ul>
          {#each descriptions as description}
            <li>{description}</li>
          {/each}
        </ul>
      </div>
    </div>
  {/each}
</div>

<style>
  .timeline {
    width: 100%;
    padding: 2em 24px 0 24px;
    color: var(--primary-color);
    position: relative;
  }
  :global(body.dark-mode) .timeline {
    color: var(--secondary-color);
  }
  .timeline:before {
    content: '';
    position: absolute;
    top: 0px;
    left: calc(30% + .5em);
    bottom: 0px;
    width: 4px;
    background: var(--light-color);
  }
  :global(body.dark-mode) .timeline:before {
    background: var(--dark-color);
  }
  .timeline:after {
    content: "";
    display: table;
    clear: both;
  }

  .entry {
    clear: both;
    text-align: left;
    position: relative;
  }
  .entry .title {
    margin-bottom: .5em;
    float: left;
    width: 30%;
    padding-right: 30px;
    text-align: right;
    position: relative;
  }
  .entry .title:before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border: 4px solid var(--secondary-color);
    background-color: var(--light-color);
    border-radius: 100%;
    top: 15%;
    right: calc(0px - .5em);
    z-index: 99;
  }
  :global(body.dark-mode) .entry .title:before {
    border-color: var(--primary-color);
    background-color: var(--dark-color);
  }
  .entry .body {
    margin: 0 0 2em;
    float: right;
    width: 70%;
    padding-left: 30px;
  }
  .entry .body p {
    line-height: 1.4em;
  }
  .entry .body p:first-child {
    margin-top: 0;
    font-weight: 400;
  }
  .entry .body ul {
    color: var(--light-color);
    padding-left: 1em;
  }
  :global(body.dark-mode) .entry .body ul {
    color: var(--dark-color);
  }
  li {
    list-style-type: disc;
  }

  ul {
    margin: 0.5em 0 0 0;
  }
</style>
