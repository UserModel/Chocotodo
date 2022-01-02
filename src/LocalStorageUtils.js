import ls from 'local-storage';

const localStorageUtils = {
    getUserData() {
        if (ls('userData') === null) {
            let userData = {
                games: [],
                darkMode: true,
                otherThing: "No"
            };
            ls('userData', JSON.stringify(userData));
        }
        return JSON.parse(ls('userData'));
    },
    saveUserData(userData) {
        ls('userData', JSON.stringify(userData));
    }
};

export default localStorageUtils;
