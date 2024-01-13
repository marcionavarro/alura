const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';

export class ArmazenadorToken {
    static definirToken(access_token, refresh_token) {
        sessionStorage.setItem(ACCESS_TOKEN, access_token);
        sessionStorage.setItem(REFRESH_TOKEN, refresh_token);
    }

    static get access_token() {
        return sessionStorage.getItem(ACCESS_TOKEN);
    }

    static get refresh_token() {
        return sessionStorage.getItem(REFRESH_TOKEN);
    }
}