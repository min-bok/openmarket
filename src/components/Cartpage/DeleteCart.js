import axios from "axios";

function DeleteCart() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `JWT ${localStorage.getItem('id')}`);

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://openmarket.weniv.co.kr/cart/<int:cart_item_id>", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    return(
        <h1>안녕</h1>
    )

}

export default DeleteCart;