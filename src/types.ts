export enum ACCOUNT_TYPE {
    GOLD = "Ouro",
    PLATINUM = "Platinum",
    BLACK = "Black"
}

export type TAccount = {
    id: string,
    ownerName: string,
    balance: number,
    type: ACCOUNT_TYPE
}
