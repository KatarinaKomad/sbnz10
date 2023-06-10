export enum FazaBiljke{
    LISTANJE = <any>"LISTANJE",
    CVETANJE = <any>"CVETANJE",
    FORMIRANJE_PLODA = <any>"FORMIRANJE_PLODA"
}

export enum KategorijaBiljke{
    VOCE = <any>"VOCE",
    POVRCE = <any>"POVRCE",
}

export enum VrsteVoca{
    KRUSKA = "KRUSKA",
    JABUKA = "JABUKA",
    VISNJA = "VISNJA",
    SLJIVA = "SLJIVA",
    BRESKVA = "BRESKVA",
}

export enum VrstePovrca{
    KROMPIR = "KROMPIR",
    BORANIJA = "BORANIJA",
    LUBENICA = "LUBENICA",
    DINJA = "DINJA",
    GRASAK = "GRASAK",
    PAPRIKA = "PAPRIKA",
    PARADAJZ = "PARADAJZ"
}

export const plantTypeImageMapper = {
    [VrsteVoca.KRUSKA.toString()] : "pear.png",
    [VrsteVoca.JABUKA.toString()] : "apple.png",
    [VrsteVoca.VISNJA.toString()] : "cherry.png",
    [VrsteVoca.BRESKVA.toString()] : "peach.png",
    [VrsteVoca.BRESKVA.toString()] : "plum.png",
    [VrstePovrca.BORANIJA.toString()] : "green beans.png",
    [VrstePovrca.KROMPIR.toString()] : "potato.png",
    [VrstePovrca.PAPRIKA.toString()] : "papper.png",
    [VrstePovrca.PARADAJZ.toString()] : "tomato.png",
    [VrstePovrca.GRASAK.toString()] : "peas.png",
    [VrstePovrca.DINJA.toString()] : "melon.png",
    [VrstePovrca.LUBENICA.toString()] : "watermelon.png"
}

export interface Biljka{
    kategorija: string,
    nazivTipa: string,
    datumSadnje: Date,
    trenutnaFaza: string,
    vlasnikEmail: string,
    id? : number
}