import { categoryList, MOCK_POSTS } from "../../data/posts";
import { useState } from "react";
import { Post } from "../../types/post";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import PostCard from "../../components/PostCard";

function Home() {
    const [category, setCategory] = useState("All");
    const filteredPosts =
        category === "All"
            ? MOCK_POSTS
            : MOCK_POSTS.filter((post) => post.category === category);
    const recentPosts = MOCK_POSTS.slice(0, 3); // 슬라이드에 보일 가장 최근 게시물 3개
    const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드 번호
    let slidePost = recentPosts[currentSlide]; // 현재 슬라이드 게시물
    function nextCard() {
        if (currentSlide === 2) setCurrentSlide(0);
        else setCurrentSlide(currentSlide + 1);
    }
    function prevCard() {
        if (currentSlide === 0) setCurrentSlide(2);
        else setCurrentSlide(currentSlide - 1);
    }
    return (
        <div>
            <main className="container max-w-4xl mx-auto px-6 py-12">
                <section className={`${category !== "All" && "hidden"}`}>
                    <div className="container max-w-full relative aspect-[21/9] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-500">
                        <a href={`/posts/${slidePost.id}`}>
                            <img
                                src={slidePost.thumbnail}
                                alt={slidePost.title}
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute text-gray-50 bottom-0 px-9 py-8 flex sm:flex-col gap-2 items-center sm:items-start">
                                <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-100">
                                    {slidePost.title}
                                </h1>
                                <p className="text-sm sm:text-base md:text-lg text-gray-200">
                                    {slidePost.date}
                                </p>
                            </div>
                        </a>

                        <div className="absolute top-1/2 left-4">
                            <button
                                onClick={() => prevCard()}
                                className="bg-gray-600/30 backdrop-blur-sm hover:bg-gray-600/60 rounded-full h-10 w-10 transition-colors"
                            >
                                <IoIosArrowBack className="w-6 h-6 ml-[7px] text-gray-50" />
                            </button>
                        </div>
                        <div className="absolute top-1/2 right-4">
                            <button
                                onClick={() => nextCard()}
                                className="bg-gray-600/30  backdrop-blur-sm hover:bg-gray-600/60 rounded-full h-10 w-10 transition-colors"
                            >
                                <IoIosArrowForward className="w-6 h-6 ml-[9px] text-gray-50" />
                            </button>
                        </div>
                        <div className="absolute bottom-4 max-w-full container flex items-center justify-center space-x-2">
                            <button
                                onClick={() => setCurrentSlide(0)}
                                className={`hover:cursor-default ${currentSlide === 0 ? "bg-gray-50" : "bg-gray-400"} ${currentSlide === 0 ? "w-8" : "w-2"} h-2 rounded-xl transition-all`}
                            ></button>
                            <button
                                onClick={() => setCurrentSlide(1)}
                                className={`hover:cursor-default ${currentSlide === 1 ? "bg-gray-50" : "bg-gray-400"} ${currentSlide === 1 ? "w-8" : "w-2"} h-2 rounded-xl transition-all`}
                            ></button>
                            <button
                                onClick={() => setCurrentSlide(2)}
                                className={`hover:cursor-default ${currentSlide === 2 ? "bg-gray-50" : "bg-gray-400"} ${currentSlide === 2 ? "w-8" : "w-2"} h-2 rounded-xl transition-all`}
                            ></button>
                        </div>
                    </div>
                </section>

                <section className="my-12 flex space-x-3 items-center font-semibold max-w-4xl">
                    <button
                        onClick={() => setCategory("All")}
                        className={`h-10 w-16 rounded-3xl transition-colors duration-500
                        ${
                            category === "All"
                                ? "bg-primary text-gray-50"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-150 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-300"
                        }`}
                    >
                        All
                    </button>
                    <div className="flex space-x-3">
                        {categoryList.map((c, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCategory(c)}
                                className={`h-10 w-16 rounded-3xl transition-colors duration-500
                        ${
                            category === c
                                ? "bg-primary text-gray-50"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-150 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-300"
                        }`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </section>

                <section className="mb-16 max-w-4xl mx-auto">
                    <div className="container grid grid-cols-1 sm:grid-cols-2 gap-12 items-center max-w-full ">
                        {filteredPosts.map((p: Post) => (
                            <PostCard key={p.id} post={p} />
                        ))}
                    </div>
                </section>
            </main>

            <footer className="bg-gray100">footer</footer>
        </div>
    );
}

export default Home;
