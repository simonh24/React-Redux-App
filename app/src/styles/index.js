import styled from "styled-components";
import {Card} from "@material-ui/core";

export const ItalicP = styled.p`
    font-style: italic;
`;

export const StyledLi = styled.li`
    text-align: left;
`;

export const StyledCard = styled(Card)`
    width: 30%;
    padding: 0 20px 25px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px 0;
`;

export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;