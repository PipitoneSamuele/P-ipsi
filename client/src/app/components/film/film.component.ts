import { Component } from '@angular/core';
import { Film } from '../../models/film';
import { FilmService } from '../../services/film.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './film.component.html',
  styleUrl: './film.component.sass'
})
export class FilmComponent {
  
  films: Film[] = [];
  searchTerm = '';

  loading = false;
  errorMessage = '';

  showForm = false;
  newFilm: Film = {
    id: '',
    title: '',
    posterUrl: '',
    rating: 0,
    watchDate: ''
  };

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.loadFilms();
  }

  loadFilms(): void {
    this.loading = true;
    this.errorMessage = '';

    this.filmService.getFilms().subscribe({
      next: (films) => {
        this.films = films;
        this.loading = false;
      },
      error: (error) => {
        console.error('Errore durante il caricamento dei film:', error);
        this.errorMessage = 'Impossibile caricare i film.';
        this.loading = false;
      }
    });
  }

  get filteredFilms(): Film[] {
    return this.films.filter(film =>
      film.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getStars(rating: number): string[] {
    return Array.from({ length: 5 }, (_, index) =>
      index < rating ? '★' : '☆'
    );
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  addFilm(): void {
    this.filmService.addFilm(this.newFilm).subscribe({
      next: (film) => {
        this.films.push(film);

        this.newFilm = {
          id: '',
          title: '',
          posterUrl: '',
          rating: 0,
          watchDate: ''
        };

        this.showForm = false;
      },
      error: (error) => {
        console.error('Errore durante l\'aggiunta del film:', error);
      }
    });
  }

}
