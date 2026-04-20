package com.blog.server.controller;

import com.blog.server.model.Post;
import com.blog.server.repository.PostRepository;
import lombok.RequiredArgsConstructor;
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
    public List<Post> getPosts(@RequestParam(value="category", required = false) String category) {
        if(category == null || category.equalsIgnoreCase("All")){
            return postRepository.findAllByOrderByCreatedAtDesc();
        }
        return postRepository.findAllByCategoryOrderByCreatedAtDesc(category);
    }

    @GetMapping("/featured")
    public List<Post> getFeatured(){
        return postRepository.findTop3ByOrderByCreatedAtDesc();
    }

    @GetMapping("/{id}")
    public Post getPost(@PathVariable("id") String id){
        return postRepository.findById(id).orElseThrow();
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
