import React from 'react'
import ConnectStar from './Star';

export default function Cart({info}) {
    return (
        
    
    <a href ="#" className="box-office">
    <img src={info.image} className="imgBox"/>
    <label>{info.title}</label>
    <p>{info.desc}</p>
    <div className="stars"><ConnectStar rating={info.rat}/></div>
    </a>
    
  

    )
}
