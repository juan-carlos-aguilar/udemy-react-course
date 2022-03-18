import { ProductFilters } from '../reducers/shopReducer';

export type userReducerAction = UpdateUserFiltersAction;

export interface UpdateUserFiltersAction {
    type: typeof UserAction.UPDATE_USER_FILTERS;
    filters: ProductFilters
}

class UserAction {
    static readonly UPDATE_USER_FILTERS = 'UPDATE_USER_FILTERS'

    updateUserFilters = (filters: ProductFilters) => {
        return {
            type: UserAction.UPDATE_USER_FILTERS,
            filters
        }
    }
}

export default UserAction;