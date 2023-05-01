import React from "react";
import { StyledHeader } from "./style";
import brasil from "../../assets/images/brasil.png"
import { AiOutlineMenu } from "react-icons/ai"

const Header = () => {
    return(
    <StyledHeader>
        <img src={brasil} alt="Brasil" />
        <h1>Adan Oliveira</h1>
        <button><AiOutlineMenu /></button>
    </StyledHeader>);
}
export default Header;