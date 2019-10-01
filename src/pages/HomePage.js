import React from 'react';

import { firebase, googleAuthProvider } from '../firebase/firebase';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: null }

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ user });
                console.log('logged in');
            } else {
                this.setState({ user: null });
                console.log('logged out');
            }
        });
    }
    login = () => {
        firebase.auth().signInWithPopup(googleAuthProvider);
    };
    logout = () => {
        firebase.auth().signOut();
    };
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                {this.state.user ? (
                    <button onClick={this.logout}>Logout</button>
                    ) : (
                    <button onClick={this.login}>Login</button>
                )}
            </div>
        );
    };
}