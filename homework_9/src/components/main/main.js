import React from "react";
import './main.css';
import Block from "./block/block";
import ReverseBlock from "./reverse-block/reverse-block";

const Main = () => {
    return (
        <main>
            <div className="container">
                <Block />
                <ReverseBlock />
            </div>
        </main>
    );
};

export default Main;