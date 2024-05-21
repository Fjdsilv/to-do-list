import { useState } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";
import Items from "./components/Items";
import { ToastContainer, toast } from "react-toastify";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  }
  else {
    list = [];
  }
  return list;
}

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
}

// const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

const App = () => {
  const [items, setItems] = useState(getLocalStorage());
  
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid()
    }
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item add to the list");
  }

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId)
    setItems(newItems);
    setLocalStorage(newItems);
    toast.error("item deleted")
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id = itemId) {
          const newItems = {...item, completed: !item.completed}
          return newItems;
      } 
      else {
        return item;
      }
    })
    setItems(newItems);
    setLocalStorage(newItems);
  }

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items 
        items={items} 
        removeItem={removeItem}
        editItem={editItem}
      />
      <ToastContainer position="top-center"/>
    </section>
  )
};

export default App;
