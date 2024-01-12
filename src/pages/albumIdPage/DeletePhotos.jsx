import React from "react";

const Photo = ({ id, albumId, onDelete }) => {
  const handleDelete = () => {
    onDelete(id,albumId);
  };

  return <button onClick={handleDelete}>Usuń</button>;
};

export default Photo;
