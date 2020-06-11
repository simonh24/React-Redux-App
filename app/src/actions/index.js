import axios from "axios";

export const getCard = () => {
    return dispatch => {
      dispatch({ type: 'FETCH_CARD_START' });
      axios
        .get('https://api.magicthegathering.io/v1/cards')
        .then(res => {
          dispatch({ type: 'FETCH_CARD_SUCCESS', payload: res.data.cards[Math.floor(Math.random() * 100)] });
        })
        .catch(err => {
          dispatch({
            type: 'FETCH_CARD_FAILURE',
            payload: `Error ${err.response.status}: ${err.response.data}`
          });
        });
    };
  };