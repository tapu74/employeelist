
import { buildUrl, checkAuthorization, handleError } from '$lib/Util/utils';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, url }) => {
  try {
    const headers = checkAuthorization(request);
    const body = await request.json();
    const response = await fetch(buildUrl(url), {
      method: 'POST',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await handleError(response);
    
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), { status: error.statusCode || 500 });
  }
};