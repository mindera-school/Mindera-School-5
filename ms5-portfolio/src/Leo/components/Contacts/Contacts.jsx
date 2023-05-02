import { Container } from "./styled-components";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Contacts() {
    return <>
        <Container>
            <a href="https://www.instagram.com/leo_habs/">
                <FaInstagram size={100} color={"white"} />
            </a>
            <a href="https://github.com/LeoHabs">
                <FaGithub size={100} color={"white"} />
            </a>
            <a href="https://www.linkedin.com/in/leonardo-teixeira-903366a1/">
                <FaLinkedin size={100} color={"white"} />
            </a>
        </Container>
    </>
}

export default Contacts;