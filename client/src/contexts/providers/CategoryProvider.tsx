import React, { createContext, useContext, useState } from "react";

interface CategroyState {
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryContext = createContext<CategroyState | null>(null);

export function CategoryProvider({ children }: { children: React.ReactNode }) {
    const [category, setCategory] = useState("All");
    return (
        <CategoryContext.Provider value={{ category, setCategory }}>
            {children}
        </CategoryContext.Provider>
    );
}

export function useCategory() {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error("useCategory must be used within a CategroyProvider");
    }
    return context;
}
