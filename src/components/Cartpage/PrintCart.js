import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Counter from './Counter';
import TotalPriceCart from './TotalPriceCart';

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

const InfoWrap = styled.div`
  margin: 0 250px 0 0;
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
`

function GetCartItem() {
  document.title = 'HODU | 장바구니';
  const [getItem, setGetItem] = useState([]);
  // const [goods, setGoods] = useState([]);

  useEffect(() => {
    // 장바구니에 저장된 상품 정보 가져오기
    axios({
      method: 'get',
      url: `https://openmarket.weniv.co.kr/cart/`,
      headers: {'Authorization': `JWT ${localStorage.getItem('id')}`}
    })
    .then(function (res) {
      const dataSet = res.data.results;
      setGetItem(dataSet)
    })
    .catch(function (error) {
      // 에러 핸들링
      console.log(error);
    })
  },[])
  
  return(
    <>
    {getItem.map((data) => {
      return(
        <PrintCartItem product_id={data.product_id} quantity={data.quantity} key={data.cart_item_id} />
      )
    })}
    </>
  )
}

function PrintCartItem(product_id) {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    axios.get(`https://openmarket.weniv.co.kr/products`)
    .then(function (res) {
        const dataSet = res.data.results;
        for (let i of dataSet) {
          if(i.product_id == product_id.product_id) {
            setGoods(i)
          }
        }
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      })
      .then(function () {
        // 항상 실행되는 영역
      });
    }, [])

    return(
      <>
        <Cont>
          <Checkbox type={'checkbox'} />
          <Img src={goods.image}></Img>
          <InfoWrap>
            <P fontSize={'14px'} fontWeight={400} color={'#767676'}>{goods.seller_store}</P>
            <ProductName fontSize={'18px'} fontWeight={400} color={'#000'}>{goods.product_name}</ProductName>
            <P fontSize={'16px'} fontWeight={700} color={'#000'}>{goods.price}원</P>
            <Shippping fontSize={'14px'} fontWeight={400} color={'#767676'}>{goods.shipping_method} / {goods.shipping_fee}</Shippping>
          </InfoWrap>

          <Counter props={product_id.quantity}></Counter>

          <OrderWrap>
            <P fontSize={'18px'} fontWeight={700} color={'#EB5757'}>{(product_id.quantity) * (goods.price)}원</P>
            <Btn>주문하기</Btn>
          </OrderWrap>
        </Cont>
      </>
    )
}

export default GetCartItem;