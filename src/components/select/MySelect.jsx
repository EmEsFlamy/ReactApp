import React from 'react';
import './mySelect.scss';

const MySelect = ({value, onChange, defaultValue, options}) => {
    return (
        <select 
            value={value}
            onChange={e => onChange(e.target.value)}
            className='mySelect'
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map(option => 
                <option key={option.name} value={option.value}>
                    {option.name}
                </option>    
            )}
        </select>
    );
};

export default MySelect;