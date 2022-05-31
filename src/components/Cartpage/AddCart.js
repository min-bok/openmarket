import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const PutItem = styled.button`
    position: absolute;
    width: 200px;
    height: 60px;
    border-radius: 5px;
    border: none;
    background-color: #767676;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    bottom: 0;
`

const Hr = styled.hr`
  width: 100%;
  border: 1px solid #c4c4c4;
`

const Cont =  styled.div`
    display: flex;
    width: 150px;
    height: 50px;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid #C4C4C4;
    margin: 30px 0 30px 0;
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

const TotalPrice = styled.div`
  display: flex;
  align-items: baseline;
`

const P =  styled.p`
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
    color: ${({ color }) => color};
`

const TotalNum = styled(P)`
  padding: 0 11px 0 0;
  margin: 0 11px 0 0;
  border-right: 1px solid #767676;
`

const Span =  styled.span`
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
    color: ${({ color }) => color};
`

function AddCart({ id, price }) {
  const [putItem, setPutItem] = useState([]);
  const [count, setCount] = useState(1);

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

  const handletPutCart = () => {
    axios({
      method: 'POST',
      url: `https://openmarket.weniv.co.kr/cart/`,
      data: {
        "product_id": id,
        "quantity": count,
        "check": false
      },
      headers: {'Authorization': `JWT ${localStorage.getItem('id')}`}
    })
    .then(function (response) {
      // console.log(response.data)
      setPutItem(response.data)
      alert('상품이 장바구니에 담겼습니다')
    })
    .catch(function (error) {
      alert(error.response.data.FAIL_message)
    })
  }

    return(
      <>
      <Hr />
        <Cont>
            <Minus onClick={countDown}>-</Minus>
            <Num>{count}</Num>
            <Plus onClick={countUp}>+</Plus>
        </Cont>
      <Hr />

        <TotalPrice>
          <TotalNum fontSize={'18px'} fontWeight={400} color={'#767676'}>총 수량 <Span fontSize={'18px'} fontWeight={700} color={'#21BF48'}> {count}</Span> 개</TotalNum>
          <P fontSize={'36px'} fontWeight={700} color={'#21BF48'}>{count * price}<Span fontSize={'18px'} fontWeight={400} color={'#21BF48'}>원</Span></P>
        </TotalPrice>
      
        <PutItem onClick={handletPutCart}>장바구니</PutItem>
      </>
      
    )
}

export default AddCart;