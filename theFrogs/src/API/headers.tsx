export function headers() {
  const headers = new Headers();
  headers.append("content-Type", "application/json");

  return headers;
}
