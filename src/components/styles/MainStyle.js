var React = require('react-native');

var MainStyle = React.StyleSheet.create({
    flexColumn: {
        flex: 1,
        flexDirection: 'column'
    },
    flexRow: {
        flex: 1,
        flexDirection: 'row'
    },

    // Text
    boldText: {
        fontWeight: 'bold'
    },
    greenText: {
    	color: '#4CAF50'
    },
    // Forms & Inputs
    textInput: {
        height: 50
    },
    textInputContainer: {
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1,
        flex: 1
    }
});

module.exports = MainStyle;
