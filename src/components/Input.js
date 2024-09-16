import React from 'react';
import Option from './Option';
import styled from 'styled-components';

const Header = styled.div`
    width: 100%;
    height: 10vh;
    margin-top: 0;
    padding-top: 0;
    overflow: hidden;
    position: fixed;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    background: rgba(122, 121, 120, .5);

    & h1{
        margin-left: 2%;
        justify-content: center;
        align-self: center;
        vertical-align: center;
        color: white;
        font-size: 3rem;
    }

    & form{
        display: flex;
        flex-direction: column;
        color: white;
        font-size: 1.3rem;
        margin-right: 2%;
        justify-content: center;
        align-items: center;
        font-weight: bold;

        & div{
            margin-top: 3%;
            display: flex;
            justify-content: space-around;
            width: 40%;
        }

        & select{
            width: auto;
            margin: 1% auto;
            background: none;
            border: none;
            color: white;
            overflow: auto;

            &:hover{
                cursor: pointer;
            }
        }

        & input{
            background: none;
            border: 1px solid white;
            padding: 1% 3%;
            color: white;

            &:hover{
                cursor: pointer;
                background: white;
                color: black;
            }
        }
    }
`

const Input = props => {
    return (
        <Header>
            <h1>NASA APOD</h1>

            <form type='number' id='apod' name='apod' min='1' max='50'>
                <label htmlFor='apod'>How many APOD would you like?</label>
                <div>
                    <select>
                        <Option />
                    </select>
                    <input type='submit' value='Submit'></input>
                </div>
            </form>
        </Header>
    )
}

export default Input;
