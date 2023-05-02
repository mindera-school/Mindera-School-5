import { Container, ImageHolder, Info, Graphical, Education } from "./styled-components";
import LeoImage from "../../assets/images/330829030_1577748049318893_7590085376626793145_n-removebg-preview.png";
import { RiBookOpenFill } from "react-icons/ri";

function AboutMe() {
    return <>
        <Container>
            <Info>
                <h2>Hi, I'm Leonardo!</h2>
                <h4>
                    I am a software developer. I've been coding for about a year now. Right now I'm more focused on Front-End, still, I have plenty of understanding of Back-End.
                    My passion for tech is giant and old and I expect to keep doing this for the rest of my life!
                </h4>
                <h3>My mission is to get better and better, everyday!</h3>
            </Info>
            <Graphical>
                <ImageHolder>
                    <img alt="Leo looking at the camera" src={LeoImage} />
                </ImageHolder>
            </Graphical>
        </Container>
        <Education>
            <img src="https://www.edarabia.com/wp-content/uploads/2020/01/Mindra-school.png" ></img>
            <h3>
                After I studied 3 years to be a nurse, I decided to dedicate myself to my biggest passion, technology, and become a programmer. I studied at Mindera School in Porto where I learned ,inside of a multi-nacional company context, with incredibly talented active profissionals from the area.
            </h3>
        </Education>
    </>
}

export default AboutMe;