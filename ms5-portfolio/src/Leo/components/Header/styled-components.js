import styled from "styled-components";

export const Wrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 12vh;
`;

export const HeaderContent = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    font-family: 'Roboto';
`;

export const LinksContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-around;
`;

export const HeaderLink = styled.a`
    font-size: 28px;
    color: black;
    font-family: 'Sherman';
    border-bottom: 2px black solid;
    padding-bottom: 10px;
    cursor: pointer;
    font-weight: 200;
    transition: transform 0.5s;

    &:hover {
        color: #569DAA;
        transform: scale(1.2);
        border-bottom: 3px black solid;
    }
`;

export const LogoContainer = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 400px;
    padding: 0 10px;
    font-family: Sherman;
    font-size: 24px;
    font-weight: 400;
    box-sizing: border-box;
    border-right: 4px solid black;

    img {
        mix-blend-mode: multiply;
        height: 60%;
        padding-right: 20px; 
    }
    

    span {
        margin-top: 5px;
        color: #569DAA;
        width: 100%;
        text-align: center;
    }
`;