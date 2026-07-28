// Recept Master Pro - Bulletproof & Offline Ready

const AUTHENTIC_RECIPES = [
  {
    "id": "rec_001",
    "title": "Frikadellen,Hackbraten",
    "category": "Hackfleisch",
    "base_batch_kg": 5.0,
    "meat_ingredients": [
      {
        "name": "S II/Schulter schier",
        "amount_kg": 5.0
      }
    ],
    "spices_additives": [
      {
        "name": "Kochsalz",
        "amount_kg": 0.18,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weiB",
        "amount_kg": 0.035,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.015,
        "unit": "kg"
      },
      {
        "name": "Schmakoline",
        "amount_kg": 0.03,
        "unit": "kg"
      },
      {
        "name": "Zwiebelgranulat",
        "amount_kg": 0.01,
        "unit": "kg"
      },
      {
        "name": "Bindfest HS gegwollen (1 Teil Bindfest -1 Teil Wasser)",
        "amount_kg": 0.15,
        "unit": "kg"
      },
      {
        "name": "mm",
        "amount_kg": 3.0,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2.pdf (Seite 1)"
  },
  {
    "id": "rec_002",
    "title": "Fleischrotwurst",
    "category": "Brühwurst",
    "base_batch_kg": 70.0,
    "meat_ingredients": [
      {
        "name": "mm",
        "amount_kg": 12.0
      },
      {
        "name": "S.-Backen gepokelt,gekocht",
        "amount_kg": 14.0
      },
      {
        "name": "mm",
        "amount_kg": 12.0
      },
      {
        "name": "Schwarten",
        "amount_kg": 10.0
      },
      {
        "name": "S.-Blut mit 18gr NPS/ Ltr.vorsalzen",
        "amount_kg": 8.0
      },
      {
        "name": "Brihe",
        "amount_kg": 2.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "Thir.Rotwurst (Van Hess)",
        "amount_kg": 0.42,
        "unit": "kg"
      },
      {
        "name": "FiaPurMZB",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "AvoRot extra",
        "amount_kg": 0.12,
        "unit": "kg"
      },
      {
        "name": "Schmakolin",
        "amount_kg": 0.08,
        "unit": "kg"
      },
      {
        "name": "Knoblauchpaste",
        "amount_kg": 0.06,
        "unit": "kg"
      },
      {
        "name": "Nelken gem.",
        "amount_kg": 0.02,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2.pdf (Seite 2)"
  },
  {
    "id": "rec_003",
    "title": "Griebenschmalz",
    "category": "Kochwurst",
    "base_batch_kg": 225.0,
    "meat_ingredients": [
      {
        "name": "S.-Fl",
        "amount_kg": 100.0
      },
      {
        "name": "S.-Ruckenspeck gewurfelt 6mm",
        "amount_kg": 100.0
      },
      {
        "name": "Dorrfleisch gewurfelt",
        "amount_kg": 25.0
      }
    ],
    "spices_additives": [
      {
        "name": "Kochsalz ausgen",
        "amount_kg": 0.018,
        "unit": "kg"
      },
      {
        "name": "PfefferweiB",
        "amount_kg": 0.003,
        "unit": "kg"
      },
      {
        "name": "Schmakoline",
        "amount_kg": 0.003,
        "unit": "kg"
      },
      {
        "name": "Majoran",
        "amount_kg": 0.007,
        "unit": "kg"
      },
      {
        "name": "Rostzwiebeln",
        "amount_kg": 0.025,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2.pdf (Seite 3)"
  },
  {
    "id": "rec_004",
    "title": "Hsm.Presskopf grau",
    "category": "Kochwurst",
    "base_batch_kg": 100.0,
    "meat_ingredients": [
      {
        "name": "Brät: Deckelspeck",
        "amount_kg": 5.0
      },
      {
        "name": "Brät: Eis",
        "amount_kg": 5.0
      },
      {
        "name": "Grobes: mm",
        "amount_kg": 13.0
      },
      {
        "name": "Grobes: Kutterbauch I",
        "amount_kg": 18.0
      },
      {
        "name": "Grobes: mm",
        "amount_kg": 8.0
      },
      {
        "name": "Grobes: S.Kopfe grau,gekocht 12 mm gewurfelt",
        "amount_kg": 22.0
      }
    ],
    "spices_additives": [
      {
        "name": "Kochsalz",
        "amount_kg": 2.0,
        "unit": "kg"
      },
      {
        "name": "Hsm.Presskopfgew. (HS)",
        "amount_kg": 0.4,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weiB",
        "amount_kg": 0.45,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "Nelken",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Schmakoline",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Zwiebelgranulat",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Knoblauchgranulat",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "RolaPhos (Laue)",
        "amount_kg": 0.4,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.1,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2.pdf (Seite 4)"
  },
  {
    "id": "rec_005",
    "title": "Hsm.Blutmagen",
    "category": "Kochwurst",
    "base_batch_kg": 80.0,
    "meat_ingredients": [
      {
        "name": "Schwartengekocht",
        "amount_kg": 20.0
      },
      {
        "name": "Blut",
        "amount_kg": 16.0
      },
      {
        "name": "Kesselbrihe",
        "amount_kg": 6.0
      },
      {
        "name": "Kopfe rot,gekocht 3 mmwolfen",
        "amount_kg": 6.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPs",
        "amount_kg": 1.4,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weib",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Blutwurst hellrot (Lau)",
        "amount_kg": 0.8,
        "unit": "kg"
      },
      {
        "name": "Mat (v.Hees)",
        "amount_kg": 0.08,
        "unit": "kg"
      },
      {
        "name": "Subr",
        "amount_kg": 0.08,
        "unit": "kg"
      },
      {
        "name": "Nelken gem.",
        "amount_kg": 0.04,
        "unit": "kg"
      },
      {
        "name": "Zwiebelgranulat",
        "amount_kg": 0.1,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2.pdf (Seite 5)"
  },
  {
    "id": "rec_006",
    "title": "Lyoner mit Paprika",
    "category": "Brühwurst",
    "base_batch_kg": 2.0,
    "meat_ingredients": [
      {
        "name": "Pepadew",
        "amount_kg": 2.0
      }
    ],
    "spices_additives": [],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2.pdf (Seite 6)"
  },
  {
    "id": "rec_007",
    "title": "Wildbratwurst",
    "category": "Brühwurst",
    "base_batch_kg": 105.0,
    "meat_ingredients": [
      {
        "name": "WildVa.-Fleisch5mm",
        "amount_kg": 50.0
      },
      {
        "name": "S.-Bauch",
        "amount_kg": 50.0
      },
      {
        "name": "mm",
        "amount_kg": 5.0
      }
    ],
    "spices_additives": [
      {
        "name": "PfeffereweiB",
        "amount_kg": 0.35,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.15,
        "unit": "kg"
      },
      {
        "name": "Schmakolie",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "Thymian",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "BratwurstHelabin D",
        "amount_kg": 1.0,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2.pdf (Seite 7)"
  },
  {
    "id": "rec_008",
    "title": "Lyoner mit Ei",
    "category": "Brühwurst",
    "base_batch_kg": 24.75,
    "meat_ingredients": [
      {
        "name": "S III",
        "amount_kg": 10.5
      },
      {
        "name": "Deckelspeck",
        "amount_kg": 3.5
      },
      {
        "name": "S-Backen",
        "amount_kg": 4.5
      },
      {
        "name": "Eis",
        "amount_kg": 6.25
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 0.525,
        "unit": "kg"
      },
      {
        "name": "FeinsterAufschnitt",
        "amount_kg": 0.18,
        "unit": "kg"
      },
      {
        "name": "PfefferweiB",
        "amount_kg": 0.012,
        "unit": "kg"
      },
      {
        "name": "Macistella",
        "amount_kg": 0.012,
        "unit": "kg"
      },
      {
        "name": "Ingwer",
        "amount_kg": 0.012,
        "unit": "kg"
      },
      {
        "name": "SmakMat",
        "amount_kg": 0.025,
        "unit": "kg"
      },
      {
        "name": "Schmakoline",
        "amount_kg": 0.025,
        "unit": "kg"
      },
      {
        "name": "AvoRotextra",
        "amount_kg": 0.025,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "FiaPurMZB",
        "amount_kg": 0.15,
        "unit": "kg"
      },
      {
        "name": "Kuttergold C",
        "amount_kg": 0.125,
        "unit": "kg"
      },
      {
        "name": "Rapsrot",
        "amount_kg": 0.025,
        "unit": "kg"
      },
      {
        "name": "Pistazien",
        "amount_kg": 0.8,
        "unit": "kg"
      },
      {
        "name": "Eimer gekochte Eier (ca.120 Stick)",
        "amount_kg": 2.0,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2.pdf (Seite 8)"
  },
  {
    "id": "rec_009",
    "title": "Gefullterbauch",
    "category": "Brühwurst",
    "base_batch_kg": 19.0,
    "meat_ingredients": [
      {
        "name": "Schulterschier/ S II",
        "amount_kg": 7.5
      },
      {
        "name": "mm",
        "amount_kg": 3.0
      },
      {
        "name": "Kutterauch",
        "amount_kg": 2.5
      },
      {
        "name": "mm",
        "amount_kg": 3.0
      },
      {
        "name": "Fleischwurstbrat",
        "amount_kg": 3.0
      }
    ],
    "spices_additives": [
      {
        "name": "lbwurstgewirz",
        "amount_kg": 0.06,
        "unit": "ge"
      },
      {
        "name": "SmakMat",
        "amount_kg": 0.02,
        "unit": "kg"
      },
      {
        "name": "ZwiebelgrieB",
        "amount_kg": 0.01,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "AV0Rot extra",
        "amount_kg": 0.01,
        "unit": "kg"
      },
      {
        "name": "Kuttergold C",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Petersilienblatter getrocknet",
        "amount_kg": 0.01,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2.pdf (Seite 9)"
  },
  {
    "id": "rec_010",
    "title": "210.2022",
    "category": "Brühwurst",
    "base_batch_kg": 1317.0,
    "meat_ingredients": [
      {
        "name": "mm gewirfet",
        "amount_kg": 12.0
      },
      {
        "name": "/000 kgKochsdhinberahsdhnimegewifet 1zmn gewirer",
        "amount_kg": 2.0
      },
      {
        "name": "dd keheikesWzkser",
        "amount_kg": 2.0
      },
      {
        "name": "30kgNS",
        "amount_kg": 1.0
      },
      {
        "name": "Lsg",
        "amount_kg": 1300.0
      }
    ],
    "spices_additives": [],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2.pdf (Seite 10)"
  },
  {
    "id": "rec_011",
    "title": "Kartoffelbratwurst140 kg",
    "category": "Brühwurst",
    "base_batch_kg": 144.0,
    "meat_ingredients": [
      {
        "name": "Brät: S III",
        "amount_kg": 15.0
      },
      {
        "name": "Brät: S.-Backen",
        "amount_kg": 5.0
      },
      {
        "name": "Brät: Eis",
        "amount_kg": 5.0
      },
      {
        "name": "Einlage: S II-Schulter schier5mm",
        "amount_kg": 42.0
      },
      {
        "name": "Einlage: S.-Bauch",
        "amount_kg": 30.0
      },
      {
        "name": "Einlage: mm",
        "amount_kg": 5.0
      },
      {
        "name": "Einlage: Kartoffeln 6 mm gebruht",
        "amount_kg": 42.0
      }
    ],
    "spices_additives": [
      {
        "name": "Kochsalz",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "Kochsalz",
        "amount_kg": 2.2,
        "unit": "kg"
      },
      {
        "name": "PfefferweiB",
        "amount_kg": 0.085,
        "unit": "kg"
      },
      {
        "name": "PfefferweiB",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.16,
        "unit": "kg"
      },
      {
        "name": "Schmakoline",
        "amount_kg": 0.075,
        "unit": "kg"
      },
      {
        "name": "Schmakoline",
        "amount_kg": 0.28,
        "unit": "kg"
      },
      {
        "name": "Rolaphos",
        "amount_kg": 0.06,
        "unit": "kg"
      },
      {
        "name": "Rolaphos",
        "amount_kg": 0.21,
        "unit": "kg"
      },
      {
        "name": "Majoran",
        "amount_kg": 0.6,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2.pdf (Seite 11)"
  },
  {
    "id": "rec_012",
    "title": "Lyoner mit Champignons",
    "category": "Brühwurst",
    "base_batch_kg": 24.75,
    "meat_ingredients": [
      {
        "name": "S IⅡI",
        "amount_kg": 10.5
      },
      {
        "name": "Deckelspeck",
        "amount_kg": 3.5
      },
      {
        "name": "S-Backen",
        "amount_kg": 4.5
      },
      {
        "name": "Eis",
        "amount_kg": 6.25
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 0.525,
        "unit": "kg"
      },
      {
        "name": "FeinsterAufschnitt",
        "amount_kg": 0.18,
        "unit": "kg"
      },
      {
        "name": "PfefferweiB",
        "amount_kg": 0.012,
        "unit": "kg"
      },
      {
        "name": "Macistella",
        "amount_kg": 0.012,
        "unit": "kg"
      },
      {
        "name": "Ingwer",
        "amount_kg": 0.012,
        "unit": "kg"
      },
      {
        "name": "Smak Mat",
        "amount_kg": 0.025,
        "unit": "kg"
      },
      {
        "name": "Schmakoline",
        "amount_kg": 0.025,
        "unit": "kg"
      },
      {
        "name": "AvoRotextra",
        "amount_kg": 0.025,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "FiaPurMZB",
        "amount_kg": 0.15,
        "unit": "kg"
      },
      {
        "name": "KuttergoldC",
        "amount_kg": 0.125,
        "unit": "kg"
      },
      {
        "name": "Rapsrot",
        "amount_kg": 0.025,
        "unit": "kg"
      },
      {
        "name": "ChampignonsMinia 1380gr.",
        "amount_kg": 4.0,
        "unit": "Dosen"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2.pdf (Seite 12)"
  },
  {
    "id": "rec_013",
    "title": "Gourmetbratwurst",
    "category": "Brühwurst",
    "base_batch_kg": 18.25,
    "meat_ingredients": [
      {
        "name": "S III",
        "amount_kg": 5.75
      },
      {
        "name": "S.-Backen",
        "amount_kg": 4.25
      },
      {
        "name": "Eis",
        "amount_kg": 2.5
      },
      {
        "name": "Einlage: Schulter schier,SⅡI",
        "amount_kg": 5.75
      }
    ],
    "spices_additives": [
      {
        "name": "Kochsalz",
        "amount_kg": 0.375,
        "unit": "kg"
      },
      {
        "name": "PfefferweiB",
        "amount_kg": 0.01,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.01,
        "unit": "kg"
      },
      {
        "name": "Bratwurstgewirz(eigen Mischung)",
        "amount_kg": 0.175,
        "unit": "kg"
      },
      {
        "name": "Jagerbratwurst",
        "amount_kg": 0.035,
        "unit": "kg"
      },
      {
        "name": "Schmakoline",
        "amount_kg": 0.025,
        "unit": "kg"
      },
      {
        "name": "SmakMat",
        "amount_kg": 0.025,
        "unit": "kg"
      },
      {
        "name": "Zwiebelgranulat",
        "amount_kg": 0.025,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Rolaphos",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "FiaPurMZB",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Spinat",
        "amount_kg": 2.5,
        "unit": "kg"
      },
      {
        "name": "Kochschinken",
        "amount_kg": 2.5,
        "unit": "kg"
      },
      {
        "name": "Wurfelkase",
        "amount_kg": 1.25,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2.pdf (Seite 13)"
  },
  {
    "id": "rec_014",
    "title": "Fleischkase fein zerkl.",
    "category": "Brühwurst",
    "base_batch_kg": 72.0,
    "meat_ingredients": [
      {
        "name": "S.-Backen",
        "amount_kg": 26.0
      },
      {
        "name": "Deckelspeck",
        "amount_kg": 20.0
      },
      {
        "name": "Eis",
        "amount_kg": 26.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 1.8,
        "unit": "kg"
      },
      {
        "name": "Leberkasgew. (Wib)",
        "amount_kg": 0.35,
        "unit": "kg"
      },
      {
        "name": "Leberkasgew. (Ra)",
        "amount_kg": 0.35,
        "unit": "kg"
      },
      {
        "name": "Leberkasgew. (Ind)",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weiB gem.",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Schmakoline",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Zwiebelgranulat",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Dextrose.",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "FiaPurMZB",
        "amount_kg": 0.7,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.4,
        "unit": "kg"
      },
      {
        "name": "AvoRotextra",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Kuttergold C",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "Bratenfond",
        "amount_kg": 0.3,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2.pdf (Seite 14)"
  },
  {
    "id": "rec_015",
    "title": "Fleischkase grob",
    "category": "Brühwurst",
    "base_batch_kg": 100.0,
    "meat_ingredients": [],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weiB",
        "amount_kg": 0.09,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "AvoRotextra",
        "amount_kg": 0.04,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Kuttergold C",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "LIvemal",
        "amount_kg": 0.1,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2.pdf (Seite 15)"
  },
  {
    "id": "rec_016",
    "title": "Krakauer (Glockler)",
    "category": "Brühwurst",
    "base_batch_kg": 110.0,
    "meat_ingredients": [
      {
        "name": "Brät: S III",
        "amount_kg": 14.0
      },
      {
        "name": "Brät: S.-Backen",
        "amount_kg": 16.0
      },
      {
        "name": "Brät: Eis",
        "amount_kg": 10.0
      },
      {
        "name": "Einlage: S II-Fleisch",
        "amount_kg": 35.0
      },
      {
        "name": "Einlage: mm",
        "amount_kg": 5.0
      },
      {
        "name": "Einlage: Bauchabschnitte",
        "amount_kg": 35.0
      },
      {
        "name": "Einlage: mm",
        "amount_kg": 5.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 2.2,
        "unit": "kg"
      },
      {
        "name": "Krakauergewurz (HS)",
        "amount_kg": 1.0,
        "unit": "kg"
      },
      {
        "name": "Kummel gem.",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weiB gem.",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Muskat gem.",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Knoblauchgriess",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.15,
        "unit": "kg"
      },
      {
        "name": "Schmakolin",
        "amount_kg": 0.15,
        "unit": "kg"
      },
      {
        "name": "AvoRotextra",
        "amount_kg": 0.15,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "FiaPur MZB",
        "amount_kg": 0.6,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "Kuttergold C",
        "amount_kg": 0.5,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2.pdf (Seite 16)"
  },
  {
    "id": "rec_017",
    "title": "Hsm.Bratwurst gebriht (Marche)",
    "category": "Brühwurst",
    "base_batch_kg": 110.0,
    "meat_ingredients": [
      {
        "name": "mm",
        "amount_kg": 5.0
      },
      {
        "name": "Kutterbauch I mitWamme 5mm",
        "amount_kg": 40.0
      },
      {
        "name": "lbwurst-oder Bratwurstbrat",
        "amount_kg": 10.0
      }
    ],
    "spices_additives": [
      {
        "name": "Kochsalz",
        "amount_kg": 2.0,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weiss gem.",
        "amount_kg": 0.35,
        "unit": "kg"
      },
      {
        "name": "Muskat gem.",
        "amount_kg": 0.15,
        "unit": "kg"
      },
      {
        "name": "Schmakolin",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Bratwurst Helabin D (Lau)",
        "amount_kg": 0.8,
        "unit": "kg"
      },
      {
        "name": "Kimmel ganz",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "Kimmel gem.",
        "amount_kg": 0.5,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2.pdf (Seite 17)"
  },
  {
    "id": "rec_018",
    "title": "Hausmacher Blutwurst",
    "category": "Kochwurst",
    "base_batch_kg": 80.0,
    "meat_ingredients": [
      {
        "name": "Schwarten gekocht",
        "amount_kg": 20.0
      },
      {
        "name": "Blut",
        "amount_kg": 16.0
      },
      {
        "name": "Kesselbrihe",
        "amount_kg": 6.0
      },
      {
        "name": "Kopfe rot,gekocht 3mm wolfen",
        "amount_kg": 6.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPs",
        "amount_kg": 1.7,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weib",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Blutwurst hellrot (Lau)",
        "amount_kg": 0.8,
        "unit": "kg"
      },
      {
        "name": "Mat (v.Hees)",
        "amount_kg": 0.08,
        "unit": "kg"
      },
      {
        "name": "Subr",
        "amount_kg": 0.08,
        "unit": "kg"
      },
      {
        "name": "Nelken gem.",
        "amount_kg": 0.04,
        "unit": "kg"
      },
      {
        "name": "Zwiebelgranulat",
        "amount_kg": 0.1,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 1)"
  },
  {
    "id": "rec_019",
    "title": "Bierwurst",
    "category": "Brühwurst",
    "base_batch_kg": 15.0,
    "meat_ingredients": [
      {
        "name": "S III",
        "amount_kg": 5.0
      },
      {
        "name": "Eis",
        "amount_kg": 5.0
      },
      {
        "name": "Einlage: R I",
        "amount_kg": 5.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 1.1,
        "unit": "kg"
      },
      {
        "name": "Alpini (Raps)",
        "amount_kg": 0.4,
        "unit": "kg"
      },
      {
        "name": "AvoRot extra",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Supr",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "kornte Brihe",
        "amount_kg": 0.1,
        "unit": "ge"
      },
      {
        "name": "Knoblauchpulver",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weib",
        "amount_kg": 0.04,
        "unit": "kg"
      },
      {
        "name": "Mazistella",
        "amount_kg": 0.03,
        "unit": "kg"
      },
      {
        "name": "Senfkorner",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "Kuttergold C",
        "amount_kg": 0.4,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 2)"
  },
  {
    "id": "rec_020",
    "title": "Gefligelwurst-Fleischkase,Wiener",
    "category": "Brühwurst",
    "base_batch_kg": 25.0,
    "meat_ingredients": [
      {
        "name": "flugel Fett",
        "amount_kg": 5.0
      },
      {
        "name": "Pflanzen Ol",
        "amount_kg": 10.0
      },
      {
        "name": "Eis",
        "amount_kg": 10.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 0.9,
        "unit": "kg"
      },
      {
        "name": "Fleischkase Gewirz (eigen Mischung)",
        "amount_kg": 0.45,
        "unit": "kg"
      },
      {
        "name": "SmakMat",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "NPS",
        "amount_kg": 0.9,
        "unit": "kg"
      },
      {
        "name": "Kuttergold C",
        "amount_kg": 0.25,
        "unit": "kg"
      },
      {
        "name": "Wiener",
        "amount_kg": 0.375,
        "unit": "kg"
      },
      {
        "name": "SmakMat",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Rapsrot",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Kuttergold C",
        "amount_kg": 0.25,
        "unit": "kg"
      },
      {
        "name": "Rapsrot",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Kochsalz",
        "amount_kg": 0.9,
        "unit": "kg"
      },
      {
        "name": "lbwurstGewirz",
        "amount_kg": 0.24,
        "unit": "ge"
      },
      {
        "name": "SmakMat",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Rolaphos",
        "amount_kg": 0.15,
        "unit": "kg"
      },
      {
        "name": "korntebrihe",
        "amount_kg": 0.05,
        "unit": "ge"
      },
      {
        "name": "Zitronenextrack",
        "amount_kg": 0.02,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 3)"
  },
  {
    "id": "rec_021",
    "title": "Jagdwurst",
    "category": "Brühwurst",
    "base_batch_kg": 81.0,
    "meat_ingredients": [
      {
        "name": "S III",
        "amount_kg": 7.0
      },
      {
        "name": "R III",
        "amount_kg": 2.5
      },
      {
        "name": "S.-Backen",
        "amount_kg": 8.0
      },
      {
        "name": "Deckelspeck",
        "amount_kg": 2.0
      },
      {
        "name": "Eis",
        "amount_kg": 6.5
      },
      {
        "name": "Brat",
        "amount_kg": 27.0
      },
      {
        "name": "S 1I-Schulter schier 13 mm",
        "amount_kg": 28.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 1.1,
        "unit": "kg"
      },
      {
        "name": "Jagdwurstgewurz",
        "amount_kg": 0.4,
        "unit": "kg"
      },
      {
        "name": "PfefferweiB",
        "amount_kg": 0.025,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.025,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "FiaPurMZB",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "AvoRotextra",
        "amount_kg": 0.06,
        "unit": "kg"
      },
      {
        "name": "Kuttergold C",
        "amount_kg": 0.25,
        "unit": "kg"
      },
      {
        "name": "Rapsrot",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Senfsaat (extra)",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "Pistazien (extra)",
        "amount_kg": 0.5,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 4)"
  },
  {
    "id": "rec_022",
    "title": "Knoblauchmettwurst",
    "category": "Rohwurst",
    "base_batch_kg": 110.0,
    "meat_ingredients": [
      {
        "name": "Kutterbauch I o.Wamme gefroren",
        "amount_kg": 22.0
      },
      {
        "name": "Rickenspeck gefroren",
        "amount_kg": 24.0
      },
      {
        "name": "Schulter schier3mm frisch",
        "amount_kg": 20.0
      },
      {
        "name": "Blut",
        "amount_kg": 0.3
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 3.0,
        "unit": "kg"
      },
      {
        "name": "Roternit (Lau)",
        "amount_kg": 2.0,
        "unit": "kg"
      },
      {
        "name": "FiaPurMZB",
        "amount_kg": 1.0,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.4,
        "unit": "kg"
      },
      {
        "name": "Saccharose",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Knoblauchpaste",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "Lakor (Lau)",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "Schmakolin (HS)",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Barbados (Ra)",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Rauchwirzer (HS)",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "AvoRot extra",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Rapsrot (Ra)",
        "amount_kg": 0.12,
        "unit": "kg"
      },
      {
        "name": "Nitrostart G (HS)",
        "amount_kg": 0.06,
        "unit": "kg"
      },
      {
        "name": "Eldorado (HS)",
        "amount_kg": 0.04,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 5)"
  },
  {
    "id": "rec_023",
    "title": "Bratwurst Cheese und Onion",
    "category": "Brühwurst",
    "base_batch_kg": 22.5,
    "meat_ingredients": [
      {
        "name": "S-Backen",
        "amount_kg": 5.0
      },
      {
        "name": "Eis",
        "amount_kg": 2.5
      },
      {
        "name": "Einlage: mm",
        "amount_kg": 5.0
      },
      {
        "name": "Einlage: Kutterbauch",
        "amount_kg": 5.0
      },
      {
        "name": "Einlage: mm",
        "amount_kg": 5.0
      }
    ],
    "spices_additives": [
      {
        "name": "Bratwurstgewirz",
        "amount_kg": 0.18,
        "unit": "kg"
      },
      {
        "name": "Jagergriller",
        "amount_kg": 0.07,
        "unit": "kg"
      },
      {
        "name": "Pfefferweib",
        "amount_kg": 0.012,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.012,
        "unit": "kg"
      },
      {
        "name": "Zwiebelgranulat",
        "amount_kg": 0.025,
        "unit": "kg"
      },
      {
        "name": "Knoblauchgranulat",
        "amount_kg": 0.01,
        "unit": "kg"
      },
      {
        "name": "Schmakoline",
        "amount_kg": 0.025,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Rolaphos",
        "amount_kg": 0.08,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.075,
        "unit": "kg"
      },
      {
        "name": "FiaPurMZB",
        "amount_kg": 0.125,
        "unit": "kg"
      },
      {
        "name": "Zwiebeln roh (angebraten!!)",
        "amount_kg": 3.0,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 6)"
  },
  {
    "id": "rec_024",
    "title": "Kalbsleberwurst",
    "category": "Kochwurst",
    "base_batch_kg": 64.0,
    "meat_ingredients": [
      {
        "name": "S.-Leber",
        "amount_kg": 15.0
      },
      {
        "name": "Kalbfleisch III",
        "amount_kg": 7.0
      },
      {
        "name": "Deckelspeck",
        "amount_kg": 6.0
      },
      {
        "name": "Wasser heiB",
        "amount_kg": 5.0
      },
      {
        "name": "Sahne",
        "amount_kg": 1.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 1.2,
        "unit": "kg"
      },
      {
        "name": "Leber-Pok",
        "amount_kg": 0.25,
        "unit": "kg"
      },
      {
        "name": "Imperial-Gewirz (VH)",
        "amount_kg": 0.25,
        "unit": "kg"
      },
      {
        "name": "Rostzwiebel",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "AvoRot extra",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Vanilezucker",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Schmakolin",
        "amount_kg": 0.1,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 7)"
  },
  {
    "id": "rec_025",
    "title": "Aufschnitt-Grundbrat",
    "category": "Brühwurst",
    "base_batch_kg": 107.0,
    "meat_ingredients": [
      {
        "name": "R III",
        "amount_kg": 5.0
      },
      {
        "name": "S.-Backen",
        "amount_kg": 34.0
      },
      {
        "name": "Deckelspeck",
        "amount_kg": 10.0
      },
      {
        "name": "Eis",
        "amount_kg": 25.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 2.1,
        "unit": "kg"
      },
      {
        "name": "Aufschnittgewirz (Moguntia)",
        "amount_kg": 0.75,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weiB gem.",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Smakolin",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Avo-Rot extra",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Rapsrot",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "FiaPurMZB",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "Kuttergolod C",
        "amount_kg": 0.5,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 8)"
  },
  {
    "id": "rec_026",
    "title": "Chilliebratwurst",
    "category": "Brühwurst",
    "base_batch_kg": 50.0,
    "meat_ingredients": [
      {
        "name": "Brät: S.Backen",
        "amount_kg": 20.0
      },
      {
        "name": "Brät: Eis",
        "amount_kg": 10.0
      },
      {
        "name": "Brät: Bauchabschnitte",
        "amount_kg": 20.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 1.85,
        "unit": "kg"
      },
      {
        "name": "Bratwurstgew.(Eigenmischung)",
        "amount_kg": 0.65,
        "unit": "kg"
      },
      {
        "name": "Jagerbratwurst(HS)",
        "amount_kg": 0.28,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weiss gem.",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Knoblauchpulver",
        "amount_kg": 0.02,
        "unit": "kg"
      },
      {
        "name": "ZwiebelgrieB",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Schmakolin-Supr",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Chillies geschroten",
        "amount_kg": 0.4,
        "unit": "kg"
      },
      {
        "name": "Rolaphos",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "FiaPurMZB",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "Paprikafloken Rot",
        "amount_kg": 0.5,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 9)"
  },
  {
    "id": "rec_027",
    "title": "Barlauchbratwurst",
    "category": "Brühwurst",
    "base_batch_kg": 96.5,
    "meat_ingredients": [
      {
        "name": "S III",
        "amount_kg": 30.0
      },
      {
        "name": "S.-Backen",
        "amount_kg": 30.0
      },
      {
        "name": "Eis",
        "amount_kg": 15.0
      },
      {
        "name": "Einlage: S II-Schulter schier5mm",
        "amount_kg": 7.5
      },
      {
        "name": "Einlage: Kasewurfel",
        "amount_kg": 8.0
      },
      {
        "name": "Einlage: Kochschinkengewirfelt 6mm",
        "amount_kg": 6.0
      }
    ],
    "spices_additives": [
      {
        "name": "Kochsalz",
        "amount_kg": 1.5,
        "unit": "kg"
      },
      {
        "name": "PfefferweiB",
        "amount_kg": 0.045,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.045,
        "unit": "kg"
      },
      {
        "name": "Schmakoline",
        "amount_kg": 0.09,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.15,
        "unit": "kg"
      },
      {
        "name": "KnoblauchgrieB",
        "amount_kg": 0.03,
        "unit": "kg"
      },
      {
        "name": "ZwiebelgrieB",
        "amount_kg": 0.12,
        "unit": "kg"
      },
      {
        "name": "Jagergriller",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "Bratwurstgewirz (eigen)",
        "amount_kg": 0.6,
        "unit": "kg"
      },
      {
        "name": "Rolaphos",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "FiaPurMZB",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Barlauchkrautermix",
        "amount_kg": 0.72,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 10)"
  },
  {
    "id": "rec_028",
    "title": "Bratwurst grob,frisch",
    "category": "Brühwurst",
    "base_batch_kg": 100.0,
    "meat_ingredients": [
      {
        "name": "Kutterbauch I mitWamme",
        "amount_kg": 40.0
      },
      {
        "name": "samtalles5mmwolfen",
        "amount_kg": 100.0
      }
    ],
    "spices_additives": [
      {
        "name": "Kochsalz",
        "amount_kg": 2.0,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weiss gem.",
        "amount_kg": 0.35,
        "unit": "kg"
      },
      {
        "name": "Muskat gem.",
        "amount_kg": 0.15,
        "unit": "kg"
      },
      {
        "name": "Schmakolin",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Bratwurst Helabin D (Lau)",
        "amount_kg": 0.8,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 11)"
  },
  {
    "id": "rec_029",
    "title": "BratwurstHit",
    "category": "Brühwurst",
    "base_batch_kg": 43.0,
    "meat_ingredients": [
      {
        "name": "Brät: S.-Backen",
        "amount_kg": 25.0
      },
      {
        "name": "Brät: Eis",
        "amount_kg": 8.0
      },
      {
        "name": "Brät: Bauchabschnitte mager",
        "amount_kg": 10.0
      }
    ],
    "spices_additives": [
      {
        "name": "Kochsalz",
        "amount_kg": 1.55,
        "unit": "kg"
      },
      {
        "name": "Bratwurstgewirz (Eigen)",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "Jagerbratwurst (HS)",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Pfefferweif",
        "amount_kg": 0.04,
        "unit": "kg"
      },
      {
        "name": "Muskat germ.",
        "amount_kg": 0.04,
        "unit": "kg"
      },
      {
        "name": "Majoran",
        "amount_kg": 0.12,
        "unit": "kg"
      },
      {
        "name": "ZwiebelgrieB",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Knoblauchpulver",
        "amount_kg": 0.02,
        "unit": "kg"
      },
      {
        "name": "Schmakolin",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Rolapohs (Laue)",
        "amount_kg": 0.27,
        "unit": "kg"
      },
      {
        "name": "FiaPurMZB",
        "amount_kg": 0.2,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 12)"
  },
  {
    "id": "rec_030",
    "title": "Bratwurstmittelgrob",
    "category": "Brühwurst",
    "base_batch_kg": 50.0,
    "meat_ingredients": [
      {
        "name": "Brät: S.-Backen",
        "amount_kg": 20.0
      },
      {
        "name": "Brät: Eis",
        "amount_kg": 10.0
      },
      {
        "name": "Brät: Bauchabschnitte",
        "amount_kg": 20.0
      }
    ],
    "spices_additives": [
      {
        "name": "Kochsalz",
        "amount_kg": 1.85,
        "unit": "kg"
      },
      {
        "name": "Bratwurstgew.(Eigenmischung)",
        "amount_kg": 0.65,
        "unit": "kg"
      },
      {
        "name": "Jagerbratwurst(HS)",
        "amount_kg": 0.28,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weiss gem.",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Knoblauchpulver",
        "amount_kg": 0.02,
        "unit": "kg"
      },
      {
        "name": "ZwiebelgrieB",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Schmakolin-Supr",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Majoran",
        "amount_kg": 0.14,
        "unit": "kg"
      },
      {
        "name": "Rolaphos",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "FiaPur MZB",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "Majoran",
        "amount_kg": 0.22,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 13)"
  },
  {
    "id": "rec_031",
    "title": "Blunts",
    "category": "Kochwurst",
    "base_batch_kg": 60.0,
    "meat_ingredients": [
      {
        "name": "Schwartengek.",
        "amount_kg": 25.0
      },
      {
        "name": "Kesselbrihe",
        "amount_kg": 5.0
      },
      {
        "name": "Blut",
        "amount_kg": 30.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 1.2,
        "unit": "kg"
      },
      {
        "name": "Blutwursthellrot(Lau)",
        "amount_kg": 0.6,
        "unit": "kg"
      },
      {
        "name": "PfefferweiBgem",
        "amount_kg": 0.06,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 14)"
  },
  {
    "id": "rec_032",
    "title": "Deutsches Corned Beef",
    "category": "Spezialitäten",
    "base_batch_kg": 115.0,
    "meat_ingredients": [
      {
        "name": "RIIroh2mm",
        "amount_kg": 5.0
      },
      {
        "name": "Brihe",
        "amount_kg": 36.0
      },
      {
        "name": "Schwartengekocht2mm",
        "amount_kg": 16.0
      }
    ],
    "spices_additives": [
      {
        "name": "Speisegelatine120Blo",
        "amount_kg": 6.0,
        "unit": "kg"
      },
      {
        "name": "CornalH(Lau)",
        "amount_kg": 0.55,
        "unit": "kg"
      },
      {
        "name": "NPS",
        "amount_kg": 1.6,
        "unit": "kg"
      },
      {
        "name": "FiaPurMZB",
        "amount_kg": 1.5,
        "unit": "kg"
      },
      {
        "name": "Speisewirze",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "kornte Brihe",
        "amount_kg": 0.22,
        "unit": "ge"
      },
      {
        "name": "AvoRot extra",
        "amount_kg": 0.15,
        "unit": "kg"
      },
      {
        "name": "Supr",
        "amount_kg": 0.15,
        "unit": "kg"
      },
      {
        "name": "rPfeffergriinDose jeKgMasse",
        "amount_kg": 35.0,
        "unit": "g"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 15)"
  },
  {
    "id": "rec_033",
    "title": "Polnische",
    "category": "Brühwurst",
    "base_batch_kg": 95.0,
    "meat_ingredients": [
      {
        "name": "Brät: Eis",
        "amount_kg": 20.0
      },
      {
        "name": "Einlage: Bauchabschnitte5mm",
        "amount_kg": 25.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 1.7,
        "unit": "kg"
      },
      {
        "name": "Rindswurstgew.(Lau)",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "Kolbasi(Lau)",
        "amount_kg": 0.4,
        "unit": "kg"
      },
      {
        "name": "Pustastange Lau)",
        "amount_kg": 0.4,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weiss gem",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Muskat gem.",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Knoblauchgriess",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Schmakolin",
        "amount_kg": 0.15,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.15,
        "unit": "kg"
      },
      {
        "name": "AvoRot extra",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "FiaPurMZB",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "Kuttergold C",
        "amount_kg": 0.4,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 16)"
  },
  {
    "id": "rec_034",
    "title": "Streichmettwurst,fein",
    "category": "Rohwurst",
    "base_batch_kg": 50.0,
    "meat_ingredients": [
      {
        "name": "Ruckenspeck",
        "amount_kg": 10.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 1.4,
        "unit": "kg"
      },
      {
        "name": "Star-FermatTeewurst",
        "amount_kg": 0.6,
        "unit": "kg"
      },
      {
        "name": "Supr",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "AvoRot extra",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Btl.Nitrostart G",
        "amount_kg": 1.0,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 17)"
  },
  {
    "id": "rec_035",
    "title": "Lyoner mit Pistazien",
    "category": "Brühwurst",
    "base_batch_kg": 52.0,
    "meat_ingredients": [
      {
        "name": "Pistazien",
        "amount_kg": 2.0
      }
    ],
    "spices_additives": [],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 18)"
  },
  {
    "id": "rec_036",
    "title": "Leberknodel",
    "category": "Brühwurst",
    "base_batch_kg": 103.0,
    "meat_ingredients": [
      {
        "name": "%S,-Leber",
        "amount_kg": 50.0
      },
      {
        "name": "mm",
        "amount_kg": 3.0
      },
      {
        "name": "%Kutterbauch3mm",
        "amount_kg": 50.0
      }
    ],
    "spices_additives": [
      {
        "name": "Kochsalz",
        "amount_kg": 0.018,
        "unit": "kg"
      },
      {
        "name": "PfefferweiB",
        "amount_kg": 0.0035,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.0015,
        "unit": "kg"
      },
      {
        "name": "Schmakoline",
        "amount_kg": 0.003,
        "unit": "kg"
      },
      {
        "name": "Zwiebelgranulat",
        "amount_kg": 0.001,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.005,
        "unit": "kg"
      },
      {
        "name": "Rolaphos",
        "amount_kg": 0.003,
        "unit": "kg"
      },
      {
        "name": "Majoran",
        "amount_kg": 0.002,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 19)"
  },
  {
    "id": "rec_037",
    "title": "Zustandig:",
    "category": "Brühwurst",
    "base_batch_kg": 25.0,
    "meat_ingredients": [
      {
        "name": "Schulter schier",
        "amount_kg": 13.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 0.625,
        "unit": "kg"
      },
      {
        "name": "Frische Zwiebelmettwurst (Ra)",
        "amount_kg": 0.36,
        "unit": "kg"
      },
      {
        "name": "Pokulus",
        "amount_kg": 0.025,
        "unit": "kg"
      },
      {
        "name": "Primal S.V. (VH)",
        "amount_kg": 0.013,
        "unit": "kg"
      },
      {
        "name": "Primal Protec (VH)",
        "amount_kg": 0.013,
        "unit": "kg"
      },
      {
        "name": "Avogel",
        "amount_kg": 0.075,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 20)"
  },
  {
    "id": "rec_038",
    "title": "Schweinemett frisch",
    "category": "Hackfleisch",
    "base_batch_kg": 0.5,
    "meat_ingredients": [
      {
        "name": "Eiswasser",
        "amount_kg": 0.5
      }
    ],
    "spices_additives": [
      {
        "name": "Pfeffer weiss",
        "amount_kg": 0.035,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.015,
        "unit": "kg"
      },
      {
        "name": "Mazistella",
        "amount_kg": 0.015,
        "unit": "kg"
      },
      {
        "name": "Schmakoline",
        "amount_kg": 0.03,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 21)"
  },
  {
    "id": "rec_039",
    "title": "Grobebauernwurst Dosen",
    "category": "Rohwurst",
    "base_batch_kg": 107.0,
    "meat_ingredients": [
      {
        "name": "S II-Schulterschier5mm",
        "amount_kg": 50.0
      },
      {
        "name": "S.-Bauch",
        "amount_kg": 50.0
      },
      {
        "name": "mm",
        "amount_kg": 5.0
      },
      {
        "name": "Eis",
        "amount_kg": 2.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 2.0,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weiB",
        "amount_kg": 0.35,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.15,
        "unit": "kg"
      },
      {
        "name": "Schmakoline",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "Nelken",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.4,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Avo Rot extra",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Kuttergold C",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "Speibegelatine",
        "amount_kg": 2.0,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 22)"
  },
  {
    "id": "rec_040",
    "title": "Pizzafleischkase",
    "category": "Brühwurst",
    "base_batch_kg": 10.0,
    "meat_ingredients": [
      {
        "name": "S II13 mm",
        "amount_kg": 10.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weiss",
        "amount_kg": 0.035,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.03,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.025,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.025,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Kuttergold C",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Paprikaflocken rot",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "Pizza Mix (HS):",
        "amount_kg": 0.15,
        "unit": "kg"
      },
      {
        "name": "Wurfelkase",
        "amount_kg": 2.0,
        "unit": "kg"
      },
      {
        "name": "Champingons Mini 1380gr",
        "amount_kg": 1.0,
        "unit": "Dose"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 23)"
  },
  {
    "id": "rec_041",
    "title": "Fleischsalatgrundlage",
    "category": "Spezialitäten",
    "base_batch_kg": 106.0,
    "meat_ingredients": [
      {
        "name": "R III",
        "amount_kg": 15.0
      },
      {
        "name": "S.-Backen",
        "amount_kg": 24.0
      },
      {
        "name": "Deckelspeck",
        "amount_kg": 20.0
      },
      {
        "name": "Eis",
        "amount_kg": 27.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 1.75,
        "unit": "kg"
      },
      {
        "name": "Sidd. Schinkenwurst (van Hees)",
        "amount_kg": 0.7,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.4,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Schmakolin",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "AvoRot extra",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weiB",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Kuttergold C",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "Paprex",
        "amount_kg": 0.25,
        "unit": "kg"
      },
      {
        "name": "FiaPur MZB",
        "amount_kg": 1.0,
        "unit": "kg"
      },
      {
        "name": "kornte Brihe",
        "amount_kg": 0.1,
        "unit": "ge"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 2receot.pdf (Seite 24)"
  },
  {
    "id": "rec_042",
    "title": "Fleischwirstchen",
    "category": "Brühwurst",
    "base_batch_kg": 106.0,
    "meat_ingredients": [
      {
        "name": "R III",
        "amount_kg": 15.0
      },
      {
        "name": "S.-Backen",
        "amount_kg": 27.0
      },
      {
        "name": "Deckelspeck",
        "amount_kg": 18.0
      },
      {
        "name": "Eis",
        "amount_kg": 26.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 1.85,
        "unit": "kg"
      },
      {
        "name": "Wiener (Raps)",
        "amount_kg": 0.75,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.4,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Schmakoline",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "k. Brihe",
        "amount_kg": 0.1,
        "unit": "ge"
      },
      {
        "name": "AvoRot extra",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weiB",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Kuttergold C",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "FiaPurMZB",
        "amount_kg": 0.5,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 3.pdf (Seite 1)"
  },
  {
    "id": "rec_043",
    "title": "Krakauer im Ring",
    "category": "Brühwurst",
    "base_batch_kg": 117.0,
    "meat_ingredients": [
      {
        "name": "Brät: Deckelspeck",
        "amount_kg": 7.0
      },
      {
        "name": "Brät: Eis",
        "amount_kg": 10.0
      },
      {
        "name": "Grobes: KutterbauchI o.Wamme8mm",
        "amount_kg": 30.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 2.2,
        "unit": "kg"
      },
      {
        "name": "Krakauergew. (HS)",
        "amount_kg": 0.9,
        "unit": "kg"
      },
      {
        "name": "FiaPurMZB",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "AvoRot extra",
        "amount_kg": 0.15,
        "unit": "kg"
      },
      {
        "name": "Kuttergold C",
        "amount_kg": 0.4,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Schmakolin",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weiB gem.",
        "amount_kg": 0.065,
        "unit": "kg"
      },
      {
        "name": "Muskat gem.",
        "amount_kg": 0.065,
        "unit": "kg"
      },
      {
        "name": "Knoblauchpulver",
        "amount_kg": 0.06,
        "unit": "kg"
      },
      {
        "name": "Kummel ganz (extra)",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Pfeffer grin getrocknet (extra)",
        "amount_kg": 0.2,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 3.pdf (Seite 2)"
  },
  {
    "id": "rec_044",
    "title": "Weinfest",
    "category": "Spezialitäten",
    "base_batch_kg": 140.0,
    "meat_ingredients": [
      {
        "name": "Brät: S III",
        "amount_kg": 15.0
      },
      {
        "name": "Brät: S.-Backen",
        "amount_kg": 5.0
      },
      {
        "name": "Brät: Eis",
        "amount_kg": 5.0
      },
      {
        "name": "Einlage: S II-Schulter schier 5mm",
        "amount_kg": 69.0
      },
      {
        "name": "Einlage: S.-Bauch 5mm",
        "amount_kg": 46.0
      }
    ],
    "spices_additives": [
      {
        "name": "Kochsalz",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "Kochsalz",
        "amount_kg": 2.3,
        "unit": "kg"
      },
      {
        "name": "PfefferweiB",
        "amount_kg": 0.085,
        "unit": "kg"
      },
      {
        "name": "Pfeffer",
        "amount_kg": 0.35,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Schmakoline",
        "amount_kg": 0.075,
        "unit": "kg"
      },
      {
        "name": "Schmakoline",
        "amount_kg": 0.25,
        "unit": "kg"
      },
      {
        "name": "Rolaphos",
        "amount_kg": 0.08,
        "unit": "kg"
      },
      {
        "name": "Rolaphos",
        "amount_kg": 0.35,
        "unit": "kg"
      },
      {
        "name": "Majoran",
        "amount_kg": 0.75,
        "unit": "kg"
      },
      {
        "name": "endgewischt",
        "amount_kg": 0.12,
        "unit": "kg"
      },
      {
        "name": "15 cm lange",
        "amount_kg": 0.12,
        "unit": "kg"
      },
      {
        "name": "eite1",
        "amount_kg": 5.0,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 3.pdf (Seite 3)"
  },
  {
    "id": "rec_045",
    "title": "Zungenblutwurst",
    "category": "Kochwurst",
    "base_batch_kg": 35.0,
    "meat_ingredients": [
      {
        "name": "Blutwurstbrat",
        "amount_kg": 35.0
      }
    ],
    "spices_additives": [],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 3.pdf (Seite 4)"
  },
  {
    "id": "rec_046",
    "title": "Wiener",
    "category": "Brühwurst",
    "base_batch_kg": 106.0,
    "meat_ingredients": [
      {
        "name": "R III",
        "amount_kg": 15.0
      },
      {
        "name": "S.-Backen",
        "amount_kg": 22.0
      },
      {
        "name": "Deckelspeck",
        "amount_kg": 20.0
      },
      {
        "name": "Eis",
        "amount_kg": 26.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 1.85,
        "unit": "kg"
      },
      {
        "name": "Wiener-Gewirzmischung (Ra)",
        "amount_kg": 0.7,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.4,
        "unit": "kg"
      },
      {
        "name": "Schmakoline",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Avorot extra",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weib",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Kuttergold C",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "FiaPurMZB",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "kornte Brihe",
        "amount_kg": 0.2,
        "unit": "ge"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 3.pdf (Seite 5)"
  },
  {
    "id": "rec_047",
    "title": "Weisswurst",
    "category": "Brühwurst",
    "base_batch_kg": 100.0,
    "meat_ingredients": [],
    "spices_additives": [
      {
        "name": "Petersilienblatter getrocknet",
        "amount_kg": 0.09,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 3.pdf (Seite 6)"
  },
  {
    "id": "rec_048",
    "title": "Wurstklopse",
    "category": "Brühwurst",
    "base_batch_kg": 125.0,
    "meat_ingredients": [
      {
        "name": "Brät: S III",
        "amount_kg": 10.0
      },
      {
        "name": "Brät: Deckelspeck",
        "amount_kg": 7.0
      },
      {
        "name": "Brät: S.-Backen",
        "amount_kg": 5.0
      },
      {
        "name": "Brät: Eis",
        "amount_kg": 8.0
      },
      {
        "name": "Einlage: Bauchabschnittemager 5mm",
        "amount_kg": 30.0
      },
      {
        "name": "Einlage: Wurstabschnitte",
        "amount_kg": 25.0
      },
      {
        "name": "Einlage: Brotchen",
        "amount_kg": 10.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 2.5,
        "unit": "kg"
      },
      {
        "name": "Bindfest(Ind)",
        "amount_kg": 2.5,
        "unit": "kg"
      },
      {
        "name": "Kuttergold C",
        "amount_kg": 0.6,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weiB gem.",
        "amount_kg": 0.45,
        "unit": "kg"
      },
      {
        "name": "Muskat gem.",
        "amount_kg": 0.25,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.25,
        "unit": "kg"
      },
      {
        "name": "Schmakolin",
        "amount_kg": 0.25,
        "unit": "kg"
      },
      {
        "name": "Dextose",
        "amount_kg": 0.25,
        "unit": "kg"
      },
      {
        "name": "FiaPurMZB",
        "amount_kg": 1.0,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 3.pdf (Seite 7)"
  },
  {
    "id": "rec_049",
    "title": "Pfefferbeisser",
    "category": "Brühwurst",
    "base_batch_kg": 50.0,
    "meat_ingredients": [
      {
        "name": "Kutterbauch I",
        "amount_kg": 20.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 1.2,
        "unit": "kg"
      },
      {
        "name": "Pfefferbeissergew. (Mog)",
        "amount_kg": 0.75,
        "unit": "kg"
      },
      {
        "name": "AvoRot extra",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Supr",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "PfefferweiB gerissen",
        "amount_kg": 0.15,
        "unit": "kg"
      },
      {
        "name": "Nitrostart G (HS)",
        "amount_kg": 1.0,
        "unit": "Beutel"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 3.pdf (Seite 8)"
  },
  {
    "id": "rec_050",
    "title": "Fleischwurst",
    "category": "Brühwurst",
    "base_batch_kg": 106.0,
    "meat_ingredients": [
      {
        "name": "R III",
        "amount_kg": 15.0
      },
      {
        "name": "S.-Backen",
        "amount_kg": 27.0
      },
      {
        "name": "Deckelspeck",
        "amount_kg": 18.0
      },
      {
        "name": "Eis",
        "amount_kg": 26.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 1.75,
        "unit": "kg"
      },
      {
        "name": "Sudd. Schinkenwurst (van Hees)",
        "amount_kg": 0.7,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.4,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Schmakolin",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "AvoRot extra",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weiB",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Kuttergold C",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "FiaPurMZB",
        "amount_kg": 0.6,
        "unit": "kg"
      },
      {
        "name": "kornteBrihe",
        "amount_kg": 0.1,
        "unit": "ge"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 3.pdf (Seite 9)"
  },
  {
    "id": "rec_051",
    "title": "Kasewirstchen",
    "category": "Brühwurst",
    "base_batch_kg": 51.5,
    "meat_ingredients": [
      {
        "name": "Brät: S III",
        "amount_kg": 11.5
      },
      {
        "name": "Brät: S.-Backen",
        "amount_kg": 12.0
      },
      {
        "name": "Brät: Eis",
        "amount_kg": 5.0
      },
      {
        "name": "Einlage: Bauchabschnitte5mm",
        "amount_kg": 12.0
      },
      {
        "name": "Einlage: Kasewirfel",
        "amount_kg": 11.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 1.3,
        "unit": "kg"
      },
      {
        "name": "Krakauergew. (HS)",
        "amount_kg": 0.4,
        "unit": "kg"
      },
      {
        "name": "Wienergew. (Ra)",
        "amount_kg": 0.22,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weiB gem.",
        "amount_kg": 0.035,
        "unit": "kg"
      },
      {
        "name": "Muskat gem,",
        "amount_kg": 0.035,
        "unit": "kg"
      },
      {
        "name": "Knoblauchgriess",
        "amount_kg": 0.04,
        "unit": "kg"
      },
      {
        "name": "Schmackolin",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.15,
        "unit": "kg"
      },
      {
        "name": "AvoRot extra",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "FiaPur MZB",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.4,
        "unit": "kg"
      },
      {
        "name": "Kuttergold C",
        "amount_kg": 0.4,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 3.pdf (Seite 10)"
  },
  {
    "id": "rec_052",
    "title": "Streichmettwurst,grob",
    "category": "Rohwurst",
    "base_batch_kg": 100.0,
    "meat_ingredients": [
      {
        "name": "Kutterbauch I",
        "amount_kg": 40.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 2.4,
        "unit": "kg"
      },
      {
        "name": "Nitrofit-Gewirz (HS)",
        "amount_kg": 1.0,
        "unit": "kg"
      },
      {
        "name": "AvoRot extra",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Supr",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Pfeffer weiBgerissen",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Nitrostart G (HS)",
        "amount_kg": 2.0,
        "unit": "Beutel"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 3.pdf (Seite 11)"
  },
  {
    "id": "rec_053",
    "title": "Bierschinken",
    "category": "Brühwurst",
    "base_batch_kg": 5.0,
    "meat_ingredients": [
      {
        "name": "Einlage: Wasser",
        "amount_kg": 5.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 2.3,
        "unit": "kg"
      },
      {
        "name": "Concentra Biersch. (Wiberg)",
        "amount_kg": 0.25,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.5,
        "unit": "kg"
      },
      {
        "name": "AvoRot extra (AVO)",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Kuttergold C",
        "amount_kg": 0.5,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 3.pdf (Seite 12)"
  },
  {
    "id": "rec_054",
    "title": "Hausmacher Leberwurst",
    "category": "Kochwurst",
    "base_batch_kg": 80.0,
    "meat_ingredients": [
      {
        "name": "S.-Kopfe gekocht",
        "amount_kg": 12.0
      },
      {
        "name": "S.- Leber",
        "amount_kg": 14.0
      },
      {
        "name": "Speck gekocht",
        "amount_kg": 8.0
      },
      {
        "name": "Wasser heib",
        "amount_kg": 1.0
      }
    ],
    "spices_additives": [
      {
        "name": "Kochsalz",
        "amount_kg": 1.8,
        "unit": "kg"
      },
      {
        "name": "PfefferweiB",
        "amount_kg": 0.55,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.25,
        "unit": "kg"
      },
      {
        "name": "Nelken",
        "amount_kg": 0.04,
        "unit": "kg"
      },
      {
        "name": "Majoran",
        "amount_kg": 0.08,
        "unit": "kg"
      },
      {
        "name": "Mat(VanHees)",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Subr",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Zwiebelgriess",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Lemal(vanHees)",
        "amount_kg": 1.0,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 3.pdf (Seite 13)"
  },
  {
    "id": "rec_055",
    "title": "Bratwurstgewirzmischung",
    "category": "Brühwurst",
    "base_batch_kg": 7.5,
    "meat_ingredients": [
      {
        "name": "Bratwursthell (Wib)",
        "amount_kg": 1.0
      },
      {
        "name": "Bratwurst extra (Ra)",
        "amount_kg": 1.0
      },
      {
        "name": "o kg Bratwurst wirzig (VH)",
        "amount_kg": 1.0
      },
      {
        "name": "Bratwurst FF (Ind)",
        "amount_kg": 1.0
      },
      {
        "name": "Bratwurst Hela ProFit (Lau)",
        "amount_kg": 1.0
      },
      {
        "name": "Rostbratwurst intensiv (Mog)",
        "amount_kg": 1.5
      },
      {
        "name": "Bratwurst spezial (AVO)",
        "amount_kg": 1.0
      }
    ],
    "spices_additives": [],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 3.pdf (Seite 14)"
  },
  {
    "id": "rec_056",
    "title": "Gelbwurst",
    "category": "Brühwurst",
    "base_batch_kg": 105.0,
    "meat_ingredients": [
      {
        "name": "S.-Backen",
        "amount_kg": 30.0
      },
      {
        "name": "Deckelspeck",
        "amount_kg": 13.0
      },
      {
        "name": "Eis",
        "amount_kg": 25.0
      }
    ],
    "spices_additives": [
      {
        "name": "Kochsalz",
        "amount_kg": 2.1,
        "unit": "kg"
      },
      {
        "name": "lbwurstgewurz(Ra)",
        "amount_kg": 0.45,
        "unit": "ge"
      },
      {
        "name": "PfefferweiB",
        "amount_kg": 0.04,
        "unit": "kg"
      },
      {
        "name": "Schmakolin",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Zwiebelgriess",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Dextrose",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "RolaPhos(Laue)",
        "amount_kg": 0.4,
        "unit": "kg"
      },
      {
        "name": "Zitronengewirz",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "kornte Brihe",
        "amount_kg": 0.1,
        "unit": "ge"
      },
      {
        "name": "r/kgBratPetersiliefrisch",
        "amount_kg": 10.0,
        "unit": "g"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 3.pdf (Seite 15)"
  },
  {
    "id": "rec_057",
    "title": "Hsm.Presskopf rot",
    "category": "Kochwurst",
    "base_batch_kg": 100.0,
    "meat_ingredients": [
      {
        "name": "Brät: Deckelspeck",
        "amount_kg": 6.0
      },
      {
        "name": "Brät: Eis",
        "amount_kg": 6.0
      },
      {
        "name": "Brät: Emulsion",
        "amount_kg": 1.0
      },
      {
        "name": "Grobes: mm",
        "amount_kg": 13.0
      },
      {
        "name": "Grobes: S II",
        "amount_kg": 18.0
      },
      {
        "name": "Grobes: mm",
        "amount_kg": 13.0
      },
      {
        "name": "Grobes: Kutterbauch I",
        "amount_kg": 18.0
      },
      {
        "name": "Grobes: mm",
        "amount_kg": 8.0
      },
      {
        "name": "Grobes: S.-Kopferot,gekocht8mm",
        "amount_kg": 20.0
      }
    ],
    "spices_additives": [
      {
        "name": "NPS",
        "amount_kg": 2.0,
        "unit": "kg"
      },
      {
        "name": "Hsm.Presskopfgew. (HS)",
        "amount_kg": 0.4,
        "unit": "kg"
      },
      {
        "name": "PfefferweiB",
        "amount_kg": 0.45,
        "unit": "kg"
      },
      {
        "name": "Muskat",
        "amount_kg": 0.3,
        "unit": "kg"
      },
      {
        "name": "Nelken",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Mat",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Schmakoline",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Zwiebelgranulat",
        "amount_kg": 0.1,
        "unit": "kg"
      },
      {
        "name": "Knoblauchgranulat",
        "amount_kg": 0.05,
        "unit": "kg"
      },
      {
        "name": "Helabin flissig (Lau)",
        "amount_kg": 0.4,
        "unit": "kg"
      },
      {
        "name": "Livemal",
        "amount_kg": 0.2,
        "unit": "kg"
      },
      {
        "name": "Pokulus",
        "amount_kg": 0.05,
        "unit": "kg"
      }
    ],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 3.pdf (Seite 16)"
  },
  {
    "id": "rec_058",
    "title": "Gekochte Mettwurst im Geleemantel",
    "category": "Rohwurst",
    "base_batch_kg": 100.0,
    "meat_ingredients": [
      {
        "name": "SIl,Schultern",
        "amount_kg": 48.0
      },
      {
        "name": "SIV,Bauchmager",
        "amount_kg": 20.0
      },
      {
        "name": "KOCHTEMETTWURSTK",
        "amount_kg": 6.0
      },
      {
        "name": "Wasser",
        "amount_kg": 26.0
      }
    ],
    "spices_additives": [],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 3.pdf (Seite 17)"
  },
  {
    "id": "rec_059",
    "title": "Merseuz",
    "category": "Brühwurst",
    "base_batch_kg": 23222.0,
    "meat_ingredients": [
      {
        "name": "Bl",
        "amount_kg": 151.0
      },
      {
        "name": "yr.Kocsala",
        "amount_kg": 240.0
      },
      {
        "name": "Koc5sa12",
        "amount_kg": 185.0
      },
      {
        "name": "r-P-fPer scwae",
        "amount_kg": 2.0
      },
      {
        "name": ")-Pefe scrwae",
        "amount_kg": 30.0
      },
      {
        "name": "r-Paprihu",
        "amount_kg": 45.0
      },
      {
        "name": "Papiiha",
        "amount_kg": 6051.0
      },
      {
        "name": "r.Knoblauees",
        "amount_kg": 1105.0
      },
      {
        "name": "Kreuzkunmc",
        "amount_kg": 5.0
      },
      {
        "name": "v-Piment",
        "amount_kg": 10.0
      },
      {
        "name": "v.Chll",
        "amount_kg": 29.0
      },
      {
        "name": "v.Chil",
        "amount_kg": 305.0
      },
      {
        "name": "s-Paprex",
        "amount_kg": 10.0
      },
      {
        "name": "Papiex",
        "amount_kg": 15051.0
      },
      {
        "name": "mm Wollen",
        "amount_kg": 3.0
      }
    ],
    "spices_additives": [],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 3.pdf (Seite 18)"
  },
  {
    "id": "rec_060",
    "title": "elw.p1oh",
    "category": "Brühwurst",
    "base_batch_kg": 4.0,
    "meat_ingredients": [
      {
        "name": "S1",
        "amount_kg": 1.0
      },
      {
        "name": "mm",
        "amount_kg": 3.0
      }
    ],
    "spices_additives": [],
    "instructions": "Herstellung gemäß Rembser GmbH Wurstproduktion Qualitätsmanagement-Vorgaben.",
    "quality_info": "Quelle: Rembser GmbH Wurstproduktion | Dokument: Gescanntes Dokument 3.pdf (Seite 19)"
  }
];

// Recept Master Pro - Bulletproof & Offline Ready

// Recept Master Pro - Bulletproof & Offline Ready

// Recept Master Pro - Bulletproof & Offline Ready

// Recept Master Pro - Core App Logic (Clean & Unconfusing UX)

let recipes = [];
let currentCategory = 'All';
let activeModalRecipe = null;

// Initialize App
document.addEventListener('DOMContentLoaded', async () => {
  localStorage.removeItem('recept_master_db'); // Refresh cache with authentic 55 DB
  await loadRecipes();
  renderRecipes();
});

// Load Recipes from recipes_db.json
function loadRecipes() {
  const saved = localStorage.getItem('recept_master_db');
  if (saved) {
    try {
      recipes = JSON.parse(saved);
      console.log('Rezepte aus LocalStorage geladen:', recipes.length);
      return;
    } catch (e) {
      console.error('LocalStorage-Fehler:', e);
    }
  }
  recipes = AUTHENTIC_RECIPES;
  saveToLocalStorage();
  console.log('Authentische Rezepte geladen:', recipes.length);
}

function saveToLocalStorage() {
  localStorage.setItem('recept_master_db', JSON.stringify(recipes));
}

// Render Recipe Cards (Clean Cards: Only Base Weight shown)
function renderRecipes() {
  const grid = document.getElementById('recipeGrid');
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  
  const filtered = recipes.filter(r => {
    const matchesCategory = (currentCategory === 'All' || r.category === currentCategory);
    
    const titleMatch = r.title.toLowerCase().includes(query);
    const ingredientMatch = (r.meat_ingredients || []).some(m => m.name.toLowerCase().includes(query)) ||
                            (r.spices_additives || []).some(s => s.name.toLowerCase().includes(query));
    
    const typoMatch = (query.includes('rindwurt') && r.title.toLowerCase().includes('rindwurst')) ||
                       (query.includes('brastwurt') && r.title.toLowerCase().includes('bratwurst'));

    return matchesCategory && (titleMatch || ingredientMatch || typoMatch);
  });

  document.getElementById('recipeCountBadge').textContent = `${filtered.length} Original-Rezepte verfügbar`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
        <h3>Kein passendes Rezept gefunden</h3>
        <p style="font-size: 0.9rem; margin-top: 6px;">Bitte überprüfen Sie Ihre Suchanfrage.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(r => {
    const meatPreview = (r.meat_ingredients || []).slice(0, 3).map(m => m.name).join(', ');
    const spicesCount = (r.spices_additives || []).length;

    return `
      <div class="recipe-card">
        <div>
          <div class="card-top">
            <span class="badge">${escapeHtml(r.category)}</span>
          </div>

          <h3 class="card-title">${escapeHtml(r.title)}</h3>

          <div class="weight-indicator-box" style="justify-content: flex-start; gap: 12px;">
            <div class="weight-row">
              <label>Original Basis-Einwaage</label>
              <span>${r.base_batch_kg.toFixed(1)} kg</span>
            </div>
          </div>

          <div class="preview-list">
            <div><strong>Fleisch:</strong> ${escapeHtml(meatPreview || 'Gemäß Rezeptur')}</div>
            <div><strong>Gewürze:</strong> ${spicesCount} Komponenten</div>
          </div>
        </div>

        <div class="card-actions">
          <button class="btn btn-primary" style="flex: 1;" onclick="openDetailModal('${r.id}')">
            🔍 Rezept öffnen & Berechnen
          </button>
          <button class="btn btn-secondary" onclick="openEditModal('${r.id}')" title="Bearbeiten">
            ✏️
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Category Filter Controller
function filterCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('#categoryChips .chip').forEach(c => {
    c.classList.toggle('active', c.textContent.includes(cat) || (cat === 'All' && c.textContent.includes('Alle')));
  });
  renderRecipes();
}

// Search Filter Controller
function filterRecipes() {
  const query = document.getElementById('searchInput').value.trim();
  document.getElementById('clearSearchBtn').style.display = query ? 'block' : 'none';
  renderRecipes();
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('clearSearchBtn').style.display = 'none';
  renderRecipes();
}

// Open Recipe Detail & Individual Manual Calculator Modal
function openDetailModal(recipeId) {
  const r = recipes.find(item => item.id === recipeId);
  if (!r) return;

  activeModalRecipe = r;
  document.getElementById('modalCategoryBadge').textContent = r.category;
  document.getElementById('modalTitle').textContent = r.title;
  document.getElementById('modalBaseWeightDisplay').textContent = `${r.base_batch_kg.toFixed(1)} kg`;
  
  // Clear manual batch input by default so user sees clean base recipe first
  document.getElementById('modalBatchInput').value = '';
  document.getElementById('modalInstructions').textContent = r.instructions || 'Keine Verarbeitungshinweise hinterlegt.';
  document.getElementById('modalQmInfo').textContent = r.quality_info || '';

  document.getElementById('modalEditBtn').onclick = () => {
    closeModal('detailModal');
    openEditModal(r.id);
  };

  updateModalCalculation();
  openModal('detailModal');
}

// Recalculate Modal Scaling when user types a manual target weight
function updateModalCalculation() {
  if (!activeModalRecipe) return;

  const baseScale = activeModalRecipe.base_batch_kg || 100.0;
  const inputVal = document.getElementById('modalBatchInput').value.trim();
  const customWeight = parseFloat(inputVal);

  const isCustomEntered = !isNaN(customWeight) && customWeight > 0;
  const targetScale = isCustomEntered ? customWeight : baseScale;
  const ratio = targetScale / baseScale;

  if (isCustomEntered) {
    const percentage = (ratio * 100).toFixed(1);
    document.getElementById('modalScalerSummary').innerHTML = `
      <span style="color: #34d399; font-weight: 600;">Manuell berechnete Chargengröße: <strong style="font-size: 1.1rem; color: #10b981;">${targetScale} kg</strong> (Skalierung: <strong>${percentage}%</strong>)</span>
    `;
    document.getElementById('meatScaledHeader').style.display = 'table-cell';
    document.getElementById('spicesScaledHeader').style.display = 'table-cell';
  } else {
    document.getElementById('modalScalerSummary').innerHTML = `
      <span style="color: var(--text-muted);">Tippen Sie eine Zahl oben ein, um auf Ihre Wunsch-Chargengröße umzurechnen.</span>
    `;
  }

  // Meat Table
  const meatTbody = document.querySelector('#meatTable tbody');
  meatTbody.innerHTML = (activeModalRecipe.meat_ingredients || []).map(m => {
    const scaledKg = (m.amount_kg * ratio).toFixed(3);

    return `
      <tr>
        <td><strong>${escapeHtml(m.name)}</strong></td>
        <td>${m.amount_kg.toFixed(3)} kg</td>
        <td class="col-highlight">${isCustomEntered ? `<strong>${scaledKg} kg</strong>` : '<span style="color: var(--text-muted);">-</span>'}</td>
      </tr>
    `;
  }).join('');

  // Spices Table
  const spicesTbody = document.querySelector('#spicesTable tbody');
  spicesTbody.innerHTML = (activeModalRecipe.spices_additives || []).map(s => {
    const scaledValue = s.amount_kg * ratio;
    let formattedVal = `${scaledValue.toFixed(3)} kg`;
    
    if (s.unit === 'g' || scaledValue < 0.1) {
      const grams = (scaledValue * 1000).toFixed(1);
      formattedVal = `${scaledValue.toFixed(3)} kg <span style="font-size:0.8rem; color:var(--text-muted);">(${grams} g)</span>`;
    }

    return `
      <tr>
        <td><strong>${escapeHtml(s.name)}</strong></td>
        <td>${s.amount_kg.toFixed(3)} kg</td>
        <td class="col-highlight">${isCustomEntered ? `<strong>${formattedVal}</strong>` : '<span style="color: var(--text-muted);">-</span>'}</td>
      </tr>
    `;
  }).join('');
}

// Open Add / Edit Modal
function openAddModal() {
  document.getElementById('editModalHeaderTitle').textContent = '➕ Neues Rezept hinzufügen';
  document.getElementById('editRecipeId').value = '';
  document.getElementById('recipeForm').reset();
  
  document.getElementById('meatFormRows').innerHTML = '';
  document.getElementById('spiceFormRows').innerHTML = '';
  
  addMeatRow('', 0);
  addSpiceRow('', 0, 'kg');

  openModal('editModal');
}

function openEditModal(recipeId) {
  const r = recipes.find(item => item.id === recipeId);
  if (!r) return;

  document.getElementById('editModalHeaderTitle').textContent = `✏️ Rezept bearbeiten: ${r.title}`;
  document.getElementById('editRecipeId').value = r.id;
  document.getElementById('editTitle').value = r.title;
  document.getElementById('editCategory').value = r.category;
  document.getElementById('editBaseBatch').value = r.base_batch_kg;
  document.getElementById('editInstructions').value = r.instructions || '';
  document.getElementById('editQmInfo').value = r.quality_info || '';

  const meatContainer = document.getElementById('meatFormRows');
  meatContainer.innerHTML = '';
  (r.meat_ingredients || []).forEach(m => addMeatRow(m.name, m.amount_kg));

  const spiceContainer = document.getElementById('spiceFormRows');
  spiceContainer.innerHTML = '';
  (r.spices_additives || []).forEach(s => addSpiceRow(s.name, s.amount_kg, s.unit || 'kg'));

  openModal('editModal');
}

function addMeatRow(name = '', amount = 0) {
  const container = document.getElementById('meatFormRows');
  const div = document.createElement('div');
  div.className = 'form-row-item';
  div.innerHTML = `
    <input type="text" placeholder="Fleischbezeichnung" value="${escapeHtml(name)}" required class="meat-name">
    <input type="number" step="0.001" placeholder="Menge (kg)" value="${amount || ''}" required class="qty-input meat-qty">
    <button type="button" class="btn btn-sm btn-secondary" onclick="this.parentElement.remove()">✖</button>
  `;
  container.appendChild(div);
}

function addSpiceRow(name = '', amount = 0, unit = 'kg') {
  const container = document.getElementById('spiceFormRows');
  const div = document.createElement('div');
  div.className = 'form-row-item';
  div.innerHTML = `
    <input type="text" placeholder="Gewürzbezeichnung" value="${escapeHtml(name)}" required class="spice-name">
    <input type="number" step="0.001" placeholder="Menge (kg)" value="${amount || ''}" required class="qty-input spice-qty">
    <select class="unit-input spice-unit">
      <option value="kg" ${unit === 'kg' ? 'selected' : ''}>kg</option>
      <option value="g" ${unit === 'g' ? 'selected' : ''}>g</option>
    </select>
    <button type="button" class="btn btn-sm btn-secondary" onclick="this.parentElement.remove()">✖</button>
  `;
  container.appendChild(div);
}

// Save Recipe Form Handler
function saveRecipe(e) {
  e.preventDefault();

  const id = document.getElementById('editRecipeId').value || `rec_${Date.now()}`;
  const title = document.getElementById('editTitle').value.trim();
  const category = document.getElementById('editCategory').value;
  const base_batch_kg = parseFloat(document.getElementById('editBaseBatch').value) || 100.0;
  const instructions = document.getElementById('editInstructions').value;
  const quality_info = document.getElementById('editQmInfo').value;

  const meat_ingredients = [];
  document.querySelectorAll('#meatFormRows .form-row-item').forEach(row => {
    const name = row.querySelector('.meat-name').value.trim();
    const qty = parseFloat(row.querySelector('.meat-qty').value) || 0;
    if (name && qty > 0) {
      meat_ingredients.push({ name, amount_kg: qty });
    }
  });

  const spices_additives = [];
  document.querySelectorAll('#spiceFormRows .form-row-item').forEach(row => {
    const name = row.querySelector('.spice-name').value.trim();
    const qty = parseFloat(row.querySelector('.spice-qty').value) || 0;
    const unit = row.querySelector('.spice-unit').value;
    if (name && qty > 0) {
      spices_additives.push({ name, amount_kg: qty, unit });
    }
  });

  const newRecipe = {
    id, title, category, base_batch_kg, meat_ingredients, spices_additives, instructions, quality_info
  };

  const existingIdx = recipes.findIndex(r => r.id === id);
  if (existingIdx >= 0) {
    recipes[existingIdx] = newRecipe;
  } else {
    recipes.unshift(newRecipe);
  }

  saveToLocalStorage();
  renderRecipes();
  closeModal('editModal');
  alert('Rezept erfolgreich gespeichert!');
}

// Print Handler
function printCurrentRecipe() {
  if (!activeModalRecipe) return;

  const r = activeModalRecipe;
  const inputVal = document.getElementById('modalBatchInput').value.trim();
  const customWeight = parseFloat(inputVal);
  const targetScale = (!isNaN(customWeight) && customWeight > 0) ? customWeight : r.base_batch_kg;
  const ratio = targetScale / r.base_batch_kg;

  document.getElementById('printTitle').textContent = r.title;
  document.getElementById('printCategory').textContent = r.category;
  document.getElementById('printDate').textContent = new Date().toLocaleDateString('de-DE');
  document.getElementById('printScaledBatch').textContent = targetScale;
  document.getElementById('printBaseBatch').textContent = r.base_batch_kg;
  document.getElementById('printInstructions').textContent = r.instructions || '';

  const meatTbody = document.querySelector('#printMeatTable tbody');
  meatTbody.innerHTML = (r.meat_ingredients || []).map(m => `
    <tr>
      <td>${escapeHtml(m.name)}</td>
      <td>${m.amount_kg.toFixed(3)} kg</td>
      <td><strong>${(m.amount_kg * ratio).toFixed(3)} kg</strong></td>
      <td>[  ] OK</td>
    </tr>
  `).join('');

  const spicesTbody = document.querySelector('#printSpicesTable tbody');
  spicesTbody.innerHTML = (r.spices_additives || []).map(s => `
    <tr>
      <td>${escapeHtml(s.name)}</td>
      <td>${s.amount_kg.toFixed(3)} kg</td>
      <td><strong>${(s.amount_kg * ratio).toFixed(3)} kg</strong></td>
      <td>[  ] OK</td>
    </tr>
  `).join('');

  window.print();
}

// Data Export
function exportData() {
  const jsonStr = JSON.stringify(recipes, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `rezepte_sicherung_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
}

// Modal Helpers
function openModal(id) {
  document.getElementById(id).classList.add('active');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}

function closeModalOnOverlay(e, id) {
  if (e.target.id === id) {
    closeModal(id);
  }
}

function escapeHtml(str) {
  return (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
