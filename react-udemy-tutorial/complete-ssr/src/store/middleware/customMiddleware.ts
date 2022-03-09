import { Store } from "redux";
import { Middleware } from "redux";
import { FruitsReducerAction } from "../reducer/fruitsReducer";
import { rootReducer, StoreStateType } from "../reducer/rootReducer";

export type CustomMiddlewareFunction<S, R> = (store: Store<S>) => R;

export interface CustomDispatch<S, R> {
    <T extends R>(action: T): T
    (param: CustomMiddlewareFunction<S, R>): any;
}

export type StoreType = StoreStateType;

export const customMiddleware: Middleware<{}, StoreType, CustomDispatch<StoreType, FruitsReducerAction>> = storeAPI => next => action => {
    if(typeof action ==='function') {
      next(action(storeAPI));
    } else {
      next(action);
    }
}