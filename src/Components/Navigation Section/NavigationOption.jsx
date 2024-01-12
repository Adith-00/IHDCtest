import React from "react";

export const Option=({id,img,text,setNavigate,navigate})=>{
    return(
        <div  className={`Navoption ${navigate===id && 'activeNav' }`} key={id} onClick={()=>{setNavigate(id)}}>
            <div className="emptydiv"></div>
             <i className="image"><img src={img} alt={text} /></i>
             <h2>{text}</h2>
        </div>
    )
}