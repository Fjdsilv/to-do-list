import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newItemName) {
      toast.error("please enter a value!");
      return;
    }

    addItem(newItemName);
    setNewItemName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>To-Do List</h4>
        <div className="form-control">
          <input 
            type="text" 
            className="form-input"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}        
          />
          <button 
            type="submit"
            className="btn"
          >
          add item
          </button>
        </div>
      </form>
    </div>
  )
}
export default Form