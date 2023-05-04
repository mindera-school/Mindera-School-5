import React from "react";
import { Container, Title, Grid } from "./styles";

import Technology from "../../components/Technology";
import JavaLogo from "../../images/java-logo.png";
import PostgresLogo from "../../images/postgresql-logo.png";
import SpringLogo from "../../images/spring-logo.png";
import GitHubLogo from "../../images/github-logo.png";
import AWSLogo from "../../images/aws-logo.png";
import ReactLogo from "../../images/react-logo.png";

function WhatIUse() {
  return (
    <Container id="what-i-use">
      <Title>What I Use</Title>
      <Grid>
        <Technology name="Java" icon={JavaLogo} />
        <Technology name="PostgreSQL" icon={PostgresLogo} />
        <Technology name="Spring" icon={SpringLogo} />
        <Technology name="Git" icon={GitHubLogo} />
        <Technology name="AWS" icon={AWSLogo} />
        <Technology name="React" icon={ReactLogo} />
      </Grid>
    </Container>
  );
}

export default WhatIUse;
