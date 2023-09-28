import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';
const themeStore = writable<'light' | 'dark'>('light');

export const theme = {
	subscribe: themeStore.subscribe,
	update: (value: Theme) => {
		themeStore.set(value);
		document.cookie = `ak_theme=${value};SameSite=Strict;path=/;max-age=31536000`;
	},
	set: themeStore.set
};
