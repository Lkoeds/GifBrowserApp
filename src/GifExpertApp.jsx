import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        const cleanCategory = newCategory.trim();
        //setCategories( (cat) => [...new Set([...cat, cleanCategory])]);
        const exist = categories.some(cat => cat.toLocaleLowerCase() === cleanCategory.toLocaleLowerCase());
        if (exist) return;
        setCategories([cleanCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={onAddCategory}
            />

            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}