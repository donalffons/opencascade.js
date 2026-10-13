import { getLlmRefText } from '../../lib/get-llms-text';
import { SITE_TITLE, SITE_URL } from '../../lib/site';

export const revalidate = false;

export const GET = (): Response => {
  const body = getLlmRefText({ siteTitle: SITE_TITLE, siteUrl: SITE_URL });
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
