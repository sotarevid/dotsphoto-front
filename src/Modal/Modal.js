import React, {useState} from 'react';
import "./Modal.css";
import CloseButton from "./CloseButton";
import FileInputSubmitButton from "./FileInputSubmitButton";

function Modal({hidden, callback}) {
    const [buttonText, setButtonText] = useState('Browse...');
    const [isUploading, setIsUploading] = useState(false);
    const [done, setDone] = useState(false);

    const mock = () => {
        setIsUploading(true);
        setTimeout(() => whendone(), 3000);
    }

    const change = (e) => {
        setDone(false);
        setButtonText(e.target.files[0].name);
    }

    const whendone = () => {
        setIsUploading(false);
        setDone(true);
    }

    const close = () => {
        document.getElementById('file-input').value = '';
        setButtonText("Browse...");
        callback();
    }

    if (!hidden) {
        document.getElementById('root').classList.add('no-scroll');
    }
    else {
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
                            : <FileInputSubmitButton done={done} isUploading={isUploading} callback={() => mock()}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Modal;