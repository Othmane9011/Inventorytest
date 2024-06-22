package com.inventory.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "textEntries")
public class TextEntry {
    @Id
    private String id;
    private String text;

    // Constructors
    public TextEntry() {}

    public TextEntry(String text) {
        this.text = text;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}