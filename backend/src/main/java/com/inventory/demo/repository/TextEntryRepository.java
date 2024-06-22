package com.inventory.demo.repository;

import com.inventory.demo.model.TextEntry;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TextEntryRepository extends MongoRepository<TextEntry, String> {
}