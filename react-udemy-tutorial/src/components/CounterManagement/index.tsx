import React, { useDebugValue } from "react";
import { createExportDefault } from "typescript";
import './style.css';
import { Button } from "../Button";
import { UserDataAPI, UserManagementProps, UserManagementState  } from "./interface";
import { hasUserAlreadyFetched } from "./utils";
import axios from "axios";

class CounterManagement extends React.Component<UserManagementProps, UserManagementState> {
    constructor(props: UserManagementProps) {
        super(props);

        this.state = {
            users: [],
            currentUserId: 1,
        }

        console.log('constructor');
    }

    fetchUser = async () => {
        const { currentUserId, users } = this.state;

        const response = await axios.get(`https://reqres.in/api/users/${currentUserId}`)
        const { data } = response.data as UserDataAPI;

        this.setState({
            users: [
                ...users,
                data
            ]
        });
    }

    componentDidMount() {
        this.fetchUser();
    }

    componentDidUpdate(prevProps: UserManagementProps, prevState: UserManagementState, snapshot: any) {
        const { currentUserId, users } = this.state;

        if (prevState.currentUserId !== this.state.currentUserId && !hasUserAlreadyFetched(users, currentUserId)) {
            this.fetchUser();
        }
    }
        
    handleAddClick = () => {
        const { currentUserId } = this.state;

        currentUserId < 10 && this.setState({
            currentUserId: currentUserId + 1
        });
    }
    
    handleMinusClick= () => {
        const { currentUserId } = this.state;

        currentUserId < 10 && this.setState({
            currentUserId: currentUserId -1
        });
    }

    renderUsers = () => {
        const { users, currentUserId } = this.state;

        return users.filter (user => user.id <= currentUserId).map(({ avatar, first_name, last_name }) => {
            return(
                <div>
                    <img src={avatar} />
                    <span>{`${first_name} ${last_name}`}</span>
                </div>
            )
        })
    }

    render() {
        const { currentUserId } = this.state;
        return (
            <div className="App">
                <h1>Users Management</h1>
                <div>
                    <div>
                        {this.renderUsers()}
                    </div>
                    <p>Number of Users: {currentUserId}</p>
                    <div>
                        <Button type="primary" onClick={this.handleAddClick}>Add</Button>
                        <Button type="secondary" onClick={this.handleMinusClick}>Minus</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CounterManagement;