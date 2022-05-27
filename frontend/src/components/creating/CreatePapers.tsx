import React, {FC} from 'react';
import {useLocation} from "react-router-dom";

interface locationData {
    name: string
    description: string
}

const CreatePapers: FC = () => {
    const location = useLocation();
    const data: any = location.state;
    // const name: string = data.name
    console.log(data);
    // console.log("XD,", props)
    // console.log(name)

    return (<>
        My data from props:
        <p>{data.name}</p>
        {/*<p>{description}</p>*/}
    </>)


}

export default CreatePapers