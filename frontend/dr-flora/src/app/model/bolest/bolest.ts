import { FazaBiljke } from "../biljka/biljka";
import { PotkategorijaPreparata, Preparat } from "../preparat/preparat";

export interface Bolest {
    id?: number;
    naziv: string;
    fazaJavljanja: FazaBiljke;
    simptomi: string[];
    slabiPreparati: Preparat[];
    jakiPreparati: Preparat[];
}

export interface PreparatiBolestiDTO {
    bolestId: number;
    potkategorijaPreparata: PotkategorijaPreparata
    preparatiIds: number[]
}