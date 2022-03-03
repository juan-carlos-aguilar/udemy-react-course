import React from "react";
import { Link } from "react-router-dom";

class HeaderNavigation extends React.Component {
    render() {
        return(
            <div className="header-navigation">
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
            </div>
        )
    }
}

export default HeaderNavigation;