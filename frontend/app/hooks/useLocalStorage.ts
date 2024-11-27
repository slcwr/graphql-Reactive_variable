// hooks/useLocalStorage.ts
export const useLocalStorage = () => {
    const saveToken = (token: string) => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('token', token);
        }
    };

    const getToken = () => {
        if (typeof window !== 'undefined') {
            return window.localStorage.getItem('token');
        }
        return null;
    };

    const removeToken = () => {
        if (typeof window !== 'undefined') {
            window.localStorage.removeItem('token');
        }
    };

    return { saveToken, getToken, removeToken };
};