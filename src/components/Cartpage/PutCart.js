import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Form = styled.form``

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

function PutCart() {
    const [getItem, setGetItem] = useState([]);

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `JWT ${localStorage.getItem('id')}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "product_id": 3,
          "quantity": 2,
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
          .then(res => setGetItem(JSON.parse(res)))
          .catch(error => console.log('error', error));
    },[])

    console.log(getItem)


    return(
        <Form>
            <PutItem>장바구니</PutItem>
        </Form>
    )
}

export default PutCart;