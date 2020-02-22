import React, { Component } from 'react';

import styles from './LoginForm.module.css';

class LoginForm extends Component {
    // property initializer syntax
    state = this.getInitialState();

    getInitialState() {
        return {
            email: '',
            password: '',
        };
    }
// 'e', or (evt), or event represents an event
    handleChange = e => {
        // make a call to setState
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        // we pass the data from state to a service module
        // the service module would make an AJAX call to
        // our server and create new record in the database
        // now we clear our form
        this.setState(this.getInitialState());
    }

    render () {
        return (
        <form onSubmit={this.handleSubmit} className={styles.form}>
            <fieldset>
            <legend>Login Form</legend>
                <label htmlFor="email">Email</label>
                <input 
                    id="email"
                    name="email"
                    type= "email" 
                    value={this.state.email}
                    onChange={this.handleChange}
                />

                <label htmlFor="password">Password</label>
                <input 
                    id="password"
                    name="password" 
                    type= "password" 
                    value={this.state.password}
                    onChange={this.handleChange}
                />

                <button type="submit">Log in</button>
                
            </fieldset>
        
        </form>
        );
    }
}

export default LoginForm;