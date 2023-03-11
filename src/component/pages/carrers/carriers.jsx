import React from 'react';
import useFetch from '../../useFetch/useFetch';
import {Link} from 'react-router-dom'

function Carriers() {
  const {
    data,
    ispending,
    error
  } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div className='body'>
      {error && <h1>{error}</h1>}
      {ispending && <h1>data loading...</h1>}
      {data && data.map(carrer=>(
        
          <Link to={carrer.id.toString()} style={{textDecoration:"none"}} key={carrer.id}>
          <div style={{maxWidth: "1000px" , margin:"0 auto"}}>
          <h1>{carrer.title}</h1>
          <p style={{color:"black"}}>{carrer.body}</p>
          </div>
          </Link>
        
      ))}
    </div>
  )
}

export default Carriers;
