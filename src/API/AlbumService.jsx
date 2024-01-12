import React from "react";
import "./album.scss";
import "../components/button/MyButton";
import { useNavigate } from "react-router-dom";


const Album = ({ userId, title, id }) => {
  
const router = useNavigate();

  return (
    <div className="album">
      <div className="albumList">
        <span>ID użytkownika: {userId}</span>
        <span>Tytuł: {title}</span>
        <div className="album__btns">
        <button onClick={() => router(`/albums/${id}/photos`)}>
                    Otwórz
                </button>
        </div>
        
        
      </div>
    </div>
  );
};

export default Album;
