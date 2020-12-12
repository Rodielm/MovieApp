import { environment } from './../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //Api path
  base_path = 'https://api.themoviedb.org/3';
  token = environment.api_key;

  constructor(private http: HttpClient) { }

  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      console.error('An error ocurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body  was:  ${error.error}`);
    }

    return throwError('Something bad happend; please tyy again later. ');
  };


  // Get movies popular
  getListPopulatedMovies(): Observable<any> {
    return this.http
      .get<any>(this.base_path + `/movie/popular?api_key=${this.token}`).pipe(
        retry(2),
        catchError(this.handleError))
  }

  // get Movies by name
  getMoviesByName(name): Observable<any> {
    return this.http.get<any>(this.base_path + `/search/movie?api_key=${this.token}&query=` + name).pipe(
      retry(2), catchError(this.handleError)
    )
  }

  // get Movie Detail by id
  getMovieDetailById(idMovie): Observable<any> {
    return this.http.get<any>(this.base_path + `/movie/${idMovie}?api_key=${this.token}`).pipe(
      retry(2), catchError(this.handleError)
    )
  }

}
