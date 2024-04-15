import acceptLanguage from 'accept-language';
import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

import { updateSession } from '@/utils/supabase/middleware';

import { fallbackLng, languages, cookieName } from './app/i18n/settings';

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
};

export async function middleware(req: NextRequest) {
  // セッションの更新
  await updateSession(req);

  // 言語の取得
  let lng;
  if (req.cookies?.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
  if (!lng) lng = fallbackLng;

  // パスのlanguagesがサポートされていない場合はリダイレクトします
  // スターター部分の認証機能関連のpathはi18nに対応してないのでハードコーディングしている。
  // 認証関連のパスはi18n機能に対応していない。
  if (
    req.nextUrl.pathname !== '/' && // ルートパスの場合はリダイレクトしない
    req.nextUrl.pathname !== '/signin' &&
    req.nextUrl.pathname !== '/signin/password_signin' &&
    req.nextUrl.pathname !== '/auth/callback' &&
    req.nextUrl.pathname !== '/account' &&
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  if (req.headers.has('referer')) {
    const referer = req.headers.get('referer');
    if (referer) {
      const refererUrl = new URL(referer);
      const lngInReferer = languages.find((l) =>
        refererUrl.pathname.startsWith(`/${l}`)
      );

      const response = NextResponse.next();
      if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
      return response;
    }
  }

  return NextResponse.next();
}
