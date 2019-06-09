import React from 'react';
import Sidebar from 'components/Sidebar';
import Player from 'components/Player';
import Header from 'components/Header';

import { Wrapper, Container, Content } from './assets/styles/components';

function App() {
  return (
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <Header />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  );
}

export default App;
