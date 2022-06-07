import styled from 'styled-components';
import { HiOutlineMinusSm } from "react-icons/hi";  // 마이너스 아이콘
import { HiOutlinePlusSm } from "react-icons/hi";  // 플러스 아이콘
import { useEffect, useState } from 'react';

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

const OrderBtn = styled.button`
  width: 220px;
  height: 68px;
  border-radius: 5px;
  background-color: #21BF48;
  border: none;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 160px 0;
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

function TotalPriceCart(props) {
    return(
        <>
        <TotalWrap>
            <ProductPrice>
              <P fontSize={'16px'} fontWeight={400} color={'#000'}>총 상품금액</P>
              {/* <P fontSize={'24px'} fontWeight={700} color={'#000'}>{price}<Span fontSize={'16px'} fontWeight={400} color={'#000'}>원</Span></P> */}
            </ProductPrice>

            <StyledHiOutlineMinusSm />

            <Discount>
              <P fontSize={'16px'} fontWeight={400} color={'#000'}>상품할인</P>
              <P fontSize={'24px'} fontWeight={700} color={'#000'}>0<Span fontSize={'16px'} fontWeight={400} color={'#000'}>원</Span></P>
            </Discount>

            <StyledHiOutlinePlusSm />

            <ShippingFee>
              <P fontSize={'16px'} fontWeight={400} color={'#000'}>배송비</P>
              {/* <P fontSize={'24px'} fontWeight={700} color={'#000'}>{shipping_fee}<Span fontSize={'16px'} fontWeight={400} color={'#000'}>원</Span></P> */}
            </ShippingFee>
            <TotalPrice>
              {/* <P fontSize={'16px'} fontWeight={700} color={'#000'}>결제 예정 금액</P>
              <P fontSize={'36px'} fontWeight={700} color={'#EB5757'}>{price + shipping_fee}<Span fontSize={'18px'} fontWeight={400} color={'#EB5757'}>원</Span></P> */}
            </TotalPrice>
            </TotalWrap>
            <OrderBtn>주문하기</OrderBtn>
        </>
    )
}

export default TotalPriceCart;