import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#15cdfc' : '#010606')}; 
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items:center;
    transision: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        color: #010606;
        background: ${({primary}) => (primary ? '#fff':'#15cdfc;')};

    }
`