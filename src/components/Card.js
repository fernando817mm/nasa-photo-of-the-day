import React from 'react';

export default function Card(props){
    const { title, date, url, explanation } = props;
    return (
        <div>
            <h2>{title}</h2>
            <p>{date}</p>
            <img src={url} alt='' />
            <p>{explanation}</p>
        </div>
    )
}