export const GetUserConfig = ({ name }: { name: string }): string | null =>
    localStorage.getItem(name);

export const GetCookies = (): {} =>
    Object.fromEntries(document.cookie.split('; ').map(x => x.split('=')))

export const SetCookieByName = ({ name, value }: { name: string, value: string }) =>
    document.cookie = `${name}=${value}`;
