import React, { useState } from "react";
import TextInput from "./Textinput";
import Item from "./Item";

const initialList = [];

function Form(props) {
  let [listItem, setListItem] = useState(initialList);

  const addClick = (inputData) => {
    if (inputData !== "") {
      setListItem(
        listItem.concat({
          id: listItem.length + 1,
          name: inputData,
        })
      );
    }
  };

  const handleRemoveItem = (id) => {
    setListItem(listItem.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col mx-auto mt-20 w-2/3">
      <div className="mx-12">
        <TextInput buttonClick={(e) => addClick(e)} />
      </div>
      {listItem.map((item) => {
        return (
          <Item
            key={item.id}
            click={() => handleRemoveItem(item.id)}
            value={item.name}
          />
        );
      })}
    </div>
  );
}

export default Form;
