import React from "react";

const Input = (props) => {
  return (
    <input
      className={props.className}
      placeholder={props.placeholder}
      type={props.type}
      style={{
        border: props.border,
        borderRadius: props.rounded,
        padding: props.padding,
        margin: props.margin,
        width: props.width,
        height: props.height,
        fontSize: props.fontSize,
        background: props.bg,
      }}
      maxLength={props.max}
    />
  );
};

export default Input;
