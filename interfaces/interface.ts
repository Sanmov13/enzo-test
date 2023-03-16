export interface IProducts {
    id: number,
    name?: string,
    active: boolean,
    createdAt?: string,
    descriptions?: string,
    removedAt?: string,
    title?: string,
    updatedAt?: string,
    publishedAt?: string
}

export interface IOptions {
    value: string,
    name: string
}