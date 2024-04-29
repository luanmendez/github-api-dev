import React from 'react'
import {MdGroup, MdLocationCity, MdWork, MdLink} from 'react-icons/md'
import {Container, Header, Avatar, Login, Name, Inner, Data} from './styles'

export default function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/55540536?v=4"/>
        <Login>devsamurai</Login>
        <Name>Dev Samurai</Name>
      </Header>      
      <Inner>
        <Data>
          <MdGroup size={20} />
           30 &nbsp;<i>Seguidores</i> &nbsp; &&middot;&nbsp;10&nbsp;<i>Seguindo</i>
          </Data>
        <Data>
          <MdWork size={20} />
          Dev Samurai
          </Data>
          <Data>
          <MdLocationCity size={20} />
            São Paulo/SP
          </Data>
          <Data>
            <MdLink size={20} />
            <a href='http://www.devsamurai.com.br'>devsamurai</a>
          </Data>
      </Inner>
    </Container>
  )
}

