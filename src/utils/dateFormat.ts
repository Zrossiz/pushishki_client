export const fromDateToString = (date: Date): string => {
    const res = date.toISOString().split('T')[0];
    return res;
} 