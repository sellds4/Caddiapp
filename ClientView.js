var React = require('react-native');

var {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} = React;

var ClientProfile = require('./ClientProfile'),
    ClientViewStyle = require('./styles/ClientViewStyle'),
    MainStyle = require('./styles/MainStyle');

var ClientView = React.createClass({
    render: function() {
        var client = this.props.clientData.FirstName;
        return (
            <View style={ClientViewStyle.background}>
                <ScrollView>
                    <ClientProfile />
                    <View style={MainStyle.flexRow}>
                        <View style={MainStyle.flexColumn}>
                            <TouchableOpacity style={ClientViewStyle.actionTouch}>
                                <View style={ClientViewStyle.action}>
                                    <Text style={ClientViewStyle.actionText}>New Lesson</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={ClientViewStyle.actionTouch}>
                                <View style={ClientViewStyle.action}>
                                    <Text style={ClientViewStyle.actionText}>Last Lesson Summary</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={ClientViewStyle.actionTouch}>
                                <View style={ClientViewStyle.action}>
                                    <Text style={ClientViewStyle.actionText}>Schedule Lesson</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={ClientViewStyle.actionTouch}>
                                <View style={ClientViewStyle.action}>
                                    <Text style={ClientViewStyle.actionText}>Lesson History</Text>
                                    <Text style={ClientViewStyle.actionSubtext}>Last: 6/4/2015</Text>
                                    <Text style={ClientViewStyle.actionSubtext}>Next: 6/11/2015</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={MainStyle.flexColumn}>
                            <TouchableOpacity style={ClientViewStyle.actionTouch}>
                                <View style={ClientViewStyle.action}>
                                    <Text style={ClientViewStyle.actionText}>Package Details</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={ClientViewStyle.actionTouch}>
                                <View style={ClientViewStyle.action}>
                                    <Text style={ClientViewStyle.actionText}>Message</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={ClientViewStyle.actionTouch}>
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
