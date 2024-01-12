import axios from "axios";

export default class PhotosSerivce {
    
    

    static async getById(id) {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/albums/' + id);
        return responce;
    }

    static async getPhotoByAlbumId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
        return response;
    }
}; 