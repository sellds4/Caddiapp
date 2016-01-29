import React from 'react-native';
import BaseStore from './BaseStore';
import UserConstants from '../constants/UserConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

var {
  AsyncStorage
} = React;

let _user = {};

class UserStore extends BaseStore {
    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this))

    }

    _registerToActions(action) {
        console.log(action)
        if (action.response === 'PENDING') {
            return true;
        }

        switch(action.actionType) {
            case UserConstants.LOGIN_USER:
                _user.accessToken = action.accessToken;
                _user.refreshToken = action.refreshToken;
                _user.username = action.username;
                this.emitChange();
                break;
            case UserConstants.LOGOUT_USER:
                _user = {};
                this.emitChange();
                break;
            default:
                break;
        }
    }

    isLoggedIn() {
        return !!_user;
    }

    get user() {
        return _user;
    }

    get accessToken() {
        return _user.accessToken;
    }

    get refreshToken() {
        return _user.refreshToken;
    }
}

export default new UserStore();
