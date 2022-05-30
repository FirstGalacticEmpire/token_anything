import React, {Dispatch, FC, SetStateAction, useCallback, useState} from "react";
import {useDropzone} from 'react-dropzone'
import styled from "styled-components";

const Styles = styled.div`
  body {
    text-align: center;
  }

  .dropzone-div {
    text-align: center;
    padding: 40px;
    border: 3px purple dashed;
    width: 60%;
    margin: auto;
    background-color: white;
  }

  .containerDiv {
    padding: 50px;
    background-color: wheat;
  }
`

interface Props {
    image: string | ArrayBuffer | null | undefined
    setImage: Dispatch<SetStateAction<string | ArrayBuffer | null | undefined>>
}

const DragDrop: FC<Props> = ({image, setImage}): JSX.Element => {
    // const [image, setImage] = useState<string>('')

    const onDrop = useCallback((acceptedFiles: any[]) => {
        // Do something with the files
        acceptedFiles.map(file => {
            // Initialize FileReader browser API
            const reader = new FileReader();
            // onload callback gets called after the reader reads the file data
            reader.onload = function (e) {
                // add the image into the state. Since FileReader reading process is asynchronous,
                // its better to get the latest snapshot state (i.e., prevState) and update it.
                // setImages(prevState => [...prevState, {id: cuid(), src: e.target?.result}])
                setImage(e.target?.result)
                // setImage({id: cuid(), src: e.target.result})
            }
            // Read the file as Data URL (since we accept only images)
            reader.readAsDataURL(file);
            return file;
        })

    }, [setImage])


    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': ['.jpeg', '.jpg', '.png']
        }
    })

        return (<>
            <Styles>
                <div >
                    <div {...getRootProps()} className="dropzone-div">
                        <input {...getInputProps()} />
                        {isDragActive ? <p>Drop the files here ...</p> :
                            <p>Drag 'n' drop some files here, or click to select files</p>}
                    </div>
                </div>
            </Styles></>)

}

export default DragDrop;