package com.inventory.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/api/hello")
    public String sayHello() {
        return "Hello, World!";
    }

    @GetMapping("/api/bye")
    public String sayBYE() {
        return "BYE, World!";
    }
}

