import { FazaBiljke } from "../biljka/biljka";

export interface Simptom {
    lokacija: LokacijaSimptoma,
    opis: string,
    id: number,
}

export enum LokacijaSimptoma{
    LIST = "LIST",
    PLOD = "PLOD",
    STABLO = "STABLO",
    CVET ="CVET",
    GRANA = "GRANA"
}

export interface UnosSimptoma{
    idBiljke: number;
    trenutnaFaza: FazaBiljke,
    symptomsIDs: number[]
}