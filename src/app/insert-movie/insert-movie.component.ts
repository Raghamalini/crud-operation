import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-insert-movie',
  templateUrl: './insert-movie.component.html',
  styleUrls: ['./insert-movie.component.css']
})
export class InsertMovieComponent implements OnInit {
  reviews=["worst","bad","average","good","amazing"];
  constructor(private movieService:MovieService) {}
   
  errMsg;
  ngOnInit() {
  }
onInsertMovie(movie:Movie){
  console.log(movie);
  this.movieService.insertMovie(movie)
    .subscribe(data => {
      console.log("movie inserted successfully");
    },
    err => {
      console.log(err);
      this.errMsg = err.message;
    });
    
}
reviewHasError;
validateReview(review){
  if(review=='default'){
    this.reviewHasError=true;
  }else{
    this.reviewHasError=false;
  }
}
}
