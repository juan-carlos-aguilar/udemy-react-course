import { Middleware } from "redux";

export const anotherMiddleware: Middleware = store => next => action => {
    console.log('Current Action: ', action);
    next(action);
  }