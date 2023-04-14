import React, {useEffect, useState} from "react";
import './Gallery.css'
import {useKeycloak} from "@react-keycloak/web";

function getRandomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomImageLink(minX, maxX, minY, maxY) {
    return `http://via.placeholder.com/${getRandomInRange(minX, maxX)}x${getRandomInRange(minY, maxY)}`
}

function populateGallery(imageCount) {
    const result = [imageCount];

    for (let i = 0; i < imageCount; i++) {
        result[i] = <img alt='placeholder' key={i} className='image' src={getRandomImageLink(200, 700, 200, 700)} />
    }

    return result;
}

function Gallery() {

    const {keycloak} = useKeycloak();

    const [photos, setPhotos] = useState([]);

    const fetchPhotos = (token) => {
        fetch(process.env.REACT_APP_RESOURCE_URL + '/photo', {
            method: 'GET',
            headers: {
                'Origin': window.location.origin.toString(),
                'Authorization': 'Bearer ' + token
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => setPhotos(data));
    }

    useEffect(() => {fetchPhotos(keycloak.token)}, [])

    const getMTByExt = (extension) => {
        switch (extension) {
            case 'jpg': return 'jpeg';
            default: return extension;
        }
    }

    return (
        <div className="card gallery">
            {photos.map((photo, i) => (<img alt='placeholder' key={i} className='image'
                                            src={`data:image/${getMTByExt(photo.filename.split('.')[1])};base64, ${photo.content}`} />))}
        </div>
    )
}

export default Gallery;