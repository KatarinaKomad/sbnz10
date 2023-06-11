export interface RateData{
    isDoctor: boolean;
    rate: number;
    preparatId: number;
}

export interface RatePreparat{
    id: number,
    naziv: String;
    ocena: number;
}

export interface Preparat {
    id: number;
    naziv: String;
    primarnaKategorija: KategorijaPreparata
    potkategorija: PotkategorijaPreparata;
    ocena: number;
    koncentracija: number;
}

export enum KategorijaPreparata{
    FUNGICID = "FUNGICID",
    HERBICID = "HERBICID",
    INSEKTICID = "INSEKTICID"
}

export enum PotkategorijaPreparata {
    JAK = "JAK",
    SLAB = "SLAB"
}
