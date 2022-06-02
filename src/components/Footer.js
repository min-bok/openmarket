import styled from 'styled-components';
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

const Cont = styled.div`
    width: 100%;
    height: 298px;
    background-color: #F2F2F2;
    padding: 60px 320px 0 320px;
`

const UpperSide = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 30px 0;
    border-bottom: 1px solid #C4C4C4;
`

const P = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #000;
    padding: 0 14px 0 14px;
`

const TextWrap = styled.div`
    display: flex;
    width: 700px;
    height: 18px;
    justify-content: space-between;

    P{
        border-right: 1px solid #000;
        cursor: pointer;

        &:last-child {
            border: none;
        }

        :hover {
            font-weight: 700;
        }
    }
`

const SnsWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 124px;
    
    * {
        font-size: 24px;
        cursor: pointer;
    }
`

// Lower Side

const LowerSide = styled.div`
    width: 100%;
    padding-top: 1.875rem;

    P {
        &:first-child {
            font-weight: 700;
        }

        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5rem;
        color: #767676;
    }
`

function Footer() {
    return(
        <Cont>
            <UpperSide>
                <TextWrap>
                    <P>호두샵 소개</P>
                    <P>이용약관</P>
                    <P>개인정보처리방침</P>
                    <P>전자금융거래약관</P>
                    <P>청소년보호정책</P>
                    <P>제휴문의</P>
                </TextWrap>

                <SnsWrap>
                    <FiInstagram />
                    <FiFacebook />
                    <FiYoutube />
                </SnsWrap>
            </UpperSide>

            <LowerSide>
                <P>(주)HODU SHOP</P>
                <P>제주특별자치도 제주시 동광고 137 제주코딩베이스캠프</P>
                <P>사업자 번호 : 000-0000-0000 | 통신판매업</P>
                <P>대표 : 김호두</P>
            </LowerSide>
        </Cont>
    )
}

export default Footer;

