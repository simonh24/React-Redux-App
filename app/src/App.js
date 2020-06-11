import React from 'react';
import './App.css';
import Card from "./components/Card";
import { StyledCard, StyledLi, StyledDiv } from "./styles";

function App() {
  return (
    <StyledDiv className="App">
      <StyledCard style={{ width: "10%" }}>
        <h2>Legend</h2>
        <ul>
          <StyledLi>{"{G} = Green"}</StyledLi>
          <StyledLi>{"{W} = White"}</StyledLi>
          <StyledLi>{"{B} = Black"}</StyledLi>
          <StyledLi>{"{R} = Red"}</StyledLi>
          <StyledLi>{"{B} = Blue"}</StyledLi>
          <StyledLi>{"{U} = Any Color"}</StyledLi>
        </ul>
      </StyledCard>
      <Card />
    </StyledDiv>
  );
}

export default App;
