/**
 * Strongly typed access to Vite environment variables.
 * Enforces safe read-only access and fallback values for client builds.
 */

export interface AppEnvironment {
  readonly isDev: boolean
  readonly isProd: boolean
  readonly mode: string
  readonly baseUrl: string
  readonly appTitle: string
}

export const env: AppEnvironment = {
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
  mode: import.meta.env.MODE,
  baseUrl: import.meta.env.BASE_URL,
  appTitle: (import.meta.env.VITE_APP_TITLE as string | undefined) ?? 'Abhinash Gupta — Portfolio',
}
