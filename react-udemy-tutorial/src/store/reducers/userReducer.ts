import { Reducer } from "redux";
import UserAction, { userReducerAction } from "../actions/userAction";
import { ProductFilters } from "./shopReducer";
import update from 'immutability-helper';

export interface User {
    filters: ProductFilters;
}

const userInitialState: User = {
    filters: {
        gender: [],
        category: [],
        trends: []
    }
}

export const userReducer: Reducer<User, userReducerAction> = (state = userInitialState, action) => {
    switch(action.type) {
        case UserAction.UPDATE_USER_FILTERS:
            return update(state, { filters: { $set: action.filters}});
        default:
            return state;
    }
}