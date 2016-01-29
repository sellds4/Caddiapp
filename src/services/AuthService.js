import AuthConstants from '../constants/AuthConstants';
import AuthActions from '../actions/AuthActions';

class AuthService {
    // constructor(){}

    login(email, password) {
        fetch(AuthConstants.LOGIN_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'username': email,
                'password': password,
                'client_id': AuthConstants.CLIENT_ID,
                'client_secret': AuthConstants.CLIENT_SECRET,
                'grant_type': 'password'
            })
        })
        .then((response) => {
            let jsonResponse = JSON.parse(response._bodyInit);
            AuthActions.loginUser(jsonResponse);
        })
        .catch((error) => {
            alert(error);
        });
    }

    logout() {
        LoginActions.logoutUser();
    }

    signup(email, password, info) {
        fetch(AuthConstants.SIGNUP_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": email,
                "password": password,
                "info": info
            })
        })
        .then((response) => {
            LoginActions.signupUser(response);
        })
        .catch((error) => {
            alert(error);
        });
    }
}

export default new AuthService()
