import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import Texts from './Texts'
import LanguageSwitcher from './LanguageSwitcher'

const mapStateToProps = ( state, ownProps ) => {
    return {}
};

let initialValues = {
    initialValues: {
        count: 3
    }
}

const App = ( { children } ) => {
    return <div className='app'>
        <div className="container">
            <div className="row">
                <h1> i18n for your React/Redux project! </h1>

                <LanguageSwitcher></LanguageSwitcher>

                <Form { ...initialValues } />
                <br/>
                <Texts/>
                { children }
            </div>
        </div>

    </div>
}

export default connect( mapStateToProps )( App )
