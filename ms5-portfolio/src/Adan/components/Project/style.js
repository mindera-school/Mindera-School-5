import styled from "styled-components";

export const ProjectContainer = styled.div`
    height: 12rem;
    width: 25%;
    border: 1px solid black;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2%;
    margin-bottom: 2%;
    border-radius: 10px;
    box-shadow: 11px 11px 8px -4px rgba(0,0,0,0.6);

    & .top{
        border-radius: 9px 9px 0 0;
        background-color: purple;
        display: flex;
        justify-content: center;
        padding: 20px;
    }

    & a{
        width: 20%;
    }

    & img{
        width: 100%;
    }
`