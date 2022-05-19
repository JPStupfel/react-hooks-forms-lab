import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {

  const [itemName, setItemName] = useState('')
  const [itemCategory, setItemCategory] = useState('Produce')

  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: itemCategory,
  };

  function handleSubmit(event){
    event.preventDefault();
    onItemFormSubmit(newItem)
  }

  function handleChange(event){
    setItemName(event.target.value)
  }




  return (
    <form 
    className="NewItem" 
    onSubmit={handleSubmit} >
      <label id='name'>
        Name:
        <input 
        type="text" 
        name="name" 
        onChange={
          (event)=>setItemName(event.target.value)
        } 
        />
      </label>

      <label 
      id='category' 
      onChange={(event)=>setItemCategory(event.target.value)}
      >
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
