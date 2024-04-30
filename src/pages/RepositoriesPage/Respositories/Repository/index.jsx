import React from "react";

import {Container, Name, Description, Footer, Lang, Link} from './styles';

export default function Repository() {
  return (
    <Container color="#FF0000">
      <Name> Repository Name</Name>
      <Description>Repository Description</Description>
      <Footer color="#FF0000">
        <Lang>Repository Lang</Lang>
        <Link href="devsamurai.com.br" target="_blank">VER</Link>
      </Footer>
    </Container>
  );
}
