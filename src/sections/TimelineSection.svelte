<script>
  import { Divider, Timeline } from '../components';
  import { workExperience, lifeEvents } from '../data';
  import { personalMode } from '../data/stores.js';
</script>

<section id={$personalMode ? 'life-events': 'work-experience'}>
  <h2>{$personalMode ? 'Life Events' : 'Work Experience'}</h2>
  <Timeline events={$personalMode ? lifeEvents : workExperience}/>
  <Divider/>
</section>
