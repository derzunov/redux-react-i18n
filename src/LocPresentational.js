import translate from 'translatr'
import React from 'react'

const Loc = ({ currentLanguage, locKey, number, dictionary, dispatch, ...rest }) => {
  return <React.Fragment {...rest}>{translate(dictionary, currentLanguage, locKey, number)}</React.Fragment>
}

export default Loc
