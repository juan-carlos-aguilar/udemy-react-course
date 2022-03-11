import { ProductDetails } from "../reducers/productDetailsReducer";

class ProductDetailsAction {
    static readonly FETCH_PRODUCTS_DETAILS = 'FETCH_PRODUCTS_DETAILS';
    static readonly SET_PRODUCT_DETAILS = 'SET_PRODUCT_DETAILS';

    fetch = () => {
        return {
            type: ProductDetailsAction.FETCH_PRODUCTS_DETAILS
        }
    }

    set = (productDetails: ProductDetails) => {
        return {
            type: ProductDetailsAction.SET_PRODUCT_DETAILS,
            productDetails
        }
    }
}

export default ProductDetailsAction