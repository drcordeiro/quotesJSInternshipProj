import React, { Component } from "react";
import {connect} from "react-redux";
import styled, { css } from 'styled-components'

const Button = styled.button`
    ${props => props.color && css`
        background: ${props.color};
        border-radius: 3px; 
        border: none;
    `}
    
    color: white;
    margin: 30px 0px 0px;
    padding: 8px 18px;
    font-family: 'Raleway', sans-serif;
    font-size: 0.85em;
    width: 110px;
    height: 38px;
`

class NewQuoteButton extends Component{
    handleNewQuoteRequest = () =>{
        this.props.changeColour();
        this.props.showQuote();
    }

    render(){
        return(
            <Button color={this.props.color} onClick={this.handleNewQuoteRequest}>New quote</Button>
        );
    }
}

export const CHANGE_COLOR = 'CHANGE_COLOR';
export const DISPLAY_QUOTE = 'DISPLAY_QUOTE';

const changeColor = () =>{
    return{
        type: CHANGE_COLOR,
    }
}

const displayQuote = () => {
    return{
        type: DISPLAY_QUOTE,
    }
}

const mapStateToProps = (_store) => {
    return {
        color: _store.color.color,
    }

}

const mapDispatchToProps = (dispatch) => {
    debugger;
    return{
        changeColour: () => {
            dispatch(changeColor());
        },

        showQuote: () => {
            dispatch(displayQuote());
        }
    }
}

const ButtonContainer = connect(mapStateToProps, mapDispatchToProps)(NewQuoteButton);
export default ButtonContainer;