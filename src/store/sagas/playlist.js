import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlaylistActions } from '../ducks/playlist';

export function* getPlaylists() {
  try {
    const response = yield call(api.get, 'playlists');
    yield put(PlaylistActions.getPlaylistSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
