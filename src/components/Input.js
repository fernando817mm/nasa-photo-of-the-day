import React from 'react';
import Option from './Option';

const Input = props => {
    return (
        <div>
            <label htmlFor='apod'>How many APOD would you like? (1-50)</label>
            <form type='number' id='apod' name='apod' min='1' max='50'>
                <select>
                    <Option />
                </select>
                <input type='submit' value='Submit'></input>
            </form>
        </div>
    )
}

export default Input;
