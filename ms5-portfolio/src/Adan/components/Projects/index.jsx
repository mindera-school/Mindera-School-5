import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Project from "../Project";
import { Grid } from "./style";

const Projects = () => {
   const [projects, setProjects] = useState([]);

    useEffect(() =>{
        (async () => {
            fetch("https://api.github.com/users/Adan0k/repos",{
                headers: {
                    authorization: "token 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",
                }
            }).then(r => r.json())
            .then(data => setProjects(data));
        })();
    },[])

    console.log(projects);

    return(
        <Grid>
            {projects.map( e =>  <Project title={e.full_name} url={e.clone_url} />)}
        </Grid>
    );
}

export default Projects;