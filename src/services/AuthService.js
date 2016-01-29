import AuthConstants from '../constants/AuthConstants';
import AuthActions from '../actions/AuthActions';

class AuthService {
    login(email, password) {   
        fetch(AuthConstants.LOGIN_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": email,
                "password": password,
                "client_id": AuthConstants.CLIENT_ID,
                "client_secret": AuthConstants.CLIENT_SECRET,
                "grant_type":"password"
            })
        })
        .then((response) => {
            console.log(response);
            LoginActions.loginUser(response);
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
            console.log(response);
            LoginActions.signupUser(response);
        })
        .catch((error) => {
            alert(error);
        });
    }

    handleAuth(loginPromise) {
        return loginPromise
            .then(function(response) {
                var jwt = response.id_token;
                LoginActions.loginUser(jwt);
                return true;
            });
    }
}

export default new AuthService()
