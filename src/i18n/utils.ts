import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Remove existing language prefix if present
  const pathWithoutLang = cleanPath.replace(/^(en|zh)\//, '');
  return `/${lang}/${pathWithoutLang}`;
}

export function switchLanguage(currentPath: string, newLang: Lang): string {
  // Replace current language prefix with new one
  return currentPath.replace(/^\/(en|zh)/, `/${newLang}`);
}
