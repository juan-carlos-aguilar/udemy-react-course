import { call, put, takeLatest } from 'redux-saga/effects'
import ProductDetailsAPI, { ProductFiltersAPIResponse } from '../../api/apiProductDetailAPI'
import ProductDetailsAction, { FetchShopProductsAction } from '../actions/productDetailsAction';
import { ProductDetails, ShopProducts } from '../reducers/productDetailsReducer';

function* workerFetchShopProductsSaga(action: FetchShopProductsAction) {
    const productDetailsAPI = new ProductDetailsAPI();
    const productDetailsAction = new ProductDetailsAction();

    try {
        const response = yield call(productDetailsAPI.getProducts, action.options);
        const shopProducts = response.data as ShopProducts;
    
        yield put(productDetailsAction.setShopProducts(shopProducts));
    } catch (err) {
        // Changes might come later on
        console.log('error');
    }
}

function* workerFetchBestSellerProductsSaga() {
    const productDetailsAPI = new ProductDetailsAPI();
    const productDetailsAction = new ProductDetailsAction();

    try {
        const response = yield call(productDetailsAPI.getProducts, { category: ['Best Seller']});
        const { products } = response.data as ShopProducts;
    
        yield put(productDetailsAction.setBestSellerProducts(products));
    } catch (err) {
        // Changes might come later on
        console.log('error');
    }
}

function* workerFetchShopProductsAndFilterSaga(action: FetchShopProductsAction) {
    const productDetailsAPI = new ProductDetailsAPI();
    const productDetailsAction = new ProductDetailsAction();

    try {
        const productsResponse = yield call(productDetailsAPI.getProducts, {});
        const productFilterResponse = yield call(productDetailsAPI.getProductFilters);
        const shopProducts = productsResponse.data as ShopProducts;
        const { productFilters } = productFilterResponse.data as ProductFiltersAPIResponse;
    
        yield put(productDetailsAction.setShopProductsAndFilters(shopProducts, productFilters));
    } catch (err) {
        // Changes might come later on
        console.log(err);
    }
}

export function* watchProductDetailsSaga() {
    yield takeLatest(ProductDetailsAction.FETCH_SHOP_PRODUCTS, workerFetchShopProductsSaga)
    yield takeLatest(ProductDetailsAction.FETCH_ALL_BEST_SELLER_PRODUCTS, workerFetchBestSellerProductsSaga)
    yield takeLatest(ProductDetailsAction.FETCH_SHOP_PRODUCTS_AND_FILTERS, workerFetchBestSellerProductsSaga)
}