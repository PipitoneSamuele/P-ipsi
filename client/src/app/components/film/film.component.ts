import { Component } from '@angular/core';

interface Film {
  title: string;
  image: string;
  rating: number;
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
      rating: 5
    },
    {
      title: 'Interstellar',
      image: 'https://placehold.co/300x450/222/fff?text=Interstellar',
      rating: 5
    },
    {
      title: 'The Dark Knight',
      image: 'https://placehold.co/300x450/222/fff?text=Dark+Knight',
      rating: 4
    },
    {
      title: 'The Matrix',
      image: 'https://placehold.co/300x450/222/fff?text=The+Matrix',
      rating: 5
    },
    {
      title: 'Gladiator',
      image: 'https://placehold.co/300x450/222/fff?text=Gladiator',
      rating: 4
    },
    {
      title: 'The Godfather',
      image: 'https://placehold.co/300x450/222/fff?text=Godfather',
      rating: 5
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
