export type SpendingEntity = {
    id: number,
    name: string,
    price: number,
}

export type Spending = Omit<SpendingEntity, "id">