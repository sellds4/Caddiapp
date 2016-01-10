var React = require('react-native');

var CalendarStyle = React.StyleSheet.create({
	addEventButton: {
		backgroundColor: '#4CAF50',
		borderRadius: 35,
		bottom: 30,
		height: 70,
		position: 'absolute',
		right: 30,
		width: 70
	},
	background: {
        alignSelf: 'stretch',
        backgroundColor: 'white',
        flex: 1
    },
	calendarRowWrapper: {
		borderBottomColor: 'gray',
		borderBottomWidth: 1, 
		borderStyle: 'solid',
		height: 60
	},
	event: {
		backgroundColor: 'red',
		height: 59,
		position: 'absolute',
		left: 0,
		right: 0,
		top: 120
	},
	hour: {
		color: '#002057',
		fontSize: 14,
		textAlign: 'center'
	},
	timeColumn: {
		width: 60
	}
});

module.exports = CalendarStyle;
