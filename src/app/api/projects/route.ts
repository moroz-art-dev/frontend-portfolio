import {NextResponse} from 'next/server';

import {fetchProjects} from '@lib/api';

export async function GET() {
  try {
    const data = await fetchProjects();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching:', error);
    return NextResponse.error();
  }
}
