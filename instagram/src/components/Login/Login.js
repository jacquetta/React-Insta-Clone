import React from 'react';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import './Login.css';


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    inputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmitLogin = event => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render(){
        return (
          <Form className="login">
            <h3>Welcome to React Insta Clone</h3>
            <div>Please Login</div>
            <FormGroup>
              <Input
                type="text"
                placeholder="User Name"
                name="username"
                value={this.state.username}
                onChange={this.inputChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.inputChange}
              />
              <br></br>
              <Button color='success' size='large' onClick={this.handleSubmitLogin}>
                Log In
              </Button>
            </FormGroup>
          </Form>
        );
    }
}

export default Login;