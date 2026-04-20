package com.blog.server.model;

import java.time.LocalDateTime;

public interface PostSummary {
    String getId();
    String getTitle();
    String getCategory();
    String getThumbnail();
    LocalDateTime getCreatedAt();
}
