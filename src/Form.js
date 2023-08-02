import React, {useState} from "react";


function Form(props){
    const{myfun}=props

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onclick=params=>{
        console.log(params.preventDefault())
        params.preventDefault()
        myfun(email,password);
    };
    function EMAIL(params) {
        console.log(params.target.value);
        setEmail(params.target.value)
        
    }
    function PASSWORD(params) {
        console.log(params.target.value);
        setPassword(params.target.value)
        

        }
    
return(

<div>
    
        

        <form onSubmit={onclick}>
        <input onChange={EMAIL} type="email" placeholder="email"/>
        {
            email.length ===0?<span style={{color:'red'}}>this field is null</span>:''

        }
        <input onChange={PASSWORD} type="password" placeholder="password"/>
        {
            password.length ===0?<span style={{color:'red'}}>this field is null</span>:''
        }
        
        <input type="submit" placeholder="submit"/>

        </form>
        </div>
       
    )
}
export default Form;
