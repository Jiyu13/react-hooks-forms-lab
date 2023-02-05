import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // update search state 
  const handleSearchChange = (event) => setSearch(event.target.value)

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  .filter((item) => { // filter itemsTodisplay again
    return item.name.toLowerCase().includes(search.toLowerCase())
  });


  // add newObj to update items state, using setItems
  function handleAddItem(newItem) {
    console.log(newItem)
    setItems(prevItems => [...prevItems, newItem])
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleAddItem}/>

      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category}/>
        ))}
        
      </ul>
    </div>
  );
}

export default ShoppingList;
