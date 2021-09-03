

import React, { useState } from "react";


import ProgressBar from "./ProgressBar";




const UploadForm = () => {

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const types = ['image/jpeg', 'image/png']
    const handlerChange = (e) => {

        let selected = e.target.files[0]

        if (selected && types.includes(selected.type)) {

            setFile(selected)

            setError('')
        }
        else {
            setFile(null)

            setError("Please select an image file (png or jpeg ) ")
        }



    }
 
    return (
      
        <form >
           
            <label>
                    <input type="file" onChange={handlerChange} />

                <span>+</span>
            </label>

            <br />
            <div className="output">

                {error && <div className="error"> {error} </div>
                }
                {file &&
                    <div className="filename">
                        {file.name}
                    </div>
                }

                {file && <ProgressBar file={file} setFile={setFile} />}


            </div>

        </form>

    )

}

export default UploadForm;




















