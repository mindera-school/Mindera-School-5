import React from "react";
import git from "../../assets/images/gh.png"
import { ProjectContainer } from "./style";

const Project = ({title, url}) => {
    return(
        <ProjectContainer>
            <div className="top">
                <a href={url}>
                    <img src={git} alt="github icon" />
                </a>
            </div>
            <div className="bottom">
                <h3>{title}</h3>
            </div>
        </ProjectContainer>
    );
}

export default Project