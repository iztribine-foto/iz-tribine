// =====================================================
//  KONTAKT — upiši svoje podatke između navodnika.
//  Ako ostane prazno, dio "Kontakt" se ne prikazuje.
// =====================================================
const KONTAKT = {
  instagram: "zagreb_w97",
  email: "zdinamo74@gmail.com",
  facebook: "https://www.facebook.com/share/g/19Xe3U9K8j",
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
const FOTOGRAFIJE =[ { file: "foto/1787431388005.jpg", utakmica: "DINAMO - HAJDUK", datum: "2026-08-22" },
  { file: "foto/77283-ezremove.jpg", utakmica: "DINAMO - HAJDUK", datum: "2026-08-22" },
  { file: "foto/77286-ezremove.jpg", utakmica: "DINAMO - HAJDUK", datum: "2026-08-22" },
  { file: "foto/77326-ezremove.jpg", utakmica: "DINAMO - HAJDUK", datum: "2026-08-22" },
  { file: "foto/81832-ezremove.jpg", utakmica: "DINAMO - HAJDUK", datum: "2026-08-22" },
  { file: "foto/81838-ezremove.jpg", utakmica: "DINAMO - HAJDUK", datum: "2026-08-22" },
  { file: "foto/81846-ezremove.jpg", utakmica: "DINAMO - HAJDUK", datum: "2026-08-22" },
  { file: "foto/PXL_050926_157964938.jpg", utakmica: "DINAMO - HAJDUK", datum: "2026-08-22" },
  { file: "foto/PXL_220826_157120741.jpg", utakmica: "DINAMO - HAJDUK", datum: "2026-08-22" },
  { file: "foto/PXL_220826_157121185.jpg", utakmica: "DINAMO - HAJDUK", datum: "2026-08-22" },
  { file: "foto/wmremove-transformed (5).jpg", utakmica: "DINAMO - HAJDUK", datum: "2026-08-22" },
  { file: "foto/wmremove-transformed (5) (1).jpg", utakmica: "Dinamo - Lokomotiva", datum: "2026-09-20" },
  { file: "foto/PXL_200926_159057315 (1).jpg", utakmica: "Dinamo - Lokomotiva", datum: "2026-09-20" },
  { file: "foto/87265-ezremove.jpg", utakmica: "Dinamo - Lokomotiva", datum: "2026-09-20" },
  { file: "foto/PXL_200926_159057315 (1).jpg", utakmica: "Dinamo - Lokomotiva", datum: "2026-09-20" },   
  { file: "foto/dinamo-lokomotiva.jpg", utakmica: "Dinamo - Lokomotiva", datum: "2026-09-20" },
  { file: "foto/89661-photo.avif", utakmica: "MNK Futsal Dinamo", datum: "2026-09-27", izvanSezone: true },
  { file: "foto/89662-photo2.avif", utakmica: "MNK Futsal Dinamo", datum: "2026-09-27", izvanSezone: true },
  { file: "foto/89660-photo3.avif", utakmica: "MNK Futsal Dinamo", datum: "2026-09-27", izvanSezone: true },
  { file: "foto/89657-photo4.avif", utakmica: "MNK Futsal Dinamo", datum: "2026-09-27", izvanSezone: true },
  { file: "foto/89659-photo5.avif", utakmica: "MNK Futsal Dinamo", datum: "2026-09-27", izvanSezone: true },
  { file: "foto/Screenshot_2026-09-27-19-50-24-186_com.android.chrome.avif", utakmica: "MNK Futsal Dinamo", datum: "2026-09-27", izvanSezone: true },
  { file: "foto/89701-photo7.avif", utakmica: "MNK Futsal Dinamo", datum: "2026-09-27", izvanSezone: true },
  { file: "foto/photo8.avif", utakmica: "MNK Futsal Dinamo", datum: "2026-09-20", izvanSezone: true },
  { file: "foto/hrk.jpg", utakmica: "Vukovar - Dinamo (kup)", datum: "2026-10-04" },
  { file: "foto/hrk1.jpg", utakmica: "Vukovar - Dinamo (kup)", datum: "2026-10-04" },
  { file: "foto/hrk2.jpg", utakmica: "Vukovar - Dinamo (kup)", datum: "2026-10-04" },
  { file: "foto/91817-hrk4.jpg", utakmica: "Vukovar - Dinamo (kup)", datum: "2026-10-04" },
  { file: "foto/Hrk5.jpg", utakmica: "Vukovar - Dinamo (kup)", datum: "2026-10-04" },
  { file: "foto/hrk6.jpg", utakmica: "Vukovar - Dinamo (kup)", datum: "2026-10-04" },
  { file: "foto/hrk7.jpg", utakmica: "Vukovar - Dinamo (kup)", datum: "2026-10-04" },
  { file: "foto/hrk8.jpg", utakmica: "Vukovar - Dinamo (kup)", datum: "2026-10-04" },
  { file: "foto/hrk9.jpg", utakmica: "Vukovar - Dinamo (kup)", datum: "2026-10-04" },
  { file: "foto/hrk10.jpg", utakmica: "Vukovar - Dinamo (kup)", datum: "2026-10-04" },
  { file: "foto/2026-10-04-vukovar-dinamo-kup-01-v2fe.jpg", utakmica: "Vukovar - Dinamo (kup)", datum: "2026-10-04" },
  { file: "foto/2026-10-10-hajduk-dinamo-01-oqbz.jpg", utakmica: "HAJDUK - DINAMO", datum: "2026-10-10" },
  { file: "foto/2026-10-10-hajduk-dinamo-02-oqbz.jpg", utakmica: "HAJDUK - DINAMO", datum: "2026-10-10" },
  { file: "foto/2026-10-10-hajduk-dinamo-03-oqbz.jpg", utakmica: "HAJDUK - DINAMO", datum: "2026-10-10" },
  { file: "foto/2026-10-10-hajduk-dinamo-04-oqbz.jpg", utakmica: "HAJDUK - DINAMO", datum: "2026-10-10" },
  { file: "foto/2026-10-10-hajduk-dinamo-05-oqbz.jpg", utakmica: "HAJDUK - DINAMO", datum: "2026-10-10" },
  { file: "foto/2026-10-10-hajduk-dinamo-01-0nza.jpg", utakmica: "HAJDUK - DINAMO", datum: "2026-10-10" },
  { file: "foto/2026-10-10-hajduk-dinamo-02-0nza.jpg", utakmica: "HAJDUK - DINAMO", datum: "2026-10-10" },
  { file: "foto/2026-10-10-hajduk-dinamo-01-gdvm.jpg", utakmica: "HAJDUK - DINAMO", datum: "2026-10-10" },
  { file: "foto/2026-10-10-hajduk-dinamo-01-r4kg.jpg", utakmica: "HAJDUK - DINAMO", datum: "2026-10-10" },
  { file: "foto/2026-10-10-hajduk-dinamo-01-1b6n.jpg", utakmica: "HAJDUK - DINAMO", datum: "2026-10-10" },
  { file: "foto/2026-10-10-hajduk-dinamo-01-xsqi.jpg", utakmica: "HAJDUK - DINAMO", datum: "2026-10-10" },
  { file: "foto/2026-10-10-hajduk-dinamo-01-3bjp.jpg", utakmica: "HAJDUK - DINAMO", datum: "2026-10-10" },
  { file: "foto/2026-10-10-hajduk-dinamo-01-4ocu.jpg", utakmica: "HAJDUK - DINAMO", datum: "2026-10-10" },
  { file: "foto/2026-10-15-dinamo-anderlecht-01-w9ok.jpg", utakmica: "DINAMO - ANDERLECHT", datum: "2026-10-15" },
  { file: "foto/2026-10-15-dinamo-anderlecht-02-w9ok.jpg", utakmica: "DINAMO - ANDERLECHT", datum: "2026-10-15" },
  { file: "foto/2026-10-15-dinamo-anderlecht-03-w9ok.jpg", utakmica: "DINAMO - ANDERLECHT", datum: "2026-10-15" },
  { file: "foto/2026-10-15-dinamo-anderlecht-04-w9ok.jpg", utakmica: "DINAMO - ANDERLECHT", datum: "2026-10-15" },
  { file: "foto/2026-10-15-dinamo-anderlecht-01-7iu4.jpg", utakmica: "DINAMO - ANDERLECHT", datum: "2026-10-15" },
  { file: "foto/2026-10-18-slaven-belupo-dinamo-01-b0lf.jpg", utakmica: "SLAVEN BELUPO - DINAMO", datum: "2026-10-18" },
  { file: "foto/2026-10-18-slaven-belupo-dinamo-02-b0lf.jpg", utakmica: "SLAVEN BELUPO - DINAMO", datum: "2026-10-18" },
  { file: "foto/2026-10-18-slaven-belupo-dinamo-03-b0lf.jpg", utakmica: "SLAVEN BELUPO - DINAMO", datum: "2026-10-18" },
  { file: "foto/2026-10-18-slaven-belupo-dinamo-04-b0lf.jpg", utakmica: "SLAVEN BELUPO - DINAMO", datum: "2026-10-18" },
  { file: "foto/2026-10-18-slaven-belupo-dinamo-01-cer3.jpg", utakmica: "SLAVEN BELUPO - DINAMO", datum: "2026-10-18" },
  { file: "foto/2026-10-18-slaven-belupo-dinamo-01-mf51.jpg", utakmica: "SLAVEN BELUPO - DINAMO", datum: "2026-10-18" },
  { file: "foto/2026-10-18-slaven-belupo-dinamo-02-mf51.jpg", utakmica: "SLAVEN BELUPO - DINAMO", datum: "2026-10-18" },
  { file: "foto/2026-10-18-slaven-belupo-dinamo-03-mf51.jpg", utakmica: "SLAVEN BELUPO - DINAMO", datum: "2026-10-18" },
  { file: "foto/2026-10-18-slaven-belupo-dinamo-01-szt2.jpg", utakmica: "SLAVEN BELUPO - DINAMO", datum: "2026-10-18" },
  { file: "foto/2026-10-18-slaven-belupo-dinamo-02-szt2.jpg", utakmica: "SLAVEN BELUPO - DINAMO", datum: "2026-10-18" },
  { file: "foto/2026-10-18-slaven-belupo-dinamo-01-zh6g.jpg", utakmica: "SLAVEN BELUPO - DINAMO", datum: "2026-10-18" },
  { file: "foto/2026-10-22-dinamo-nec-01-a9qz.jpg", utakmica: "DINAMO - NEC", datum: "2026-10-22" },
  { file: "foto/2026-10-22-dinamo-nec-02-a9qz.jpg", utakmica: "DINAMO - NEC", datum: "2026-10-22" },
  { file: "foto/2026-10-22-dinamo-nec-03-a9qz.jpg", utakmica: "DINAMO - NEC", datum: "2026-10-22" },
  { file: "foto/2026-10-22-dinamo-nec-01-meow.jpg", utakmica: "DINAMO - NEC", datum: "2026-10-22" },
  { file: "foto/2026-10-22-dinamo-nec-01-s3le.jpg", utakmica: "DINAMO - NEC", datum: "2026-10-22" },
  { file: "foto/2026-10-22-dinamo-nec-01-pzhe.jpg", utakmica: "DINAMO - NEC", datum: "2026-10-22" },
  { file: "foto/2026-10-22-dinamo-nec-01-o77d.jpg", utakmica: "DINAMO - NEC", datum: "2026-10-22" },
  { file: "foto/2026-10-27-dinamo-rijeka-01-l4jq.jpg", utakmica: "DINAMO - RIJEKA", datum: "2026-10-27" },
  { file: "foto/2026-10-27-dinamo-rijeka-02-l4jq.jpg", utakmica: "DINAMO - RIJEKA", datum: "2026-10-27" },
  { file: "foto/2026-10-27-dinamo-rijeka-03-l4jq.jpg", utakmica: "DINAMO - RIJEKA", datum: "2026-10-27" },
  { file: "foto/2026-10-27-dinamo-rijeka-04-l4jq.jpg", utakmica: "DINAMO - RIJEKA", datum: "2026-10-27" },
  { file: "foto/2026-10-27-dinamo-rijeka-05-l4jq.jpg", utakmica: "DINAMO - RIJEKA", datum: "2026-10-27" },
  { file: "foto/2026-10-27-dinamo-rijeka-06-l4jq.jpg", utakmica: "DINAMO - RIJEKA", datum: "2026-10-27" },
  { file: "foto/2026-10-27-dinamo-rijeka-01-pdbn.jpg", utakmica: "DINAMO - RIJEKA", datum: "2026-10-27" },
  { file: "foto/2026-10-27-dinamo-rijeka-01-t9tl.jpg", utakmica: "DINAMO - RIJEKA", datum: "2026-10-27" },
  { file: "foto/2026-10-27-dinamo-rijeka-01-1w2v.jpg", utakmica: "DINAMO - RIJEKA", datum: "2026-10-27" },
];

var DETALJI = {
  "SLAVEN BELUPO - DINAMO": "10. kolo HNL. Stadion Ivan Kušek Apaš, Koprivnica.",
  "DINAMO - ANDERLECHT": "2. pretkolo UEFA Europa lige. Stadion Maksimir.",
  "HAJDUK - DINAMO": "9. kolo HNL. Stadion Poljud.",
  "Vukovar - Dinamo (kup)": "Osmina finala kupa. Stadion Borovo naselje.",
  "DINAMO - NEC": "3. pretkolo UEFA Europa lige. Stadion Maksimir.",
  };






