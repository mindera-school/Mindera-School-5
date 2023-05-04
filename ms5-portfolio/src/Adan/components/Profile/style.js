import styled from "styled-components";

export const ProfileStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    
`

export const ProfileLayer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    & img {
        width: 20%;
        border-radius: 100%;
    }
    & .terminal{
        width: 80%;
        height: 60%;
    }
`

export const Skills = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30%;
    width: 80%;

    & .image-container{
        width: 60%;
        display: flex;
        justify-content: space-between;
        & img{
        width: 5%;
    }
    }

`