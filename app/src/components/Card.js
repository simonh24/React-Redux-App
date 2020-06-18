import React from "react";
import { connect } from "react-redux";
import { getCard } from "../actions"
import { Button, CircularProgress } from "@material-ui/core";
import { ItalicP, StyledCard, StyledDiv } from "../styles";

const MagicCard = props => {
    console.log(props);

    return (
        <StyledDiv>
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