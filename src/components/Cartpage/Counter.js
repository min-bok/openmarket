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
    background-color: #FFFFFF;
    font-size: 24px;
    color: #C4C4C4;
    border: none;
`
const Num =  styled.p`
    width: 100%;
    background-color: #FFFFFF;
    border: 1px solid #C4C4C4;
    text-align: center;
    border-top: none;
    border-bottom: none;
    padding-top: 0.813rem;
`
const Minus =  styled.button`
    width: 100%;
    background-color: #FFFFFF;
    font-size: 24px;
    color: #C4C4C4;
    border: none;
`

// 수량 이상 못 올라가는거랑 버튼 죽이기 구현 필요함

function Counter({ props }) {
    const [count, setCount] = useState(props);
    // const [btnState, setBtnState] = useState(false);

    const countUp = () => {
        setCount(count + 1)
    }

    const countDown = () => {
        for(let i = count; i > 1; i--) {
            setCount(count - 1);
        }

        if (count === 1) {
            alert('주문가능한 최소 수량은 1개 입니다.')
        }
    }
    
    return(
        <>
        <Cont>
            <Minus onClick={countDown}>-</Minus>
            <Num>{props}</Num>
            <Plus onClick={countUp}>+</Plus>
        </Cont>
        </>
    )
}

export default Counter;