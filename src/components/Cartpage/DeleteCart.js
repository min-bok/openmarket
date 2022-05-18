import { HiX } from "react-icons/hi";
import { useState } from 'react';
import axios from "axios";
import styled from 'styled-components';

const Delete = styled.p`
  display: flex;
  align-self: flex-end;
  margin: 0 268px 0 0;
`

function DeleteCart() {
  const AllDelete = () => {

  // 장바구니의 모든 상품 삭제
  axios({
    method: 'delete',
    url: `https://openmarket.weniv.co.kr/cart/`,
    headers: {'Authorization': `JWT ${localStorage.getItem('id')}`}
  })
  .then(function (response) {
    // 성공 핸들링
    if(response.status == 204) {
      alert('장바구니의 모든 상품이 삭제되었습니다.')
      window.location.reload();
    }
  })
  .catch(function (error) {
    // 에러 핸들링
    console.log(error);
  })
}

    return(
        <Delete onClick={AllDelete}>전체삭제</Delete>
    )
}

export default DeleteCart;