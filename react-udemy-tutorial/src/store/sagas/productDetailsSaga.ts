import { call, put, takeLatest } from 'redux-saga/effects'
import ProductDetailsAPI from '../../api/apiProductDetailAPI'
import ProductDetailsAction, { ProductDetailsFetchAction } from '../actions/productDetailsAction';
import { ProductDetails, ShopProducts } from '../reducers/productDetailsReducer';

function* workerFetchProductsDetailSaga(action: ProductDetailsFetchAction) {
    const productDetailsAPI = new ProductDetailsAPI();
    const productDetailsAction = new ProductDetailsAction();

    try {
        const response = yield call(productDetailsAPI.getProducts, action.options);
        const shopProducts = response.data as ShopProducts;
    
        yield put(productDetailsAction.set(shopProducts));
    } catch (err) {
        // Changes might come later on
        console.log('error');
    }
}

export function* watchProductDetailsSaga() {
    yield takeLatest(ProductDetailsAction.FETCH_PRODUCTS_DETAILS, workerFetchProductsDetailSaga)
}