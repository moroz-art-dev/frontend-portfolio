import {NextResponse} from 'next/server';

import {fetchSkills} from '@lib/api';

export async function GET() {
  try {
    const data = await fetchSkills();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching:', error);
    return NextResponse.error();
  }
}