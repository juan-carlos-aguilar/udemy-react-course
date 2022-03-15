import { call, put, takeLatest } from 'redux-saga/effects'
import ProductDetailsAPI from '../../api/apiProductDetailAPI'
import ProductDetailsAction, { FetchShopProductsAction } from '../actions/productDetailsAction';
import { ProductDetails, ShopProducts } from '../reducers/productDetailsReducer';

function* workerFetchShopProductsSaga(action: FetchShopProductsAction) {
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

function* workerFetchBestSellerProductsSaga() {
    const productDetailsAPI = new ProductDetailsAPI();
    const productDetailsAction = new ProductDetailsAction();

    try {
        const response = yield call(productDetailsAPI.getProducts, { category: ['best seller']});
        const { products } = response.data as ShopProducts;
    
        yield put(productDetailsAction.setBestSellerProducts(products));
    } catch (err) {
        // Changes might come later on
        console.log('error');
    }
}

export function* watchProductDetailsSaga() {
    yield takeLatest(ProductDetailsAction.FETCH_SHOP_PRODUCTS, workerFetchShopProductsSaga)
    yield takeLatest(ProductDetailsAction.FETCH_ALL_BEST_SELLER_PRODUCTS, workerFetchBestSellerProductsSaga)
}