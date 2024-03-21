import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({value,handleCheck,handleDlt}) => {
  return (
    <div>
      <li className="item" >
        <input
          type="checkbox"
          checked={value.checked}
          onChange={() => handleCheck(value.id)}
        />
        <label
          style={(value.checked) ? { textDecoration: "line-through" } : null}
          onDoubleClick={() => handleCheck(value.id)}
        >
          {value.item}
        </label>
        <FaTrashAlt
          onClick={() => handleDlt(value.id)}
          role="button"
          tabIndex="0"
        />
      </li>
    </div>
  );
};
export default LineItem;
