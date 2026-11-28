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

    public Film getFilmById(String id) {
        return filmRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Film non trovato"));
    }

    public Film addFilm(Film film) {
        return filmRepository.save(film);
    }

    public void deleteFilm(String id) {
        filmRepository.deleteById(id);
    }

}