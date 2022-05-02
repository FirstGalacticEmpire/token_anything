import {FC} from "react";
import {useLocation} from 'react-router-dom'

interface Props {
    errorMessage?: string
}

const PathDoesNotExist: FC<Props> = ({errorMessage}): JSX.Element => {
    const location = useLocation();
    return (<>
        Path "{location.pathname}" does not exist {errorMessage}
    </>)
}
export default PathDoesNotExist