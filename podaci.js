// =====================================================
//  KONTAKT — upiši svoje podatke između navodnika.
//  Ako ostane prazno, dio "Kontakt" se ne prikazuje.
// =====================================================
const KONTAKT = {
  instagram: "",   // npr. "zagreb_w97"  (bez znaka @)
  email: ""        // npr. "ime@gmail.com"
};

// =====================================================
//  FOTOGRAFIJE — svaka fotografija je JEDAN RED.
//  Novu dodaj na kraj, prije zadnje uglate zagrade ].
//  Redoslijed nije bitan: stranica sama sortira po datumu
//  (najnovije prvo) i sama pravi filtere po utakmici.
//
//  file      = putanja do slike (mapa foto/)
//  utakmica  = npr. "Dinamo – Hajduk"
//  datum     = GODINA-MJESEC-DAN, npr. "2025-09-14"
//  naslov    = kratki naslov fotke (nije obavezan)
//
//  Primjer reda (makni // ispred da proradi):
//  { file: "foto/hajduk-01.jpg", utakmica: "Dinamo – Hajduk", datum: "2025-09-14", naslov: "Dim prije početka" },
// =====================================================
const FOTOGRAFIJE =[ { file: "foto/1787431388005.jpg", utakmica: "Maksimir", datum: "2026-09-20" },
  { file: "foto/77283-ezremove.jpg", utakmica: "Maksimir", datum: "2026-09-20" },
  { file: "foto/77286-ezremove.jpg", utakmica: "Maksimir", datum: "2026-09-20" },
  { file: "foto/77326-ezremove.jpg", utakmica: "Maksimir", datum: "2026-09-20" },
  { file: "foto/81832-ezremove.jpg", utakmica: "Maksimir", datum: "2026-09-20" },
  { file: "foto/81838-ezremove.jpg", utakmica: "Maksimir", datum: "2026-09-20" },
  { file: "foto/81846-ezremove.jpg", utakmica: "Maksimir", datum: "2026-09-20" },
  { file: "foto/PXL_050926_157964938.jpg", utakmica: "Maksimir", datum: "2026-09-20" },
  { file: "foto/PXL_220826_157120741.jpg", utakmica: "Maksimir", datum: "2026-09-20" },
  { file: "foto/PXL_220826_157121185.jpg", utakmica: "Maksimir", datum: "2026-09-20" },
  { file: "foto/wmremove-transformed (5).jpg", utakmica: "Maksimir", datum: "2026-09-20" },

];
