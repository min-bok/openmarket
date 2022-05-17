import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Mainpage from './Mainpage';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { API_BASE_URL } from '../setting';

const FormWrap = styled.form`
    display: flex;
    flex-direction: column;
`

const ID = styled.input`
    width: 480px;
    height: 60px;
    border-radius: 0px;
`

const PW = styled.input`
    width: 480px;
    height: 60px;
    border-radius: 0px;
`

const Type = styled.input`
    width: 480px;
    height: 60px;
    border-radius: 0px;
`

const LoginBtn = styled.button`
    width: 480px;
    height: 60px;
    border-radius: 5px;
    background: #21BF48;
    border: none;
    color: #FFF;
    cursor: pointer;
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
            console.log(JWT_TOKEN)

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
            <FormWrap onSubmit={handleSubmit}>
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

                <LoginBtn type='submit'>로그인</LoginBtn>
            </FormWrap>
        )}
        </>
    )
}

export default Loginpage;