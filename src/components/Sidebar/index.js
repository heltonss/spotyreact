import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddPlaylistIcon from 'assets/images/add_playlist.svg';
import { Container, NewPlaylist, Nav } from './style';

export default class index extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <a href="#">Navegar</a>
            </li>
            <li>
              <a href="#">Rádio</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>sua biblioteca</span>
            </li>
            <li>
              <a href="#">Seu Daily Mix</a>
            </li>
            <li>
              <a href="#">Tocados recentemente</a>
            </li>
            <li>
              <a href="#">Músicas</a>
            </li>
            <li>
              <a href="#">Albums</a>
            </li>
            <li>
              <a href="#">Artistas</a>
            </li>
            <li>
              <a href="#">Estações</a>
            </li>
            <li>
              <a href="#">Arquivos locais</a>
            </li>
            <li>
              <a href="#">Vídeos</a>
            </li>
            <li>
              <a href="#">Podcasts</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>playlists</span>
            </li>
            <li>
              <a href="#">melhores do rock</a>
            </li>
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Adicionar playlist" />
          Nova Playlist
        </NewPlaylist>
      </Container>
    );
  }
}
