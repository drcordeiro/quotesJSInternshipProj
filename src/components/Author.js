import React, {Component} from "react";
import styled, {css} from "styled-components";

const AuthorP = styled.p`
    margin: 0px;
    font-family: 'Raleway', sans-serif;
    font-size:1em;
    padding-top:20px;
`

export default class Author extends Component{
    render(){
        return(
            <AuthorP>- {this.props.authorName}</AuthorP>
        );
    }
}
