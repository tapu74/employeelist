
import { buildUrl, checkAuthorization, handleError } from '$lib/Util/utils';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request, url }) => {
    try {
      const headers = checkAuthorization(request);
      const response = await fetch(buildUrl(url), { headers });
      const data = await handleError(response);
      return new Response(JSON.stringify(data), { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return new Response(JSON.stringify({ message: error.message }), { status: error.statusCode || 500 });
    }
  };