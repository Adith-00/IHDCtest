import React from "react";

export const TableFilter = ({ text, notification, id, setFilter, filter }) => {
  return (
    <div className={`filters ${filter === id && "active"}`}onClick={() => { setFilter(id) }} key={id}  >
      <h1>
        {text}{" "}
        {notification && (
          <span>
            <p>{notification}</p>
          </span>
        )}
      </h1>
    </div>
  );
};
