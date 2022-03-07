import { Reducer } from "react";
import FruitsActions from "../action/fruitsAction";

export interface FruitsReducerAction {
    type: string;
    fruits: string[];
}

export const fruitsReducer: Reducer<string[], FruitsReducerAction> = (state = [], action) => {
    switch(action.type) {
        case FruitsActions.ADD_FRUITS:
            return [ ...state, ...action.fruits ];
        default:
            return state;
    }
}