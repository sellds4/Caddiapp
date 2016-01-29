var React = require('react-native');

var {
    ScrollView,
    Text,
    TextInput,
    View,
} = React;

var Auth = require('../../services/AuthService'),
    Button = require('../common/Button'),
    ButtonStyle = require('../common/styles/ButtonStyle'),
    MainStyle = require('../styles/MainStyle'),
    UserStoreMixin = require('../../mixins/UserStoreMixin');

// var Button = require('../common/Button'),
//     ButtonStyle = require('../common/styles/ButtonStyle');

var Login = React.createClass ({
    mixins: [UserStoreMixin],

    getInitialState: function() {
        console.log('there', Auth.login)
        return {
            email: '',
            password: ''
        };
    },

    afterUpdateUserFromStore() {
        var user = UserStore.user;

        if(user && user.username) {
            this.props.navigator.replace({name: 'mainView'});
        }
    },

    login() {
        Auth.login(this.state.email, this.state.password).catch(function(err) {
            alert('Error logging in', err);
        });
    },

    render() {
        return (
            <View style={MainStyle.whiteContainer}>
                <View style={MainStyle.textInputContainer}>
                    <TextInput
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        placeholder="email"
                        style={MainStyle.textInput}
                        underlineColorAndroid="transparent"
                    />
                    <TextInput
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password} 
                        placeholder="password"
                        style={MainStyle.textInput}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <Button
                    btnColor={[ButtonStyle.blueButton]}
                    btnTextColor={ButtonStyle.blueButtonText}
                    action={() => this.login()}
                    text="Sign In"
                />
            </View>
        );
    }
});

module.exports = Login;
