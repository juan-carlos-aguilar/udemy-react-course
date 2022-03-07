import React from "react";
import { connect, MapDispatchToPropsFunction, MapStateToProps } from "react-redux";
import UsersActions from "../../store/action/usersAction";
import { rootReducer } from "../../store/reducer/rootReducer";
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

const mapDispatchToProps (dispatch, ownProps: UsersOwnProps) => {
    const usersAction = new UsersActions();
    return {
        addUsers: (users) => dispatch(usersAction.addUsers(users))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);