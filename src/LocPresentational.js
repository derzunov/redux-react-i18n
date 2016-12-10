import translate from 'translatr'
import React from 'react'

const Loc = ({ currentLanguage, locKey, number, dictionary }) => {
    return React.DOM.text({}, translate( dictionary, currentLanguage, locKey, number ));
}

export default Loc
