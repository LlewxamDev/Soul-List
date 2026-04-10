export async function fetchJson<T>(input: string, init?: RequestInit): Promise<T> {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${input}`);
  }
  return (await response.json()) as T;
}

export async function fetchText(input: string, init?: RequestInit): Promise<string> {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${input}`);
  }
  return response.text();
}
