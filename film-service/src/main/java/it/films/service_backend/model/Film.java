package it.films.service_backend.model;

public class Film {

    private String id;
    private String title;
    private String description;
    private String posterUrl;
    private Integer releaseYear;
    private Integer rating;

    public Film() {
    }

    public Film(
            String id,
            String title,
            String description,
            String posterUrl,
            Integer releaseYear,
            Integer rating
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.posterUrl = posterUrl;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getPosterUrl() {
        return posterUrl;
    }

    public Integer getReleaseYear() {
        return releaseYear;
    }

    public Integer getRating() {
        return rating;
    }

}
