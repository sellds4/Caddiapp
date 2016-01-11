var React = require('react-native'),
    LinearGradient = require('react-native-linear-gradient');

var {
    ListView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ViewPagerAndroid
} = React;

var ClientListStyle = require('./styles/ClientListStyle'),
    ClientView = require('.././ClientView/ClientView');

var ClientList = React.createClass({

    getInitialState: function() {
        return {
            searchString: '',
            dataSource: ''
        };
    },

    render: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var regex = this.state.searchString ? new RegExp(this.state.searchString, "gi") : new RegExp("", "gi");
        this.state.dataSource = ds.cloneWithRows(this.fetchClients([]).filter(props => props.FirstName.match(regex) || props.LastName.match(regex)));
        return (
            // ListView wraps ScrollView and so takes on its properties. 
            // With that in mind you can use the ScrollView's contentContainerStyle prop to style the items.
            // <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={ClientListStyle.background}>
            // <ViewPagerAndroid initialPage={0}>
                <View style={ClientListStyle.background}>
                    <TextInput onChangeText={(searchString) => this.setState({searchString})} value={this.state.searchString} placeholder="search clients" style={ClientListStyle.searchBox}/>
                    <ListView contentContainerStyle={ClientListStyle.clientList}
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                        keyboardShouldPersistTaps={false}
                    />
                </View>
                // <View>
                //     <Text>Page 2</Text>
                // </View>
            // </ViewPagerAndroid>
            // </LinearGradient>
        );
    },

    renderRow: function(clientData) {
        return (
            <View style={ClientListStyle.clientContainer}>
                <TouchableOpacity
                    onPress={() => this.selectClient(clientData)}
                    onLongPress={() => this.teachLesson(clientData)}
                    underlayColor='rgba(0,0,0,0)'
                >
                    <View style={ClientListStyle.clientPic}>
                        <Text style={ClientListStyle.clientPicText}>{clientData.FirstName.charAt(0)}{clientData.LastName.charAt(0)}</Text>
                    </View>
                </TouchableOpacity>
                <Text style={ClientListStyle.clientName}>
                    {clientData.FirstName}
                </Text>
                <Text style={ClientListStyle.clientName}>
                    {clientData.LastName}
                </Text>
            </View>
        );
    },

    fetchClients: function() {
        // var dataBlob = [];
        // for (var ii = 0; ii < 25; ii++) {
        //     var pressedText = pressData[ii] ? ' (X)' : '';
        //     dataBlob.push('Cell ' + ii + pressedText);
        // }
        // // return dataBlob;
        return [{'FirstName': 'Dan', 'LastName': 'Sell'},{'FirstName': 'Kasey', 'LastName': 'Allen'},{'FirstName': 'Alex', 'LastName': 'Krone'},{'FirstName': 'Rachel', 'LastName': 'Niemann'},{'FirstName': 'Dominique', 'LastName': 'Wilkins'},{'FirstName': 'Dan', 'LastName': 'Sell'},{'FirstName': 'Dan', 'LastName': 'Sell'},{'FirstName': 'Dan', 'LastName': 'Sell'},{'FirstName': 'Dan', 'LastName': 'Sell'},{'FirstName': 'Dan', 'LastName': 'Sell'},{'FirstName': 'Dan', 'LastName': 'Sell'},{'FirstName': 'Dan', 'LastName': 'Sell'},{'FirstName': 'Dan', 'LastName': 'Sell'}]
    },

    selectClient: function(clientData) {
        this.state.searchString = '';
        this.props.navigator.push({
            name: 'clientView',
            passProps: {clientData: clientData}
        });
    },

    teachLesson: function(clientData) {
        this.state.searchString = '';
        this.props.navigator.push({
            name: 'teach',
            passProps: {clientData: clientData}
        });
    },
});

module.exports = ClientList;
