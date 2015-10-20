var React = require('react-native');

var ClientListStyle = React.StyleSheet.create({
    background: {
        alignSelf: 'stretch',
        backgroundColor: 'black',
        flex: 1
    },
    clientContainer: {
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
        marginTop: 20
    },
    clientList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 10
    },
    clientName: {
        color: 'white',
    },
    clientPic: {
        alignItems: 'center',
        backgroundColor: '#0e8cd1',
        borderColor: '#22A7F0',
        borderRadius: 40,
        borderWidth: 5,
        justifyContent: 'center',
        marginBottom: 5,
        height: 80,
        width: 80
    },
    clientPicText: {
        color: 'white',
        fontSize: 24
    },
    searchBox: {
        backgroundColor: 'white',
        height: 50,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    }
});

module.exports = ClientListStyle;