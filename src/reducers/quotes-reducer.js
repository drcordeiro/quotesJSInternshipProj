import {DISPLAY_QUOTE} from "../components/NewQuoteButton";
import {SAVE_QUOTES} from "../components/QuoteCard";
const randomQuotePicker = (quotes) => {
    const min = 0;
    const max = quotes.length - 1;
    const index = Math.round(min + Math.random() * (max - min));
    console.log(index);
    return index;
}

const initialQuotesState = {
    quotes: [],
    fullQuote: null
}

const quotesReducer = (state = initialQuotesState, action) => {
    switch(action.type){
        case DISPLAY_QUOTE:
            return {...state, fullQuote: state.quotes[randomQuotePicker(state.quotes)]}//mesmo que Object.assign({}, state, {color: '#4D4516'})
        case SAVE_QUOTES:
            const collection = action.data.quotes;
            return {...state, quotes: collection, fullQuote: collection[randomQuotePicker(collection)]}
        default:
            return state;
    }

}

export default quotesReducer;