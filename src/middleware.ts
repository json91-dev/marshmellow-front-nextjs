export { auth as middleware } from './auth';

/** middleware를 적용할 route 경로 => 로그인을 해야만 접근가능한 페이지 **/
export const config = {
  matcher: [],
};
