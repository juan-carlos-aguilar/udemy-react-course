import { AnyAction, Reducer } from "redux";
import ProductDetailsAction, { productDetailsReducerAction } from "../actions/productDetailsAction";
import update from 'immutability-helper';
import { getEnabledCategories } from "trace_events";

export interface ProductVariant {
    id: string;
    size: string;
    color: string;
    price: string;
    stock: number;
    discount?: string;
    image: string;
}

export interface Product {
    id: string;
    category: string[];
    title: string;
    variants: ProductVariant[];
}

export interface ShopProducts {
    products: Product[];
    page?: number;
    nextPage?: boolean;
    productsCount: number;
    totalPages?: number;
}

export interface ProductFilters {
    gender: string[];
    category: string[];
    trends: string[];
}

export interface ProductDetails {
    shopProducts: ShopProducts;
    bestSellerProducts: Product[];
    productFilters: ProductFilters;
}

const productDetailsInitialState: ProductDetails = {
    shopProducts: {
        products: [],
        productsCount: 0,
    },
    productFilters: {
        gender: [],
        category: [],
        trends: [],
    },
    bestSellerProducts: []
}

export const productDetailsReducer: Reducer<ProductDetails, productDetailsReducerAction> = (state = productDetailsInitialState, action) => {
    switch(action.type) {
        case ProductDetailsAction.SET_SHOP_PRODUCTS_AND_FILTERS:
            return update(state, { 
                shopProducts: { $set: action.shopProducts },
                productFilters: { $set: action.productFilters }
            })
        case ProductDetailsAction.SET_BEST_SELLER_PRODUCTS:
            return update(state, { bestSellerProducts: { $set: action.bestSellerProducts }})
        case ProductDetailsAction.SET_SHOP_PRODUCTS:
            return update(state, { shopProducts: { $set: action.shopProducts }});
        default: 
            return state;
    }
}