
import { Outlet } from "react-router-dom";
const CarrersLayout = () => {
    return ( 
        <div>
            <h1 style={{maxWidth: "1000px" , margin:"0 auto", display:"flex" ,justifyContent:"center"}}>These are the Fake carriers </h1>
            <br />
            <Outlet/>
        </div>
        
     );
}
 
export default CarrersLayout;