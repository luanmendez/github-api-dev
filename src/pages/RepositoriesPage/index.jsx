import React from 'react'

import Profile from './Profile'
import Filter from './Filter'
import Repositories from './Respositories'

import { Container, Sidebar, Main } from './styles'

export default function RepositoriesPages() {
  return (
    <Container>
      <Sidebar>
        <Profile />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
    
  )
}

