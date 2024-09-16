import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    max-width: 80%;
    margin: auto;
    border-bottom: 2px solid white;

    & img{
        max-width: 50%;
        height: auto;
        margin: 2% auto;
        transition: all 0.3s ease-in-out;
        border: 5px solid white;

        &:hover{
            margin: 0 auto;
            filter: grayscale(1);
        }

        &:hover ~ p:nth-of-type(2){
            transition: all 0.3s ease-in-out;
            display: block;
            font-weight: bold;
            color: white;
        }
    }

    & h2{
        color: white;
        font-size: 2rem;
        text-align: center;
    }

    & p:nth-of-type(2){
        z-index: 10;
        width: 50%;
        margin: 2.5% auto;
        text-align: left;
        line-height: 1.5;
        display: none;
        transition: all 0.3s ease-in-out;
    }

    & p:first-of-type{
        font-style: italic;
        text-align: center;
        font-size: .8rem;
        padding: 0;
        margin: 0 auto;
        color: white;
    }

    & h2:first-of-type{
        padding-top: 10vh;
    }
`

export default function Card(props){
  const { title, date, url, explanation } = props;
  return (
        <Div>
            <h2>{title}</h2>
            <p>{date}</p>
            <img src={url} alt='' />
            <p>{explanation}</p>
        </Div>
    );
}
