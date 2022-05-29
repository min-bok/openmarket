import styled from 'styled-components';

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

const TextWrap = styled.div`
    display: flex;
    width: 700px;
    height: 18px;
    justify-content: space-between;

    P{
        &:last-child {
            border: none;
        }
    }
`

const P = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #000;
    padding: 0 14px 0 14px;
    border-right: 1px solid #000;
    cursor: pointer;

    :hover {
        font-weight: 700;
    }
`

const SnsWrap = styled.div``

const snsImg = styled.img`
    width: 32px;
    height: 32px;
    background-color: pink;
    border-radius: 50%;
    cursor: pointer;
`

// react icon 삽입하기
const Insta = styled(snsImg)``
const Facebook = styled(snsImg)`
    margin: 0 14px 0 14px;
`
const Youtube = styled(snsImg)``

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
                    <Insta />
                    <Facebook />
                    <Youtube />
                </SnsWrap>
            </UpperSide>
        </Cont>
    )
}

export default Footer;

