import styled from 'styled-components';
import Header from '../components/Header';
import PrintCart from '../components/Cartpage/PrintCart';
import TotalPriceCart from '../components/Cartpage/TotalPriceCart';
import DeleteCart from '../components/Cartpage/DeleteCart';

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

function Cartpage() {
    
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
      <PrintCart />
      <DeleteCart />
      <TotalPriceCart />
      </Cart>
    )
}

export default Cartpage;