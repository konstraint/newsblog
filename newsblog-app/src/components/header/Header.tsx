import React from "react";
import { IconMenu } from "../menu/IconMenu";
import { User } from "../user/User";
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <IconMenu />
            <User />
        </header>
    );
}

export { Header };