export interface Category {
  id: number;
  name: string;
  shortName: string;
};

export interface ApiResultCategories {
  success: boolean,
  page: number,
  itemsPerPage: number,
  data: Array <Category>
}
