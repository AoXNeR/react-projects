import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p classname="title">{title}</p>
            <div className="btn-container">
              <button
                onClick={() => editItem(id)}
                type="button"
                className="edit-btn"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => removeItem(id)}
                type="button"
                className="delete-btn"
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
