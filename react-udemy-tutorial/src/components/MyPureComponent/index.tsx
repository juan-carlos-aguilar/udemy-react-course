import React from "react";
import MyReactMemo from "../MyReactMemo";
import { MyPureComponentProps, MyPureComponentState } from "./interface";


class MyPurecomponent extends React.Component<MyPureComponentProps, MyPureComponentState> {
    constructor(props: MyPureComponentProps) {
        super(props);

        this.state = {
            name: 'Rysh',
            address: {
                city: 'MyCity',
                state: 'MyState'
            }
        }
    }

    handleSetState = () => {
        const newAddress = {
            city: 'NewCity',
            state: 'MyState'
        };

        this.setState({
            address: newAddress
        })
    }

    render() {
        const { name, address } = this.state;
        return (
            <> 
                <h1>Pure Component</h1>
                <MyReactMemo name={name} address={address} />
                <button onClick={this.handleSetState}>Set State</button>
            </>
        )
    }
}

export default MyPurecomponent;