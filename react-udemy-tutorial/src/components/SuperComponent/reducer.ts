import { Reducer } from "react";
import { UserReducer, UserReducerAction } from "./interface";

export const userReducer: Reducer<UserReducer, UserReducerAction> = (state, action) => {
    switch(action.type) {
        case "add":
            return {
                users: [
                    ...state.users,
                    {
                        id: state.users.length + 1,
                        name: state.newUserName
                    }
                ],
                newUserName: ''
            }
        
        case "changeNewName":
            return {
                ...state,
                newUserName: action.payload
            };
        default:
            throw new Error('Action Type does not exist');
    }
}