var React = require('react-native'),
    ScrollableTabView = require('react-native-scrollable-tab-view');

var {
    TextInput,
    View,
} = React;

var Calendar = require('./Schedule/Calendar'),
    ClientList = require('./ClientList/ClientList'),
    NewLesson = require('./NewLesson/NewLesson')
    UserStore = require('../stores/UserStore'),
    UserStoreMixin = require('../mixins/UserStoreMixin');

// var MainViewStyle = require('./styles/MainViewStyle');

var MainView = React.createClass({
    mixins: [UserStoreMixin],

    afterUpdateUserFromStore() {
        var user = UserStore.user;

        if(!user || !user.accessToken) {
            this.props.navigator.replace({name: 'login'});
        }
    },

    render() {
        return (
            <ScrollableTabView>
                <ClientList navigator={this.props.navigator} tabLabel="Clients" />
                <Calendar navigator={this.props.navigator} tabLabel="Schedule" />
                <NewLesson navigator={this.props.navigator} tabLabel="Message" />
            </ScrollableTabView>
        );

    }
});

module.exports = MainView;
