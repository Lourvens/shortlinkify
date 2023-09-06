export function encodeToBase62(number) {
  const characters =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const base = characters.length;

  let encodedString = '';

  if (number === 0) {
    return characters[0];
  }

  while (number > 0) {
    const remainder = number % base;
    encodedString = characters[remainder] + encodedString;
    number = Math.floor(number / base);
  }

  return encodedString;
}
