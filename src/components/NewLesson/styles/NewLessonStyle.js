var React = require('react-native');

var NewLessonStyle = React.StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: 10,
        width: 100
    },
    lessonInput: {
        height: 50
    },
    lessonInputContainer: {
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1,
        flex: 1
    },
    lessonItemContainer: {
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 10
    },
    lessonLabelContainer: {
        alignSelf: 'center'
    },
    lessonLabelTopContainer: {
        alignSelf: 'flex-start'
    },
    lessonLabel: {
        width: 100
    },
    newLessonContainer: {
        backgroundColor: 'white',
        flex: 1
    },
    topicChecked: {
        color: '#4CAF50',
        fontWeight: 'bold'
    },
    topicUnchecked: {
        color: 'gray'
    }
});

module.exports = NewLessonStyle;