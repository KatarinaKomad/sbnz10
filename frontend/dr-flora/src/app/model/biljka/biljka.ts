export enum FazaBiljke{
    LISTANJE = <any>"LISTANJE",
    CVETANJE = <any>"CVETANJE",
    FORMIRANJE_PLODA = <any>"FORMIRANJE_PLODA"
}

export enum KategorijaBiljke{
    VOĆE = <any>"VOĆE",
    POVRĆE = <any>"POVRĆE",
}

export enum VrsteVoca{
    KRUŠKA = "KRUŠKA",
    JABUKA = "JABUKA",
    VIŠNJA = "VIŠNJA",
    ŠLJIVA = "ŠLJIVA",
    BRESKVA = "BRESKVA",
}

export enum VrstePovrca{
    KROMPIR = "KROMPIR",
    BORANIJA = "BORANIJA",
    LUBENICA = "LUBENICA",
    DINJA = "DINJA",
    GRAŠAK = "GRAŠAK",
    PAPRIKA = "PAPRIKA",
    PARADAJZ = "PARADAJZ"
}

export interface Biljka{
    kategorija: string,
    nazivTipa: string,
    datumSadnje: Date,
    trenutnaFaza: string,
    vlasnikEmail: string,
    id? : number
}