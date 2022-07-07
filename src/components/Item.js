import React from "react";
import Button from "./Button";

function Item(props) {
  return (
    <div className="flex justify-between bg-orange-300 rounded-xl mb-2">
      <label className="py-3 px-2 ">{props.value}</label>
      <Button
        bg_color="bg-blue-400 hover:bg-blue-500"
        value="Delete"
        click={props.click}
      />
    </div>
  );
}

export default Item;
