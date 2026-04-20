import { categoryList } from "../data/posts";
import { useCategory } from "../contexts/providers/CategoryProvider";
function CategoryFiler() {
    const { category, setCategory } = useCategory();
    return (
        <section className="my-12 flex space-x-3 items-center font-semibold max-w-4xl">
            <button
                onClick={() => setCategory("All")}
                className={`h-10 w-16 rounded-3xl 
                        ${
                            category === "All"
                                ? "bg-primary text-gray-50 dark:bg-primary-dark"
                                : "bg-gray-50 text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                        }`}
            >
                All
            </button>
            <div className="flex space-x-3">
                {categoryList.map((c, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCategory(c)}
                        className={`h-10 w-16 rounded-3xl
                        ${
                            category === c
                                ? "bg-primary text-gray-50 dark:bg-primary-dark"
                                : "bg-gray-50 text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                        }`}
                    >
                        {c}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default CategoryFiler;
