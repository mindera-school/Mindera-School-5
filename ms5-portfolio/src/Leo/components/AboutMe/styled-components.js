import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-height: 65vh;
    height: fit-content;
    width: 100vw;
    justify-content: center;
    margin-bottom: 100px;

    @media (max-width: 1080px) {
        flex-direction: column-reverse;
    }
`;

export const Info = styled.div`
    width: 50vw;
    height: 100%;
    padding: 250px 0 0 250px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1080px) {
        padding: 0 250px;
    }

    h2 {
        font-size: 60px;
        font-weight: 50;
        font-family: Sherman;
        width: fit-content;
    }

    h3 {
        font-size: 35px;
        font-family: Sherman;
        font-weight: 50;
        text-align: center;
        color: #577D86;
    }

    h4 {
        font-size: 26px;
        color: #577D86;
        padding: 0 35px 0 0;
        margin: 0;
    }
`;

export const ImageHolder = styled.div`
    background-color: white;
    height: 35vw;
    width: 35vw;
    max-width: 450px;
    max-height: 450px;
    border-radius: 69% 31% 64% 36% / 44% 42% 58% 56%;
    padding-top: 10px; 
    align-self: center;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    overflow: hidden;

    img {
        max-height: 100%;
        mix-blend-mode: darken;
    }

    @media (max-width: 1080px) {
        height: 50vw;
        width: 50vw;
    }
`;

export const Graphical = styled.div`
    width: 50vw;
    height: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 1080px) {
        align-items: center;
        width: 100vw;
    }
`;

export const Education = styled.div`
    position: relative;
    display: flex;
    background-color: white;
    width: 800px;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 15px 0px 0px 15px;
    margin-bottom: 100px;
    padding: 15px;
    box-sizing: border-box;
    color: #577D86;
    font-size: 18px;
    align-items: center;
    margin-left: calc(100vw - 800px);

    h3 {
        width: 70%;
        margin: 0;
        padding-left: 25px;
    }

    img {
        mix-blend-mode: multiply;
    }

`;