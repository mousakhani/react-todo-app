import React from "react";

function Button(props) {
  return (
    <div>
      <input
        onClick={props.click}
        type="button"
        value={props.value}
        className={
          props.bg_color +
          " p-3 hover:cursor-pointer rounded-tr-xl rounded-br-xl"
        }
      />
    </div>
  );
}

export default Button;
