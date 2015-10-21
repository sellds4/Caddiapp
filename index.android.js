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
    Calendar = require('./Calendar'),
    NewLesson = require('./NewLesson'),
    TabBarStyle = require('./styles/TabBarStyle');

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
        case 'teach':
            Component = NewLesson;
            break
        default:
            Component = NewLesson; 
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
                    style={{height: 50, alignItems: 'center', textAlign: 'center'}}
                    title='Caddi'
                /> 
                <View style={TabBarStyle.tabBarContainer}>
                    <TouchableOpacity>
                        <Text onPress={() => this.routeTo(0)}>{_tabBarActions[0]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text onPress={() => this.routeTo(1)}>{_tabBarActions[1]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text onPress={() => this.routeTo(2)}>{_tabBarActions[2]}</Text>
                    </TouchableOpacity>
                </View>               
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