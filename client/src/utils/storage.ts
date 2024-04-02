const storage = {
    getToken: () => {
        return localStorage.getItem('clerk-db-jwt');
    },

    clearToken: () => {
        localStorage.removeItem(`clerk-db-jwt`);
    },
};

export default storage;
