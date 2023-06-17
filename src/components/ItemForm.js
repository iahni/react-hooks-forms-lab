import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setName] = useState("");
  const [itemCategory, setCategory] = useState("Produce");
  function handleName(e) {
    setName(e.target.value)
  }
  function handleCat(e) {
    setCategory(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name: itemName,
      category: itemCategory,
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
        type="text"
        name={itemName}
        onChange={handleName}
         />
      </label>

      <label>
        Category:
        <select name={itemCategory} onChange={handleCat}>
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
