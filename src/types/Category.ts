export interface ICategory {
    id: number,
    name: string,
    slug: string,
    description: string,
    image: string
}

export interface ICategoryWithLength {
    length: number,
    totalPages: number,
    data: ICategory[]
}

export interface ICategoryPageProps {
    categories?: ICategoryWithLength
}