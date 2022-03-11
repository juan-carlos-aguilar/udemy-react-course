import { call, put, takeLatest } from 'redux-saga/effects'
import ProductDetailsAPI from '../../api/apiProductDetailAPI'
import ProductDetailsAction from '../actions/productDetailsAction';
import { ProductDetails } from '../reducers/productDetailsReducer';

function* workerFetchProductsDetailSaga() {
    const productDetailsAPI = new ProductDetailsAPI();
    const productDetailsAction = new ProductDetailsAction();

    try {
        const response = yield call(productDetailsAPI.getProducts);
        const productDetails = response.data as ProductDetails;
    
        yield put(productDetailsAction.set(productDetails));
    } catch (err) {
        // Changes might come later on
        console.log('error');
    }
}

export function* watchProductDetailsSaga() {
    yield takeLatest(ProductDetailsAction.FETCH_PRODUCTS_DETAILS, workerFetchProductsDetailSaga)
}