import { HeaderContent, HeaderLink, LinksContainer, LogoContainer, Wrapper } from "./styled-components";
import LeoLogo from "../../assets/images/image (4).png";
import { FaCode } from "react-icons/fa";

function Header({ scrollToAboutMe, scrollToTech, scrollToProjects }) {

    return <Wrapper>
        <HeaderContent>
            <LogoContainer>
                <img alt="Logo saying LeoHabsz" src={LeoLogo} />
                <span>
                    <FaCode size={18}></FaCode>
                    Software Developer
                </span>
            </LogoContainer>
            <LinksContainer>
                <HeaderLink onClick={() => scrollToAboutMe()}>
                    About Me
                </HeaderLink>
                <HeaderLink onClick={() => scrollToTech()}>
                    Technologies I Use
                </HeaderLink>
                <HeaderLink onClick={() => scrollToProjects()}>
                    My Projects
                </HeaderLink>
                <HeaderLink>
                    Contact Me
                </HeaderLink>
            </LinksContainer>
        </HeaderContent>
    </Wrapper>
}

export default Header;