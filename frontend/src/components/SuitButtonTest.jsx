import React from "react";

const SuitButton = ({getSuits}) => {
    return(
        <>
            <button id="allSuits" type="submit" onClick={getSuits} > suits </button>
        </>
    )
}

export default SuitButton