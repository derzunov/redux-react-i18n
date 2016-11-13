import translate from 'translatr'
import React from 'react'

const Loc = ({ currentLanguage, locKey, number, dictionary }) => {
    return <span>
        { translate( dictionary, currentLanguage, locKey, number ) }
    </span>
}

export default Loc