package com.blog.server.controller;

import com.blog.server.response.PostDetailResponse;
import com.blog.server.response.PostListResponse;
import com.blog.server.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PostController {
    private final PostService postService;

    @GetMapping
    public ResponseEntity<List<PostListResponse>> getPosts(@RequestParam(required = false) String category) {
        return ResponseEntity.ok(postService.getPostList(category));
    }

    @GetMapping("/{slug}")
    public ResponseEntity<PostDetailResponse> getPostDetail(@PathVariable String slug) {
        return ResponseEntity.ok(postService.getPostDetail(slug));
    }

    @GetMapping("/featured")
    public ResponseEntity<List<PostListResponse>> getFeaturedPost(){
        return ResponseEntity.ok(postService.getFeaturedPosts());
    }
}
