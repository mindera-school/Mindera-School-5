import React, { useState } from "react";
import { StyledHeader } from "./style";
import brasil from "../../assets/images/brasil.png"
import { AiOutlineMenu } from "react-icons/ai"
import Drawer from "../Drawer";


const Header = () => {
    const [isOpen,setIsOpen] = useState(false);

    return(
        <>
        <Drawer isOpen={isOpen} close={() => setIsOpen(false)}/>
            <StyledHeader>
                   <img src={brasil} alt="Brasil" />
                    <h1>Adan Oliveira</h1>
                    <button onClick={() => setIsOpen(true)}><AiOutlineMenu /></button>
            </StyledHeader>
        </>
    );
}
export default Header;