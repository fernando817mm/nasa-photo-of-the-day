import React, { useState, useEffect } from 'react';

const Input = props => {
    return (
        <div>
            <label htmlFor='apod'>How many APOD would you like? (1-50)</label>
            <form type='number' id='apod' name='apod' min='1' max='50'>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </form>
        </div>
    )
}

export default Input;
