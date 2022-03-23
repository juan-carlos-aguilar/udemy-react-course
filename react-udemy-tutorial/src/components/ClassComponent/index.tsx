import React, { Component } from 'react'
import { ClassComponentProps, ClassComponentState } from './interface';

export default class ClassComponent extends React.Component<ClassComponentProps, ClassComponentState> {
    instanceVariable: number = 0;

    constructor(props: ClassComponentProps) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    handleUpdateState = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    handleUpdateInstanceVariable = () => {
        this.instanceVariable += 1;
    }

    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <p>Couinter: {this.state.counter}</p>
                <button onClick={this.handleUpdateState}>Update State</button>
                <p>instanceVariable: {this.instanceVariable}</p>
                <button onClick={this.handleUpdateInstanceVariable}>Update Instance Variable</button>
            </div>
        )
    }
}
