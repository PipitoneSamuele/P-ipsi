package it.films.service_backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "films")
public class Film {

    @Id
    private String id;

    private String title;
    private String posterUrl;
    private Integer rating;
    private String watchDate;

    private Integer releaseYear;
    private String genre;
    private String director;
    private Integer duration;
    private String plot;
    private String personalReview;

    public Film() {
    }

    public Film(
            String id,
            String title,
            String posterUrl,
            Integer rating,
            String watchDate
    ) {
        this.id = id;
        this.title = title;
        this.posterUrl = posterUrl;
        this.rating = rating;
        this.watchDate = watchDate;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getPosterUrl() {
        return posterUrl;
    }

    public Integer getRating() {
        return rating;
    }

    public String getWatchDate() {
        return watchDate;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPosterUrl(String posterUrl) {
        this.posterUrl = posterUrl;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public void setWatchDate(String watchDate) {
        this.watchDate = watchDate;
    }

    public Integer getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(Integer releaseYear) {
        this.releaseYear = releaseYear;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public String getPlot() {
        return plot;
    }

    public void setPlot(String plot) {
        this.plot = plot;
    }

    public String getPersonalReview() {
        return personalReview;
    }

    public void setPersonalReview(String personalReview) {
        this.personalReview = personalReview;
    }
}
