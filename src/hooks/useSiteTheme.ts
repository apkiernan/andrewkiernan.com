import { useState } from 'react';

export type SiteTheme = 'light' | 'dark';

const siteThemeNamespace = 'ak-site-theme';

export const useSiteTheme = (): [SiteTheme, (s: SiteTheme) => void] => {
  const preference = localStorage.getItem(siteThemeNamespace) as SiteTheme;
  const [state, setState] = useState<SiteTheme>(preference ?? 'light');

  const setSiteTheme = (st: SiteTheme) => {
    localStorage.setItem(siteThemeNamespace, st);
    setState(st);
  };

  return [state, setSiteTheme];
};
