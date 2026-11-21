package it.films.service_backend.film;

import it.films.service_backend.model.Film;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmService {

    private final List<Film> films = List.of(
            new Film(
                    "1",
                    "Interstellar",
                    "Un viaggio attraverso lo spazio e il tempo.",
                    "https://placehold.co/300x450",
                    5,
                    "01/01/2000"
            ),
            new Film(
                    "2",
                    "Inception",
                    "Un ladro che entra nei sogni delle persone.",
                    "https://placehold.co/300x450",
                    4,
                    "01/01/2000"
            ),
            new Film(
                    "3",
                    "The Matrix",
                    "Un hacker scopre la vera natura della realtà.",
                    "https://placehold.co/300x450",
                    5,
                    "01/01/2000"
            )
    );

    public List<Film> getAllFilms() {
        return films;
    }

}
