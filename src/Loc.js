import React from 'react';
import { connect } from 'react-redux';

// Import presentational component
import Loc from './LocPresentational';

// The component expects that reducer will be named as i18n
const mapStateToProps = ( { i18n: { currentLanguage, dictionaries } }, { locKey, number } ) => ({
    currentLanguage,
    locKey,
    dictionary: dictionaries[ currentLanguage ]
});

export default connect( mapStateToProps )( Loc );
