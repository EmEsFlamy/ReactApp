import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { useFething } from "../../hook/useFething";
import PhotosService from "../../API/PhotosService";
import "./albumIdPage.scss";
import Photo from "./DeletePhotos";

const AlbumIdPage = () => {
  const params = useParams();
  const [albums, setAlbums] = useState({});
  const [photos, setPhotos] = useState([]);

  const onDelete = (id) => {
    setPhotos(
      photos.filter((pho) => {
        return pho.id !== id;
      })
    );
  };

  const [fetchAlbumById, isLoading] = useFething(async (id) => {
    const responce = await PhotosService.getById(id);
    setAlbums(responce.data);
  });

  const [fetchPhotos, isPhoLoading] = useFething(async (id) => {
    const responce = await PhotosService.getPhotoByAlbumId(id);
    setPhotos(responce.data);
  });

  useEffect(() => {
    fetchAlbumById(params.id);
    fetchPhotos(params.id);
  }, []);

  return (
    <div>
      <hr style={{ margin: "65px 0 15px 0" }} />

      {isLoading ? (
        <Loader />
      ) : (
        <div className="albumId__title">
          <span>{albums.id}</span>. {albums.title}
        </div>
      )}
      <h1>Zdjęcia</h1>
      {isPhoLoading ? (
        <Loader />
      ) : (
        <div className="albumId__item-container">
          {photos.map((pho) => (
            <div key={pho.albumId} className="albumId__item">
              <h5>{pho.title}</h5>
              <img src={pho.url} alt={pho.id} />
              <Photo id={pho.id} albumId={pho.albumId} onDelete={onDelete} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AlbumIdPage;
