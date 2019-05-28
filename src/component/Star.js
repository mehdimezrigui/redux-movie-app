import React from 'react'
export default function Star({rating , filter=()=>{}}) {
        let arr=[]
        for(let i=1; i<6; i++){
            if(i<=rating){
               arr.push(<i className="fas fa-star color" onClick={()=>filter(i)}></i>)
            }else
             arr.push(<i className="far fa-star" onClick={()=>filter(i)}></i>)
        }
  return (
        <div>
          {arr}
        </div>
    )
}
