import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../components/Header';
import AddCart from '../components/Cartpage/AddCart';
import Cartpage from './Cartpage';
import Counter from '../components/Cartpage/Counter';
import { count } from '../components/Cartpage/Counter';

const Wrap = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  padding: 170px 0 0 0;
`

const Img = styled.img`
  width: 600px;
  height: 600px;
`

const RightSideWrap = styled.div`
  position: relative;
  margin-left: 50px;
`

const Store = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #767676;
`
const Title = styled.p`
  font-size: 36px;
  font-weight: 400;
  color: #000;
  margin: 16px 0 20px 0;
`
const Price = styled.p`
  font-size: 36px;
  font-weight: 700;
`
const Shipping = styled.p``

function Goodspage({ count }) {
    document.title = 'HODU | 제품 상세';

    let id= useParams().id;
    const url = `https://openmarket.weniv.co.kr/products`;

    // 상품 정보 출력
    const [goods, setGoods] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then(function (response) {
            let dataSet = response.data.results;
            for (const i of dataSet) {
              if(i.product_id == id) {
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
        <Header />
        <Wrap>
            <Img src={goods.image}></Img>
            <RightSideWrap>
              <Store>{goods.seller_store}</Store>
              <Title>{goods.product_name}</Title>
              <Price>{goods.price}</Price>
              <Shipping>{goods.shipping_method} / {goods.shipping_fee}</Shipping>
              <Counter price={goods.price}/>
              <AddCart id={id}/>
            </RightSideWrap>
        </Wrap>
      </>
    )
}


export default Goodspage;