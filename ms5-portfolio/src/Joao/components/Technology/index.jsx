import React from "react";
import { Container, Icon, Name } from "./styles";

function Technology({name, icon}) {

    return (
    <Container>
      <Icon src={icon} alt={name} />
      <Name>{name}</Name>
    </Container>
  );
}

export default Technology;