export interface Translations {
  en: string;
  uk: string;
  ru: string;
}

export interface Certificate {
  icon: string;
  name: Translations;
  imageSrc: string;
  url: string;
}

export interface CertificateApiResponse {
  list: Certificate[];
  title: Translations;
}
