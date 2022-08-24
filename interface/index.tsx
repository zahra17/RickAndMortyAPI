import { characterType, locationType, episodeType } from '../types';

export interface RootState {
  character: ICharacterData;
  location: ILocationData;
  episode: IEpisodeData;
}

export interface ICharacterData {
  characters: Array<characterType>;
  pagination: number;
  loading: boolean;
  error: boolean;
}

export interface ILocationData {
  locations: Array<locationType>;
  loading: boolean;
  error: boolean;
}

export interface IEpisodeData {
  episodes: Array<episodeType>;
  loading: boolean;
  error: boolean;
}

export interface IUsePagination {
  totalCount: any;
  pageSize: any;
  siblingCount: any;
  currentPage: any;
}

