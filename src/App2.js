import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./App1.css"

function App2() {
    const [state, setState] = useState(false);
    return(
        <div>
            <div className="buttons">
                <button
                onClick={function name(params) {
                    setState(true);
                }}
                >
                    Login
                    </button>
                    <button onClick={function name(params) {
                        setState(false)
                    }}>Signup</button>
                    </div>
                    {state ? <Login/> : <Signup/> }
                    </div>
    )
                }
                export default App2

                
            

            
            

            
        
        