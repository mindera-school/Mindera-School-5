import styled from "styled-components";

export const Block = styled.div`
    height: 100%;
    width: 100%;
    display: ${props => props.isOpen ? "block" : "none"};
    position: fixed;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.34);
`

export const SideMenu = styled.div`
    width: ${props => props.isOpen ? "20%" : "0"};
    height: 100%;
    position: fixed;
    right: 0;
    transition: width 0.5s;
    z-index: 15;
    background-color: white;

    :first-child{
        width: 100%;
        height: 100%;
        position: relative;
    }
    
    & button{
        background: none;
        border: none;
        cursor: pointer;
    }

    & ul {
        list-style: none;
    }
`

export const Li = styled.li`
    border-bottom: ${props => props.activePage === props.thisPage ? "1px solid black" : "none" };
`