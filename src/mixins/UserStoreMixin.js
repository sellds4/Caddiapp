var UserStore = require('../stores/UserStore');

var _listenerToken;

module.exports = {
    getInitialState() {
        return {user: UserStore.user}
    },

    updateUserFromStore() {
        this.setState({user: UserStore.user});
        if (this.afterUpdateUserFromStore) {
            this.afterUpdateUserFromStore();
        }
    },

    componentDidMount() {
        this.updateUserFromStore();
        _listenerToken = UserStore.addListener(this.updateUserFromStore);
    },

    componentWillUnmount() {
        _listenerToken.remove();
    },
};
