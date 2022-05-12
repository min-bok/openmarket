import styled from "styled-components";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";

const Wrap = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    height: 8.33333333333vh;
    align-items: center;
    justify-content: space-between;
    background-color: #FFF;
    padding: 0 16.66666666667vw 0 16.66666666667vw;
    box-shadow: 0px 4px 5px 0px #0000001A;
    z-index: 999;
    top: 0;
`

const SearchWrap = styled.div`
    height: 51.11111111111%;
`

const Logo = styled.img`
    width: auto;
    height: 100%;
    margin-right: 30px;
    cursor: pointer;
`

const Search = styled.input`
    width: 400px;
    height: 100%;
    border-radius: 50px;
    border: 2px solid #21BF48;
    text-indent: 22px;
    font-family: Spoqa Han Sans Neo;
    font-size: 16px;
    font-weight: 400;
    color: #767676;
    background-image: url(${require("../img/search.svg").default});
    background-repeat: no-repeat;
    background-size: 24px 24px;
    background-position:center right 22px; 

    :focus {
        outline: none;
    }
`

const BtnWrap = styled.div`
    display: flex;
`

const CartWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: end;
    margin-right: 20px;
    cursor: pointer;
`

const StyledHiOutlineShoppingBag = styled(HiOutlineShoppingBag)`
    font-size: 32px;
    color: #21BF48;
`

const CartText = styled.p`
    font-size: 12px;
    font-weight: 400;
`

const UserWrap = styled(CartWrap)`
    margin: 0;
    cursor: pointer;
`

const StyledHiOutlineUser = styled(HiOutlineUser)`
    font-size: 32px;
    color: #21BF48;
`

const UserText = styled(CartText)``

function Header() {
    return(
        <Wrap>
            <SearchWrap>
                <Logo src={require("../img/logo.svg").default}/>
                <Search placeholder="상품을 검색해보세요!"/>
            </SearchWrap>

            <BtnWrap>
                <CartWrap>
                    <StyledHiOutlineShoppingBag />
                    <CartText>장바구니</CartText>
                </CartWrap>
                <UserWrap>
                    <StyledHiOutlineUser />
                    <UserText>로그인</UserText>
                </UserWrap>
            </BtnWrap>
        </Wrap>
    )
}

export default Header;