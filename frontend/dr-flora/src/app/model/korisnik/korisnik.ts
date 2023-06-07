export enum Role{
    DOKTOR, 
    REGULAR,
    PREMIUM
}

export interface LoginData{
    username: string,
    password: string
}

export interface Korisnik{
    username: string,
    id: number,
    role: Role
}