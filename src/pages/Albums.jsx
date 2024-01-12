import React, {useEffect, useState} from "react";
import Album from "../API/AlbumService";
import NavBar from "../components/navbar/Navbar";



const Albums = () => {
    const [albums,setAlbums] =useState([]);
    useEffect(() => {
        fetchData();
    }, []);


const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setAlbums(data))
      .catch((err) => {
        console.log(err);
      });
  };

  
  return (
    <div>
        {albums.map((album) => (
            <Album 
                userId={album.userId}
                key={album.userId}
                title={album.title}
                id={album.id}
            />
        ))}
    </div>
  )
  }
  export default Albums;