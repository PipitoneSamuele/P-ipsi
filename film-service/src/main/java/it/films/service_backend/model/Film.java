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
}
