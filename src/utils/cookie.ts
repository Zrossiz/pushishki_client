export const setCookie = (name: string, value: string, days: number = 90) => {
    if (typeof document !== 'undefined') {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = `${name}=${value}${expires}; path=/admin`;
        document.cookie = `${name}=${value}${expires}; path=/auth/login`;
    };
};