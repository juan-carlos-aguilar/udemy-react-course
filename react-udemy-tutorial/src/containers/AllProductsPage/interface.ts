import { GetProductsOptions } from "../../api/apiProductDetailAPI";
import { ProductDetailsFetchAction } from "../../store/actions/productDetailsAction";
import { ProductDetails, ShopProducts } from "../../store/reducers/productDetailsReducer";

export interface AllProductsStateProps {
    shopProducts: ShopProducts;
}

export interface AllProductsOwnProps {}

export interface AllProductsDispathToProps {
    fetchShopProducts(options: GetProductsOptions): ProductDetailsFetchAction
}

export type AllProductsPageProps = AllProductsStateProps & AllProductsOwnProps & AllProductsDispathToProps;