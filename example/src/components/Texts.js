import React from 'react';
import { connect } from 'react-redux';
import { Loc } from 'redux-react-i18n';

const mapStateToProps = ({ form: { countForm: {values: {count}} } }, ownProps ) => ({
    count
});

const Texts = ({ count }) => {
    return <div className='texts'>
                <p>
                    <h3><Loc locKey="key_1"/></h3>
                </p>
                <p>
                    <h3 style={{color: "red"}}><Loc locKey="key_2" number={count}/></h3>
                </p>
                <p>
                    <h3><Loc locKey="key_3" number={count}/></h3>
                </p>
    </div>;
};

export default connect(mapStateToProps)( Texts );
