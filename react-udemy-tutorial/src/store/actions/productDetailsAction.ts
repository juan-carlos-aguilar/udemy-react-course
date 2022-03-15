import { GetProductsOptions } from "../../api/apiProductDetailAPI";
import { ProductDetails, ShopProducts } from "../reducers/productDetailsReducer";

export type productDetailsReducerAction = SetShopProductsAction | ProductDetailsFetchAction;

export interface SetShopProductsAction {
    type: typeof ProductDetailsAction.SET_PRODUCT_DETAILS;
    shopProducts: ShopProducts;
}

export interface ProductDetailsFetchAction {
    type: typeof ProductDetailsAction.FETCH_PRODUCTS_DETAILS;
    options: GetProductsOptions;
}

class ProductDetailsAction {
    static readonly FETCH_PRODUCTS_DETAILS = 'FETCH_PRODUCTS_DETAILS';
    static readonly SET_PRODUCT_DETAILS = 'SET_PRODUCT_DETAILS';

    fetchShopProducts = (options: GetProductsOptions): ProductDetailsFetchAction => {
        return {
            type: ProductDetailsAction.FETCH_PRODUCTS_DETAILS,
            options,
        }
    }

    set = (shopProducts: ShopProducts): SetShopProductsAction => {
        return {
            type: ProductDetailsAction.SET_PRODUCT_DETAILS,
            shopProducts,
        }
    }
}

export default ProductDetailsAction