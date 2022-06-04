import styled from 'styled-components';
import Counter from './Counter';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cont = styled.div`
  position: relative;
  display: flex;
  width: 1280px;
  height: 200px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #C4C4C4;
  align-items: center;
  padding: 0 100px 0 30px;
  margin: 0 0 10px 0;
`

const Checkbox =  styled.input``

const Img = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 10px;
  background-color: pink;
  margin: 0 50px 0  40px;
`

// 추후 말 줄임표 구현할 것
const InfoWrap = styled.div`
  width: 300px;
  margin: 0 150px 0 0;
  /* background-color: antiquewhite; */
`

const P = styled.p`
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
    color: ${({ color }) => color};
`

const Span =  styled.span`
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
    color: ${({ color }) => color};
`

const ProductName = styled(P)`
  margin: 10px 0 10px 0;
`

const Shippping = styled(P)`
  margin: 40px 0 0 0;
`

const OrderWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 100px;
`

const Btn =  styled.button`
  width: 130px;
  height: 40px;
  border-radius: 5px;
  background-color: #21BF48;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  margin: 26px 0 0 0;
  cursor: pointer;
`

function CartItem(props) {
  const [goods, setGoods] = useState([]);
    // console.log(props.getItem)

    useEffect(() => {
      axios.get(`https://openmarket.weniv.co.kr/products`)
      .then(function(res) {
        const dataset = res.data.results;

        // console.log(props.getItem)
        // console.log(Array.isArray(props.getItem))

        // for (const i of props.getItem) {
        //   console.log(i)
        // }
      })
    },[])

    return(
        <>
        {/* <Cont>
          <Checkbox type={'checkbox'} />
          <Img src={props.goods.image} />
          <InfoWrap>
            <P fontSize={'14px'} fontWeight={400} color={'#767676'}>{props.goods.seller_store}</P>
            <ProductName fontSize={'18px'} fontWeight={400} color={'#000'}>{props.goods.product_name}</ProductName>
            <P fontSize={'16px'} fontWeight={700} color={'#000'}>{props.goods.price}원</P>
            <Shippping fontSize={'14px'} fontWeight={400} color={'#767676'}>{props.goods.shipping_method} / {props.goods.shipping_fee}</Shippping>
          </InfoWrap>

          <Counter props={props.product_id.quantity}></Counter>

          <OrderWrap>
            <P fontSize={'18px'} fontWeight={700} color={'#EB5757'}>{(props.product_id.quantity) * (props.goods.price)}원</P>
            <Btn>주문하기</Btn>
          </OrderWrap>
        </Cont> */}
      </>
    )
}

export default CartItem;