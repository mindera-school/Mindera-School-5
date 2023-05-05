import styled from "styled-components";

export const Container = styled.div`
    width: 92vw;
    height: 1000px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 15px;
    overflow-x: scroll;
    margin: 0 50px;
`;

export const ProjectCard = styled.div`
    height: 300px;
    width: 300px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 25px;
    box-sizing: border-box;
    color: gray;
    align-items: center;
    position: relative;

    a {
        text-align: center;
        cursor: pointer;
        width: 300px;
        font-family: Sherman;
        font-weight: 100;
        font-size: 22px;
        text-decoration: none;
        color: #577D86;
    }

    h5 {
        span {
            color: black;
        }
    }

`;