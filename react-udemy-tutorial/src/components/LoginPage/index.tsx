import { timeStamp } from "console";
import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { IS_LOGIN_SESSION_KEY } from "./constant";
import { LoginPageProps, LoginPageState} from './interface';
import './style.css';

export class LoginPage extends React.Component<LoginPageProps, LoginPageState> {
    constructor(props: LoginPageProps) {
        super(props);

        this.state = {
            inputUsername: '',
            inputPassword: '',
            errorMessage: '',
        }
    }

    handleLogin = () => {
        const { history, onLoginSuccess } = this.props;
        const { inputUsername, inputPassword } = this.state;

        if (inputUsername === 'admin' && inputPassword === '1234!') {
            onLoginSuccess();
            history.push('/');
            sessionStorage.setItem(IS_LOGIN_SESSION_KEY, 'true');
        } else {
            this.setState({
                errorMessage: 'Wrong username or password'
            })
        }
    }

    render() {
        const { inputUsername, inputPassword, errorMessage} = this.state;

        return (
            <div className="login-pa">
                <h1>Login</h1>
                <Input 
                    label="Username"
                    value={inputUsername}
                    onChange={(e) => this.setState({ inputUsername: e.currentTarget.value })}
                />
                <Input 
                    label="Password"
                    value={inputPassword}
                    onChange={(e) => this.setState({ inputPassword: e.currentTarget.value })}
                />
                <br />
                {errorMessage && (
                    <>
                        <br />
                        <span className="error-message">{errorMessage}</span>
                        <br />
                    </>
                )}
                <br />
                <Button onClick={this.handleLogin}>Login</Button>
            </div>
        )
    }
}

export default LoginPage;