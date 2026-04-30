const BASE_URL = import.meta.env.PUBLIC_API_URL;

export async function fetchFromAPI<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const url = `${BASE_URL}${path}`;
  const res = await fetch(url, init);

  if (!res.ok) {
    throw new Error(`API ${res.status}: ${url}`);
  }

  return res.json() as Promise<T>;
}
