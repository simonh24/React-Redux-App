import React from "react";
import { connect } from "react-redux";
import { getCard } from "../actions"
import { Button, CircularProgress, Card } from "@material-ui/core"
import styled from "styled-components";

const ItalicP = styled.p`
    font-style: italic;
`;

const StyledLi = styled.li`
    text-align: left;
`;

const StyledCard = styled(Card)`
    width: 30%;
    padding: 0 20px 25px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px 0;
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const MagicCard = props => {
    console.log(props);

    return (
        <StyledDiv>
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
            <Button variant="contained" color="secondary" onClick={() => { props.getCard() }}>Get Random Card</Button>
            {
                props.isFetching ?
                    <p>
                        <CircularProgress />
                    </p> : (
                        <StyledCard>
                            <h2>{props.card.name}</h2>
                            <p>
                                <span>Mana Cost: </span> {props.card.manaCost ? <span>{props.card.manaCost}</span> : <span>None</span>}
                            </p>
                            <p>
                                <span>Colors: </span> {props.card.colors.length > 0 ? props.card.colors.map(el => <span>{el} </span>) : <span>None</span>}
                            </p>
                            <p>
                                <span>Types: </span> {props.card.types.length > 0 ? props.card.types.map(el => <span>{el} </span>) : <span>None</span>}
                            </p>
                            <p>Rarity: {props.card.rarity}</p>
                            <ItalicP>"{props.card.text}"</ItalicP>
                            <img src={props.card.imageUrl} alt="missing card imageurl" style={{ display: "block" }}></img>
                        </StyledCard>
                    )
            }
        </StyledDiv>
    )
}

export default connect(state => {
    return { isFetching: state.isFetching, card: state.card }
}, { getCard })(MagicCard)