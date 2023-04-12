import React from "react";
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

function populateGallery(imageCount, photos) {
    const result = [imageCount];

    for (let i = 0; i < imageCount; i++) {
        result[i] = <img alt='placeholder' key={i} className='image' src={getRandomImageLink(200, 700, 200, 700)} />
    }

    return result;
}

function Gallery() {
    let photos = []

    const { keycloak } = useKeycloak();

    fetch('http://localhost:8082/resource/photo', {
        method: 'GET',
        headers: {
            'Origin': window.location.origin.toString(),
            'Authorization': 'Bearer ' + keycloak.token
        }
    })
        .then(response => photos = response.json())

    return (
        <div className="card gallery">
            {populateGallery(20, photos)}
        </div>
    )
}

export default Gallery;