import React from 'react';

const Option = (props) => {
    const optionArray = [];
    for(let i = 1; i < 51; i++){
        optionArray.push(<option key={i}>{i}</option>)
    }
    return optionArray;
}

export default Option;