var React = require('react-native'),
    ViewPager = require('react-native-viewpager');

var {
    View
} = React;

var ClientList = require('./ClientList'),
    NewLesson = require('./NewLesson');

var Views = [ClientList, NewLesson];

var LandingPage = React.createClass({

    getInitialState: function(){
        var dataSource = new ViewPager.DataSource ({
            pageHasChanged: ( p1, p2 ) => p1 !== p2,
        });
        return {
            dataSource: dataSource.cloneWithPages(Views)
        };
    },

    _renderPage: function ( data:Object, pageID:number ) {
        var Element = React.createElement(data);
        return Element;
    },

    render: function() {
        return (
            <ViewPager
                dataSource={this.state.dataSource}
                renderPage={this._renderPage}
            />
        );

    }
});

module.exports = LandingPage;