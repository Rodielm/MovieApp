import { element } from 'protractor';
import { MovieService } from './../api/movie.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  moviesData: any;
  moviesSearched: string;

  constructor(public http: HttpClient, public movieService: MovieService) {
    this.moviesData = [];
  }

  ionViewWillEnter() {
    this.getPopularMovies();
  }

  // getData() {
  //   this.data = this.http.get(this.url);
  //   this.data.subscribe(data => {
  //     this.items = data;
  //   })
  // }

  getPopularMovies() {
    this.movieService.getListPopulatedMovies().subscribe(resp => {
      console.log(resp)
      this.moviesData = resp;
    })
  }

  getMovieByName(e) {
    console.log(e.srcElement.value);
    this.movieService.getMoviesByName(e.srcElement.value).subscribe(resp => {
      console.log(resp)
      this.moviesData = resp;
    })
  }


  ngOnInit() {
    // 
  }

}
