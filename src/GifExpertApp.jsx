import { useState } from "react";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
    
    const onAddCategory = ()=> {
        setCategories([...categories, 'Categoria nueva'])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <input></input>
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map((category, index) => {
                    return <li key={index}>{category}</li>
                })}
            </ol>
        </>
    )
}