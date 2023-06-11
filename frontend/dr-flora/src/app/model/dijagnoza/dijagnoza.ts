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
    idPreparat: number;
    strDate?: string;
    vlasnik?: string;
}

export interface DijagnozaFitlterData{
    idBiljke?: number,
    nazivBolesti: string,
    nazivTipaBiljke: string
}