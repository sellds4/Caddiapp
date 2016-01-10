var React = require('react-native');

var {
    Image,
    Text,
    TouchableOpacity,
    View,
} = React;

var ClientProfileStyle = require('./styles/ClientProfileStyle');

var ClientProfile = React.createClass({
    render: function() {
        // var client = this.props.clientData.FirstName;
        return (
            <View style={ClientProfileStyle.profileContainer}>
                <Text>Email</Text>
                <Text>Phone</Text>
                <Text>Client since</Text>
                <Text>Swings</Text>
                <Text>Handicap</Text>
                <Text>Goals</Text>
            </View>
        )
    }
});

module.exports = ClientProfile;
