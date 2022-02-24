import React, { ErrorInfo } from "react";
import ErrorComponent from "../ErrorComponent";
import SecondComponent from '../SecondComponent'
import { FirstComponentProps, FirstComponentState } from './interface';

class FirstComponent extends React.Component<FirstComponentProps, FirstComponentState> {

    render() {
        console.log('render');
        return (
            <React.Fragment>
                <h1>First Component</h1>
                <SecondComponent />
            </React.Fragment>
        )
    }
}

export default FirstComponent;