import React, { Component } from 'react';
import styled from 'styled-components';
import Quote from './components/Quote';
import Button from './components/Button';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    width: 100%;
    height: 100vh;
    padding: 50px;
`;
const WrapperContent = styled.div`
    display: block;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
`;
const Controls = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;

    @media (max-width: 600px) {
        left: 50%;
        transform: translatex(-50%);
    }
`;
const Loading = styled.img`
    display: block;
    width: 100%;
    max-width: 100px;
    margin: 0 auto;
`;

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            fetched: false,
            quote: '',
            author: '',
        }         
    }    

    componentDidMount = () => {
        (!this.state.fetched) && this.getRandomQuote();
    }

    getRandomQuote = () => {
        fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            this.setState({
                fetched: true,
                quote: data.content,
                author: data.author
            })
        })
    }

    socialShare = (social) => {
        const domain = encodeURIComponent(window.location.href);
        const quote = encodeURIComponent(`"${this.state.quote}" ~ ${this.state.author}`);
        let url;

        switch(social) {
            case 'facebook':
                url = `https://www.facebook.com/sharer/sharer.php?u=${domain}`;
                break;
            case 'twitter':
                url = `https://twitter.com/intent/tweet?url=${domain}&text=${quote}`;
                break;
            default:
                url = `https://twitter.com/intent/tweet?url=${domain}&text=${quote}`;
        }
        window.open(url,"_blank"); 
    }

    render() {
        return(
            <Wrapper>
                <Controls>
                    <Button src="/images/icon-refresh.svg" title="Get new quote!" action={e => this.getRandomQuote()} />
                    <Button src="/images/icon-facebook.svg" title="Share on Facebook" action={e => this.socialShare('facebook')} />
                    <Button src="/images/icon-twitter.svg" title="Share on Twitter" action={e => this.socialShare('twitter')} />
                </Controls>
                <WrapperContent>
                    {this.state.fetched
                        ? <Quote {...this.state} />
                        : <Loading src="/images/loading.gif" alt="Loading.." />
                    }                                    
                </WrapperContent>
            </Wrapper>
        );
    }
}