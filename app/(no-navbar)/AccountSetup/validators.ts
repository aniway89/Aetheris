// validator.ts
export const USERNAME_REGEX = /^[a-z0-9_]{3,16}$/;
export const DISPLAY_NAME_REGEX = /^[a-zA-Z0-9!._ ]{2,32}$/;

export function normalizeUsername(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, "")
    .slice(0, 16);
}

export function isMobileDevice() {
  if (typeof window === "undefined") return false;
  return /android|iphone|ipad|ipod/i.test(navigator.userAgent);
}
