import React, {FC} from "react";

interface Props {
    message?: string
}

const LandingPage: FC<Props> = ({message}): JSX.Element => {

    return (<>
        Landing Page! {message}
    </>)
}
export default LandingPage