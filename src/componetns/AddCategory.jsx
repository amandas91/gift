import { useState } from "react"

export const AddCategory = ({onNewCategory}) =>{

    //state
    const [inputValue, setInputValue ] = useState('');

    const onInputChange =( {target} )=>{
        setInputValue(target.value);
        //console.log(target.value);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        console.log(event);
        if( inputValue.trim().length <= 1) return;
        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    //return 
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type='text'
                placeholder="Buscar Gift"
                value={inputValue}
                onChange={ onInputChange }/>
            </form>
           
        </>
    )
}
