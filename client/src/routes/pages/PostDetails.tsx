import { useParams } from "react-router";
import { MOCK_POSTS } from "../../data/posts";
import PostNavigation from "../../components/PostNavigation";
import MarkdownViewer from "../../components/MarkdownViewer";
import PostHeader from "../../components/PostHeader";
import PostTagList from "../../components/PostTagList";

function PostDetails() {
    const { postId } = useParams();
    const post = MOCK_POSTS.find((p) => p.id === Number(postId));

    if (!post) {
        return <div>포스트를 찾을 수 없습니다.</div>;
    }

    const sameCategoryPosts = MOCK_POSTS.filter(
        (p) => p.category === post.category,
    );
    const postIdx = sameCategoryPosts.indexOf(post);

    return (
        <div>
            <main className="max-w-4xl mx-auto px-6 py-12 mb-20">
                <PostHeader post={post} />
                <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="rounded-3xl max-h-[468px] w-full object-cover"
                />

                <MarkdownViewer content={post.content} />

                <PostTagList tags={post.tags} />

                <footer className="mb-12 flex flex-col mt-12 text-gray-800 text-sm text-center font-normal dark:text-gray-300 border-t-gray-200 dark:border-t-gray-600 pt-8 space-y-4 border-t-[1px] transition-colors duration-500">
                    <h1>{post.category} 카테고리의 다른 글</h1>
                    <PostNavigation
                        prevPost={sameCategoryPosts[postIdx - 1]}
                        nextPost={sameCategoryPosts[postIdx + 1]}
                    />
                </footer>
            </main>
        </div>
    );
}

export default PostDetails;
