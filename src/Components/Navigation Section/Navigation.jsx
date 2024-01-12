import React, { useState } from "react";
import { HomeIcon, LogoutIcon, menu } from "../../Assets/image";
import "../../Assets/Css/navigation/navigation.css"
import { Option } from "./NavigationOption";
import { NavigationMenus } from "../../Assets/consts/const";

export const Navigation=()=>{
    const [navigate,setNavigate]=useState(1)
    return(
        <div className="Navigation">
            <h1 className="menuLogo"><img src={menu} alt="menu" /></h1>
            <div className="options">
                {NavigationMenus.map((item)=>{
                    const{ id,text,img}=item
                    return  <Option id={id} img={img} text={text} setNavigate={setNavigate} navigate={navigate}/>
                })}
            </div>
            <div className="options">
                 <Option text={"Log Out"} img={LogoutIcon} setNavigate={setNavigate} navigate={navigate} id={5}/>
            </div>
            
        </div>
    )
}