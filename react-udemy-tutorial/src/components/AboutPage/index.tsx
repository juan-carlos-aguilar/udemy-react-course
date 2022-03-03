import React from "react";
import { useParams } from "react-router-dom";
import UserDetails from "../UserDetails";

const AboutPage = () => {

    return (
        <div>
            <h1>About Page</h1>
            <UserDetails />
        </div>
    )
}


export default AboutPage;