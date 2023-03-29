import React from "react";
import './Gallery.css'

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
    return (
        <div className="card gallery">
            {populateGallery(20)}
        </div>
    )
}

export default Gallery;