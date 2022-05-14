import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../img/Logo-hodu.svg";
import cartIcon from "../img/icon-shopping-cart.svg"
import userIcon from "../img/icon-user.svg";

const Main = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    height: 5.625rem;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 4px 5px 0px #0000001A;
    padding: 0 20rem 0 20rem;
    z-index: 999;
`
// 로고
const Logo = styled.img`
    width: 7.75rem;
    height: 2.375rem;
    margin-right: 1.875rem;
    cursor: pointer;
`

// 검색바
const InputWrap = styled.div``

const SearchBar = styled.input`
    width: 25rem;
    height: 2.875rem;
    border-radius: 50px;
    border: 2px solid #21BF48;
    text-indent: 22px;
    font-size: 1rem;
    font-weight: 400;
    color: #767676;
`

// const SearchIcon = styled.img`
//     position: absolute;
//     width: 1.75rem;
//     height: 1.75rem;
//     background-size: 1.75rem;
//     right: 1.375rem;
//     background-color: red;
//     cursor: pointer;
// `

// 장바구니, 로그인 버튼
const MenuWrap = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`

// 장바구니 버튼
const CartWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 1.625rem;
    cursor: pointer;
`
const CartIcon = styled.img`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
`
const CartText = styled.p`
    margin-top: 0.25rem;
    margin-left: 0.125rem;
    font-size: 0.75rem;
    font-weight: 400;
    color: #767676;
    cursor: pointer;
`

// 로그인 버튼
const UserWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const UserIcon = styled(CartIcon)`
`
const UserText = styled(CartText)``

function Header() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('id') === null) {
            setIsLogin(false)
        } else {
            setIsLogin(true)
        }
    },[])


    return (
        <Main>
            <Link to ={`/openmarket`}>
                <Logo src={logo}></Logo>
            </Link>

            <InputWrap>
                <SearchBar placeholder='상품을 검색해보세요!'/>
                {/* <SearchIcon></SearchIcon> */}
            </InputWrap>

            <MenuWrap>
                <Link to = {`/cart`}>
                    <CartWrap>
                        <CartIcon src={cartIcon} />
                        <CartText>장바구니</CartText>
                    </CartWrap>
                </Link>

                {isLogin ? (
                    <Link to='#'>
                        <UserWrap>
                            <UserIcon src={userIcon}/>
                            <UserText>마이페이지</UserText>
                        </UserWrap>
                    </Link>
                ) : 
                (
                    <Link to = {`/openmarket/login`}>
                        <UserWrap>
                            <UserIcon src={userIcon}/>
                            <UserText>로그인</UserText>
                        </UserWrap>
                    </Link>
                )}
            </MenuWrap>
        </Main>
    );
}

export default Header;