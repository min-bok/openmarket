import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CartItem from './CartItem';

const Wrap = styled.div``

function PrintCart(props) {

    return(
      <Wrap>
        <CartItem goods={props.goods} product_id={props.product_id} quantity={props.quantity}/>
      </Wrap>
    )
}

export default PrintCart;