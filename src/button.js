import React,{useState} from "react";

function App(){
    const [state,setState] =useState(0);
    return (
        <div>
            <h1>{state}</h1>
            <button
            onClick={
                function name(params) {
                    setState(state+1)
                }
            }
            >increment</button>
            <button
            onClick={
                function name(params) {
                    setState(state-1)
                }
            }>decrement</button>
            </div>


                
            
       
            

            
        
        
    )
}