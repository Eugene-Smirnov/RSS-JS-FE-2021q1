export interface CategoryDTO {
  name: string;
  image: string;
  title: string;
}

export const emptyCategory: CategoryDTO = {
  name: '',
  image: '',
  title: Date.now().toString(),
};
