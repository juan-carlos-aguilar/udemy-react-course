import React from 'react';
import { UsersDispatchProps, UsersOwnProps, UsersProps, UsersStateProps } from './interface';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { rootReducer, StoreStateType } from '../../store/reducer/rootReducer';
import UsersActions from '../../store/action/usersAction';
import { CustomDispatch } from '../../store/middleware/customMiddleware';
import { UsersReducerAction } from '../../store/reducer/usersReducer';

class Users extends React.Component<UsersProps> {

    clickAddUsers = () => {
        this.props.addUsers([ 'bella', 'prince' ])
    }

    render() {
        console.log('Users Render Called');
        const { ownerName, users } = this.props;
        return (
            <div>
                <h1>Owner: { ownerName }</h1>
                <h1>Users</h1>
                <ul>
                    {users.map((user) => <li key={user}>{user}</li>)}
                </ul>
                <button onClick={this.clickAddUsers}> Add Users </button>
            </div>
        );
    }
}

const mapStateToProps: MapStateToProps<UsersStateProps, UsersOwnProps, StoreStateType> = (state, ownProps) => {
    console.log('Users Map State Props Called');
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch: CustomDispatch<StoreStateType, UsersReducerAction>, ownProps: UsersOwnProps): UsersDispatchProps => {
    const usersAction = new UsersActions();
    return {
        addUsers: (users) => dispatch(usersAction.addUsers(users))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);