import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

function Header() {
    function toggleDarkMode() {
        document.documentElement.classList.toggle("dark");
    }
    return (
        <header className="sticky top-0 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-50 z-10 transition-colors duration-500">
            <nav className="container max-w-4xl mx-auto px-6 py-3 flex justify-between">
                <div className="flex items-center">
                    <h1 className="font-bold text-2xl">SEON</h1>
                </div>
                <div className="flex gap-6 place-items-center ">
                    <div className="hover:text-primary transition-colors duration-500">
                        <a href="/" className="text-lg">
                            Home
                        </a>
                    </div>
                    <button
                        onClick={() => toggleDarkMode()}
                        className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-xl w-10 h-10 transition-colors duration-500"
                    >
                        <FaRegMoon className="mx-auto dark:hidden transition-all duration-500" />
                        <IoSunnyOutline className="mx-auto w-5 h-5 hidden dark:block text-gray-50 transition-all duration-500" />
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
