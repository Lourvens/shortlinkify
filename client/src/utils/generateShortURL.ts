export function generateShortURL(linkId: string) {
  const baseUrl = import.meta.env.VITE_CLIENT_HOST_URL;
  const shortLink = `${baseUrl}/u/${linkId}`;

  return shortLink;
}
