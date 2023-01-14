import styled from "styled-components";
import { MemeContainer } from "./MemeContainer";

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
min-height:100vh;
width:100vw;
`

const Header = styled.h1`
    font-weight:bold;
    font-size:50px;
    color:darkcyan;
`

function App() {
  return (
    <Container >
      <Header>
        Вот так хохма!
      </Header>
      <MemeContainer />
    </Container >
  );
}

export default App;
