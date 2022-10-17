import React from "react";
import { UserCallAddress } from "../../constants";
import { IconMenu } from "../menu/IconMenu";
import { User } from "../user/User";
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <IconMenu />
            <User call={UserCallAddress.HEADER}/>
        </header>
    );
}

export { Header };