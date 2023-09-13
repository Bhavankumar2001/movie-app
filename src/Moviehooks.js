import React,{useEffect,useState} from 'react'
import axios from 'axios'

const App=()=>{
    const[data,setdata]=useState([]);

useEffect(()=>{
axios
.get(`http://localhost:3004/movies`)
.then(result=>setdata(result.data)); 
})
return(
    <React.Fragment>
        <table className="table">
            <thead>
    <tr>
      <th>Title</th>
      <th>Genre</th>
      <th>Stock</th>

      <th>Rate</th>
    </tr>
  </thead> 
  <tbody>
    {data.map(movie=>(
        <tr key={ movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        </tr>
    ))}
    </tbody>
    </table>
    </React.Fragment>

)}
export default App;