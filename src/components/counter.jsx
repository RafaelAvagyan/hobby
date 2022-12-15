import React from "react";

const Counter = ({ onDelete, onIncrement, onDecrement, ...rest }) => {
  const formValue = () => {
    return rest.value === 0 ? "Ноль" : rest.value;
  };
  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += rest.value === 0 ? "danger" : "primary";
    return classes;
  };

  return (
    <>
      <h4>{rest.name}</h4>
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button
        onClick={() => onIncrement(rest.id)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => onDecrement(rest.id)}
      >
        Decrement
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => onDelete(rest.id)}
      >
        Delete
      </button>
    </>
  );
};

export default Counter;
