export interface Category {
  success: boolean,
  page: number,
  itemsPerPage: number,
  data: Array <{
    id: number;
    name: string;
    shortName: string;
  }>
}

//export type Categories = Array<Category>;
