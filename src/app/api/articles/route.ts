// src/app/api/articles/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  const data = [
    { id: 1, title: 'Berita A' },
    { id: 2, title: 'Berita B' },
  ];

  return NextResponse.json(data);
}
