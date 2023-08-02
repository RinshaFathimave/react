import React,{useState} from "react";


function App3(params) {
    let [state,setState]=useState(0);
    return(
        <div style={{textAlign:"center",color:"grey"}}>
            <h1>{state}</h1>
            <button
            onClick={
                function name(params) {
                    setState(state+1)
                }
            }>Increment</button>

            <button
            onClick={
                function name(params) {
                    if (state>0) {
                        setState(state-1)
                    }



                    }
                    
                }>Incremen</button>
            
                
            
        </div>
    )
}
export default App3