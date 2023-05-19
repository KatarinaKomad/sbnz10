insert into KORISNIK(email, ime, prezime, kategorija, poeni) VALUES
('komad.katarina@gmail.com', 'Katarina', 'Komad', 'REGULAR', 0),
('natasha.lakovic@gmail.com', 'Natasa', 'Lakovic', 'REGULAR', 0);

insert into SIMPTOM(lokacija, opis) VALUES
('LIST', 'svetlo-smeđe pege'), 
('LIST', 'maslonasto zelene pege'),
('LIST', 'uvijanje'),
('LIST', 'opadanje'),
('LIST', 'sušenje'),
('LIST', 'braon larve'),
('LIST', 'bele tačkice'),
('LIST', 'žuta boja'),
('LIST', 'crveni pauci'),
('LIST', 'paukova mreža (naličje)'),
('LIST', 'mravi'),
('LIST', 'leprljivost'),
('LIST', 'crne larve'),
('LIST', 'mrke fleke sa zelenim okvirom'),
('LIST', 'bele linije'),
('LIST', 'zadebljanje'),
('LIST', 'crveno-ljubičasta boja'),
('PLOD', 'crvene fleke'),
('PLOD', 'opadanje zelenih plodova'),
('PLOD', 'gusenice'),
('PLOD', 'trulež'),
('PLOD', 'izmet insekta'),
('PLOD', 'braon fleke'),
('PLOD', 'plesan'),
('PLOD', 'larve'),
('PLOD', 'crne fleke'),
('CVET', 'tamno siva boja'),
('CVET', 'opadanje'),
('CVET', 'sušenje'),
('CVET', 'zelene tačke'),
('GRANA', 'braon larve'),
('GRANA', 'suve');

INSERT INTO PREPARAT (naziv, primarna_kategorija, potkategorija, koncentracija) VALUES
('Akord plus', 'FUNGICID', 'JAK', 0.2),
('Blauvit', 'FUNGICID', 'SLAB', 0.7),
('Bakarni kreč 50', 'FUNGICID', 'SLAB', 0.6),
('Kaptan 50 WP', 'FUNGICID', 'SLAB', 0.3),
('Dithane DG Neo Tec', 'FUNGICID', 'SLAB', 0.25),
('Mankogal', 'FUNGICID', 'SLAB', 0.2),
('Delan 700 WG', 'FUNGICID', 'SLAB', 0.05),
('Topas 100 EC', 'FUNGICID', 'SLAB', 0.025),
('Plavo ulje', 'INSEKTICID', 'SLAB', 2.8),
('Crveno ulje', 'INSEKTICID', 'SLAB', 2.8),
('Abastate', 'INSEKTICID', 'JAK', 0.075),
('Harpun', 'INSEKTICID', 'SLAB', 0.15),
('Furioso', 'INSEKTICID', 'SLAB', 0.15),
('Polux', 'INSEKTICID', 'SLAB', 0.05),
('Amon', 'INSEKTICID', 'SLAB', 0.1);

INSERT INTO preparat_ocene (preparat_id, ocene) VALUES
(1, 4),
(2, 5),
(3, 3),
(4, 4),
(5, 5),
(6, 4),
(7, 5),
(8, 3),
(9, 3),
(10, 4),
(11, 5),
(12, 5),
(13, 2),
(14, 2);


INSERT INTO BOLEST (naziv, faza_javljanja) VALUES
('Čađava pegavost lista', 'LISTANJE'),
('Čađava krastavost ploda', 'FORMIRANJE_PLODA'),
('Kruškina buva', 'FORMIRANJE_PLODA');

INSERT INTO TIP_BILJKE (naziv) VALUES
('kruška'),
('jabuka'),
('višnja'),
('breskva'),
('šljiva'),
('paradajz'),
('paprika'),
('krompir'),
('lubenica'),
('dinja'),
('pasulj'),
('boranija');

INSERT INTO tip_biljke_moguce_bolesti (tip_biljke_id, moguce_bolesti_id) VALUES
(1, 1),
(1, 2),
(1, 3);

INSERT INTO bolest_simptomi (bolest_id, simptomi_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 23),
(2, 26),
(3, 31),
(3, 6);

INSERT INTO bolest_jaki_preparati(bolest_id, jaki_preparati_id) VALUES
(1, 1),
(2, 7),
(2, 8),
(3, 11);


INSERT INTO bolest_slabi_preparati(bolest_id, slabi_preparati_id) VALUES
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(3, 9),
(3, 10),
(3, 12),
(3, 13),
(3, 14),
(3, 15);

INSERT INTO biljka (kategorija, trenutna_faza, vreme_sadnje, tip_id) VALUES
('VOCE', 'LISTANJE', '2022-02-06', 1),
('VOCE', 'LISTANJE', '2022-02-06', 2);
