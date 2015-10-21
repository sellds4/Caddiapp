var React = require('react-native');

var ClientViewStyle = React.StyleSheet.create({
    action: {
        alignSelf: 'stretch',
        backgroundColor: '#4CAF50',
        flex: 1
    },
    actionSubtext: {
        color: 'white',
        fontSize: 16
    },
    actionText: {
        color: 'white',
        height: 0,
        fontSize: 24
    },
    actionTouch: {
        alignSelf: 'stretch',
        flex: 1,
    },
    background: {
        alignSelf: 'stretch',
        backgroundColor: 'white',
        flex: 1,
        paddingVertical: 5
    }
});

module.exports = ClientViewStyle;