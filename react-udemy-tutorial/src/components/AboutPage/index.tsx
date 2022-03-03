import React from "react";
import { useParams } from "react-router-dom";

const AboutPage = () => {
    let { username, age } = useParams();

    return (
        <div>
            <h1>About Page</h1>
            <p>Name: { username }</p>
        </div>
    )
}


export default AboutPage;