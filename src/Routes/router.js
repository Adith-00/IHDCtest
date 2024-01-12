import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Main } from "../Components/main";


export const RouterPage=()=>{
    return(
        <BrowserRouter>
           <Routes>
                <Route path={"/"} element={<Main/>} />
           </Routes>
        </BrowserRouter>
    )
}
