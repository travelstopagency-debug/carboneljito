import { promises as fs } from 'node:fs';
import path from 'node:path';
import { NextRequest } from 'next/server';

export const runtime = 'nodejs';

const distRoot = path.join(process.cwd(), 'erp', 'dist');

const CONTENT_TYPES: Record<string, string> = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function contentTypeFor(filePath: string): string {
  return CONTENT_TYPES[path.extname(filePath).toLowerCase()] ?? 'application/octet-stream';
}

async function readFileIfExists(filePath: string): Promise<Buffer | null> {
  try {
    return await fs.readFile(filePath);
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const relativePath = request.nextUrl.pathname.replace(/^\/admin\/?/, '');
  const requestedPath = relativePath === '' ? 'index.html' : relativePath;
  const absolutePath = path.resolve(distRoot, requestedPath);

  if (!absolutePath.startsWith(distRoot)) {
    return new Response('Not found', { status: 404 });
  }

  const file = await readFileIfExists(absolutePath);
  if (file) {
    return new Response(new Uint8Array(file), {
      headers: {
        'content-type': contentTypeFor(absolutePath),
        'cache-control': requestedPath === 'index.html' ? 'no-store' : 'public, max-age=31536000, immutable',
      },
    });
  }

  const looksLikeAsset = path.extname(requestedPath) !== '';
  if (looksLikeAsset) {
    return new Response('Not found', { status: 404 });
  }

  const indexFile = await readFileIfExists(path.join(distRoot, 'index.html'));
  if (!indexFile) {
    return new Response(
      'ERP build not found. Run `npm run erp:install` and `npm run erp:build` before accessing /admin.',
      { status: 503 },
    );
  }

  return new Response(new Uint8Array(indexFile), {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}
