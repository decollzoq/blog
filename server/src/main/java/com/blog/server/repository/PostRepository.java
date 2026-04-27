package com.blog.server.repository;

import com.blog.server.model.Post;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface PostRepository extends MongoRepository<Post, String> {
    Optional<Post> findBySlug(String slug);
    List<Post> findByCategoryIdOrderByCreatedAtDesc(String categoryId);
    List<Post> findAllByOrderByCreatedAtDesc();
    List<Post> findTop3ByOrderByCreatedAtDesc();

    // 이전글 / 다음글
    Optional<Post> findFirstByCategoryIdAndCreatedAtBeforeOrderByCreatedAtDesc(String categoryId, LocalDateTime createdAt);
    Optional<Post> findFirstByCategoryIdAndCreatedAtAfterOrderByCreatedAtAsc(String categoryId, LocalDateTime createdAt);
}
