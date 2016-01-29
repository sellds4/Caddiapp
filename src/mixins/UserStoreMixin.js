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
        UserStore.addChangeListener(this.updateUserFromStore);
    },

    componentWillUnmount() {
        UserStore.removeChangeListener(this.updateUserFromStore);
    },
};
