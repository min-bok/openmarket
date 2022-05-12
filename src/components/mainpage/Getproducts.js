import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const ProductsList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  background-color: #FFF;
  padding: 80px 320px 102px 320px;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 380px;
  height: 490px;
  margin-bottom: 78px;
  cursor: pointer;
`

const Img = styled.img`
  height: 380px;
  width: 380px;
  border-radius: 10px;
  border: 1px solid #C4C4C4;
  margin-bottom: 6px;
`

const Title = styled.p`
  font-size: ${({ fontSize  }) => fontSize };
  font-weight: ${({ fontWeight  }) => fontWeight };
`
const StoreName = styled(Title)`
  color: rgb(118, 118, 118);
`

const PriceUnit = styled.div`
  display: flex;
  align-items: center;
`

const Price = styled(Title)``
const Unit = styled(Title)``

// function Printproduct({product}) {
//   return(
//     <Wrap key={product.product_id}>
//       <Img src={product.image} />
//       <StoreName fontSize={'16px'} fontWeight={'400'}>{product.seller_store}</StoreName>
//       <Title fontSize={'18px'} fontWeight={'400'}>{product.product_name}</Title>
//       <PriceUnit>
//         <Price fontSize={'24px'} fontWeight={'700'}>{product.price}</Price>
//         <Unit fontSize={'16px'} fontWeight={'400'}>원</Unit>
//       </PriceUnit>
//     </Wrap>
//   )
// }

function Getproducts() {
    const [products, setProducts] = useState([]);

    const url = "https://openmarket.weniv.co.kr/products/"

    useEffect(() => {
        axios.get(url)
        .then(function (response) {
            const dataSet = response.data.results;
            setProducts(dataSet);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

    return (
      <>
      <ProductsList>
        {products && products.map((product) => (
          <Link to ={`/goods/${product.product_id}`} key={product.product_id}>
            <Wrap>
      <Img src={product.image} />
      <StoreName fontSize={'16px'} fontWeight={'400'}>{product.seller_store}</StoreName>
      <Title fontSize={'18px'} fontWeight={'400'}>{product.product_name}</Title>
      <PriceUnit>
        <Price fontSize={'24px'} fontWeight={'700'}>{product.price}</Price>
        <Unit fontSize={'16px'} fontWeight={'400'}>원</Unit>
      </PriceUnit>
    </Wrap>
          </Link>  
        ))}
      </ProductsList>

      </>
    )
}

export default Getproducts;