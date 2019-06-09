import React from 'react';
import ClockIcon from 'assets/images/clock.svg';
import PlusIcon from 'assets/images/plus.svg';
import { Container, Header, SongList } from './style';

const Playlist = () => (
  <Container>
    <Header>
      <img src="https://via.placeholder.com/150" alt="Playlist" />
      <div>
        <span>playlist</span>
        <h1>Rock</h1>
        <p>13 músicas</p>

        <button>PLAY</button>
      </div>
    </Header>
    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Album</th>
        <th>
          <img src={ClockIcon} alt="tempo de duracao" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
