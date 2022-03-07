import { Store } from "redux";
import { FruitsReducerAction } from "../reducer/fruitsReducer";

class FruitsActions {
    static ADD_FRUITS = 'ADD_FRUITS';

    addFruits = (fruits: string[]) => (store: Store): FruitsReducerAction => {
        console.log(store.getState());
        return { type: FruitsActions.ADD_FRUITS, fruits };
    }
}

export default FruitsActions;