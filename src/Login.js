import React from "react";
function Login(){
    return(
        <form className="">
        <div className="">
            <input type="text" placeholder="Login ID" />
            </div>
            <div className="">
                <input type="password" placeholder="password" />

        </div>
        <div className="">
            <button type="button">Log IN</button>
        </div>
        </form>
    )
}
export default Login;