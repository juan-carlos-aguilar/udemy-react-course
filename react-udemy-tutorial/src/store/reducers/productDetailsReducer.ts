import { AnyAction, Reducer } from "redux";
import ProductDetailsAction, { productDetailsReducerAction } from "../actions/productDetailsAction";

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

export interface ProductDetails {
    products: Product[];
    page?: number;
    nextPage?: boolean;
    productsCount: number;
    totalPages?: number;
}

const productDetailsInitialState: ProductDetails = {
    products: [],
    productsCount: 0,
}

export const productDetailsReducer: Reducer<ProductDetails, productDetailsReducerAction> = (state = productDetailsInitialState, action) => {
    switch(action.type) {
        case ProductDetailsAction.SET_PRODUCT_DETAILS:
            return action.productDetails;
        default: 
            return state;
    }
}