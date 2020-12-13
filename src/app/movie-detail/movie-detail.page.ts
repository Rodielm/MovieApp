import { MovieService } from './../api/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  movieId: number;
  data: any;
  showProductionCompanies: boolean = false;
  showProductionCountries: boolean = false;

  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private movieService: MovieService) {

    this.data = {}
  }

  goBack() {
    this.router.navigate(['/movie'])
  }

  ngOnInit() {
    this.movieId = this.activatedRoute.snapshot.params["id"];
    // get item details using id
    this.movieService.getMovieDetailById(this.movieId).subscribe(resp => {
      console.log(resp);
      this.data = resp
      
      this.showProductionCompanies = resp.production_companies.length > 0;
      this.showProductionCountries = resp.production_countries.length > 0;
    })
  }

}
