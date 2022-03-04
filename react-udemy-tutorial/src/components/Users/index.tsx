import React from "react";
import { connect, MapDispatchToPropsFunction, MapStateToProps } from "react-redux";
import { rootReducer } from "../../reducer/rootReducer";
import { UsersOwnProps, UserProps, UsersStateProps, UsersDispatchProps } from "./interface";

class Users extends React.Component<UserProps> {
    
    clickAddUsers = () => {
        this.props.addUsers([ 'coconut', 'strawberry' ])
    }

    render() {
        const { ownerName, users } = this.props;
        return (
            <div>
                <h1>Owner: { ownerName} </h1>
                <h1>Users</h1>
                <ul>
                    {users.map((user) => <li key={user}>{user}</li>)}
                </ul>
                <button onClick={this.clickAddUsers}>Add Users </button>
            </div>
        )
    }
}

const mapStateToProps: MapStateToProps<UsersStateProps, UsersOwnProps, ReturnType<typeof rootReducer>> = (state, ownProps) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps:MapDispatchToPropsFunction<UsersDispatchProps, UsersOwnProps> = (dispatch, ownProps) => {
    return {
        addUsers: (users) => dispatch({ type: 'ADD_USERS', users })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);