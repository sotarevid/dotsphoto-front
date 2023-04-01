import React from "react";
import Spinner from "../Spinner/Spinner";

function FileInputSubmitButton({done, isUploading, callback}) {
    if (done) {
        return (
            <label className='container-row center-contents file-input-submit-button no-pointer'>
                Done!
            </label>
        )
    }

    if (isUploading) {
        return (
            <label className='container-row center-contents file-input-submit-button no-pointer'>
                <Spinner />
            </label>
        )
    }

    return (
        <label className='container-row center-contents file-input-submit-button'>
            Upload
            <input className='hidden' type='button' value='Upload' onClick={() => callback()}/>
        </label>
    )
}

export default FileInputSubmitButton;