import React, { useState } from "react";
import Form from "./Form";

import Display from "./Display";



function First(){
    let[email,setEmail]=useState('')
    let[password,setPassword]=useState('')

    const getvalue=(emailvalue,passwordvalue)=>{
        setEmail(emailvalue)
        setPassword(passwordvalue)
    }

    return(
        <div>
            <Form myfun={getvalue}/>
            <Display emailprop={email} passwordprop={password}/>
            

            </div>
    )
}
export default First;