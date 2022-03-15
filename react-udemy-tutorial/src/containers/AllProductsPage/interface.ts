import { GetProductsOptions } from "../../api/apiProductDetailAPI";
import { FetchShopProductsAction } from "../../store/actions/productDetailsAction";
import { ProductDetails, ShopProducts } from "../../store/reducers/productDetailsReducer";

export interface AllProductsStateProps {
    shopProducts: ShopProducts;
}

export interface AllProductsOwnProps {}

export interface AllProductsDispathToProps {
    fetchShopProducts(options: GetProductsOptions): FetchShopProductsAction
}

export type AllProductsPageProps = AllProductsStateProps & AllProductsOwnProps & AllProductsDispathToProps;