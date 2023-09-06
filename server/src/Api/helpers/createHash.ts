import { encodeToBase62 } from './encoder';

export function createHash(key: number) {
  const randomValue = Math.floor(Math.random() * 1000);
  const genratedHash: string = [key, randomValue].map(encodeToBase62).join('');

  return genratedHash;
}
