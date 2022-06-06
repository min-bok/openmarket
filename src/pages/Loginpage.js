import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Mainpage from './Mainpage';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { API_BASE_URL } from '../setting';
import LogoImg from '../img/Logo-hodu.svg';

const Logo = styled.img`
    width: 238px;
    margin: 0 0 75px 0;
`

const FormWrap = styled.form`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ID = styled.input`
    width: 384px;
    height: 53px;
    border: none;
    border-radius: 50px;
    text-indent: 30px;
    box-shadow: inset 4px 6px 4px rgba(0, 0, 0, 0.25);
`

const PW = styled(ID)`
`

const LoginBtn = styled.button`
    height: 53px;
    width: 384px;
    border: none;
    border-radius: 50px;
    background-color: #21BF48;
    box-shadow: 4px 6px 4px 0px #00000040;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
`

const Errormsg = styled.div`
`

// 로그인 가능 정보

// buyer1, buyer2, buyer3
// hodu0910
// BUYER


function Loginpage() {
    const [userId, setUserId] = useState('');
    const [userPwd, setUserPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const onLogin = () => {
        axios({
            method: 'post',
            url: 'https://openmarket.weniv.co.kr/accounts/login/',
            data: {
                username : userId,
                password : userPwd,
                login_type : 'BUYER'
            },
            ContentType: 'application/json',
        })
        .then(res => {
            // 로그인 성공 시 토큰 가져오기
            const JWT_TOKEN = res.data.token;

            // 로컬스토리지에 로그인 정보 저장
            localStorage.setItem('id', JWT_TOKEN);
            setSuccess(true);
        })
        .catch(err => {
            if(!err?.response) {
                setErrMsg('서버가 응답하지 않습니다.')
            } else if (err.response?.status === 400) {
                setErrMsg('이 필드는 blank일 수 없습니다.');
            } else if (err.response?.status === 401) {
                setErrMsg('로그인 정보가 없습니다.')
            } else {
                setErrMsg('로그인에 실패하였습니다.')
            }
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        onLogin();
    }

    return(
        <>
        {success ? (
            navigate(`/openmarket`)
        ) : (
            <>
            <FormWrap onSubmit={handleSubmit}>
                <Link to='/openmarket'>
                    <Logo src={LogoImg} />
                </Link>
                <p>{errMsg}</p>
                <ID 
                    type='text' 
                    placeholder='아이디'
                    required 
                    onChange={(e) => {setUserId(e.target.value);}} 
                />
                <PW 
                    type='password' 
                    placeholder='비밀번호' 
                    onChange={(e) => {setUserPwd(e.target.value);}} 
                />

                <LoginBtn type='submit'>LOGIN</LoginBtn>
            </FormWrap>
            </>
        )}
        </>
    )
}

export default Loginpage;