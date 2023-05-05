import axios from "axios";
import { useState, useEffect } from "react";
import { Container, ProjectCard } from "./styled-components";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Projects() {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        const fetchRepos = async () => {
            const response = await axios.get(
                "https://api.github.com/user/repos?sort=created&direction=desc",
                {
                    headers: {
                        Authorization: `token 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`,
                    },
                }
            );
            setRepos(response.data);
        };

        fetchRepos();
    }, []);

    console.log(repos)

    return <>
        <Container>
            {repos.map((e, i) => {
                if (i === 0 || i === 2) {
                    return;
                }
                return <ProjectCard>
                    <a href={e.url}>{e.name}</a>
                    <h5>Owner: <span>{e.owner.login}</span></h5>
                    <h5>Clone Url: <span>{e.ssh_url}</span></h5>
                    <h3>{e.description}</h3>
                </ProjectCard>
            })}
        </Container>
    </>
}

export default Projects;