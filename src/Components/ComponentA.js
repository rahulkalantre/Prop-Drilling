import React, { createContext, useState } from "react";
import ComponentB from "./ComponentB";

const BioData = createContext();

const ComponentA = () => {
    const [count, setCount] = useState('Welcome React');
    return (
        // <div>
        //     <h1> Welcome ComponentA </h1>
        // </div>
        <BioData.Provider value = { count } >
            <ComponentB  />
        </BioData.Provider>
        
    )
}

export default ComponentA;
export {BioData};