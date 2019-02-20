import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url="http://localhost:3000/ragha/movies";

  constructor(private http:HttpClient) { 
    
   }
   getMovies(): Observable<Movie[]>{
     return this.http.get<Movie[]>(this.url).pipe(
       catchError(err=>
        {
          return throwError(err);
        })
     );
   }
   insertMovie(movie):Observable<Movie>{
     return this.http.post<Movie>(this.url,movie).pipe(
      catchError(err=>
       {
         return throwError(err);
       })
    );
   }
   deleteMovie(movie:Movie):Observable<Movie>{
    return this.http.delete<Movie>(this.url+"/"+movie._id).pipe(
      catchError(err=>
        {
          return throwError(err);
        })
    );
   } 
   updateMovie(movie:Movie):Observable<Movie>{
    return this.http.put<Movie>(this.url+"/"+movie._id,movie).pipe(
      catchError(err=>
        {
          return throwError(err);
        })
    );
   } 
}
