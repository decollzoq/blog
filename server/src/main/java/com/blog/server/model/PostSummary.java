package com.blog.server.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;
import java.util.List;

public interface PostSummary {
    String getId();
    String getTitle();
    String getCategory();
    String getThumbnail();
    List<String> getTags();

    @JsonFormat(pattern = "yyyy.MM.dd", timezone = "Asia/Seoul")
    LocalDateTime getCreatedAt();
}
