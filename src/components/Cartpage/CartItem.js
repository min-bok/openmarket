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
  const [total, SetTotal] = useState([]);

    useEffect(() => {
      axios.get(`https://openmarket.weniv.co.kr/products`)
      .then(function(res) {
        // 모든 제품 데이터
        const dataSet = res.data.results;
        const PRODUCTID = props.getItem.map(x => x.product_id)

        // 총 가격 구해서 넘겨주기
        // useState 문제 해결해야함
        for (const Num of PRODUCTID) {
          for (const i of dataSet) {
            if(i.product_id === Num) {
              // setGoods((prev) => [...prev, i])
              console.log(i)
            }
          }
          }
        }
      )
    },[])

    console.log(props.getItem)

    return(
      <>
      {goods.map(data => {
        return(
          <Cont key={data.product_id}>
          <Checkbox type={'checkbox'} />
          <Img src={data.image} />
          <InfoWrap>
            <P fontSize={'14px'} fontWeight={400} color={'#767676'}>{data.seller_store}</P>
            <ProductName fontSize={'18px'} fontWeight={400} color={'#000'}>{data.product_name}</ProductName>
            <P fontSize={'16px'} fontWeight={700} color={'#000'}>{data.price}원</P>
            <Shippping fontSize={'14px'} fontWeight={400} color={'#767676'}>{data.shipping_method} / {data.shipping_fee}</Shippping>
          </InfoWrap>
        
          {/* <Counter props={props.getItem.quantity}></Counter> */}
        
          <OrderWrap>
            <P fontSize={'18px'} fontWeight={700} color={'#EB5757'}>{(1) * (data.price)}원</P>
            <Btn>주문하기</Btn>
          </OrderWrap>
        </Cont>
        )
      })}
      </>
    )
}

export default CartItem;