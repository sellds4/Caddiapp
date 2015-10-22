var React = require('react-native');

var {
    Image,
    LayoutAnimation,
    ScrollView,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} = React;

var ClientProfile = require('./ClientProfile'),
    ClientViewStyle = require('./styles/ClientViewStyle'),
    MainStyle = require('./styles/MainStyle');

var ClientView = React.createClass({
    // getInitialState: function() {
    //     return {
    //         lessonActionStyle: {
    //             height: 20
    //         }
    //     }
    // },
    // animateLesson: function() {
    //     LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    //     this.toggleLesson();
    // },
    // toggleLesson: function() {
    //     this.setState({
    //         lessonActionStyle: {
    //             height: 100
    //         }
    //     });
    // },
    render: function() {
        var client = this.props.clientData.FirstName;
        var accordionContent = {
            lesson: {
                content: (
                    <View>
                        <TouchableOpacity>
                            <View style={ClientViewStyle.action}>
                                <Text style={ClientViewStyle.actionText}>New Lesson</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={ClientViewStyle.action}>
                                <Text style={ClientViewStyle.actionText}>Last Lesson Summary</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={ClientViewStyle.action}>
                                <Text style={ClientViewStyle.actionText}>Schedule Lesson</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={ClientViewStyle.action}>
                                <Text style={ClientViewStyle.actionText}>Lesson History</Text>
                                <Text style={ClientViewStyle.actionSubtext}>Last: 6/4/2015</Text>
                                <Text style={ClientViewStyle.actionSubtext}>Next: 6/11/2015</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            }
        };
        return (
            <View style={ClientViewStyle.background}>
                <ScrollView>
                    <ClientProfile />
                    <View style={MainStyle.flexColumn}>
                        <View style={MainStyle.flexColumn}>
                            <View style={ClientViewStyle.action}>
                                <Text style={ClientViewStyle.actionText}>Lessons</Text>
                            </View>
                            <TouchableOpacity>
                                <View style={ClientViewStyle.action}>
                                    <Text style={ClientViewStyle.actionText}>Package Details</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={ClientViewStyle.action}>
                                    <Text style={ClientViewStyle.actionText}>Message</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={ClientViewStyle.action}>
                                    <Text style={ClientViewStyle.actionText}>Notes</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
});

module.exports = ClientView;
