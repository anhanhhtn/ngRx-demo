export interface BookModel {
    id: number;
    volumeInfo: {
      title: string;
      authors: Array<string>;
    };
}