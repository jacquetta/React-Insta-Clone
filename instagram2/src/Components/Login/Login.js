import React from 'react';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleLogin = event => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render(){
        return (
            <form className="login">
                <h3>Welcome to React InstaClone</h3>
                <div>Login</div>
                <input 
                    type="text"
                    placeholder="User Name"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInput}
                />

                <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInput}
                />

                <button onClick={this.handleLogin}>
                    Login
                </button>
            </form>
        );
    }
}

export default Login;