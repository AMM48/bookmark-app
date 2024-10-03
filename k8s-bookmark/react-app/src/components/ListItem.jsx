import React from "react";

function ListItem({ items, handleDelete, handleEdit, searchName }) {
  return (
    <>
      {items.length === 0 ? (
        <p className="list-item">You have no Bookmarks</p>
      ) : (
        items
          .filter((item) =>
            item.title.toLowerCase().includes(searchName.toLowerCase())
          )
          .map((item) => (
            <div className="list-container" key={item.id}>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="list-item"
              >
                {item.title}
              </a>
              <div>
                <button className="icon" onClick={() => handleEdit(item)}>
                  Edit
                </button>

                <button id="delete-btn" onClick={() => handleDelete(item)}>
                  Delete Bookmark
                </button>
              </div>
            </div>
          ))
      )}
    </>
  );
}

export default ListItem;
