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
export class MoviePage {

  moviesData: any;
  moviesSearched: string;
  
  constructor(public http: HttpClient, public movieService: MovieService) {
    this.moviesData = [];
  }

  ionViewWillEnter() {
    this.getPopularMovies();
  }

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




}

// <img class="poster lazyload lazyloaded" src="//image.tmdb.org/t/p/w300_and_h450_bestv2/apvr0s7sLvlPgNGtfuvM5EOJJMO.jpg" data-src="//image.tmdb.org/t/p/w300_and_h450_bestv2/apvr0s7sLvlPgNGtfuvM5EOJJMO.jpg" data-srcset="//image.tmdb.org/t/p/w300_and_h450_bestv2/apvr0s7sLvlPgNGtfuvM5EOJJMO.jpg 1x, //image.tmdb.org/t/p/w600_and_h900_bestv2/apvr0s7sLvlPgNGtfuvM5EOJJMO.jpg 2x" alt="" srcset="//image.tmdb.org/t/p/w300_and_h450_bestv2/apvr0s7sLvlPgNGtfuvM5EOJJMO.jpg 1x, //image.tmdb.org/t/p/w600_and_h900_bestv2/apvr0s7sLvlPgNGtfuvM5EOJJMO.jpg 2x" data-loaded="true">

// url('//image.tmdb.org/t/p/w1920_and_h800_multi_faces/qPO43E0tnw9Gjh9EzkNmc3AKlE3.jpg')