import { Store } from "redux";
import { FruitsReducerAction } from "../reducer/fruitsReducer";
import { rootReducer, StoreStateStype } from "../reducer/rootReducer";

class UserssActions {
    static ADD_USERS = 'ADD_USERS';

    addUsers = (users: string[]) => (store: Store<StoreStateStype>): UsersReducerAction => {
        console.log(store.getState());
        return { type: UsersActions.ADD_USERS, users };
    }
}

export default UsersActions;