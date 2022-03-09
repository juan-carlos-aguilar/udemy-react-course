import { Store } from "redux";
import { FruitsReducerAction } from "../reducer/fruitsReducer";
import { rootReducer, StoreStateType } from "../reducer/rootReducer";

class FruitsActions {
    static ADD_FRUITS = 'ADD_FRUITS';

    addFruits =  (fruits: string[]) => (store: Store<StoreStateType>): FruitsReducerAction => {
        console.log(store.getState());
        return { type: FruitsActions.ADD_FRUITS, fruits };
    }
}

export default FruitsActions;