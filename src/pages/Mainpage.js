import styled from "styled-components";
import Slider from "../components/mainpage/Slider";
import Getproducts from "../components/mainpage/Getproducts";

const Main = styled.div`
    width: 100vw;
    height: auto;
`

function MainPage() {
    return(
        <Main>
            <Slider />
            <Getproducts />
        </Main>
    )
}

export default MainPage;