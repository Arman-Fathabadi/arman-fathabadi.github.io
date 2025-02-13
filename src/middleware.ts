import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Add cache control headers
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-middleware-cache', 'no-cache');

  // Handle SPA routing
  if (pathname !== '/' && !pathname.startsWith('/_next') && !pathname.includes('.')) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.rewrite(url, {
      headers: requestHeaders
    });
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};