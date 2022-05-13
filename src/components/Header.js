import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to ={`/HODU`}>
                <button className={`${style.LogoHodu} btnSetting`}></button>
            </Link>
            <div className='searchBar'>
                <input className='searchPlace' type="text" placeholder='상품을 검색해보세요!'/>
                <i className={`${style.searchIcon}`}></i>
            </div>

            <div className={`${style.iconWrap}`}>
            <Link to = {`/cart`}>
                <div className={`${style.cartWrap}`}>
                    <button className={`${style.cartIcon} btnSetting`}></button>
                    <p className={`${style.cartText}`}>장바구니</p>
                </div>
            </Link>

            <Link to = {`/login`}>
                <div className={`${style.userWrap}`}>
                    <button className={`${style.userIcon} btnSetting`}></button>
                    <p className={`${style.userText}`}>로그인</p>
                </div>
            </Link>
            </div>
        </header>
    );
}

export default Header;