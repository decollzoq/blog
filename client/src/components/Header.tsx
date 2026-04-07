function Header() {
    return (
        <header className="w-full bg-white fixed top-0 ">
            <div className="max-w-4lx px-14 h-16 grid grid-flow-col grid-cols-[auto_1fr_auto] gap-6 items-center justify-between">
                <button className="hover:text-primary-light transition-colors ">
                    <h1 className="text-2xl font-extrabold">SEON</h1>
                </button>
                <div></div>
                <div className="flex items-center gap-4">
                    <button className="hover:text-primary-light transition-colors">
                        <h1 className="text-xl">Home</h1>
                    </button>
                    <button>다크모드</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
