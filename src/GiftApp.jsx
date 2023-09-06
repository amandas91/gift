
//Componente GiftApp

import { useState } from "react";
import  {AddCategory}  from './componetns/AddCategory'
import './style.css'
import { GiftGrid } from "./componetns/GiftGrid";


export const GiftApp = () =>{

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        //console.log(newCategory);
        setCategories( cat => [...cat, newCategory]);
    }

    return (
        <>
            {/* Titulo */}
            <h1>Search Gift</h1>

            {/* Input para busqueda */}
            {/* <AddCategory setCategories={setCategories} /> */}
            <AddCategory  onNewCategory={ (value) => onAddCategory(value)}/>

            {/* Lista */}
            
            <ol>
                {
                    categories.map( (category) => 
                    (
                        <GiftGrid key={category} category={category}/>
                    )
                )
                }
            </ol>
            
        </>
    );
}