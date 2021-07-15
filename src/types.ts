
export interface IState {
  photos: Array<IPicture>,
  myPhoto: Array<IPicture>,
  tags: string, 
  page: number,
  pages: number,
  loading: boolean
}

export interface IPhoto {
  picture: IPicture,
  title: string,
  onClick: (pic: IPicture) => void
}

export interface IPicture {
  id: string,
  src: string,
  title: string
}

export interface IPic {
  id: string,
  farm: string,
  server: string,
  secret: string,
  title: string,
}

export interface IContext {
  savePhoto: (pic: IPicture) => void,
  nextPage: () => void,
  backPage: () => void,
  changeTags: (tags: string) => void,
  removePhoto: (pic: IPicture) => void,
  photos: Array<IPicture>,
  myPhoto: Array<IPicture>,
  tags?: string, 
  page: number,
  pages: number,
  loading: boolean
}