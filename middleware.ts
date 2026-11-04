import { NextRequest, NextResponse } from 'next/server';
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === '/') {
    const languages = req.headers.get('accept-language') || '';
    const preferred = /^es\b|,es\b/i.test(languages) ? 'es' : 'en';
    return NextResponse.redirect(new URL(`/${preferred}`, req.url));
  }
  return NextResponse.next();
}
export const config = { matcher: ['/'] };
