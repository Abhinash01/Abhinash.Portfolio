/**
 * Class name composition utility.
 * Lightweight, zero-dependency helper to conditionally join CSS class strings.
 */

export type ClassValue = string | number | boolean | undefined | null

export function cn(...inputs: readonly ClassValue[]): string {
  return inputs.filter(Boolean).join(' ')
}
