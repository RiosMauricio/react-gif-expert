import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    const getImages = async () => {
        const result = await getGifs(category);
        setImages(result);
        setIsLoading(false); 
    };

    useEffect(() => {
        getImages(category);
    }, []);

    return {
        images,
        isLoading
    }

}
