import React, { useContext } from "react";
import { BioData } from "./ComponentA";

const ComponentC = () => {
    const code = useContext(BioData);
    return (
        <div>
            <h1> Welcome ComponentC { code }</h1>
        </div>
    )
}

export default ComponentC;