import { GetProductsOptions } from "../../api/shopAPI";
import { FetchShopProductsAction } from "../../store/actions/shopAction";
import { Shop, ProductFilters, ShopProducts } from "../../store/reducers/shopReducer";

export interface AllProductsStateProps {
    shopProducts: ShopProducts;
    productFilters: ProductFilters;
}

export interface AllProductsOwnProps {}

export interface AllProductsDispathToProps {
    fetchShopProducts(options: GetProductsOptions): FetchShopProductsAction;
    fetchShopProductsAndFilters(): any;
}

export type AllProductsPageProps = AllProductsStateProps & AllProductsOwnProps & AllProductsDispathToProps;