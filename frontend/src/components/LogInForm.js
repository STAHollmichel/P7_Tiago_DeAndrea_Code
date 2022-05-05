import React, { Component } from 'react';

class LogInForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    render() {
        return (
            <form>
                <div>
                    <label>E-mail:</label>
                    <input type='email' value={this.state.email} onChange={this.handleEmailChange}/>
                    <label>Password:</label>
                    <input type='Password' />
                    <label for='submit'>Connecter</label>
                    <input type="submit" value="Submit" />
                    </div>
            </form>
            )
    }
}

export default LogInForm;