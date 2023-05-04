import React, { useContext } from "react";
import { Block, SideMenu } from "./style";
import { BiCaretRight } from "react-icons/bi"
import { adanContext } from "../../MainAdan";
import { Li } from "./style";

const Drawer = ({isOpen, close}) => {

    const { activePage, setActivePage } = useContext(adanContext);

    return(
        <>
        <Block isOpen={isOpen} onClick={close} activePage={activePage}/>
        <SideMenu isOpen={isOpen}>
            <div className="sidemenu-content">
                <button className="close-btn" onClick={close}><BiCaretRight size={30}/></button>
                <ul> 
                    <Li activePage={activePage} thisPage="adan" ><button value="adan" onClick={() => setActivePage("adan")}>Adan</button></Li>
                    <Li activePage={activePage} thisPage="projects"><button onClick={() => setActivePage("projects")}>Projects</button></Li>
                </ul>
            </div>
        </SideMenu>
        </>
    );
}
export default Drawer;