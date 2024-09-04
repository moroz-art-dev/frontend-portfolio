import Hero from '@components/sections/Hero';
import {getMetaData} from '@utils/getMetaData';

export async function generateMetadata({params}: {params: {locale: string}}) {
  const meta = await getMetaData(params.locale, 'HomePage');

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function HomePage() {
  return <Hero />;
}
