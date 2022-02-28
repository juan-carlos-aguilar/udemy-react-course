import React from "react";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";
import { ReusableButtonProps, ReusableButtonState } from './interface';

class ReusableButton extends React.Component<ReusableButtonProps, ReusableButtonState> {
    constructor(props: ReusableButtonProps) {
        super(props);

        this.state = {
            selectedButtonIndex: null
        }
    }

    handleButtonGroupClick = (selected: number ) => {
        this.setState({
            selectedButtonIndex: selected
        })
    }

    render() {
        const {selectedButtonIndex} = this.state;

        return(
            <div>
                <h1>ReusableButtons</h1>
                <h2>Primary</h2>
                <Button type="primary">Yes</Button>
                <h2>Default</h2>
                <Button>Yes</Button>
                <h2>Button Group</h2>
                <ButtonGroup direction="row" onClick={this.handleButtonGroupClick} selected={selectedButtonIndex}>
                    <Button>Yes</Button>
                    <Button>No</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default ReusableButton;