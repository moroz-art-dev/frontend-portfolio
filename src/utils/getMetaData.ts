import fs from 'fs';
import path from 'path';

export async function getMetaData(locale: string, pageKey: string) {
  try {
    const filePath = path.resolve(process.cwd(), 'messages', `${locale}.json`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const messages = JSON.parse(fileContents);

    const meta = messages[pageKey];

    if (!meta) {
      throw new Error(`No meta data found for pageKey: ${pageKey}`);
    }

    return {
      title: meta.metaTitle || 'Default Title',
      description: meta.metaDescription || 'Default Description',
    };
  } catch (error) {
    console.error('Error loading meta data:', error);
    return {
      title: 'Default Title',
      description: 'Default Description',
    };
  }
}
