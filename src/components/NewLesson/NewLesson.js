var React = require('react-native');

var {
    ScrollView,
    Text,
    TextInput,
    View,
} = React;

var Button = require('../common/Button'),
    ButtonStyle = require('../common/styles/ButtonStyle'),
    MainStyle = require('.././styles/MainStyle'),
    NewLessonStyle = require('./styles/NewLessonStyle');

var NewLesson = React.createClass({
    getInitialState: function(){
        return ({
            clientName: 'Felipe Von Gogh',
            lessonDate: '',
            driverWoods: {
                checked: false,
                style: NewLessonStyle.topicUnchecked
            },
            longIrons: {
                checked: false,
                style: NewLessonStyle.topicUnchecked
            },
            shortIrons: {
                checked: false,
                style: NewLessonStyle.topicUnchecked
            },
            pitchShots: {
                checked: false,
                style: NewLessonStyle.topicUnchecked
            },
            chipping: {
                checked: false,
                style: NewLessonStyle.topicUnchecked
            },
            bunkerPlay: {
                checked: false,
                style: NewLessonStyle.topicUnchecked
            },
            putting: {
                checked: false,
                style: NewLessonStyle.topicUnchecked
            },
            gamePlan: {
                checked: false,
                style: NewLessonStyle.topicUnchecked
            }
        });
    },

    selectedText: function(itemSelected) {
        var newState = {};
        newState[itemSelected] = {
            checked: !this.state[itemSelected].checked,
            style: !this.state[itemSelected].checked ? NewLessonStyle.topicChecked : NewLessonStyle.topicUnchecked
        }
        this.setState(newState);
    },

    render: function() {
        return (
            <ScrollView 
                style={[NewLessonStyle.newLessonContainer, MainStyle.flexColumn]}
                keyboardShouldPersistTaps={false}
            >
                <View style={[NewLessonStyle.lessonItemContainer]}>
                    <View style={NewLessonStyle.lessonLabelContainer}>
                        <Text style={NewLessonStyle.lessonLabel}>Client Name</Text>
                    </View>
                    <View style={NewLessonStyle.lessonInputContainer}>
                        <View>
                            <TextInput
                                onChangeText={(clientName) => this.setState({clientName})}
                                value={this.state.clientName} 
                                placeholder="client name"
                                style={NewLessonStyle.lessonInput}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                </View>
                <View style={[NewLessonStyle.lessonItemContainer]}>
                    <View style={NewLessonStyle.lessonLabelContainer}>
                        <Text style={NewLessonStyle.lessonLabel}>Lesson Date</Text>
                    </View>
                    <View style={NewLessonStyle.lessonInputContainer}>
                        <View>
                            <TextInput
                                onChangeText={(lessonDate) => this.setState({lessonDate})}
                                value={this.state.lessonDate} 
                                placeholder="mmddyy"
                                style={NewLessonStyle.lessonInput}
                                keyboardType="number-pad"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                </View>
                <View style={[NewLessonStyle.lessonItemContainer]}>
                    <View style={NewLessonStyle.lessonLabelTopContainer}>
                        <Text style={[NewLessonStyle.lessonLabel]}>Worked on</Text>
                        <Text style={[NewLessonStyle.lessonLabel]}>(Touch to <Text style={[MainStyle.greenText, MainStyle.boldText]}>select</Text>)</Text>
                    </View>
                    <View style={NewLessonStyle.lessonInputContainer}>
                        <Text 
                            style={this.state.driverWoods.style}
                            onPress={() => this.selectedText('driverWoods')}>Driver/Woods</Text>
                        <Text 
                            style={this.state.longIrons.style}
                            onPress={() => this.selectedText('longIrons')}>Long Irons</Text>
                        <Text 
                            style={this.state.shortIrons.style}
                            onPress={() => this.selectedText('shortIrons')}>Short Irons</Text>
                        <Text 
                            style={this.state.pitchShots.style}
                            onPress={() => this.selectedText('pitchShots')}>Pitch Shots</Text>
                        <Text 
                            style={this.state.chipping.style}
                            onPress={() => this.selectedText('chipping')}>Short Game/Chipping</Text>
                        <Text 
                            style={this.state.bunkerPlay.style}
                            onPress={() => this.selectedText('bunkerPlay')}>Bunker Play</Text>
                        <Text 
                            style={this.state.putting.style}
                            onPress={() => this.selectedText('putting')}>Putting</Text>
                        <Text 
                            style={this.state.gamePlan.style}
                            onPress={() => this.selectedText('gamePlan')}>Game Plan</Text>
                    </View>
                </View> 
                <View style={[NewLessonStyle.lessonItemContainer]}>
                    <View style={NewLessonStyle.lessonTopLabelContainer}>
                        <Text style={NewLessonStyle.lessonLabel}>Drills & Swing Thoughts</Text>
                    </View>
                    <View style={NewLessonStyle.lessonInputContainer}>
                        <TextInput multiline={true} />
                    </View>
                </View>
                <View style={[NewLessonStyle.lessonItemContainer]}>
                    <View style={NewLessonStyle.lessonTopLabelContainer}>
                        <Text style={NewLessonStyle.lessonLabel}>Takeaways/Recap</Text>
                    </View>
                    <View style={NewLessonStyle.lessonInputContainer}>
                        <TextInput multiline={true} />
                    </View>
                </View>
                <Button btnColor={[ButtonStyle.blueButton, NewLessonStyle.button]} btnTextColor={ButtonStyle.blueButtonText} text="Submit" />
            </ScrollView>
        );

    }
});

module.exports = NewLesson;