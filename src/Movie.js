import React, { Component} from 'react';
import {getMovies} from './Fakemovie.js'
// import Table from './Table';
import Pagination from './Pagination'
import {Paginate} from './Paginate'


class Movie extends Component{

    state = {

        movies :getMovies(),
        currentPage:1,
        pageSize:3
    }
    // componentDidMount(){
    //     fetch("http://localhost:3004/movies")
    //     .then(res=>res.json())
    //     .then(data=>this.setState({movies:data}))
    // }

    handleDelete = (movie) => {
        //console.log(movie)
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        console.log(movies)
        this.setState({ movies : movies})
    }
    handlePageChange = (page) => {
      //console.log(page)
      this.setState({currentPage:page});
    }


    render(){
      const {length:count} = this.state.movies
      const {pageSize,currentPage,movies:allMovies} = this.state
        

        if(count === 0)
            return <p>There is no movies in the database</p>;
            const movies = Paginate(allMovies,currentPage,pageSize)

         return(
            <React.Fragment>
                {/* <Table clickMe={this.handleDelete} movies={this.state.movies}></Table> */}
                
        <div>
            <p>Showing {count} movies in the database</p>
            <table className="table">
            <thead>
    <tr>
      <th>Title</th>
      <th>Genre</th>
      <th>Stock</th>
      <th>Rate</th>
    </tr>
  </thead> 
  <tbody>{
      movies.map(movie => (
        
        <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td><button onClick={() =>this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
      </tr>   
        ))   
      }
  
</tbody>
</table>
<Pagination
     itemsCount = {count}
     //itemsCount = '1'
     pageSize = {pageSize}
     currentPage = {currentPage}
     onPageChange = {this.handlePageChange}
    />
           </div>
           </React.Fragment>
       
            )
    }

}

export default  Movie;