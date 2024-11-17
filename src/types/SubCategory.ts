export interface ISubCategory {
  id: number;
  name: string;
  slug: string;
  categoryId: number;
  metaTitle: string;
  metaDescription: string;
  metaKeyWords: string;
}

export interface IProductSubCategory {
  id: number;
  subCategoryId: number;
  productId: number;
}
