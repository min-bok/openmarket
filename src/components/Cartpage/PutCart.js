import { useState } from 'react';
import styled from 'styled-components';

const PutItem = styled.button`
    width: 200px;
    height: 60px;
    border-radius: 5px;
    border: none;
    background-color: #767676;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
`

function PutCart({ id }) {
  const [putItem, setPutItem] = useState([]);
  
    const test = () => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `JWT ${localStorage.getItem('id')}`);
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "product_id": id,
        "quantity": 0,
        "check": false
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://openmarket.weniv.co.kr/cart/", requestOptions)
        .then(response => response.text())
        .then(res => 
          setPutItem(JSON.parse(res)),
          alert('상품이 장바구니에 담겼습니다.')
        )
        .catch(error => console.log('error', error));
    }

    console.log(putItem)


    return(
          <PutItem onClick={test}>장바구니</PutItem>
    )
}

export default PutCart;