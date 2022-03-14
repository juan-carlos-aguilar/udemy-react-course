import React from "react";
import { connect, MapStateToProps } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard";
import { StoreStateType } from "../../store/rootReducer";
import { AllProductsOwnProps, AllProductsPageProps, AllProductsStateProps } from "./interface";
import './style.css';

class AllProducts extends React.Component<AllProductsPageProps> {
    renderAllProducts = () => {
        const { productDetails } = this.props;
        return productDetails.products.map(({ title, variants, id }) => {
            return <ProductCard key={id} name={title} url={variants[0].image} />
        })
    }

    render() {
        return (
            <div className="all-products-page-container">
                {this.renderAllProducts()}
            </div>
        )
    }
}

const mapStateToProps: MapStateToProps<AllProductsStateProps, AllProductsOwnProps, StoreStateType> = (state) => {
    return {
        productDetails: state.productDetails
    }
}

export default connect(mapStateToProps)(AllProducts);