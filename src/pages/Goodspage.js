import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../components/Header'

const Cont = styled.div`
  padding-top: 5.625rem;
`

const Img = styled.img``

const Title = styled.p``
const Store = styled.p``
const Price = styled.p``

const ShippingWrap = styled.div``
const ShippingMethod = styled.p``
const ShippingPrice = styled.p``

function Goodspage() {
    document.title = 'HODU | 제품 상세';

    let id= useParams().id;
    const url = `https://openmarket.weniv.co.kr/products?product_id=${id}`;

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
          <Cont key={goods.product_id}>
            <Img src={goods.image}></Img>
            <Store>{goods.seller_store}</Store>
            <Title>{goods.product_name}</Title>
            <Price>{goods.price}</Price>
            <ShippingWrap>
              <ShippingMethod>{goods.shipping_method}</ShippingMethod>
              <ShippingPrice>{goods.shipping_fee}</ShippingPrice>
            </ShippingWrap>
          </Cont>
        </>
    )
}


export default Goodspage;