import { Store } from "redux";
import { rootReducer, StoreStateType } from "../reducer/rootReducer";
import { UsersReducerAction } from "../reducer/usersReducer";

class UsersActions {
    static ADD_USERS = 'ADD_USERS';

    addUsers =  (users: string[]) => (store: Store<StoreStateType>): UsersReducerAction => {
        console.log(store.getState());
        return { type: UsersActions.ADD_USERS, users };
    }
}

export default UsersActions;