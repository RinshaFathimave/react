import React from "react";
function Display(props){

    const {emailprop,passwordprop}=props
    return(
        <div>
        <h4>email :{emailprop}</h4>
        <h4>password :{passwordprop}</h4>

</div>
            
    )
}
export default Display;