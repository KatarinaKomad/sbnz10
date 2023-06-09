export enum Role{
    DOKTOR = "DOKTOR", 
    REGULAR = "REGULAR",
    PREMIUM = "PREMIUM"
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