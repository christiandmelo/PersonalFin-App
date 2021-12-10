export interface ApiResultCategories {
  success: boolean,
  page: number,
  itemsPerPage: number,
  data: Array <Category>
}

export interface ApiResultCategory {
  success: boolean,
  data: Category
}

export interface Category {
  id: number;
  name: string;
  shortName: string;
};