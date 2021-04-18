export interface Song {
  id: number,
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
