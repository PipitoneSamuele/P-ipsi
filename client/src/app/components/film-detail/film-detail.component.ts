import { Component } from '@angular/core';
import { Film } from '../../models/film';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FilmService } from '../../services/film.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-film-detail',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './film-detail.component.html',
  styleUrl: './film-detail.component.sass'
})
export class FilmDetailComponent {

  film: Film | null = null;
  loading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.errorMessage = 'ID del film non valido.';
      this.loading = false;
      return;
    }

    this.filmService.getFilmById(id).subscribe({
      next: (film) => {
        this.film = film;
        this.loading = false;
      },
      error: (error) => {
        console.error('Errore durante il caricamento:', error);
        this.errorMessage = 'Impossibile caricare il film.';
        this.loading = false;
      }
    });
  }

  getStars(rating: number): string[] {
    return Array.from({ length: 5 }, (_, index) =>
      index < rating ? '★' : '☆'
    );
  }

}
