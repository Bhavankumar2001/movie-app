import React from "react";


function Table(props){
    let clickMe=(movie)=>{
        props.clickMe(movie)
    }
    return(
        <div>
            <table className="table">
            
    <tr>
      <th>Title</th>
      <th>Genre</th>
      <th>Stock</th>
      <th>Rate</th>
    </tr>
  
  <tbody>{
      props.movies.map(movie => (
        
        <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td><button onClick={() => clickMe(movie)} className="btn btn-danger btn-sm">Delete</button></td>
      </tr>   
        ))   
      }
  
</tbody>
</table>
        </div>
    );
}
export default Table;