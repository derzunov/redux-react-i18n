import React from 'react'
import { connect } from 'react-redux'
import { i18nActions } from 'redux-react-i18n'

const mapStateToProps = ( { i18n: { currentLanguage } }, ownProps ) => ( {
    currentLanguage
} )

const mapDispatchToProps = ( dispatch ) => ( {
    switchLanguage: ( code ) => dispatch( i18nActions.setCurrentLanguage( code ) )
} )

const LanguageSwitcher = ( {currentLanguage, switchLanguage} ) => {
    return (
        <div style={{margin: '20px 0px 20px 0px'}}>
            <button className="btn btn-default" disabled={ currentLanguage === 'en-US' } type="button" onClick={ () => switchLanguage( 'en-US' ) }>English</button>
            <button className="btn btn-default" disabled={ currentLanguage === 'ru-RU' } type="button" onClick={ () => switchLanguage( 'ru-RU' ) }>Русский</button>
            <button className="btn btn-default" disabled={ currentLanguage === 'pl' } type="button" onClick={ () => switchLanguage( 'pl' ) }>Polish</button>
            <button className="btn btn-default" disabled={ currentLanguage === 'fr' } type="button" onClick={ () => switchLanguage( 'fr' ) }>French</button>
            <button className="btn btn-default" disabled={ currentLanguage === 'be' } type="button" onClick={ () => switchLanguage( 'be' ) }>Белорусский</button>
        </div>)
}

export default connect( mapStateToProps, mapDispatchToProps )( LanguageSwitcher )
