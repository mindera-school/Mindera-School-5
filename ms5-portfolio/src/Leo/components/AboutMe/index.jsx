import { Container, ImageHolder, Info, Graphical } from "./styled-components";
import LeoImage from "../../assets/images/330829030_1577748049318893_7590085376626793145_n-removebg-preview.png";

function AboutMe() {
    return <>
        <Container>
            <Info>
                <h2>Hello, I'm Leo!</h2>
                <h4>
                    I am a software developer. I've been coding for about a year now. Right now I'm more focused on Front-End, still, I have plenty of understanding of Back-End.
                    My passion for tech is giant and old and I expect to do this for the rest of my life!
                </h4>
                <h3>My mission is to get better and better, everyday!</h3>
            </Info>
            <Graphical>
                <ImageHolder>
                    <img alt="Leo looking at the camera" src={LeoImage} />
                </ImageHolder>
            </Graphical>
        </Container>
    </>
}

export default AboutMe;