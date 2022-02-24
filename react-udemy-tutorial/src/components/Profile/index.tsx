import React from "react";
import { withTrackClick } from "../../hoc/withTrackClick";
import { ProfileOwnProps, ProfileProps } from "./interface";

export const Profile: React.FC<ProfileProps> = ({ click, ownerName }) => {
    return (
        <>
            <h1>Profile Component</h1>
            <h1>Owner Name: {ownerName}</h1>
            <h2>Click: {click}</h2>
        </>
    )
}

export default withTrackClick<ProfileOwnProps>(Profile);