import React from "react";


const Map=(props)=> {
    const {name,age,place}=props
    return(
        <div>
            <h4>Name:{name}</h4>
            <h4>Age:{age}</h4>
            <h4>place:{place}</h4>
        </div>
    )
    
}
export default Map;