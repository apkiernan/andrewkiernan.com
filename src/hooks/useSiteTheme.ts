import { useState } from 'react';

export type SiteTheme = 'light' | 'dark';

const siteThemeNamespace = 'ak-site-theme';

export const useSiteTheme = (): [SiteTheme, (s: SiteTheme) => void] => {
  const [state, setState] = useState<SiteTheme>(() => {
    let preference: SiteTheme = 'light';
    if (typeof window !== 'undefined') {
      const preferDark = window.matchMedia('(prefers-color-scheme: dark)');
      const fromLocal = window.localStorage.getItem(
        siteThemeNamespace
      ) as SiteTheme;

      // Let saved setting take precedent,
      // then fallback to browser setting
      preference = fromLocal
        ? fromLocal
        : preferDark.matches
        ? 'dark'
        : 'light';
    }
    return preference;
  });

  const setSiteTheme = (st: SiteTheme) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(siteThemeNamespace, st);
    }
    setState(st);
  };

  return [state, setSiteTheme];
};
