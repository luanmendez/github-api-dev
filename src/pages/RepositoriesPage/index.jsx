import React from 'react'

import Profile from './profile'
import { Container, Sidebar, Main } from './styles'

export default function RepositoriesPages() {
  return (
    <Container>
      <Sidebar>
        <Profile />
      </Sidebar>
      <Main>
        Main
      </Main>
    </Container>
    
  )
}

