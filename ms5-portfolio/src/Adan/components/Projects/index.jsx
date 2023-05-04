import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Projects = () => {
   const [projects, setProjects] = useState([]);

    useEffect(() =>{
        (async () => {
            fetch("https://api.github.com/uses/Adan0k/repos",{
                headers: {
                    authorization: "token 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",
                }
            }).then(r => r.json())
            .then(data => setProjects(data));
        })();
    },[])

    console.log(projects);

    return(
        <h1>teu pai</h1>
    );
}

export default Projects;