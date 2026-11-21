import { Component } from '@angular/core';

interface Film {
  title: string;
  image: string;
  rating: number;
  watchDate: string;
}

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [],
  templateUrl: './film.component.html',
  styleUrl: './film.component.sass'
})
export class FilmComponent {
  
  searchTerm = '';

  films: Film[] = [
  {
    title: 'Inception',
    image: 'https://placehold.co/300x450/222/fff?text=Inception',
    rating: 5,
    watchDate: '15/11/2026'
  },
  {
    title: 'Interstellar',
    image: 'https://placehold.co/300x450/222/fff?text=Interstellar',
    rating: 5,
    watchDate: '10/11/2026'
  },
  {
    title: 'The Dark Knight',
    image: 'https://placehold.co/300x450/222/fff?text=Dark+Knight',
    rating: 4,
    watchDate: '05/11/2026'
  }
];

  get filteredFilms(): Film[] {
    return this.films.filter(film =>
      film.title.toLowerCase().includes(
        this.searchTerm.toLowerCase()
      )
    );
  }

  getStars(rating: number): boolean[] {
    return Array.from(
      { length: 5 },
      (_, index) => index < Math.round(rating)
    );
  }

}
