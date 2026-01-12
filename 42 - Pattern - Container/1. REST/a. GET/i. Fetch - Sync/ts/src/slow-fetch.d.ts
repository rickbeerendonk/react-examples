/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

export function slowfetch(
  ms: number,
  ...args: Parameters<typeof globalThis.fetch>
): Promise<Response>;

export function fetch(
  ...args: Parameters<typeof globalThis.fetch>
): Promise<Response>;

declare const _default: {
  slowfetch: typeof slowfetch;
  fetch: typeof fetch;
};

export default _default;
