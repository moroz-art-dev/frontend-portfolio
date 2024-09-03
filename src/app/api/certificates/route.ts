import {NextResponse} from 'next/server';

import {fetchCertificates} from '@lib/api';

export async function GET() {
  try {
    const data = await fetchCertificates();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching:', error);
    return NextResponse.error();
  }
}
