import React from "react";

import ItemList from "./itemList";

const Content = ({ items, handleCheck, handleDlt }) => {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDlt={handleDlt}
        />
      ) : (
        <p style={{ marginTop: "8rem" }}>Your list is empty</p>
      )}
    </>
  );
};
export default Content;
