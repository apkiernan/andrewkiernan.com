import React from 'react';
import { siteThemeNamespace } from '../src/hooks/useSiteTheme';

const loadTheme = `(function loadTheme() {
  let preference = 'light';
  if (typeof window !== 'undefined') {
    const preferDark = window.matchMedia('(prefers-color-scheme: dark)');
    const fromLocal = window.localStorage.getItem(
      "${siteThemeNamespace}"
    );

    // Let saved setting take precedent,
    // then fallback to browser setting
    preference = fromLocal
    ? fromLocal
    : preferDark.matches
    ? 'dark'
    : 'light';
  }
  document.body.classList.add('theme-' + preference);
})()`;

const LoadThemeScript = () => (
  <script dangerouslySetInnerHTML={{ __html: loadTheme }} />
);

export function onRenderBody({ setPreBodyComponents }) {
  setPreBodyComponents(<LoadThemeScript />);
}
