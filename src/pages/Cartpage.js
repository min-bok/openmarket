import { API_BASE_URL, ACCESS_TOKEN } from '../setting'
import axios from 'axios';

function Cartpage() {
    axios({
        url: '/cart/',
        baseURL: API_BASE_URL,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('id')}`
        },
        ContentType: 'application/json'
    })
    .then(function (res) {
        console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });

    return(
        <>
        <h1>여기는 장바구니</h1>
        </>
    )
}

export default Cartpage;