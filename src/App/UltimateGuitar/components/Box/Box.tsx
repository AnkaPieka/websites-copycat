import React from "react";
import "./style.scss";

function Box(props: any) {
  const { title, children } = props;

  return (
    <div id="ult-guitar-box">
      <header>
        <div className="title">{title}</div>
      </header>
      <div className="body">{children}</div>
    </div>
  );
}

export default Box;
