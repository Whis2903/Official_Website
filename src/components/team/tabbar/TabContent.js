import React from "react";
function TabContent(props) {
  return (
    <>
      <div
        className={props.className}
        id= {props.id}
        role="tabpanel"
        aria-labelledby={props.tab}
        tabIndex="0"
      >{<div className="row justify-content-center">{props.content}</div>}
      </div>
    </>
  );
}

export default TabContent;