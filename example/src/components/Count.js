import React from 'react'

const Count = ({ input: { value, onChange } }) => {
    return (<div>
        <div>
            <button className="btn btn-default" type="button" onClick={() => onChange(value + 1)}>+1</button>
            <button className="btn btn-default" type="button" onClick={() => onChange(value - 1)}>-1</button>
        </div>
    </div>);
};

export default Count;
