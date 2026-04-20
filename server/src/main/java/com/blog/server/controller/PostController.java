package com.blog.server.controller;

import com.blog.server.model.Post;
import com.blog.server.model.PostSummary;
import com.blog.server.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PostController {
    private final PostRepository postRepository;

    @GetMapping
    public ResponseEntity<?> getPosts(@RequestParam(value="category", required = false) String category) {
        if(category == null || category.equalsIgnoreCase("All")){
            return ResponseEntity.ok(postRepository.findAllByOrderByCreatedAtDesc());
        }
        List<PostSummary> filteredPost = postRepository.findAllByCategoryOrderByCreatedAtDesc(category);
        if(filteredPost.isEmpty()){
            return ResponseEntity.badRequest().body("잘못된 카테고리명입니다: " + category);
        }
        return ResponseEntity.ok(filteredPost);
    }

    @GetMapping("/featured")
    public List<PostSummary> getFeatured(){
        return postRepository.findTop3ByOrderByCreatedAtDesc();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPost(@PathVariable("id") String id) { // <Post>를 <?>로 변경
        return postRepository.findById(id)
                .<ResponseEntity<?>>map(post -> ResponseEntity.ok(post))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("해당 ID의 게시글을 찾을 수 없습니다: " + id));
    }

    @GetMapping("/{id}/navigation")
    public Map<String, Object> getNavigation(@PathVariable("id") String id){
        Post current = postRepository.findById(id).orElseThrow();
        Map<String, Object> nav = new HashMap<>();

        nav.put("prev", postRepository.findFirstByCategoryAndIdLessThanOrderByIdDesc(current.getCategory(), id).orElse(null));
        nav.put("next", postRepository.findFirstByCategoryAndIdGreaterThanOrderByIdAsc(current.getCategory(), id).orElse(null));

        return nav;
    }

    @GetMapping("/categories")
    public List<String> getCategoryList(){
        return postRepository.findAll()
                .stream()
                .map(Post::getCategory)
                .distinct()
                .filter(c -> c != null)
                .toList();
    }

}
