import React from 'react-native';
import {Store} from 'flux/utils';
import UserConstants from '../constants/UserConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

var {
  AsyncStorage
} = React;

let _user, _accessToken, _refreshToken;

class UserStore extends Store {
    constructor() {
        super(AppDispatcher);
        this.dispatchToken = AppDispatcher.register(function(action) {
            if (action.response === 'PENDING') {
                return true;
            }

            switch(action.actionType) {
                case UserConstants.LOGIN_USER:
                    _accessToken = action.accessToken;
                    _refreshToken = action.refreshToken;
                    _user = action.username;
                    UserStore.emitChange();
                    break;
                case UserConstants.LOGOUT_USER:
                    _user = _accessToken = _refreshToken = null;
                    UserStore.emitChange();
                    break;
                default:
                    break;
            }
        }); 
    }

    isLoggedIn() {
        return !!_user;
    }

    get user() {
        return _user;
    }

    get accessToken() {
        return _accessToken;
    }

    get refreshToken() {
        return _refreshToken;
    }
}

export default new UserStore();
