import { GetProductsOptions } from "../../api/apiProductDetailAPI";
import { Product, ProductDetails, ProductFilters, ShopProducts } from "../reducers/productDetailsReducer";

export type productDetailsReducerAction = SetShopProductsAction | FetchShopProductsAction | SetBestSellerProductsAction | FetchBestSellerProductsAction
| FetchShopProductsAndFilterAction | SetShopProductsAndFilterAction;

export interface SetShopProductsAction {
    type: typeof ProductDetailsAction.SET_SHOP_PRODUCTS;
    shopProducts: ShopProducts;
}

export interface FetchShopProductsAction {
    type: typeof ProductDetailsAction.FETCH_SHOP_PRODUCTS;
    options: GetProductsOptions;
}

export interface SetBestSellerProductsAction {
    type: typeof ProductDetailsAction.SET_BEST_SELLER_PRODUCTS;
    bestSellerProducts: Product[];
}

export interface FetchBestSellerProductsAction {
    type: typeof ProductDetailsAction.FETCH_ALL_BEST_SELLER_PRODUCTS;
}

export interface SetShopProductsAndFilterAction {
    type: typeof ProductDetailsAction.SET_SHOP_PRODUCTS_AND_FILTERS;
    shopProducts: ShopProducts;
    productFilters: ProductFilters; 
}

export interface FetchShopProductsAndFilterAction {
    type: typeof ProductDetailsAction.FETCH_SHOP_PRODUCTS_AND_FILTERS;
}



class ProductDetailsAction {
    static readonly FETCH_SHOP_PRODUCTS_AND_FILTERS = 'FETCH_SHOP_PRODUCTS_AND_FILTERS';
    static readonly SET_SHOP_PRODUCTS_AND_FILTERS = 'SET_SHOP_PRODUCTS_AND_FILTERS';
    static readonly FETCH_SHOP_PRODUCTS = 'FETCH_SHOP_PRODUCTS';
    static readonly SET_SHOP_PRODUCTS = 'SET_SHOP_PRODUCTS';
    static readonly FETCH_ALL_BEST_SELLER_PRODUCTS = 'FETCH_ALL_BEST_SELLER_PRODUCTS'
    static readonly SET_BEST_SELLER_PRODUCTS = 'SET_BEST_SELLER_PRODUCTS'

    fetchShopProducts = (options: GetProductsOptions): FetchShopProductsAction => {
        return {
            type: ProductDetailsAction.FETCH_SHOP_PRODUCTS,
            options,
        }
    }

    setShopProducts = (shopProducts: ShopProducts): SetShopProductsAction => {
        return {
            type: ProductDetailsAction.SET_SHOP_PRODUCTS,
            shopProducts,
        }
    }

    fetchAllBestSellerProducts = (): FetchBestSellerProductsAction => {
        return {
            type: ProductDetailsAction.FETCH_ALL_BEST_SELLER_PRODUCTS
        }
    }

    setBestSellerProducts = (bestSellerProducts: Product[]): SetBestSellerProductsAction => {
        return {
            type: ProductDetailsAction.SET_BEST_SELLER_PRODUCTS,
            bestSellerProducts
        }
    }

    fetchShopProductsAndFilters = (): FetchShopProductsAndFilterAction => {
        return {
            type: ProductDetailsAction.FETCH_SHOP_PRODUCTS_AND_FILTERS
        }
    }

    setShopProductsAndFilters = (shopProducts: ShopProducts, productFilters: ProductFilters): SetShopProductsAndFilterAction => {
        return {
            type: ProductDetailsAction.SET_SHOP_PRODUCTS_AND_FILTERS,
            shopProducts,
            productFilters,
        }
    }
}

export default ProductDetailsAction