const initialState = {
    isFetching: false,
    card: {
        "name": "Abundance",
        "manaCost": "{2}{G}{G}",
        "colors": [
            "Green",
        ],
        "types": [
            "Enchantment"
        ],
        "rarity": "Rare",
        "text": "If you would draw a card, you may instead choose land or nonland and reveal cards from the top of your library until you reveal a card of the chosen kind. Put that card into your hand and put all other cards revealed this way on the bottom of your library in any order.",
        "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130483&type=card",
    },
}

export const listReducer = (state = initialState, action) => {
    console.log(action);
      switch (action.type) {
        case 'FETCH_CARD_START':
          return {
            ...state,
            isFetching: true
          };
        case 'FETCH_CARD_SUCCESS':
          return {
            ...state,
            isFetching: false,
            card: action.payload,
            error: ''
          };
        case 'FETCH_CARD_FAILURE':
          return {
            ...state,
            isFetching: false,
            error: action.payload
          };
        default:
          return state;
      }
}