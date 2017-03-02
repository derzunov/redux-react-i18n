import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import Count from './Count'

let normalize = ( value ) => {
    return Math.abs( value )
}

const CountFormComponent = () => {
    return (<form>
        <div>
            <Field normalize={normalize} name="count" component={Count}/>
        </div>
    </form>)
};

// Decorate the form component
const CountForm = reduxForm({
    form: 'countForm' // a unique name for this form
})( CountFormComponent )

export default CountForm
