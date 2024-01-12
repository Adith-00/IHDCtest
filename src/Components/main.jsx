import React  from "react";
import { Navigation } from "./Navigation Section/Navigation";
import "../Assets/Css/main/main.css"
import { DisplayPage } from "./Display Section/DisplayPage";

export const Main=()=>{
    return(
        <div className="mainPage">
           <Navigation/> 
           <DisplayPage/>
        </div>
    )
}