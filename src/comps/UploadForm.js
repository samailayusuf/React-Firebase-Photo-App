import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState (null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) =>{
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)){
            setFile(selected);
            setError(null);
         }else{
             setFile(null);
             setError("Please select valid image type (PNG or JPEG)");
         }
        // console.log(selected);
    }

    return (
        <form>
            <input type="file" onChange={changeHandler} id="file" hidden/>
            <label htmlFor="file" > Choose file</label>
            <div className="ouput"> 
                {error && <div className = "error"> {error} </div>}
                {file && <div> {file.name} </div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    );

}

export default UploadForm;