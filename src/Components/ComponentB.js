import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = ({ name }) => {
    return (
        // <div>
        //     <h1> Welcome ComponentB </h1>
        // </div>
        <ComponentC />
    )
}

export default ComponentB;