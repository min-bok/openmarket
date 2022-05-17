import { useState } from 'react';
import styled from 'styled-components';

const Cont =  styled.div`
    display: flex;
    width: 150px;
    height: 50px;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid #C4C4C4;
`

const Plus =  styled.button`
    width: 100%;
    /* background-color: red; */
    font-size: 24px;
    color: #C4C4C4;
    border: none;
`
const Num =  styled.input`
    width: 100%;
    background-color: #FFFFFF;
    text-indent: 50%;
    border: 1px solid #C4C4C4;
    border-top: none;
    border-bottom: none;
`
const Minus =  styled.button`
    width: 100%;
    background-color: #FFFFFF;
    font-size: 24px;
    color: #C4C4C4;
    border: none;
`

function Counter() {
    const [count, setCount] = useState(0);

    const countUp = () => {
        setCount(count + 1)
    }

    const countDown = () => {
        setCount(count - 1)
    }

    return(
        <Cont>
            <Minus onClick={countDown}>-</Minus>
            <Num></Num>
            <Plus onClick={countUp}>+</Plus>
        </Cont>
    )
}

export default Counter;