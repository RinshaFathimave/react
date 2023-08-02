import React from "react";
import Map from "./Map";

const Map1=(params)=>{
    let arr=[
        {
name:'rinsha',
age:"23",
place:'koyilandi'

        },
        {
            name:'nandhana',

            age:"12",
            place:'university'

        }

    ]
    console.log(arr);
    return(
        <div>
            {
arr.map((values) => {
    return(
 <Map name={values.name} age={values.age} place={values.place}/>


 
)
})
    
}
</div>
    )
}

export default Map1;