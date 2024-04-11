/**
 *Arajka z rutami które będa publiczne
 *Nie potrzebuja uwierzytelniania(authentication)
 * @type {string[]}
 */
export const publicRoutes: string[] = ['/', '/auth/new-verification']

/**
 *Arajka z rutami które będą uzywane do uwierzytelniania(authentication)
 *Te ruty przekierują zalogowanego użytkownika do /settings
 * @type {string[]}
 */
export const authRoutes: string[] = [
    '/auth/login',
    '/auth/register',
    '/auth/error',
    '/auth/reset',
]

/**
 * Prefix dla API authentication rutek
 * Routy rozpoczynające się od tego prefiksu są używane do celów uwierzytelniania(authentication) API
 * @type {string}
 */
export const apiAuthPrefix: string = '/api/auth'

/**
 * Defaultowa rutka po zalogowaniu się
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = '/settings'
