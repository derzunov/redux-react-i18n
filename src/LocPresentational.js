import translate from 'translatr'
import React from 'react'

const Loc = ( { currentLanguage, locKey, number, dictionary, dispatch, ...rest } ) => {
    return <span { ...rest }>
        { translate( dictionary, currentLanguage, locKey, number ) }
    </span>
}

export default Loc
