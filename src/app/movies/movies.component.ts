import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  movie:Movie;
  errMsg;
  updateFlag;
  constructor(private movieService: MovieService) {


  }

  ngOnInit() {
    //this.movieService.getMovies().subscribe(data=>this.movies=data);
    //to throw a error write the next line
    this.movieService.getMovies().subscribe(data => this.movies = data,

      err => {
        console.log(err);
        this.errMsg = err.message;
      });

  }
deleteMovie(movie){
  console.log(movie);
  this.movieService.deleteMovie(movie).subscribe(data=>{
    this.movie=data;
    

  },
    err => {
      console.log(err);
      this.errMsg = err.message;
    });
    let pos = this.movies.indexOf(movie);
    console.log(movie);
    console.log(pos);
    this.movies.splice(pos,1);
  }
  
  updateMovie(movie){
    console.log(movie);
    this.movie = movie;
    this.updateFlag = true;
    
  }

  onUpdateForm(){
    console.log(this.movie);
    this.movieService.updateMovie(this.movie).subscribe(data=>
      {
        this.movie=data;
      },
      err => {
        console.log(err);
        this.errMsg = err.message;
      });
      let pos = this.movies.indexOf(this.movie);
      console.log(this.movie);
      console.log(pos);
      this.movies.splice(pos,1,this.movie);
      this.updateFlag=false;
    }
}
