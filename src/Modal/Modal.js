import React, {useState} from 'react';
import "./Modal.css";
import CloseButton from "./CloseButton";
import FileInputSubmitButton from "./FileInputSubmitButton";
import {useKeycloak} from "@react-keycloak/web";

function Modal({hidden, callback}) {
    const {keycloak} = useKeycloak();
    const [file, setFile] = useState();
    const [buttonText, setButtonText] = useState('Browse...');
    const [isUploading, setIsUploading] = useState(false);
    const [done, setDone] = useState(false);

    const mock = (token) => {
        setIsUploading(true);
        const fd = new FormData();
        fd.append("file", file);
        fetch(process.env.REACT_APP_RESOURCE_URL + '/photo', {
            method: 'POST',
            headers: {
                'Origin': window.location.origin.toString(),
                'Authorization': 'Bearer ' + token
            },
            body: fd
        })
            .then(whendone)
    }

    const change = (e) => {
        setDone(false);
        setButtonText(e.target.files[0].name);
        setFile(e.target.files[0])
    }

    const whendone = () => {
        setIsUploading(false);
        setDone(true);
        window.location.reload();
    }

    const close = () => {
        document.getElementById('file-input').value = '';
        setButtonText("Browse...");
        callback();
    }

    if (!hidden) {
        document.getElementById('root').classList.add('no-scroll');
    } else {
        document.getElementById('root').classList.remove('no-scroll');
    }

    return (
        <div className={`container-column fill center-contents modal-backdrop ${hidden ? 'hidden' : ''}`}>
            <div className='card modal container-column'>
                <CloseButton callback={close}/>
                <h1 className='text-primary modal-header'>UPLOAD A FILE!!!</h1>
                <div className='container-row'>
                    <label className={`file-input ${buttonText === 'Browse...' ? '' : 'file-input-has-file'} ${isUploading ? 'no-pointer' : ''}`}>
                        {buttonText}
                        <input id='file-input' className='hidden' type='file' accept='image/*' disabled={isUploading} onChange={(e) => change(e)}/>
                    </label>
                    {
                        buttonText === 'Browse...'
                            ? <></>
                            : <FileInputSubmitButton done={done} isUploading={isUploading} callback={() => mock(keycloak.token)}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Modal;