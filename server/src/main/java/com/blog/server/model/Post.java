package com.blog.server.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "posts")
@Getter
@NoArgsConstructor
public class Post {
    @Id
    private String id;

    @Indexed(unique = true)
    private String slug;

    @Indexed
    private String categoryId;

    private String title;
    private String content;

    private String thumbnail;
    private List<String> tags;

    @Indexed
    @JsonFormat(pattern = "yyyy.MM.dd", timezone = "Asia/Seoul")
    private LocalDateTime createdAt = LocalDateTime.now();
}
