import React from "react";
import './deletePhotos.scss';

const Photo = ({ id, albumId, onDelete }) => {
  const handleDelete = () => {
    onDelete(id,albumId);
  };

  return  <button className="deleteButton" onClick={handleDelete}>Usuń</button>;
};

export default Photo;
