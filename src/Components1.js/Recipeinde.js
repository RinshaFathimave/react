import React from "react";

const Recipeindex=()=> {
    const alpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    return(
        <>
        {
        alpha.map(item=>{

        
        return(
            <div className="numBox">
                <h3>{item}</h3>
            </div>
        )
    


        })
        }
        </>

    )
}
export default Recipeindex;