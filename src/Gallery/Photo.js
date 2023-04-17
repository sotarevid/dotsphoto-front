import React, {useEffect, useState} from "react";
import {useKeycloak} from "@react-keycloak/web";

function Photo({photoId}) {

    const [photo, setPhoto] = useState({});

    const {keycloak} = useKeycloak();

    const token = keycloak.token;

    useEffect(() => {
        fetch(process.env.REACT_APP_RESOURCE_URL + '/photo/' + photoId, {
            method: 'GET',
            headers: {
                'Origin': window.location.origin.toString(),
                'Authorization': 'Bearer ' + token
            }
        }).then(async response => {
            const isJson = response.headers.get("content-type")?.includes("application/json");
            const data = isJson ? await response.json() : null;

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            return data
        }).then(data => {
            setPhoto(data)
        }).catch((error) => {
            switch (error) {
                case 404:
                    setPhoto({});
                    break;
                default:
                    setPhoto({});
            }
        })
    }, [photoId, token, setPhoto])

    const getMTByExt = (extension) => {
        switch (extension) {
            case 'jpg':
                return 'jpeg';
            default:
                return extension;
        }
    }

    return (
        (photo.content === null || photo.content === undefined) ? null :
        <img alt='placeholder' className='image'
             src={`data:image/${getMTByExt(photo.filename.split('.')[1])};base64, ${photo.content}`}/>
    )
}

export default Photo;