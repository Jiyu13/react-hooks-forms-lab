import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  // Original formData Template
  const initialFormValues = {
    name: "",
    category: "Produce"
  }

  // Creating One State for Each Input (One Object)
  const [formData, setFormData] = useState(initialFormValues)

  // Function to update state--e.target => JS Object
  const handleInput = (event) => {
    const {name, value} = event.target
    setFormData({...formData, [name]:value})
  }

  // onSubmit event listener
  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: formData.name,
      category: formData.category,
    };
    onItemFormSubmit(newItem)

  }

  return (
    // add value attribute to each input -- value=formData.()
    // add onChange to handle changeInput for input, onSubmit for form 
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInput}/>
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleInput}>
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
