export interface CategoryDTO {
  name: string;
  image: string;
  title: string;
  id?: string;
}

export const emptyCategory: CategoryDTO = {
  name: Date.now().toString(),
  image: '',
  title: Date.now().toString(),
};
