import { characterURL, episodeType } from '../types';

declare namespace IEpisode {
  export interface IProps {
    characterURL: characterURL;
    episodeData: Array<episodeType>;
  }
}

export { IEpisode };
