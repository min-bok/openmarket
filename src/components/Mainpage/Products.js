import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 30.625rem;
`

const Img = styled.img`
    width: 23.75rem;
    height: 23.75rem;
    border-radius: 10px;
    background-color: aqua;
    border: 1px solid #C4C4C4;
    margin-bottom: 0.375rem;
`

const Seller = styled.p`
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
    color: ${({ color }) => color};
`

const Title = styled(Seller)``
const Price = styled(Seller)``

function Products() {
    const url = `https://openmarket.weniv.co.kr/products/`;

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then(function (response) {
            const productData = response.data.results;
            setProduct(productData);
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
            {product.map((product) => (
                <Link to = {`/goods/${product.product_id}`} key={product.product_id}>
                    <Cont>
                        <Img src={product.image}></Img>
                        <Seller fontSize={'1rem'} fontWeight={'400'} color={'#767676'}>{product.seller_store}</Seller>
                        <Title fontSize={'1.125rem'} fontWeight={'400'} color={'#000000'}>{product.product_name}</Title>
                        <Price fontSize={'1.5rem'} fontWeight={'700'} color={'#000000'}>{product.price}</Price>
                    </Cont>
                </Link>
            ))}

        </>
    )
}

export default Products;