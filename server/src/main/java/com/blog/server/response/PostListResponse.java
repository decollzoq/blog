package com.blog.server.response;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
public class PostListResponse {
    private String id;
    private String title;
    private String slug;
    private String categoryName;
    private String categorySlug;
    private LocalDateTime createdAt;
    private String thumbnail;
    private List<String> tags;
}