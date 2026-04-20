import { MOCK_POSTS } from "../../data/posts";
import { useCategory } from "../../contexts/providers/CategoryProvider";
import FeaturedSlider from "../../components/FeaturedSlider";
import CategoryFiler from "../../components/CategoryFilter";
import PostGrid from "../../components/PostGrid";

function Home() {
    const { category } = useCategory();
    const filteredPosts =
        category === "All"
            ? MOCK_POSTS
            : MOCK_POSTS.filter((post) => post.category === category);

    return (
        <div>
            <main className="container max-w-4xl mx-auto px-6 py-12">
                {category === "All" && (
                    <FeaturedSlider posts={MOCK_POSTS.slice(0, 3)} />
                )}

                <CategoryFiler />

                <PostGrid posts={filteredPosts} />
            </main>
        </div>
    );
}

export default Home;
