'use strict';

var React = require('react-native');

var {
    AppRegistry,
    AsyncStorage,
    Navigator,
    Text,
    TabBarIOS,
    TouchableOpacity,
    View,
} = React;

var ClientView = require('./src/components/ClientView/ClientView'),
    Login = require('./src/components/Login/Login'),
    MainView = require('./src/components/MainView'),
    NewLesson = require('./src/components/NewLesson/NewLesson'),
    TabBarStyle = require('./src/components/styles/TabBarStyle');

// var _tabBarActions = ['Clients', 'Schedule', 'Message'],
var _navigator;

var RouteMapper = function(route, navigator) {
    _navigator = navigator;
    var Component;
    switch (route.name) {
        case 'login':
            Component = Login;
            break;
        case 'mainView':
            Component = MainView;
            break;
        case 'clientView':
            Component = ClientView;
            break;
        case 'teach':
            Component = NewLesson;
            break
        default:
            Component = MainView; 
    }      

    return (
        <Component navigator={navigator} route={route} {...route.passProps} />
    )
};

var CaddiApp = React.createClass({
    // changeRoute: function(route) {
    //     var routes = _navigator.getCurrentRoutes();
    //     if(routes[routes.length - 1].name !== route) {
    //         _navigator.push({
    //             name: route
    //         });
    //     }
    // },
    // routeTo: function(index) {
    //     switch(index) {
    //         case 0:
    //             this.changeRoute('clientList');
    //             break;
    //         case 1:
    //             this.changeRoute('schedule');
    //             break;
    //         case 2:
    //             this.changeRoute('message');
    //             break;
    //     }
    // },
    render: function() {
        var initialRoute = {name: 'login'};
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <Navigator
                        initialRoute={initialRoute}
                        configureScene={() => Navigator.SceneConfigs.FloatFromRight}
                        renderScene={RouteMapper}
                    />
                </View>
            </View>
                // <View style={TabBarStyle.tabBarContainer}>
                //     <TouchableOpacity>
                //         <Text onPress={() => this.routeTo(0)}>{_tabBarActions[0]}</Text>
                //     </TouchableOpacity>
                //     <TouchableOpacity>
                //         <Text onPress={() => this.routeTo(1)}>{_tabBarActions[1]}</Text>
                //     </TouchableOpacity>
                //     <TouchableOpacity>
                //         <Text onPress={() => this.routeTo(2)}>{_tabBarActions[2]}</Text>
                //     </TouchableOpacity>
                // </View>               
        );
    }
});

AppRegistry.registerComponent('CaddiApp', () => CaddiApp);
