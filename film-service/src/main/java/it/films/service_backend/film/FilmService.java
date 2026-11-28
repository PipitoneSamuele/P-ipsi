package it.films.service_backend.film;

import it.films.service_backend.model.Film;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmService {

    private final FilmRepository filmRepository;

    public FilmService(FilmRepository filmRepository) {
        this.filmRepository = filmRepository;
    }

    public List<Film> getAllFilms() {
        return filmRepository.findAll();
    }

    public Film addFilm(Film film) {
        return filmRepository.save(film);
    }

}