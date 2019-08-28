import React, { Component } from 'react';
import styled from 'styled-components';

const QuoteBlock = styled.div`
    display: block;
    width: 100%;
`;
const QuoteText = styled.h1`
    display: block;
    text-align: center;
    font-family: 'Nothing You Could Do', cursive;
    font-size: 5rem;
    font-weight: 300;
    line-height: 1.1;
    margin: 0 0 50px 0;

    @media (max-width: 600px) {
        font-size: 3rem;
    }
`;
const QuoteAuthor = styled.p`
    display: block;
    text-align: center;
    font-size: 1.6rem;
    color: #969696;
    line-height: 1;

    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
`;

export default class Quote extends Component {
    render() {
        return(
            <QuoteBlock>
                <QuoteText>{this.props.quote}</QuoteText>
                <QuoteAuthor>{this.props.author}</QuoteAuthor>
            </QuoteBlock>
        )
    }
}