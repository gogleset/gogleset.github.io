// Get cookie by name
export function getCookie(name: string): string | null {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }

  return null;
}

// Set cookie
export function setCookie(name: string, value: string, days: number = 30) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  const cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )};expires=${expires.toUTCString()};path=/`;
  document.cookie = cookieString;
}

// Delete cookie by name
export function deleteCookie(name: string) {
  document.cookie = `${encodeURIComponent(
    name
  )}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
}
