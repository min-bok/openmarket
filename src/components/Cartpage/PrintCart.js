import { useEffect, useState } from 'react';
import axios from 'axios';
import CartItem from './CartItem';

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
        <CartItem goods={goods} product_id={product_id}/>
      </>
    )
}

export default GetCartItem;