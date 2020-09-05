import React, { useContext } from "react";

import { PhotosAPIContext } from "../../contexts";

import { usePostPhoto } from "../../hooks";

import "./Button.scss"

const Button = () => {
    const { postPhoto } = useContext(PhotosAPIContext);
    
    const postData = usePostPhoto(postPhoto);

    const handleChange = ({ target }) => {
        const { files } = target;
        const file = files[0];
        const formData = new FormData();
        
        formData.append("files", file, file.name);
        
        postData(formData)
    }

    return(
        <div className="button">
            <input type="file" name="files" id="files" onChange={ handleChange } />
            <label htmlFor="files"></label>
        </div>

    );
};

export default Button;