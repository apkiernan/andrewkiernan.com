import { useState } from 'react';

export type SiteTheme = 'light' | 'dark';

const siteThemeNamespace = 'ak-site-theme';

export const useSiteTheme = (): [SiteTheme, (s: SiteTheme) => void] => {
  const [state, setState] = useState<SiteTheme>(() => {
    let preference: SiteTheme = 'light';
    if (typeof window !== 'undefined') {
      preference = window.localStorage.getItem(siteThemeNamespace) as SiteTheme;
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
