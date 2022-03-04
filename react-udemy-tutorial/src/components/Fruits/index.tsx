import React from "react";
import { connect, MapStateToProps } from "react-redux";
import { FruitsOwnProps, FruitProps, FruitsStateProps } from "./interface";

class Fruits extends React.Component<FruitProps> {
    render() {
        const { ownerName } = this.props;
        return (
            <div>
                <h1>Owner: { ownerName} </h1>
                <h1>Fruits</h1>
            </div>
        )
    }
}

const mapStateToProps: MapStateToProps<FruitsStateProps, FruitsOwnProps, string[]> = (state, ownProps) => {
    return {
        fruits: state
    }
}

export default connect(mapStateToProps)(Fruits);