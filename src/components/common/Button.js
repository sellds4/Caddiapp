var React = require('react-native');

var {
    Text,
    TouchableOpacity,
    View
} = React;

var Button = React.createClass({
    getInitialState: function() {
        console.log(this.props);
        return ({})
    },
    render: function() {
        return (
            <TouchableOpacity>
                <View style={this.props.btnColor}>
                    <Text style={this.props.btnTextColor}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );

    }
});

module.exports = Button;