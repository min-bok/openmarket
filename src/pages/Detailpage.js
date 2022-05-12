import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Product = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: pink;
    padding: 0 320px 0 320px;
`

const Img = styled.img`
    width: 600px;
    height: 600px;
    background-color: aliceblue;
    margin-right: 50px;
`

const TextWrap = styled.div`
    width: 630px;
    height: 600px;
    background-color: palegoldenrod;
`
const Text = styled.p`
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
`

const Store = styled(Text)`
    color: #767676;
`
const Title = styled(Text)`
    margin: 16px 0 20px 0;
`
const Price = styled(Text)``

const PriceWrap = styled.div`
    display: flex;
    align-items: baseline;
`

const Shipping = styled.div`
    display: flex;
`

const Method = styled(Text)`
    color: #767676;
`
const Fee = styled(Text)`
    color: #767676;
`

function Detailpage() {
    const [goods, setGoods] = useState([]);
    let test = useParams().id;

    useEffect(() => {
        axios.get(`https://openmarket.weniv.co.kr/products/?id=${test}`)
        .then(function (response) {
            let data = response.data.results;
            setGoods(data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [test]);

    return (
        <>
            {goods.map(data => { 
                return (
                    <Product key={data.product_id}>
                    <Img src={data.image}></Img>
                    <TextWrap>
                        <Store fontSize={"18px"} fontWeight={400}>{data.seller_store}</Store>
                        <Title fontSize={"36px"} fontWeight={400}>{data.product_name}</Title>
                        <PriceWrap>
                            <Price fontSize={"36px"} fontWeight={700}>{data.price}</Price><span>원</span>
                        </PriceWrap>

                        {/* <Counter /> */}

                        <Shipping>
                            <Method fontSize={"16px"} fontWeight={400}>{data.shipping_method}</Method>
                            <Fee fontSize={"16px"} fontWeight={400}>{data.shipping_fee}</Fee>
                        </Shipping>
                    </TextWrap>
                    </Product>
                )
            })}
            </>
    )
}

export default Detailpage;