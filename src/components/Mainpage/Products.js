import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    padding: 80px 320px 102px 320px;
    justify-content: space-between;
`

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 490px;
    margin: 0 0 78px 0;
`

const Img = styled.img`
    width: 380px;
    height: 380px;
    border-radius: 10px;
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
        <Wrap>
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
        </Wrap>
    )
}

export default Products;