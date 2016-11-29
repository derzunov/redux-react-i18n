import translate from 'translatr'
import React from 'react'
import { Text } from 'react-native'

const Loc = ({ currentLanguage, locKey, number, dictionary }) => {
    return <Text>
        { translate( dictionary, currentLanguage, locKey, number ) }
    </Text>
}

export default Loc