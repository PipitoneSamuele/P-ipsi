
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { Film } from '../../models/film';
import { FilmService } from '../../services/film.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [FormsModule, DatePipe, RouterLink],
  templateUrl: './film.component.html',
  styleUrl: './film.component.sass'
})
export class FilmComponent implements OnInit {

  private readonly DEFAULT_POSTER = 'https://placehold.co/300x450';

  films: Film[] = [];
  searchTerm = '';

  loading = false;
  errorMessage = '';

  showForm = false;

  newFilm: Film = this.createEmptyFilm();

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.loadFilms();
  }

  // Crea un nuovo oggetto film vuoto
  private createEmptyFilm(): Film {
    return {
      id: '',
      title: '',
      posterUrl: '',
      rating: 0,
      watchDate: '',

      releaseYear: 0,
      genre: '',
      director: '',
      duration: 0,
      plot: '',
      personalReview: ''
    };
  }

  // Carica i film dal backend
  loadFilms(): void {
    this.loading = true;
    this.errorMessage = '';

    this.filmService.getFilms().subscribe({
      next: (films) => {
        this.films = films;
        this.loading = false;
      },
      error: (error) => {
        console.error('Errore durante il caricamento:', error);
        this.errorMessage = 'Impossibile caricare i film.';
        this.loading = false;
      }
    });
  }

  // Filtra i film in base al titolo
  get filteredFilms(): Film[] {
    const search = this.searchTerm.toLowerCase().trim();

    return this.films.filter(film =>
      film.title.toLowerCase().includes(search)
    );
  }

  // Genera le stelle della valutazione
  getStars(rating: number): string[] {
    return Array.from({ length: 5 }, (_, index) =>
      index < rating ? '★' : '☆'
    );
  }

  // Mostra o nasconde il form
  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  // Aggiunge un film
  addFilm(): void {
    const filmToSave = {
      title: this.newFilm.title.trim(),
      posterUrl: this.newFilm.posterUrl.trim() || this.DEFAULT_POSTER,
      rating: this.newFilm.rating,
      watchDate: this.newFilm.watchDate,

      releaseYear: this.newFilm.releaseYear,
      genre: this.newFilm.genre,
      director: this.newFilm.director.trim(),
      duration: this.newFilm.duration,
      plot: this.newFilm.plot.trim(),
      personalReview: this.newFilm.personalReview.trim()
    };

    this.filmService.addFilm(filmToSave).subscribe({
      next: (film) => {
        this.films.push(film);
        this.newFilm = this.createEmptyFilm();
        this.showForm = false;
      },
      error: (error) => {
        console.error('Errore durante il salvataggio:', error);
      }
    });
  }

  // Elimina un film
  deleteFilm(film: Film, event: MouseEvent): void {
    event.stopPropagation();

    if (!film.id) return;

    this.filmService.deleteFilm(film.id).subscribe({
      next: () => {
        this.films = this.films.filter(f => f.id !== film.id);
      },
      error: (error) => {
        console.error('Errore durante l\'eliminazione:', error);
      }
    });
  }

}
