import styled from "styled-components";

export const StyledHeader = styled.header`
    height: 10%;
    width: 100%;
    background-color: #241e4e;
    display: flex;
    justify-content: center;
    color: #fffbfc;
    position: relative;

    & img {
        height: 50%;
        position: absolute;
        left: 1%;
        top: 25%;
    }
    & button {
        position: absolute;
        background: none;
        border: none;
        filter: invert(100);
        height: 10%;
        top: 40%;
        right: 1%;
        cursor: pointer;
    }
`