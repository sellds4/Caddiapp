'use strict';

var React = require('react-native');

var {
    AppRegistry,
    BackAndroid,
    Navigator,
    Text,
    ToolbarAndroid,
    TouchableOpacity,
    View,
} = React;

var ClientList = require('./ClientList'),
    ClientView = require('./ClientView'),
    Calendar = require('./Calendar');

var _tabBarActions = ['Clients', 'Schedule', 'Message'],
    _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        _navigator.pop();
        return true;
    }
    return false;
});

var RouteMapper = function(route, navigator) {
    _navigator = navigator;
    var Component;
    switch (route.name) {
        case 'clientList':
            Component = ClientList;
            break;
        case 'clientView':
            Component = ClientView;
            break;
        case 'schedule':
            Component = Calendar;
            break
        default:
            Component = Calendar; 
    }      

    return (
        <Component navigator={navigator} route={route} {...route.passProps} />
    )
};

var CaddiApp = React.createClass({
    changeRoute: function(route) {
        var routes = _navigator.getCurrentRoutes();
        if(routes[routes.length - 1].name !== route) {
            _navigator.push({
                name: route
            });
        }
    },
    routeTo: function(index) {
        switch(index) {
            case 0:
                this.changeRoute('clientList');
                break;
            case 1:
                this.changeRoute('schedule');
                break;
            case 2:
                this.changeRoute('message');
                break;
        }
    },
    render: function() {
        var initialRoute = {name: 'clientList'};
        return (
            <View style={{flex: 1}}>
                <ToolbarAndroid
                    style={{height: 50, alignItems: 'center'}}
                    title='Caddi'
                    actions={[
                        {title: _tabBarActions[0], show: 'always'},
                        {title: _tabBarActions[1], show: 'always'},
                        {title: _tabBarActions[2], show: 'always'}
                    ]}
                    onActionSelected={(index) => this.routeTo(index)} />                
                <View style={{flex: 1}}>
                    <Navigator
                        initialRoute={initialRoute}
                        configureScene={() => Navigator.SceneConfigs.FloatFromRight}
                        renderScene={RouteMapper}
                    />
                </View>
            </View>
        );
    }
});

AppRegistry.registerComponent('CaddiApp', () => CaddiApp);

// <View navigator={navigator}>
//     <TouchableOpacity onPress={() => routeTo('clientList')}>
//         <Text>Clients</Text>
//     </TouchableOpacity>
//     <TouchableOpacity>
//         <Text>Schedule</Text>
//     </TouchableOpacity>
//     <TouchableOpacity>
//         <Text>Communicate</Text>
//     </TouchableOpacity>
// </View>