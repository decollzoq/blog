package com.blog.server.response;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
public class PostDetailResponse {
    private String id;
    private String title;
    private String content;
    private String thumbnail;
    private String categoryName;
    private String categorySlug;
    private List<String> tags;
    private String slug;
    private LocalDateTime createdAt;

    private NavPost prevPost;
    private NavPost nextPost;

    @Getter
    @Builder
    public static class NavPost {
        private String title;
        private String slug;
    }

}
