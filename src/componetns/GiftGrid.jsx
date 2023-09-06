import { useEffect, useState } from 'react';
import  { getGifts } from '../helpers/getGift'
import {GifItem} from '../componetns/GifItem';

export const GiftGrid = ({category}) =>{

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifts(category).then(newImages => setImages(newImages));
    }, []);

    return (
        <>
            <h1>{category}</h1>
            <div className='card-grid'>
            {
                //<GifItem />
                 images.map((image) => (
                //    <GifItem key={image.id}  title={image.title} id={image.id} />
                    <GifItem  key={image.id} 
                    {... image}/>
                 ))
            }
            </div>
            
            
        </>
    )
}