import { useParams } from "react-router-dom";
import useFetch from '../../useFetch/useFetch';

const CareerDetails = () => {
    const {id} = useParams() 
    const {
        data,
        ispending,
        error
      } = useFetch('https://jsonplaceholder.typicode.com/posts/' + id);
   
   
    return ( 
        <div>
        {error && <h1>{error}</h1>}
        {ispending && <h1>data loading...</h1>}
  
        <article style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {data && (
            <p>
              author , <br /> {data.author}
            </p>
          )}
          {data && <h1>{data.title}</h1>}
          {data && <p> {data.body} </p>}
        
        </article>
      </div>
    );
}
 
export default CareerDetails;