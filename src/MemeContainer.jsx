import styled from "styled-components";
import BoJack from "./pics/BoJack.jpg"
import crab from "./pics/crab.jpg"
import wisdom from "./pics/wisdom.jpg"
import friends from "./pics/friends.jpg"
import happyCat from "./pics/happyCat.jpg"


const MemeBox = styled.div`
    width:80%;
    min-height:70%;
    padding:5%;
    background-color:lightgrey;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
`

const Meme = styled.img`
    min-width:30%;
    margin:20px;
    @media (min-width: 540px) {
    width:100%;
  }
`

export const MemeContainer = () => {
    return (
        <MemeBox>
            <Meme src="https://cs14.pikabu.ru/post_img/big/2021/08/17/5/1629183073133117127.jpg" />
            <Meme src={BoJack} />
            <Meme src={crab} />
            <Meme src={wisdom} />
            <Meme src={friends} />
            <Meme src={happyCat} />
        </MemeBox>
    )
}