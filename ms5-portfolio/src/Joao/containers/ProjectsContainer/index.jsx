import React, { useContext, useState, useEffect } from "react";
import { ReposContext } from "../../services/RepoService/index";
import ProjectPreview from "../../components/ProjectPreview/index";
import {
  Container,
  Pagination,
  Button,
  Grid,
  Separator,
  ProjectsHeader,
  ProjectsTitle,
  SearchBar,
} from "./styles";

function ProjectsContainer() {
  const repos = useContext(ReposContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue]);

  const filteredProjects = repos.filter((project) => {
    const nameMatch = project.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    const techMatch = project.topics.some((tech) =>
      tech.toLowerCase().includes(searchValue.toLowerCase())
    );
    return nameMatch || techMatch;
  });

  const projectsPerPage = 4;
  const totalProjects =
    searchValue === "" ? repos.length : filteredProjects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages));
  };

  const firstProjectIndex = (currentPage - 1) * projectsPerPage;

  const currentProjects =
    searchValue === ""
      ? repos.slice(firstProjectIndex, firstProjectIndex + projectsPerPage)
      : filteredProjects.slice(
          firstProjectIndex,
          firstProjectIndex + projectsPerPage
        );

  return (
    <Container id="projects">
      <ProjectsHeader>
        <ProjectsTitle>Projects</ProjectsTitle>
        <SearchBar
          placeholder="Search projects"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </ProjectsHeader>
      <Separator />
      <Grid>
        {currentProjects.map((project) => (
          <ProjectPreview key={project.id} project={project} />
        ))}
      </Grid>
      <Separator />
      <Pagination>
        <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
          {"<"}
        </Button>
        <div className="page-info">
          <span>
            {currentPage} / {totalPages}
          </span>
        </div>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          {">"}
        </Button>
      </Pagination>
    </Container>
  );
}

export default ProjectsContainer;
