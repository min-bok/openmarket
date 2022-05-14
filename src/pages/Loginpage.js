import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

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

function Loginpage() {
    // const url = `https://openmarket.weniv.co.kr/accounts/login/`;

    const [userId, setUserId] = useState('');
    const [userPwd, setUserPwd] = useState('');
    const [userType, setUserType] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const onLogin = () => {

        // buyer1
        // hodu0910
        // BUYER


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
            const { accessToken } = res.data;
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
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
            <h1>로그인 성공!</h1>
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
                <Type
                    type='text'
                    placeholder='타입'
                    required
                    onChange={(e) => {setUserType(e.target.value);}} />
                <LoginBtn type='submit'>로그인</LoginBtn>
            </FormWrap>
        )}
        </>
    )
}

export default Loginpage;