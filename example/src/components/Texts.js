import React from 'react'
import { connect } from 'react-redux'
import { Loc } from 'redux-react-i18n'

const mapStateToProps = ( { form: { countForm: { values: { count } } } } ) => ( {
    count
} )

const Texts = ( { count } ) => {
    return <div className='texts'>
                <div>
                    <h3><Loc locKey="key_1"/></h3>
                </div>
                <div>
                    <h3><Loc locKey="key_2" number={count} style={{color: "red"}}/></h3>
                </div>
                <div>
                    <h3><Loc locKey="key_3" number={count}/></h3>
                </div>

                <div>
                    <h3><Loc locKey="key_4.nested_1"/></h3>
                </div>
                <div>
                    <h3><Loc locKey="key_4.nested_2"/></h3>
                </div>
    </div>
}

export default connect( mapStateToProps )( Texts )
