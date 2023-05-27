import { FazaBiljke } from "../biljka/biljka";

export interface FinalnaDijagnoza{
    id: number;
    nazivBolesti: string;
    nazivPreparata: string;
    doza: number;
    ocenaPreparata: number;
    datumPreporuke: Date;
    nazivtipaBiljke: string;
    idBiljke: number;
    fazaBiljke: FazaBiljke;
    poruka: string;
}