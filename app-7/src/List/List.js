import React from 'react';
import Todo from "../Todo/Todo"


export default function List (props){
    let newlist = props.tasks.map((e,i)=>{
        return (
            <div>
          <p><Todo key={i} task={e}/> </p> 
           </div> 
        )
    })
    return(
        <div> 
            {newlist}
             
        </div>
    )
}