var React = require('react-native');

var {
    TextInput,
    View,
} = React;

var ClientSearchStyle = require('./styles/ClientSearchStyle');

var ClientSearch = React.createClass({

    getInitialState: function(){
        return { searchString: '' };
    },

    // handleChange: function(e){

    //     // If you comment out this line, the text box will not change its value.
    //     // This is because in React, an input cannot change independently of the value
    //     // that was assigned to it. In our case this is this.state.searchString.

    //     this.setState({searchString:e.target.value});
    // },

    render: function() {

        // var libraries = this.props.items,
        // var searchString = this.state.searchString.trim().toLowerCase();

        // if(searchString.length > 0){
        //     // We are searching. Filter the results.
        //     libraries = libraries.filter(function(l){
        //         return l.name.toLowerCase().match( searchString );
        //     });

        // }

        return (
            <View>
                <TextInput
                    // onChangeText={(searchString) => this.setState({searchString})}
                    value={this.state.searchString}
                    placeholder="search clients"
                    style={ClientSearchStyle.searchBox}
                />
            </View>
        );

    }
});

module.exports = ClientSearch;