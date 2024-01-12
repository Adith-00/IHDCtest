import React from "react";
import "../../Assets/Css/DisplayPage/displaypage.css"
import { Table } from "./table";


export const DisplayPage=()=>{
    return(
        <div className="Displaypage">
            <div className="top">
                <h2 className="logo">
                    <i><img src="#" alt="logo" /></i>
                     Associations
                </h2>   
            </div>
            <div className="bottom">
                    <h1 className="title">Advocates</h1>
                   <Table/>
            </div>
        </div>
    )
}