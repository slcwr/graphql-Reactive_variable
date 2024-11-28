"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalStorage = void 0;
// hooks/useLocalStorage.ts
const useLocalStorage = () => {
    const saveToken = (token) => {
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
exports.useLocalStorage = useLocalStorage;
