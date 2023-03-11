import { useRouteError , Link} from "react-router-dom";

const CarrierError = () => {
    const error = useRouteError()
    return ( 
        <div className="carrer-error">
            <p>error</p>
       <p>{error.message}</p>
       <Link to='/'>
        Go to home page
       </Link>
        </div>
     );
}
 
export default CarrierError;