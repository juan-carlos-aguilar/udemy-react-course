import React from "react";
import { ButtonGroup } from "../../ButtonGroup";
import { Button } from "../Button";

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <ButtonGroup>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    Test
                </ButtonGroup>
            </div>
        )
    }
}

export default HomePage;