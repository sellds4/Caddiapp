var React = require('react-native');

var ClientViewStyle = React.StyleSheet.create({
    action: {
        alignSelf: 'stretch',
        backgroundColor: '#4CAF50',
        borderRadius: 3,
        flex: 1,
        margin: 5,
        padding: 20,
        shadowColor: 'black',
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity: 0.8,
        shadowRadius: 2
    },
    actionSubtext: {
        color: 'white',
        fontSize: 16
    },
    actionText: {
        color: 'white',
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
        padding: 5
    }
});

module.exports = ClientViewStyle;