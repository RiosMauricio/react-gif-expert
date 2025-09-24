import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([...categories, newCategory]);
    }
    return (
        <>
            {/* Title */}
            {/* <h1 aria-label="title-heading">GifExpertApp</h1> */}

            {/* Add Category */}
            <AddCategory onNewCategory={onAddCategory} />

            {/* Categories list*/}
            {
                categories.map((cat) => (
                    <GifGrid key={cat} category={cat} />
                )
                )
            }

        </>
    )
}
