import React from "react";
import { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";

const Projects = () => {
   const [projects, setProjects] = useState([]);

    useEffect(() =>{
        (async () => {
            const response = await axios.get(
                "https://api.github.com/user/adan0k",
                {
                    headers: {
                        authorization: "token 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",
                    },
                }
            );
            setProjects(response.data);
        })();
    },[])

    console.log(projects);

    return(
        <h1>teu pai</h1>
    );
}

export default Projects;