package com.inventory.demo.controller;

import com.inventory.demo.model.TextEntry;
import com.inventory.demo.repository.TextEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/text")
public class TextEntryController {

    @Autowired
    private TextEntryRepository textEntryRepository;

    @PutMapping
    public TextEntry addText(@RequestBody String text) {
        TextEntry textEntry = new TextEntry(text);
        return textEntryRepository.save(textEntry);
    }
}
