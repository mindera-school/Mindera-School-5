import { HeaderContent, HeaderLink, LinksContainer, LogoContainer, Wrapper } from "./styled-components";
import LeoLogo from "../../assets/images/image (4).png";
import { FaCode } from "react-icons/fa";


function Header() {
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
                <HeaderLink>
                    About Me
                </HeaderLink>
                <HeaderLink>
                    Technologies I Use
                </HeaderLink>
                <HeaderLink>
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