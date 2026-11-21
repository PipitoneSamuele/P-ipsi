package it.films.service_backend.model;

public class Film {

    private String id;
    private String title;
    private String description;
    private String posterUrl;
    private Integer rating;
    private String watchDate;

    public Film() {}

    public Film(
            String id,
            String title,
            String description, String posterUrl,
            Integer rating,
            String watchDate
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
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

    public String getDescription() {
        return description;
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

}
