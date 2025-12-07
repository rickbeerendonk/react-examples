/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

declare module 'slow-fetch' {
  export function slowfetch(
    ms: number,
    ...args: Parameters<typeof fetch>
  ): Promise<Response>;
  export function fetch(...args: Parameters<typeof fetch>): Promise<Response>;
}
