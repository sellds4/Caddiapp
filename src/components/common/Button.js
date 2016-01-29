var React = require('react-native');

var {
    Text,
    TouchableOpacity,
    View
} = React;

var Button = React.createClass({
    getInitialState: function() {
        return ({})
    },
    render: function() {
        return (
            <TouchableOpacity onPress={this.props.action}>
                <View style={this.props.btnColor}>
                    <Text style={this.props.btnTextColor}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );

    }
});

module.exports = Button;