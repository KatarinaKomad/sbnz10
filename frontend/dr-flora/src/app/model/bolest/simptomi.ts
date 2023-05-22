export interface Simptom {
    lokacija: LokacijaSimptoma,
    opis: string
}

export enum LokacijaSimptoma{
    LIST = "LIST",
    PLOD = "PLOD",
    STABLO = "STABLO",
    CVET ="CVET",
    GRANA = "GRANA"
}