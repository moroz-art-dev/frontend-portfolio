import {useEffect, useMemo} from 'react';

import {useTranslations} from 'next-intl';

export const useMetaData = (pageKey: string) => {
  const t = useTranslations(pageKey);

  const meta = useMemo(
    () => ({
      title: t('metaTitle') || 'Default Title',
      description: t('metaDescription') || 'Default Description',
    }),
    [t]
  );

  useEffect(() => {
    document.title = meta.title;

    const updateMetaTag = (name: string, content: string) => {
      let metaTag = document.querySelector(
        `meta[name="${name}"]`
      ) as HTMLMetaElement | null;
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.name = name;
        metaTag.content = content;
        document.head.appendChild(metaTag);
      }
    };

    updateMetaTag('description', meta.description);
  }, [meta.title, meta.description]);

  return meta;
};
