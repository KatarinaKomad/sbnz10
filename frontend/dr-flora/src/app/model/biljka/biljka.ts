export enum FazaBiljke{
    LISTANJE = "LISTANJE",
    CVETANJE = "CVETANJE",
    FORMIRANJE_PLODA = "FORMIRANJE PLODA"
}

export enum KategorijaBiljke{
    VOĆE = "VOĆE",
    POVRĆE = "POVRĆE",
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
    kategorija: KategorijaBiljke,
    nazivTipa: string,
    datumSadnje: Date,
    trenutnaFaza: FazaBiljke

}