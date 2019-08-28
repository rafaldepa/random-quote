import React, { Component } from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    text-align: center;
    background: #fff;
    border: 0;
    border-radius: 50%;
    box-shadow: red;
    margin-right: 20px;
    opacity: 0.3;
    will-change: transform;
    transition: 0.2s transform, opacity ease;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    &:last-child {
        margin-right: 0;
    }
    &:hover {
        opacity: 1;
    }
    &:active {
        transform: scale(0.8);
    }
`;
const BtnIcon = styled.img`
    display: block;
    width: 30px;
    pointer-events: none;
`;

export default class Button extends Component {
    render() {
        return(
            <Btn onClick={this.props.action} title={this.props.title}>
                <BtnIcon src={this.props.src} />
            </Btn>
        )
    }
}