package com.blog.server.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;

public interface PostSummary {
    String getId();
    String getTitle();
    String getCategory();
    String getThumbnail();
    @JsonFormat(pattern = "yyyy.MM.dd", timezone = "Asia/Seoul")
    LocalDateTime getCreatedAt();
}
