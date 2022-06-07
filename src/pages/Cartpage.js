import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import TotalPriceCart from '../components/Cartpage/TotalPriceCart';
import DeleteCart from '../components/Cartpage/DeleteCart';
import CartItem from '../components/Cartpage/CartItem';

const Cart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CartHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 90px;
  margin: 0 0 35px 0;
`

const CartTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #000000;
  margin: 54px 0 52px 0;
`

const TabTitle = styled.div`
  display: flex;
  width: 1280px;
  height: 60px;
  border-radius: 10px;
  background-color: #F2F2F2;
  align-items: center;
  justify-content: space-between;
  padding: 0 131px 0 30px;
`

const Checkbox = styled.input`
  /* display: none; */
`

const P = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #000;
`

function GetCartItem() {
  document.title = 'HODU | 장바구니';
  const [getItem, setGetItem] = useState([]);

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
        <>
        <Cartpage product_id={data.product_id} quantity={data.quantity} key={data.cart_item_id} />
        </>
      )
    })}
    </>
  )
}

function Cartpage(props) {
  document.title = 'HODU | 장바구니';
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    axios.get(`https://openmarket.weniv.co.kr/products`)
    .then(function (res) {
        const dataSet = res.data.results;

        console.log(dataSet)
        // for (let i of dataSet) {
        //   if(i.product_id == props.product_id) {
        //     setGoods(i)
        //   }
        // }
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      })
      .then(function () {
        // 항상 실행되는 영역
      });
    }, [])

    console.log(goods)

    return(
      <Cart>
      <Header />
      <CartHeader>
          <CartTitle>장바구니</CartTitle>
          <TabTitle>
              {/* <Label for='check'></Label> */}
              <Checkbox type={'checkbox'} id='check' />
              <P>상품정보</P>
              <P>수량</P>
              <P>상품금액</P>
          </TabTitle>
      </CartHeader>
      <CartItem goods={goods} product_id={props.product_id} quantity={props.quantity}/>
      <DeleteCart />
      <TotalPriceCart />
      </Cart>
    )
}

export default GetCartItem;