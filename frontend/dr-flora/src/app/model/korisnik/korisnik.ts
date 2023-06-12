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

export interface UserInfo{
    username: string,
    id: number,
    role: Role,
    firstName: string,
    lastName: string,
}