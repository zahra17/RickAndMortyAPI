export type characterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  url: string;
  episode: Array<string>;
  created: string;
}

export type locationType = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Array<string>;
  url: string;
  created: string;
}

export type originType = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Array<string>;
  url: string;
  created: string;
}

export type episodeType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<string>;
  url: string;
  created: string;
}

export type locationURL = {
  url: string;
}

export type originURL = {
  url: string;
}

export type characterURL = {
  url: string;
}
