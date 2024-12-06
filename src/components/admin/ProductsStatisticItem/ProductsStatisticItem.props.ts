import { IProduct } from "@/types"

export interface IProductsStatisticItemProps {
    name: string
    products: IProduct[]
    startDate: Date
    endDate: Date | null
    setStartDate: (arg0: any) => void
    setEndDate: (arg0: any) => void
}