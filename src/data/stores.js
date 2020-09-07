import { writable } from 'svelte/store';
import watchMedia from 'svelte-media';

export const personalMode = writable(false);
export const media = watchMedia({
  mobile: '(max-width: 425px)',
});
