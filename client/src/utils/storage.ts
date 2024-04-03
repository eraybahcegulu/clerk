import Cookies from 'js-cookie';

const storage = {
    getToken: () => {
        return Cookies.get('__session')
    },

    clearToken: () => {
        localStorage.removeItem(`clerk-db-jwt`);
    },
};

export default storage;
