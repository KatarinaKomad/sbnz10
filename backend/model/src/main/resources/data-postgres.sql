insert into KORISNIK(email, ime, prezime, kategorija, poeni) VALUES
('komad.katarina@gmail.com', 'Katarina', 'Komad', 'REGULAR', 0),
('natasha.lakovic@gmail.com', 'Natasa', 'Lakovic', 'REGULAR', 0);

insert into SIMPTOM(lokacija, opis) VALUES
('LIST', 'svetlo-smeđe pege'), 
('LIST', 'maslonasto zelene pege'),
('LIST', 'uvijanje'),
('LIST', 'opadanje'),
('LIST', 'sušenje'), --5--
('LIST', 'braon larve'),
('LIST', 'bele tačkice'),
('LIST', 'žuta boja'),
('LIST', 'crveni pauci'),
('LIST', 'paukova mreža (naličje)'), --10--
('LIST', 'mravi'),
('LIST', 'lepljivost'),
('LIST', 'crne larve'),
('LIST', 'mrke fleke sa zelenim okvirom'),
('LIST', 'bele linije'), --15--
('LIST', 'zadebljanje'),
('LIST', 'crveno-ljubičasta boja'),
('PLOD', 'crvene fleke'),
('PLOD', 'opadanje zelenih plodova'),       
('PLOD', 'gusenice'), --20--
('PLOD', 'trulež'),
('PLOD', 'izmet insekta'),
('PLOD', 'braon fleke'),
('PLOD', 'plesan'),
('PLOD', 'larve'), --25--
('PLOD', 'crne fleke'),
('CVET', 'tamno siva boja'),
('CVET', 'opadanje'),
('CVET', 'sušenje'),
('CVET', 'zelene tačke'), --30--
('GRANA', 'braon larve'),
('GRANA', 'suve'),
('LIST', 'belosiva navlaka'),
('CVET', 'deformisanje'),
('CVET', 'zadebljanje'), --35--
('CVET', 'belosiva navlaka'), 
('PLOD', 'rđasta mreža');


INSERT INTO PREPARAT (naziv, primarna_kategorija, potkategorija, koncentracija) VALUES
('Akord plus', 'FUNGICID', 'JAK', 0.2),
('Blauvit', 'FUNGICID', 'SLAB', 0.7),
('Bakarni kreč 50', 'FUNGICID', 'SLAB', 0.6),
('Kaptan 50 WP', 'FUNGICID', 'SLAB', 0.3),
('Dithane DG Neo Tec', 'FUNGICID', 'SLAB', 0.25), --5--
('Mankogal', 'FUNGICID', 'SLAB', 0.2),
('Delan 700 WG', 'FUNGICID', 'SLAB', 0.05),
('Topas 100 EC', 'FUNGICID', 'SLAB', 0.025),
('Plavo ulje', 'INSEKTICID', 'SLAB', 2.8),
('Crveno ulje', 'INSEKTICID', 'SLAB', 2.8),--10--
('Abastate', 'INSEKTICID', 'JAK', 0.075),
('Harpun', 'INSEKTICID', 'SLAB', 0.15),
('Furioso', 'INSEKTICID', 'SLAB', 0.15),
('Polux', 'INSEKTICID', 'SLAB', 0.05),
('Amon', 'INSEKTICID', 'SLAB', 0.1),--15--
('Cosavet', 'FUNGICID', 'SLAB', 0.4),
('Luhare', 'FUNGICID', 'JAK', 0.02),
('Foton', 'FUNGICID', 'JAK', 0.02),
('Sekvenca', 'FUNGICID', 'JAK', 0.02), --19--
('Triton', 'INSEKTICID', 'SLAB', 0.3),--20--
('Avaunt 15 EC', 'INSEKTICID', 'JAK', 0.4),
('Coragen 20 SC', 'INSEKTICID', 'JAK', 0.2),
('Uranus', 'INSEKTICID', 'SLAB', 0.05),
('Envidor', 'INSEKTICID', 'JAK', 0.4),
('Mospilan 20 SG', 'INSEKTICID', 'JAK', 2.0), --25--
('Tonus', 'INSEKTICID', 'JAK', 0.025),
('Talent', 'INSEKTICID', 'JAK', 0.01),
('Neon', 'FUNGICID', 'JAK', 0.05),
('Pehar', 'FUNGICID', 'JAK', 0.2),
('Chorus 75 WG', 'FUNGICID', 'JAK', 2.0), --30--
('Makoseb', 'FUNGICID', 'SLAB', 0.2),
('Plures', 'INSEKTICID', 'SLAB', 0.3),
('Cipkord', 'INSEKTICID', 'SLAB', 0.15),
('Diminil', 'INSEKTICID', 'SLAB', 2.2);



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
(14, 2),
(15, 2),
(16, 4),
(17, 3),
(18, 5),
(19, 5),
(20, 4),
(21, 4),
(22, 5),
(23, 4),
(24, 5),
(25, 3),
(26, 4),
(27, 4),
(28, 3),
(29, 4),
(30, 5),
(31, 4),
(32, 5),
(33, 5),
(34, 5);


INSERT INTO BOLEST (naziv, faza_javljanja) VALUES
('Čađava pegavost lista', 'LISTANJE'),
('Čađava krastavost ploda', 'FORMIRANJE_PLODA'),
('Kruškina buva', 'FORMIRANJE_PLODA'),
('Pepelnica', 'FORMIRANJE_PLODA'),
('Jabukin smotavac', 'FORMIRANJE_PLODA'),--5--
('Crveni voćni pauk', 'LISTANJE'),
('Lisne vaši', 'LISTANJE'),
('Monilija višnje', 'CVETANJE'),
('Šupljikavost lista', 'LISTANJE'),
('Višnjina muva', 'FORMIRANJE_PLODA'),--10--
('Lisni mineri', 'LISTANJE');



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
(1, 3),
(2, 1),
(2, 2),
(1, 7),
(1, 8),
(2, 7),
(2, 4),
(2, 5),
(2, 6),
(3, 8),
(3, 9),
(3, 10),
(2, 11),
(1, 11);

INSERT INTO bolest_simptomi (bolest_id, simptomi_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 23),
(2, 26),
(3, 31),
(3, 6),
(4, 33),
(4, 34),
(4, 35),
(4, 36),
(4, 37),
(5, 19),
(5, 20),
(5, 21),
(5, 22),
(5, 23),
(6, 7),
(6, 8),
(6, 9),
(6, 10),
(6, 4),
(6, 5),
(7, 11),
(7, 12),
(7, 13),
(7, 3),
(8, 27),
(8, 28),
(8, 29),
(8, 32),
(8, 21),
(8, 24),
(9, 14),
(9, 5),
(9, 4),
(10, 25),
(10, 23),
(11, 14),
(11, 15);

INSERT INTO bolest_jaki_preparati(bolest_id, jaki_preparati_id) VALUES
(1, 1),
(2, 7),
(2, 8),
(3, 11),
(4, 17),
(4, 18),
(4, 19),
(5, 21),
(5, 22),
(6, 11),
(6, 24),
(7, 25),
(7, 26),
(7, 27),
(7, 13),
(8, 28),
(8, 29),
(8, 30),
(8, 1),
(9, 7);


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
(3, 15),
(4, 16),
(5, 12),
(5, 20),
(5, 14),
(6, 23),
(9, 3),
(9, 31),
(10, 25),
(10, 32),
(10, 14),
(7, 33),
(11, 34);

INSERT INTO biljka (kategorija, trenutna_faza, vreme_sadnje, tip_id, vlasnik_id) VALUES
('VOĆE', 'LISTANJE', '2022-02-06', 1, 1),
('VOĆE', 'LISTANJE', '2022-02-06', 2, 1),
('VOĆE', 'FORMIRANJE_PLODA', '2022-02-10', 3, 1),
('VOĆE', 'FORMIRANJE_PLODA', '2022-02-10', 2, 1),
('VOĆE', 'LISTANJE', '2022-02-06', 2, 2),--5--
('VOĆE', 'LISTANJE', '2022-02-06', 1, 2);

INSERT INTO finalna_dijagnoza (datum_preporuke, faza_biljke, biljka_id, bolest_id, preporuceni_preparat_id) VALUES
('2023-05-06', 'LISTANJE', 1, 1, 2),
('2023-05-01', 'LISTANJE', 2, 7, 26),
('2023-05-01', 'FORMIRANJE_PLODA', 3, 10, 32),
('2022-10-01', 'LISTANJE', 4, 7, 26),
('2023-04-11', 'LISTANJE', 4, 6, 11);
