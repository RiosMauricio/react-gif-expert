import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        const cleanValue = inputValue.trim(); 

        if (cleanValue.length < 1) return 

        // setCategories((categories) => [...categories, inputValue]);
        onNewCategory(cleanValue);
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Buscar GIFs"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </form>
        </>
    )
}
