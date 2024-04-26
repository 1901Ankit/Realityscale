import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className={props.className}
        style={{
          border: props.border,
          width: props.width,
          height: props.height,
          color: props.color,
          backgroundColor: props.bg,
          textTransform: props.text,
          padding: props.padding,
          fontFamily: props.ff,
          fontSize: props.fs,
          fontWeight: props.fw,
          borderBottom: props.bb,
          borderRadius: props.rounded,
          boxShadow: props.shadow,
        }}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
