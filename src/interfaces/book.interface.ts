export interface IBook {
  _id: string;
  title: string;
  description: string;
  authors: string;
  favorite: string;
  fileCover: string;
  fileName: string;
  viewCount: number;
  createdAt: string;
  updatedAt: string;

  __v: number;
}

export interface IBookForm {
  title: string;
  description: string;
  authors: string;
  favorite: string;
  fileCover: string;
  fileName: string;
  fileBook: any;
}

export interface IFile {
  document_title: string;
  file: File | null;
  document_language: number;
}
