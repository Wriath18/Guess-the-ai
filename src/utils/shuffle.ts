/**
 * Cryptographically secure Fisher-Yates shuffle with rejection sampling
 * to eliminate modulo bias, guaranteeing a truly unpredictable random sequence.
 */
export function secureRandomInt(maxExclusive: number): number {
  if (maxExclusive <= 1) return 0;
  
  if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    const range = 0x100000000; // 2^32
    const limit = range - (range % maxExclusive);
    const buffer = new Uint32Array(1);

    let val = 0;
    do {
      window.crypto.getRandomValues(buffer);
      val = buffer[0];
    } while (val >= limit);

    return val % maxExclusive;
  }

  return Math.floor(Math.random() * maxExclusive);
}

export function secureShuffle<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = secureRandomInt(i + 1);
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }
  return result;
}
