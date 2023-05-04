import React, { useContext } from "react";
import { ProfileLayer, ProfileStyle, Skills } from "./style";
import { ReactTerminal, TerminalContextProvider } from "react-terminal";
import Marquee from "react-fast-marquee";
import image from "../../assets/images/capy.jpg";
import java from "../../assets/images/java.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.png";
import sb from "../../assets/images/spring-boot.png";
import react from "../../assets/images/React.png";
import { useNavigate } from "react-router-dom";
import { adanContext } from "../../MainAdan";


const descrption = (<div>Hello, i'm Adan nice to meet you</div>)

const Profile = () => {
    const navigate = useNavigate();
    const { activePage, setActivePage } = useContext(adanContext);
    const commands = {
        flavio: () => alert("no flavour is alowed here"),
        home: () =>  navigate("/"),
        projects: () => setActivePage("projects"),
        github: () => window.location.assign("https://github.com/Adan0k"),
    }
    return(
        <TerminalContextProvider>
            <ProfileStyle>

                <ProfileLayer>
                    <img src={image} alt="profile image"/>
                    <div className="terminal">
                        <ReactTerminal welcomeMessage={descrption}
                        commands={commands}
                        theme="material-dark"
                    />  
                    </div>
                </ProfileLayer>
                <Skills>
                    <h2>Skills</h2>
                    <Marquee gradient pauseOnClick speed={100}>
                        <div className="image-container">
                            <img src={java} className="lang-image" alt="tool icon" />
                            <img src={html} className="lang-image" alt="tool icon" />
                            <img src={css}  className="lang-image"alt="tool icon" />
                            <img src={js} className="lang-image" alt="tool icon" />
                            <img src={sb} className="lang-image" alt="tool icon" />
                            <img src={react} className="lang-image" alt="tool icon" />
                        </div>
                    </Marquee>
                </Skills>
            </ProfileStyle>
        </TerminalContextProvider>
    );
}

export default Profile;