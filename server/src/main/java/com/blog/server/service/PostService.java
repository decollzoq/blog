package com.blog.server.service;

import com.blog.server.model.Category;
import com.blog.server.model.Post;
import com.blog.server.repository.CategoryRepository;
import com.blog.server.repository.PostRepository;
import com.blog.server.response.PostDetailResponse;
import com.blog.server.response.PostListResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    private final CategoryRepository categoryRepository;

    public List<PostListResponse> getPostList(String categorySlug){
        List<Post> posts = findPost(categorySlug);

        Map<String, Category>  categoryMap = getCategoryMap();
        return posts.stream()
                .map(post -> toPostListResponse(post, categoryMap.get(post.getCategoryId())))
                .collect(Collectors.toList());
    }

    public PostDetailResponse getPostDetail(String slug){
        Post post = postRepository.findBySlug(slug).orElseThrow(() -> new RuntimeException("포스트를 찾을 수 없습니다."));
        Category category = categoryRepository.findById(post.getCategoryId()).orElse(null);

        // 이전글: 현재보다 이전 시간 중 가장 최신 것 (DESC)
        Post prev = postRepository.findFirstByCategoryIdAndCreatedAtBeforeOrderByCreatedAtDesc(
                post.getCategoryId(),
                post.getCreatedAt()
        ).orElse(null);

        // 다음글: 현재보다 이후 시간 중 가장 오래된 것 (ASC)
        Post next = postRepository.findFirstByCategoryIdAndCreatedAtAfterOrderByCreatedAtAsc(
                post.getCategoryId(),
                post.getCreatedAt()
        ).orElse(null);

        return PostDetailResponse.builder()
                .id(post.getId())
                .title(post.getTitle())
                .content(post.getContent())
                .tags(post.getTags())
                .thumbnail(post.getThumbnail())
                .categoryName(category != null ? category.getName() : "미지정")
                .categorySlug(category != null ? category.getSlug() : null)
                .slug(post.getSlug())
                .createdAt(post.getCreatedAt())
                .prevPost(toNavPost(prev))
                .nextPost(toNavPost(next))
                .build();
    }

    public List<PostListResponse> getFeaturedPosts(){
        List<Post> posts = postRepository.findTop3ByOrderByCreatedAtDesc();
        Map<String, Category> categoryMap = getCategoryMap();

        return posts.stream()
                .map(post -> toPostListResponse(post, categoryMap.get(post.getCategoryId())))
                .collect(Collectors.toList());
    }
    private List<Post> findPost(String categorySlug){
        if (categorySlug == null || categorySlug.isBlank()) {
            return postRepository.findAllByOrderByCreatedAtDesc();
        }

        Category category = categoryRepository.findBySlug(categorySlug)
                .orElseThrow(() -> new RuntimeException("카테고리를 찾을 수 없습니다."));

        return postRepository.findByCategoryIdOrderByCreatedAtDesc(category.getId());
    }

    private PostListResponse toPostListResponse(Post post, Category category) {

        return PostListResponse.builder()
                .id(post.getId())
                .title(post.getTitle())
                .slug(post.getSlug())
                .createdAt(post.getCreatedAt())
                .tags(post.getTags())
                .thumbnail(post.getThumbnail())
                .categoryName(category != null ? category.getName() : "미지정")
                .categorySlug(category != null ? category.getSlug() : null)
                .build();
    }

    private Map<String, Category> getCategoryMap() {
        return categoryRepository.findAll()
                .stream()
                .collect(Collectors.toMap(Category::getId, Function.identity()));
    }

    private PostDetailResponse.NavPost toNavPost(Post post) {
        if (post == null) return null;

        return PostDetailResponse.NavPost.builder()
                .title(post.getTitle())
                .slug(post.getSlug())
                .build();
    }

}
