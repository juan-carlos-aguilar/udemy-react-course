import React from "react";
import { withTrackClick } from "../../hoc/withTrackClick";
import { ProfileProps } from "./interface";

export const Profile: React.FC<ProfileProps> = ({ click }) => {
    return (
        <>
            <h1>Profile Component</h1>
            <h2>Click: {click}</h2>
        </>
    )
}

export default withTrackClick(Profile);