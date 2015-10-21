var React = require('react-native');

var NewLessonStyle = React.StyleSheet.create({
    newLessonContainer: {
        flex: 1
    },
    lessonInputContainer: {
    	flex: 1,
    },
    lessonItemContainer: {
    	alignItems: 'center',
    	flexDirection: 'row',
    	height: 60,
    	marginVertical: 10
    },
    lessonLabelContainer: {
    	backgroundColor: 'red',
    	paddingLeft: 5,
    },
    lessonLabel: {
    	width: 75
    }
});

module.exports = NewLessonStyle;