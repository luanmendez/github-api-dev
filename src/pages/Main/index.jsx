import React, {useState} from "react";
import { MdSearch } from "react-icons/md";
import { Container, Logo, Title, Form, Input, Button} from "./styles";
import gitHubLogo from '../../assets/images/github-logo.svg'



export default function Main() {
  const [login, setLogin] = useState('');
  return (
    <Container>
     <Logo src={gitHubLogo} alt="API Github" />
     <Title>API Github</Title>
     <Form>
        <Input placeholder="Usuário" value={login} onChange={(event)=> setLogin(event.target.value)}/>
          <Button to={`/${login}/repositories`}>
            <MdSearch  size={42} color="white"/>
          </Button>
     </Form>
    </Container>
  );
}
