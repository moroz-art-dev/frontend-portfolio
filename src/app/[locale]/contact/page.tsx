import Contact from '@components/sections/Contact';
import {getMetaData} from '@utils/getMetaData';

export async function generateMetadata({params}: {params: {locale: string}}) {
  const meta = await getMetaData(params.locale, 'Contact');

  return {
    title: meta.title,
    description: meta.description,
  };
}

function ContactPage() {
  return <Contact />;
}

export default ContactPage;
