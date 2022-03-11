import { AnyAction, Reducer } from "redux";

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
    isBestSeller?: boolean;
    variants: ProductVariant[];
}

export interface ProductDetails {
    products: Product[];
    page?: number;
    nextPage?: boolean;
    productsCount: number;
}

const productDetailsInitialState: ProductDetails = {
    products: [],
    productsCount: 0,
}

export const productDetailsReducer: Reducer<ProductDetails, AnyAction> = (state = productDetailsInitialState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}