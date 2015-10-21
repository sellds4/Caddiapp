var React = require('react-native');

var {
    Text,
    TextInput,
    View,
} = React;

var MainStyle = require('./styles/MainStyle')
    NewLessonStyle = require('./styles/NewLessonStyle');

var NewLesson = React.createClass({

    // getInitialState: function(){
        
    // },

    render: function() {
        return (
            <View style={[NewLessonStyle.newLessonContainer, MainStyle.flexColumn]}>
                <View style={[NewLessonStyle.lessonItemContainer]}>
                    <View style={NewLessonStyle.lessonLabelContainer}>
                        <Text style={NewLessonStyle.lessonLabel}>Lesson Date</Text>
                    </View>
                    <View style={NewLessonStyle.lessonInputContainer}>
                        <TextInput keyboardType='number-pad' style={{backgroundColor: 'blue'}}/>
                    </View>
                </View>
                <View style={[NewLessonStyle.lessonItemContainer]}>
                    <View style={NewLessonStyle.lessonLabelContainer}>
                        <Text style={NewLessonStyle.lessonLabel}>Worked on</Text>
                    </View>
                    <View style={NewLessonStyle.lessonInputContainer}>
                        <Text>Driver/Woods</Text>
                        <Text>Long Irons</Text>
                        <Text>Short Irons</Text>
                        <Text>Pitch Shots</Text>
                        <Text>Short Game/Chipping</Text>
                        <Text>Bunker Play</Text>
                        <Text>Putting</Text>
                        <Text>Game Plan</Text>
                    </View>
                </View> 
                <View style={[NewLessonStyle.lessonItemContainer]}>
                    <View style={NewLessonStyle.lessonLabelContainer}>
                        <Text style={NewLessonStyle.lessonLabel}>Drills & Swing Thoughts</Text>
                    </View>
                    <View style={NewLessonStyle.lessonInputContainer}>
                        <TextInput style={{backgroundColor: 'blue'}}/>
                    </View>
                </View>

            </View>
        );

    }
});

module.exports = NewLesson;