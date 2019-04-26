import {CHANGE_COLOR} from "../components/NewQuoteButton";

const generateRandomColor = () => {
    const min = 0;
    const max = 220;
    const r = min + Math.random() * (max - min);
    const g = min + Math.random() * (max - min);
    const b = min + Math.random() * (max - min);
    return(
        `rgb(${r}, ${g}, ${b})`
    );
}

const initialColorState = {
    color: generateRandomColor(),
}

const colorReducer = (state=initialColorState, action) => {
    switch (action.type) {
        case CHANGE_COLOR:
            return {...state, color: generateRandomColor()}
        default:
            return state;
    }
}

export default colorReducer;