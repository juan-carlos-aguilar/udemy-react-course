import React from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import { Button } from "../Button";
import { RoutingPracticeProps, RoutingPracticeState } from "./interface";
import './style.css';
import { PrivateRoutes } from "../PrivateRoutes";
import { IS_LOGIN_SESSION_KEY } from "../LoginPage/constant";

class RoutingPractice extends React.Component<RoutingPracticeProps, RoutingPracticeState> {
    constructor(props: RoutingPracticeProps) {
        super(props);

        const isLoginFromSession = sessionStorage.getItem(IS_LOGIN_SESSION_KEY) === 'true';

        this.state = {
            isLogin: isLoginFromSession
        }
    }

    handleLoginSuccess = () => {
        this.setState({
            isLogin: true
        })
    }

    handleLogout = () => {
        this.setState({
            isLogin: false,
        })

        sessionStorage.setItem(IS_LOGIN_SESSION_KEY, 'false');
    }

    render() {
        const { isLogin } = this.state;

        return(
            <div className="routing-practice">
                <BrowserRouter>
                    <Route
                        render={(routeProps) => {
                            return isLogin ? <Navigate to="/" /> : <LoginPage onLoginSuccess={this.handleLoginSuccess} {...routeProps} />
                        }}
                        path={"/login"}
                    />
                    <PrivateRoutes isLogin={isLogin} />
                </BrowserRouter>
                {isLogin && <Button onClick={this.handleLogout}>Log Out</Button>}
            </div>
        )
    }
}

export default RoutingPractice;