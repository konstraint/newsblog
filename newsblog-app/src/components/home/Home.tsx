import React from "react";
import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <div className="home-content">Home page</div>
            <div className="home-img-wrapper">
                <img src="https://nyc3.digitaloceanspaces.com/spacelaunchnow-prod-east/static/home/img/launcher.png" 
                    alt="Circle Image" 
                    className="home-img">               
                </img>
            </div>
            <div className="home-content">
                <a className="home-content-link" href="/articles">More articles about Spacefligth</a>
            </div>
            <div className="home-content">
                <a className="home-content-link" href="/blogs">More blogs about Spacefligth</a>
            </div>
        </div>
    );
};

export { Home };