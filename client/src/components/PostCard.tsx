import { Post } from "../types/post";
import TagList from "./PostTagList";

function PostCard({ post }: { post: Post }) {
    return (
        <article
            key={post.id}
            className="text-gray-900 hover:text-primary hover:-translate-y-2 transition-transform duration-500"
        >
            <a href={`/posts/${post.id}`}>
                <div className="container flex flex-col">
                    <div className="relative">
                        <img
                            src={post.thumbnail}
                            alt={post.title}
                            className="w-full h-3/4 object-cover rounded-2xl"
                        />
                        <div className="px-3 py-1 absolute top-3 left-3 bg-gray-600/50 backdrop-blur-sm rounded-2xl text-gray-50 text-sm">
                            {post.category}
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl mb-3 font-bold dark:text-gray-50 transition-colors duration-500">
                            {post.title}
                        </h3>
                        <div className="flex space-x-2 mb-2">
                            {post.tags.map((tag, tdx) => (
                                <span
                                    key={tdx}
                                    className="bg-gray-100 rounded-lg text-xs text-gray-600 dark:text-gray-50 dark:bg-gray-800 font-light px-2 py-1 transition-colors duration-500"
                                >
                                    # {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-600 text-sm dark:text-gray-400">
                            {post.date}
                        </p>
                    </div>
                </div>
            </a>
        </article>
    );
}

export default PostCard;
