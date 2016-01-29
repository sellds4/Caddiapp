import AppDispatcher from '../dispatcher/AppDispatcher.js';
import StorageService from '../services/StorageService.js';
// import AuthConstants from '../constants/AuthConstants.js';
// import RouterContainer from '../services/RouterContainer'

export default {
    loginUser: (data) => {
        let accessToken = data.access_token,
            refreshToken = data.refresh_token,
            username= data.username;

        StorageService.setStoredToken('accessToken', accessToken);
        StorageService.setStoredToken('refreshToken', refreshToken);

        AppDispatcher.dispatch({
            actionType: 'LOGIN_USER',
            accessToken: accessToken,
            refreshToken: refreshToken,
            username: username
        });
    },
    logoutUser: () => {
        StorageService.removeToken('accessToken');
        StorageService.removeToken('refreshToken');
        AppDispatcher.dispatch({
            actionType: 'LOGOUT_USER'
        });
    }
}
