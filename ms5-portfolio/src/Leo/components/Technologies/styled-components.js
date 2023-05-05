import styled, { keyframes } from "styled-components";

const ScaleInAnim = keyframes`
    0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
`;

const FadeInAnim = keyframes`
    0% {
    -webkit-transform: translateZ(-80px);
            transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
`;


export const Wrapper = styled.div`
    height: fit-content;
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-bottom: 200px;
`;

export const Poster = styled.div`
    background-color: #87CBB9;
    width: 100%;
    height: fit-content;
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-direction: column;
`;

export const GridHeader = styled.div`
    width: 100%;
    heigth: 30px;
    display: ${({ isVisible }) => isVisible ? "flex" : "none"};
    justify-content: center;
    animation:  ${ScaleInAnim} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    
    h2 {
        font-family: Sherman;
        font-weight: 100;
        font-size: 40px;
        padding: 0;
        margin: 0;
        color: white;
    }
`;

export const Grid = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    gap: 100px;
    justify-content: center;
    flex-wrap: wrap;
    padding: 35px 0px;
`;

export const TechCard = styled.div`
    display: ${({ isVisible }) => isVisible ? "block" : "none"};
    min-width: 250px;
    max-width: 250px;
    max-height: 250px;
    background-color: white;  
    box-shadow: 0px 0px 19px -5px rgba(0,0,0,0.30);
    border-radius: 20px;
    box-sizing: border-box;
    padding: 20px;
    animation: ${FadeInAnim} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s both;

    img {
        height: 100%;
        width: 100%;
    }
`;

export const LanguagesContainer = styled.div`
    margin-top: 40px;
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: center;
    height: 100px;

    h3 {
        color: white;
        align-self: center;
    }

    img {
        height: 100%;
    }
`;

export const HorizontalLine = styled.div`
        align-self: center;
        height: 1px;
        background-color: white;
        width: 50%;
        margin: 25px 0;
`;