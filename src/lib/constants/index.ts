export const CART_KEY = 'ec-cart';
export const TOKEN = 'token';
export const AUTH_TOKEN_KEY = 'auth_token';
export const AUTH_PERMISSIONS = 'auth_permissions';
export const LIMIT = 10;
export const CUSTOMER = 'customer';
export const CHECKOUT = 'ec-checkout';
export const SHOPS_LIMIT = 20;
export const RTL_LANGUAGES: ReadonlyArray<string> = ['bn'];
export const PRODUCT_INITIAL_FETCH_LIMIT = 30;
export const DEFAULT_LANGUAGE = process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE ?? "en";
export const EMAIL_VERIFIED = 'emailVerified';

export function getDirection(language: string | undefined) {
  if (!language) return 'ltr';
  return RTL_LANGUAGES.includes(language) ? 'rtl' : 'ltr';
}