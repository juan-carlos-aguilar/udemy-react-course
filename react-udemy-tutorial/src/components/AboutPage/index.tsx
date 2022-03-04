import React from "react";
import { useParams } from "react-router-dom";
import Fruits from "../Fruits";

const AboutPage = () => {

    return (
        <div>
            <h1>About Page</h1>
            <Fruits ownerName="carlos" />
        </div>
    )
}


export default AboutPage;