package it.films.service_backend.film;

import it.films.service_backend.model.Film;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FilmRepository extends MongoRepository<Film, String> {

}