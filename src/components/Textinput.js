import React, { useState } from "react";
import Button from "./Button";

function TextInput(props) {
  const [inputData, setInputData] = useState("");
  const changeInput = (e) => {
    setInputData(e.target.value);
  };
  const buttonOnclick = () => {
    props.buttonClick(inputData);
    setInputData("");
  };

  return (
    <div className="flex  justify-between pl-2 overflow-hidden mb-8">
      <input
        onChange={changeInput}
        type="text"
        className="bg-transparent w-full mr-2 outline-none focus:border-b-2 border-blue-500 "
        placeholder="Write something"
        value={inputData}
      />
      <Button click={buttonOnclick} bg_color="bg-red-500" value="Add" />
    </div>
  );
}

export default TextInput;
