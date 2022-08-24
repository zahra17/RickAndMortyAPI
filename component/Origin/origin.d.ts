import { originURL, originType } from '../types';

declare namespace IOrigin {
  export interface IProps {
    originURL: originURL;
    originData: Array<originType>;
  }
}

export { IOrigin };
