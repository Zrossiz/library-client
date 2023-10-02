export interface IBook {
  _id: string;
  title: string;
  description: string;
  authors: string;
  favorite: string;
  fileCover: string;
  fileName: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IFile {
  document_title: string;
  file: File | null;
  document_language: number;
}
