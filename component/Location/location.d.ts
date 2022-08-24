import { locationURL, locationType } from '../types';

declare namespace ILocation {
  export interface IProps {
    locationURL: locationURL;
    locationData: Array<locationType>;
  }
}

export { ILocation };
