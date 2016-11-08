import React from 'react';
import { connect } from 'react-redux';
import { Loc } from 'redux-react-i18n';

const mapStateToProps = ({ form: { countForm: {values: {count}} } }, ownProps ) => ({
    count
});

const Texts = ({ count }) => {
    return <div className='texts'>
                <p><Loc locKey="key_1"/></p>
                <p><Loc locKey="key_2" number={count}/></p>
    </div>;
};

export default connect(mapStateToProps)( Texts );
