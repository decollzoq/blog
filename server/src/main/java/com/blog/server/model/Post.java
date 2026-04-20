package com.blog.server.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "posts")
@Getter
@NoArgsConstructor
public class Post {
    @Id
    private String id;

    private String title;
    private String content;
    private String category;
    private String thumbnail;
    private LocalDateTime createdAt = LocalDateTime.now();
}
