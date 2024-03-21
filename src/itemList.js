// import { FaTrashAlt } from "react-icons/fa";
import LineItem from "./LineItem";
const ItemList = ({items,handleCheck,handleDlt}) => {
    return(
        <ul>
        {items.map((value) => (
          <LineItem key  = {value.id} value = {value} handleCheck={handleCheck} handleDlt={handleDlt}/>
        ))}
      </ul>
    )
}
export default ItemList;