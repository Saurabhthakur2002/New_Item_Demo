import { FaPlus } from "react-icons/fa";
import {useRef} from 'react';
const AddItem = ({newItem,setNewItem,handleSubmit}) => {
    const inputRef = useRef();
  return (
    <div>
      <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
          type="text"
          autoFocus
          ref={inputRef}
          id="addItem"
          placeholder="Add Item"
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        <button type="submit" aria-label="Add Item" onClick={() => inputRef.current.focus()}>
          <FaPlus />
        </button>
      </form>
    </div>
  );
};
export default AddItem;
