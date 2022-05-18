import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Counter from './Counter';
import { HiOutlineMinusSm } from "react-icons/hi";  // 마이너스 아이콘
import { HiOutlinePlusSm } from "react-icons/hi";  // 플러스 아이콘

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

const TotalWrap = styled.div`
  display: flex;
  width: 1280px;
  height: 150px;
  border-radius: 10px;
  background-color: #F2F2F2;
  margin: 70px 0 40px 0;
  align-items: center;
  justify-content: space-between;
  padding: 0 91px 0 112px;
`

const OrderBtn = styled.button`
  width: 220px;
  height: 68px;
  border-radius: 5px;
  background-color: #21BF48;
  border: none;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
`

const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Discount = styled(ProductPrice)``
const ShippingFee = styled(ProductPrice)``
const TotalPrice = styled(ProductPrice)``

const StyledHiOutlineMinusSm = styled(HiOutlineMinusSm)`
  width: 34px;
  height: 34px;
  background-color: #fff;
  border-radius: 50%;
  color: #c4c4c4;
  font-size: 18px;
`

const StyledHiOutlinePlusSm = styled(HiOutlinePlusSm)`
  width: 34px;
  height: 34px;
  background-color: #fff;
  border-radius: 50%;
  color: #c4c4c4;
  font-size: 18px;
`

function Cartpage() {
    document.title = 'HODU | 장바구니';
    const [item, setItem] = useState([]);
    const [goods, setGoods] = useState([]);

    // 장바구니에 저장된 상품 목록 불러오기
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `JWT ${localStorage.getItem('id')}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    useEffect(() => {
        fetch("https://openmarket.weniv.co.kr/cart/", requestOptions)
          .then(response => response.text())
          .then(res => 
            setItem(JSON.parse(res).results)
          )
          .catch(error => console.log('error', error));
    },[])

    const Test = () => {
      useEffect(() => {
        axios.get('https://openmarket.weniv.co.kr/products')
          .then(function (res) {
            const productlist = res.data.results;
          })
          .catch(function (error) {
            // 에러 핸들링
            console.log(error);
          })
          .then(function () {
            // 항상 실행되는 영역
          });
      }, [])
    }
    
    return(
      <>
        <Cont>
          <Checkbox type={'checkbox'} />
          <Img></Img>
          <InfoWrap>
            <P fontSize={'14px'} fontWeight={400} color={'#767676'}>백엔드글로벌</P>
            <ProductName fontSize={'18px'} fontWeight={400} color={'#000'}>딥러닝 개발자 무릎 담요</ProductName>
            <P fontSize={'16px'} fontWeight={700} color={'#000'}>17,500원</P>
            <Shippping fontSize={'14px'} fontWeight={400} color={'#767676'}>택배배송 / 무료배송</Shippping>
          </InfoWrap>
          <Counter></Counter>
          <OrderWrap>
            <P fontSize={'18px'} fontWeight={700} color={'#EB5757'}>17,500원</P>
            <Btn>주문하기</Btn>
          </OrderWrap>
        </Cont>

        <TotalWrap>
          <ProductPrice>
            <P fontSize={'16px'} fontWeight={400} color={'#000'}>총 상품금액</P>
            <P fontSize={'24px'} fontWeight={700} color={'#000'}>1000<Span fontSize={'16px'} fontWeight={400} color={'#000'}>원</Span></P>
          </ProductPrice>

          <StyledHiOutlineMinusSm />

          <Discount>
            <P fontSize={'16px'} fontWeight={400} color={'#000'}>상품할인</P>
            <P fontSize={'24px'} fontWeight={700} color={'#000'}>0<Span fontSize={'16px'} fontWeight={400} color={'#000'}>원</Span></P>
          </Discount>

          <StyledHiOutlinePlusSm />

          <ShippingFee>
            <P fontSize={'16px'} fontWeight={400} color={'#000'}>배송비</P>
            <P fontSize={'24px'} fontWeight={700} color={'#000'}>0<Span fontSize={'16px'} fontWeight={400} color={'#000'}>원</Span></P>
          </ShippingFee>
          <TotalPrice>
            <P fontSize={'16px'} fontWeight={700} color={'#000'}>결제 예정 금액</P>
            <P fontSize={'36px'} fontWeight={700} color={'#EB5757'}>46,500<Span fontSize={'18px'} fontWeight={400} color={'#EB5757'}>원</Span></P>
          </TotalPrice>
        </TotalWrap>
        <OrderBtn>주문하기</OrderBtn>
      </>
    )
}

export default Cartpage;