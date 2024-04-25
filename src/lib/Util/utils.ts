import { API_KEY, BASE_URL } from '$env/static/private';

export const buildUrl = (url: URL) => {
    const baseUrl = new URL(BASE_URL);
    return new URL(url.pathname + url.search + url.hash, baseUrl).toString();
  };
  
  export const handleError = async (response: Response) => {
    if (!response.ok) {
      const errorMessage = `HTTP error! Status: ${response.status} - ${response.statusText}`;
      const error = new Error(errorMessage);
      error.statusCode = response.status;
      throw error;
    }
    return await response.json();
  };
  
  export const checkAuthorization = (request: Request) => {
    const authorization = request.headers.get('Authorization');
    if (!API_KEY || !authorization) {
      throw new Error('Invalid Credentials');
    }
    return {
      'x-api-key': API_KEY,
      Authorization: authorization,
    };
  };
  

