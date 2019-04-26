import React, {Component} from "react";
import styled, {css} from "styled-components";



const TextP = styled.p`
    display:inline;
    font-family: 'Raleway', sans-serif;
    font-size: 1.75em;
    font-weight: 500;
    margin: 0px;
      
`

const CenterQuote = styled.div`
    align-self: center;
`

const QuoteI = styled.i`
    font-size: 1.65rem;
`

export default class QuoteText extends Component{
    render(){
        return(
            <CenterQuote>
                <QuoteI  className="fas fa-quote-left"></QuoteI>
                <TextP>  {this.props.sentence}</TextP>
            </CenterQuote>
        );
    }
}