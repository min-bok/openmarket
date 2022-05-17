import { useEffect, useState } from 'react';
import styled from 'styled-components';

function Cartpage() {
    const [item, setItem] = useState([]);
    const arr = [];

    // GET API - POSTMAN
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
            setItem(JSON.parse(res))
          )
          .catch(error => console.log('error', error));
    },[])

    console.log(item.results)

    return(
        <>
            <h1>장바구니</h1>
        </>
    )
}

export default Cartpage;