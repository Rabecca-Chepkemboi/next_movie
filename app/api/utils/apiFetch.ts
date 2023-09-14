import { BASE_URL, ACCESS_TOKEN } from "@/app/config";

type ApiFetchProps = {
  method?: string;
  path: string;
  body?: string;
};

export async function apiFetch(apiProps: ApiFetchProps) {
  if (!BASE_URL) {
    throw new Error("BASE_URL is not defined.");
  }
  try {
    const response = await fetch(`${BASE_URL}${apiProps.path}`, {
      method: apiProps.method || 'GET', 
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: apiProps.body ? JSON.stringify(apiProps.body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
export async function GET() {
  try {
    const response = await apiFetch({ path: "/3/movie/popular" });
    return response;
  } catch (error) {
    return {
      error: 'error.message',
      status: 500,
      statusText: 'error',
    };
  }
}
