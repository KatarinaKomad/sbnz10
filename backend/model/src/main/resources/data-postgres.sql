insert into KORISNIK(email, ime, prezime, kategorija, poeni, password) VALUES
('komad.katarina@gmail.com', 'Katarina', 'Komad', 'REGULAR', 0, '123'),
('natasha.lakovic@gmail.com', 'Natasa', 'Lakovic', 'REGULAR', 0, '123');

insert into SIMPTOM(lokacija, opis) VALUES
('LIST', 'svetlo-smede pege'), 
('LIST', 'maslonasto zelene pege'),
('LIST', 'uvijanje'),
('LIST', 'opadanje'),
('LIST', 'susenje'), --5--
('LIST', 'braon larve'),
('LIST', 'bele tackice'),
('LIST', 'zuta boja'),
('LIST', 'crveni pauci'),
('LIST', 'paukova mreza (nalicje)'), --10--
('LIST', 'mravi'),
('LIST', 'lepljivost'),
('LIST', 'crne larve'),
('LIST', 'mrke fleke sa zelenim okvirom'),
('LIST', 'bele linije'), --15--
('LIST', 'zadebljanje'),
('LIST', 'crveno-ljubicasta boja'),
('PLOD', 'crvene fleke'),
('PLOD', 'opadanje zelenih plodova'),       
('PLOD', 'gusenice'), --20--
('PLOD', 'trulez'),
('PLOD', 'izmet insekta'),
('PLOD', 'braon fleke'),
('PLOD', 'plesan'),
('PLOD', 'larve'), --25--
('PLOD', 'crne fleke'),
('CVET', 'tamno siva boja'),
('CVET', 'opadanje'),
('CVET', 'susenje'),
('CVET', 'zelene tacke'), --30--
('GRANA', 'braon larve'),
('GRANA', 'suve'),
('LIST', 'belosiva navlaka'),
('CVET', 'deformisanje'),
('CVET', 'zadebljanje'), --35--
('CVET', 'belosiva navlaka'), 
('PLOD', 'rdasta mreza'),

('LIST', 'svetlo-zelene pege'),
('LIST', 'nekroza'),

('LIST', 'sitne sive pege'),  --40--

('PLOD', 'nekroza u koncentricnim krugovima'),
('LIST', 'sitne mrke pege nepravilnog oblika'),
('PLOD', 'siva tacka'),

('STABLO', 'trulez'),
('STABLO', 'tamno-zelene mrlje'), --45--
('LIST', 'tamno-zelene mrlje'),  --46--
('STABLO', 'ljubicasto-braon mrlje'), --47--
('LIST', 'ljubicasto-braon mrlje'), --48 --
('PLOD', 'boranje'),--49--

('LIST', 'okrugle smede mrlje'), --50--
('STABLO', 'okrugle smede mrlje'), --51--
('LIST', 'koncentricni krugovi'), --52--
('STABLO', 'koncentricni krugovi'), --53--

('LIST', 'tamno-smede mrlje'),  --54--
('CVET', 'belosiva navlaka'),   --55--

('LIST', 'zagrizaj'),   
('CVET', 'zagrizaj'),   
('PLOD', 'zagrizaj'),   

('LIST', 'jaja'),   
('PLOD', 'sitni deformisan'),  --60--

('PLOD', 'promena boje'), 
('PLOD', 'jaja'), 

('LIST', 'zuckaste pege'), 
('PLOD', 'omeksavanje tkiva'), 
('LIST', 'crne okruglaste pege'), --65--

('LIST', 'ostecenje'),
('STABLO', 'ostecenje'),

('STABLO', 'krupne ovlane pege'),
('PLOD', 'sitne mrke pege nepravilnog oblika'),

('LIST', 'crvene pege'), --70--
('PLOD', 'okruglaste masne pege');

INSERT INTO PREPARAT (naziv, primarna_kategorija, potkategorija, koncentracija) VALUES
('Akord plus', 'FUNGICID', 'JAK', 0.2),
('Blauvit', 'FUNGICID', 'SLAB', 0.7),
('Bakarni krec 50', 'FUNGICID', 'SLAB', 0.6),
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
('Diminil', 'INSEKTICID', 'SLAB', 2.2),

('Mankosav', 'FUNGICID', 'SLAB', 0.25), --35--
('Everest', 'FUNGICID', 'SLAB', 0.40), 
('Hordox', 'FUNGICID', 'SLAB', 0.20),
('Ridomil', 'FUNGICID', 'JAK', 0.25),
('Alijansa', 'FUNGICID', 'JAK', 0.25),
('Equation', 'FUNGICID', 'JAK', 0.5), --40--

('Akord', 'FUNGICID', 'JAK', 0.75),
('Fuzija', 'FUNGICID', 'JAK', 2.0),
('Promesa', 'FUNGICID', 'JAK', 0.75),

('Dithane', 'FUNGICID', 'SLAB', 0.45), 

('Atlas', 'FUNGICID', 'JAK', 1.0), --45--
('Switch', 'FUNGICID', 'JAK', 0.7), 

('Coragen', 'INSEKTICID', 'SLAB', 0.2),

('Abamektrin', 'INSEKTICID', 'SLAB', 0.35),
('Acetamiprid', 'INSEKTICID', 'SLAB', 0.35),

('Talstar', 'INSEKTICID', 'SLAB', 0.05), --50--
('Fobus', 'INSEKTICID', 'SLAB', 0.05),

('Manosan', 'FUNGICID', 'SLAB', 0.25),

('Flux', 'FUNGICID', 'SLAB', 0.2);



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
(35, 5),
(36, 3),
(37, 4),
(38, 5),
(39, 4),
(40, 5),
(41, 5),
(42, 5),
(43, 4),
(44, 4),
(45, 5),
(46, 5),
(47, 3),
(48, 3),
(49, 5),
(50, 5),
(51, 4),
(52, 5),
(52, 3);


INSERT INTO BOLEST (naziv, faza_javljanja) VALUES
('cadava pegavost lista', 'LISTANJE'),
('cadava krastavost ploda', 'FORMIRANJE_PLODA'),
('Kruskina buva', 'FORMIRANJE_PLODA'),
('Pepelnica', 'FORMIRANJE_PLODA'),
('Jabukin smotavac', 'FORMIRANJE_PLODA'),--5--
('Crveni vocni pauk', 'LISTANJE'),
('Lisne vasi', 'LISTANJE'),
('Monilija visnje', 'CVETANJE'),
('supljikavost lista', 'LISTANJE'),
('Visnjina muva', 'FORMIRANJE_PLODA'),--10--
('Lisni mineri', 'LISTANJE'),
('Plamenjaca', 'LISTANJE'),
('Siva pegavost', 'LISTANJE'),
('Crna pegavost', 'LISTANJE'),
('Siva trulez', 'LISTANJE'), --15--
('Kukuruzna sovica', 'LISTANJE'),
('Kalifornijski trips', 'FORMIRANJE_PLODA'),
('Zelena stenica', 'FORMIRANJE_PLODA'),
('Moljac', 'FORMIRANJE_PLODA'),
('Krompirova zlatica', 'FORMIRANJE_PLODA'), --20--
('Antraknoza', 'LISTANJE'),
('Rda pasulja', 'LISTANJE');


INSERT INTO TIP_BILJKE (naziv) VALUES
('kruska'),
('jabuka'),
('visnja'),
('breskva'),
('sljiva'), --5--
('paradajz'),
('paprika'),
('krompir'),
('lubenica'),
('dinja'),--10--
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
(1, 11),
-- paradajz
(6, 12),  -- plamenjaca
(6, 13),  -- siva pegavost
(6, 14),  -- crna pegavost
(6, 15),  -- siva trulez
(6, 16),  -- kukuruzna sovica
-- paprika 
(7, 12), -- plamenjaca
(7, 14), -- crna pegavost
(7, 15), -- siva trulez
(7, 16), -- kukuruzna sovica
(7, 17), -- kalifornijski trips
(7, 18), -- zelena stenica
-- krompir
(8, 12), -- plamenjaca
(8, 14), -- crna pegavost
(8, 19), -- moljac
(8, 20), -- krompirova zlatica
-- lubenica
(9, 21), -- antraknoza
(9, 12), -- plamenjaca
-- dinja
(10, 21), -- antraknoza
(10, 12),-- plamenjaca
-- pasulj
(11, 21), -- antraknoza
(11, 22), -- rda pasulja
(11, 15), -- siva trulez
(11, 12), -- plamenjaca
-- boranija
(12, 21), -- antraknoza
(12, 15), -- siva trulez
(12, 12); -- plamenjaca

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
(11, 15),
--plamenjaca
(12, 38),
(12, 39),

(12, 44),
(12, 45),
(12, 46),
(12, 47),
(12, 48),
(12, 49),
(12, 63),
(12, 64),
(12, 33),

(12, 60),
(12, 71),
--siva pegavost
(13, 40),
(13, 3),
(13, 4),
(13, 5),
--crna pegavost
(14, 5),
(14, 41),
(14, 42),
(14, 50),
(14, 51),
(14, 52),
(14, 53),
(14, 8),
(14, 65),
--siva trulez
(15, 1),
(15, 43),
(15, 53),
(15, 33),
(15, 55),
(15, 34),
-- kukuruzna sovica
(16, 21),
(16, 56),
(16, 57),
(16, 58),
(16, 59),
-- kalifornijski trips
(17, 60),
--zelena stanica
(18, 61),
(18, 62),
-- moljac
(19, 21),
(19, 66),
(19, 67),
-- krompirova zlatica
(20, 60),
(20, 59),
-- antraknoza
(21, 65),
(21, 63),
(21, 68),
(21, 42),
(21, 69),
-- rda pasulja
(22, 70);

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
(9, 7),
-- plamenjaca
(12, 38),
(12, 39),
(12, 40),
(12, 42),
(12, 43),
-- siva pegavost
(13, 41),
(13, 42),
(13, 43),
-- crna pegavost
(14, 38),
(14, 40),
(14, 43),
(14, 19),
-- siva trulez
(15, 45),
(15, 46),
(15, 29),
-- kukuruzna sovica
(16, 26),
-- moljac
(19, 26),
(19, 25),
-- krompirova zlatica
(20, 26),
(20, 25),
-- antraknoza
(21, 43),
-- rda pasulja
(22, 43),
(22, 38);

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
(11, 34),
-- plamenjaca
(12, 35),
(12, 36),
(12, 37),
(12, 52),
-- crna pegavost
(14, 44),
-- kukuruzna sovica
(16, 20),
(16, 47),
-- kalifornijski trips
(17, 48),
(17, 49),
--zelena stenica
(18, 50),
(18, 51),
-- antraknoza
(21, 53),
-- rda pasulja
(22, 35);

INSERT INTO biljka (kategorija, trenutna_faza, vreme_sadnje, tip_id, vlasnik_id) VALUES
('VOCE', 'LISTANJE', '2022-02-06', 1, 1),
('VOCE', 'LISTANJE', '2022-02-06', 2, 1),
('VOCE', 'FORMIRANJE_PLODA', '2022-02-10', 3, 1),
('VOCE', 'FORMIRANJE_PLODA', '2022-02-10', 2, 1),
('VOCE', 'LISTANJE', '2022-02-06', 2, 2),--5--
('VOCE', 'LISTANJE', '2022-02-06', 1, 2),
('VOCE', 'FORMIRANJE_PLODA', '2022-02-10', 1, 1),

('POVRCE', 'LISTANJE', '2022-02-06', 9, 1), --8-- lubenica -> plamenjaca -> dinja
('POVRCE', 'LISTANJE', '2022-02-06', 10, 1); --9-- dinja

INSERT INTO preporuka(naziv_preparata, opis_preparata, poruka, preporucena_doza, bolest_id, biljka_id) VALUES
('Blauvit', 'slab fungicid', '', 0.7, 1, 1),
('Tonus', 'jak insekticid', '',0.025, 7, 2),
('Plures', 'slab insekticid', '',0.3, 10, 3),
('Tonus', 'jak insekticid', '',0.025, 7, 4),
('Abastate', 'jak insekticid','',0.075 ,6, 4);

INSERT INTO finalna_dijagnoza (datum_preporuke, faza_biljke, biljka_id, bolest_id, preporuceni_preparat_id, preporuka_id) VALUES
('2023-05-06', 'LISTANJE', 1, 1, 2, 1),
('2023-05-01', 'LISTANJE', 2, 7, 26, 2),
('2023-05-01', 'FORMIRANJE_PLODA', 3, 10, 32, 3),
('2022-10-01', 'LISTANJE', 4, 7, 26, 4),
('2023-04-11', 'LISTANJE', 4, 6, 11, 5);

INSERT INTO neizlecena_bolest_voca (datum_dijagnoze, faza_javljanja, biljka_id, bolest_id, preparat_id) VALUES
('2023-05-06', 'CVETANJE', 1, 2, 2),
('2023-02-06', 'LISTANJE', 1, 3, 2);

