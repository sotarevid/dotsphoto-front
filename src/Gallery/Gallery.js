import React, {useEffect, useState} from "react";
import './Gallery.css'
import {useKeycloak} from "@react-keycloak/web";
import Photo from "./Photo";

function Gallery() {

    const {keycloak} = useKeycloak();

    const [photoIds, setPhotoIds] = useState([]);

    const token = keycloak.token;

    useEffect(() => {
        fetch(process.env.REACT_APP_RESOURCE_URL + '/photo/ids', {
            method: 'GET',
            headers: {
                'Origin': window.location.origin.toString(),
                'Authorization': 'Bearer ' + token
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => setPhotoIds(data));
    }, [token, setPhotoIds])

    return ( photoIds &&
        <div className="card gallery">
            {photoIds && photoIds.map((id) => <Photo key={id} photoId={id} />)}
        </div>
    )
}

export default Gallery;