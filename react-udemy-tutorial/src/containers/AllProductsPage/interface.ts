import { ProductDetails } from "../../store/reducers/productDetailsReducer";

export interface AllProductsStateProps {
    productDetails: ProductDetails;
}

export interface AllProductsOwnProps {}

export type AllProductsPageProps = AllProductsStateProps & AllProductsOwnProps;