var React = require('react-native'),
	ScrollableTabView = require('react-native-scrollable-tab-view');

var {
    TextInput,
    View,
} = React;

// var MainViewStyle = require('./styles/MainViewStyle');

var Calendar = require('./Calendar'),
	ClientList = require('./ClientList'),
	NewLesson = require('./NewLesson');

var MainView = React.createClass({

    render: function() {
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
