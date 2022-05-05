import React, { Component } from 'react';

class SignUpForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bio: ''
        }
    }

    handleBioChange = (event) => {
        this.setState({
            bio: event.target.value
        })
    }
    render() {
        return (
            <form>
                <div>
                    <label>Prénom:</label>
                    <input type='text' />
                    <label>Nom:</label>
                    <input type='text' />
                    <label>Age</label>
                    <input type='text' />
                    <label>Ocupation</label>
                    <input type='text' />
                    <div>
                        <label>Bio</label>
                        <textarea 
                        value={this.state.bio} 
                        onChange={this.handlebioChange} />
                    </div>
                    <label>Bio</label>
                    <input type='text' />
                    <label>E-mail:</label>
                    <input type='email' />
                    <label>Password:</label>
                    <input type='Password' />
                    <label for='submit'>Enregistrer</label>
                    <input type='submit' value='Submit' />
                    </div>
            </form>
            )
    }
}

export default SignUpForm;