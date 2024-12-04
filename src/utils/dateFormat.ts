export const fromDateToString = (date: Date): string => {
    const res = date.toISOString().split('T')[0];
    return res;
} 

export const getBoundaryDatesByduration = (duration: string): string[] => {
    let dateFrom: Date = new Date();
    const dateTo: Date = new Date();

    switch (duration) {
        case 'день':
            dateFrom.setDate(dateFrom.getDate() - 1)
            break;
        case 'неделя':
            dateFrom.setDate(dateFrom.getDate() - 7)
            break;
        case 'месяц':
            dateFrom.setMonth(dateFrom.getMonth() - 1)
            break
        case 'год':
            dateFrom.setFullYear(dateFrom.getFullYear() - 1)
            break
        default:
            return ["", ""]
    }

    const fromDateString = fromDateToString(dateFrom);
    const toDateString = fromDateToString(dateTo);

    return [fromDateString, toDateString]
}