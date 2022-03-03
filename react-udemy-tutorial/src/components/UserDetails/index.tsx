import React from "react";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class UserDetails extends React.Component {
    goHome = () => {
        history.push('/');
    }

    render() {
        return (
            <div>
                <h1>User Details</h1>
                <button onClick={this.goHome}>Go Home</button>
            </div>
        )
    }
}

export default UserDetails;