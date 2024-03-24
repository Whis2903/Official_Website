import React from "react";

function Tab(props) {
  return (
    <li className="nav-item" role="presentation">
      <button
        className={props.className}
        id={props.id}
        data-bs-toggle="tab"
        data-bs-target={props.targetID}
        type="button"
        role="tab"
        aria-controls={props.targetID}
        aria-selected={props.selected}
      >
        {props.title}
      </button>
    </li>
  );
}

export default Tab;