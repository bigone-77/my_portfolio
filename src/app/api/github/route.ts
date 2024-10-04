import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

import { GITHUB_OWNER, GITHUB_TOKEN } from '@/config/github';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const repoName = searchParams.get('repoName');

  try {
    const response = await axios.get(
      `https://api.github.com/repos/${GITHUB_OWNER}/${repoName}/contents/README.md`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      },
    );

    if (response.status === 200) {
      return NextResponse.json(response.data, { status: 200 });
    }

    return NextResponse.json(
      { message: response.statusText },
      { status: response.status },
    );
  } catch (error) {
    console.warn('Error fetching data:', error);
    return NextResponse.json(
      { message: 'Failed to fetch data', error },
      { status: 500 },
    );
  }
}
