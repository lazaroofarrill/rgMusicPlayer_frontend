export interface Song {
  title: string,
  author: string,
  path: string

  [index: string]: any
}

export interface ApiStateInterface {
  songs: Song[]
}

function state(): ApiStateInterface {
  return {
    songs: []
  };
}

export default state;
