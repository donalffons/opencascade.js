import { ImageResponse } from '@vercel/og';
import { source } from '../../../lib/source';
import { SITE_TITLE } from '../../../lib/site';

export const runtime = 'nodejs';

type RouteParams = { readonly params: Promise<{ readonly slug: string[] }> };

export const GET = async (_request: Request, { params }: RouteParams): Promise<Response> => {
  const { slug } = await params;
  const page = source.getPage(slug);
  const title = page?.data.title ?? SITE_TITLE;
  const description = page?.data.description ?? '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.75 }}>libcascade</div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 24, lineHeight: 1.15 }}>{title}</div>
        {description ? (
          <div style={{ fontSize: 28, marginTop: 28, opacity: 0.85, lineHeight: 1.35 }}>
            {description}
          </div>
        ) : undefined}
      </div>
    ),
    { width: 1200, height: 630 },
  );
};
