package com.blog.server.repository;

import com.blog.server.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PostRepository extends MongoRepository<Post, String> {
    List<Post> findAllByOrderByCreatedAtDesc(); // 모든 글 조회
    List<Post> findAllByCategoryOrderByCreatedAtDesc(String category); // 카테고리 필터링
    List<Post> findTop3ByOrderByCreatedAtDesc(); // 최근 3개 게시물 조회

    @Query(value = "{}", fields = "{'category' : 1}")
    List<String> findDistinctCategories(); // 모든 카테고리 조회

    // 이전글 / 다음글 용
    Optional<Post> findFirstByCategoryAndIdLessThanOrderByIdDesc(String category, String id);
    Optional<Post> findFirstByCategoryAndIdGreaterThanOrderByIdAsc(String category, String id);
}
