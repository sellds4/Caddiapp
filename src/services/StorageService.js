class StorageService {
    getsStoredToken(key) {
        AsyncStorage.getItem(key);
    }
    async setStoredToken(key, token) {
        await AsyncStorage.setItem(key, token);
    }
    async removeToken(tokenName) {
        await AsyncStorage.removeItem(tokenName);
    }
}

export default new StorageService()
