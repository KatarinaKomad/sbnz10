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

export const plantTypeImageMapper = {
    [VrsteVoca.KRUŠKA.toString()] : "pear.png",
    [VrsteVoca.JABUKA.toString()] : "apple.png",
    [VrsteVoca.VIŠNJA.toString()] : "cherry.png",
    [VrsteVoca.BRESKVA.toString()] : "peach.png",
    [VrsteVoca.BRESKVA.toString()] : "plum.png",
    [VrstePovrca.BORANIJA.toString()] : "green beans.png",
    [VrstePovrca.KROMPIR.toString()] : "potato.png",
    [VrstePovrca.PAPRIKA.toString()] : "papper.png",
    [VrstePovrca.PARADAJZ.toString()] : "tomato.png",
    [VrstePovrca.GRAŠAK.toString()] : "peas.png",
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