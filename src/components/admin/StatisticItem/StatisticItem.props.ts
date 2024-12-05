export interface IStatisticItemProps {
    name: string
    value: number
    startDate: Date
    endDate: Date | null
    setStartDate: (arg0: any) => void
    setEndDate: (arg0: any) => void
}