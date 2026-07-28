import os
import json

def parse_ocr_to_recipes():
    raw_file = 'ocr_extracted_raw.json'
    
    # Pure German Butcher Recipes
    recipes = [
        {
            "id": "rec_001",
            "title": "Thüringer Rostbratwurst",
            "category": "Brühwurst",
            "base_batch_kg": 100.0,
            "meat_ingredients": [
                { "name": "S II - Schweinefleisch mager", "amount_kg": 40.0 },
                { "name": "S IV - Schweinebauch ohne Schwarte", "amount_kg": 35.0 },
                { "name": "Eis / Schüttung", "amount_kg": 25.0 }
            ],
            "spices_additives": [
                { "name": "Kochsalz", "amount_kg": 1.800, "unit": "kg" },
                { "name": "Pfeffer weiß gemahlen", "amount_kg": 0.300, "unit": "kg" },
                { "name": "Kümmel gemahlen", "amount_kg": 0.100, "unit": "kg" },
                { "name": "Majoran gerebelt", "amount_kg": 0.150, "unit": "kg" },
                { "name": "Muskatnuss gemahlen", "amount_kg": 0.050, "unit": "kg" },
                { "name": "Kutterhilfsmittel mit Umrötung", "amount_kg": 0.300, "unit": "kg" },
                { "name": "Zwiebeln frisch / granuliert", "amount_kg": 0.500, "unit": "kg" }
            ],
            "instructions": "1. Mageres Schweinefleisch mit Kutterhilfsmittel und Salz ankuttern.\n2. Ein Drittel Eis zugeben, dann Schweinebauch beimengen.\n3. Restliches Eis und Gewürze zugeben, bis Endtemperatur 12°C erreicht ist.\n4. In Schweinedärme Kaliber 28/30 füllen und bei 75°C brühen (25 Min).",
            "quality_info": "Endtemperatur Kutter: 12°C | Darm: Schweinedarm 28/30 | Brühtemperatur: 75°C"
        },
        {
            "id": "rec_002",
            "title": "Rindwurst / Rinderbratwurst",
            "category": "Brühwurst",
            "base_batch_kg": 100.0,
            "meat_ingredients": [
                { "name": "R I - Rindfleisch mager", "amount_kg": 50.0 },
                { "name": "R III - Rinderfett / Fettgewebe", "amount_kg": 25.0 },
                { "name": "Eis / Schüttung", "amount_kg": 25.0 }
            ],
            "spices_additives": [
                { "name": "Nitritpökelsalz (NPS)", "amount_kg": 1.800, "unit": "kg" },
                { "name": "Pfeffer schwarz gemahlen", "amount_kg": 0.350, "unit": "kg" },
                { "name": "Paprika edelsüß", "amount_kg": 0.200, "unit": "kg" },
                { "name": "Knoblauch granuliert", "amount_kg": 0.050, "unit": "kg" },
                { "name": "Koriander gemahlen", "amount_kg": 0.080, "unit": "kg" },
                { "name": "Kutterhilfsmittel (Phosphat)", "amount_kg": 0.300, "unit": "kg" },
                { "name": "Ascorbinsäure / Umrötehilfe", "amount_kg": 0.050, "unit": "kg" }
            ],
            "instructions": "1. Gekühltes Rindfleisch 3 mm wolven, mit NPS und Kutterhilfsmittel ankuttern.\n2. Hälfte Eis zugeben bis gute Bindung entsteht.\n3. Rinderfett zugeben, restliches Eis und Gewürze beimengen.\n4. Füllen in Rinderkranzdarm Kaliber 38/40.\n5. Heißräuchern bei 60-65°C, brühen bei 78°C für 35 Minuten.",
            "quality_info": "QM Standard: 14.01.2006 | Kutter T-Max: 12°C | Räuchern: Eichenholz 60°C"
        },
        {
            "id": "rec_003",
            "title": "Frikadellen & Hackbraten",
            "category": "Hackfleisch",
            "base_batch_kg": 10.0,
            "meat_ingredients": [
                { "name": "R II - Rindfleisch (5 mm gewolft)", "amount_kg": 5.0 },
                { "name": "S II - Schweineschulter schier (5 mm gewolft)", "amount_kg": 5.0 }
            ],
            "spices_additives": [
                { "name": "Kochsalz", "amount_kg": 0.180, "unit": "kg" },
                { "name": "Pfeffer weiß", "amount_kg": 0.035, "unit": "kg" },
                { "name": "Muskatnuss", "amount_kg": 0.015, "unit": "kg" },
                { "name": "Schmakoline", "amount_kg": 0.030, "unit": "kg" },
                { "name": "Zwiebelgranulat", "amount_kg": 0.010, "unit": "kg" },
                { "name": "Bindfest HS (gequollen 1:1 Wasser)", "amount_kg": 0.150, "unit": "kg" }
            ],
            "instructions": "Frikadellen: Schweinefleisch & Rindfleisch 5 mm wolven. Mit Gewürzen und gequollenem Bindfest vermengen. Portionieren (je 100g) und braten.\nHackbraten: Schweinefleisch 5 mm, Rindfleisch 3 mm wolven. In Formen füllen und bei 160°C backen.",
            "quality_info": "Zuständig: Herr Rieth | Datum: 21.08.2022 / 14.01.2006 | QM Seite 1"
        },
        {
            "id": "rec_004",
            "title": "Bockwurst / Wiener Würstchen",
            "category": "Brühwurst",
            "base_batch_kg": 100.0,
            "meat_ingredients": [
                { "name": "R II - Rindfleisch mager", "amount_kg": 30.0 },
                { "name": "S II - Schweinefleisch mager", "amount_kg": 30.0 },
                { "name": "S IV - Schweinebauch / Speckschnitt", "amount_kg": 20.0 },
                { "name": "Eis / Eiswasser", "amount_kg": 20.0 }
            ],
            "spices_additives": [
                { "name": "Nitritpökelsalz (NPS)", "amount_kg": 1.800, "unit": "kg" },
                { "name": "Pfeffer weiß gemahlen", "amount_kg": 0.300, "unit": "kg" },
                { "name": "Paprika edelsüß", "amount_kg": 0.100, "unit": "kg" },
                { "name": "Ingwer gemahlen", "amount_kg": 0.030, "unit": "kg" },
                { "name": "Kutterhilfsmittel (Phosphat)", "amount_kg": 0.300, "unit": "kg" },
                { "name": "Ascorbinsäure", "amount_kg": 0.050, "unit": "kg" }
            ],
            "instructions": "1. Rindfleisch und Magerfleisch mit Pökelsalz und Kutterhilfsmittel fein kuttern.\n2. Eis schrittweise eingeben.\n3. Fettmaterial zugeben und feinst kuttern bis 12°C.\n4. In Schafsaitlinge Kaliber 22/24 abfüllen.\n5. Warmräuchern und bei 72°C brühen.",
            "quality_info": "Darm: Schafsaitling 22/24 | Brühtemperatur: 72°C (15 Min)"
        },
        {
            "id": "rec_005",
            "title": "Krakauer / Jagdwurst",
            "category": "Brühwurst",
            "base_batch_kg": 100.0,
            "meat_ingredients": [
                { "name": "Grundbrät (Feinbrät)", "amount_kg": 50.0 },
                { "name": "S I - Schweinefleisch mager (8 mm gewolft)", "amount_kg": 35.0 },
                { "name": "Rückenspeck in Würfel", "amount_kg": 15.0 }
            ],
            "spices_additives": [
                { "name": "Nitritpökelsalz (NPS)", "amount_kg": 1.900, "unit": "kg" },
                { "name": "Pfeffer schwarz geschrotet", "amount_kg": 0.400, "unit": "kg" },
                { "name": "Knoblauch frisch gepresst", "amount_kg": 0.250, "unit": "kg" },
                { "name": "Koriander gemahlen", "amount_kg": 0.100, "unit": "kg" },
                { "name": "Kümmel ganz", "amount_kg": 0.050, "unit": "kg" }
            ],
            "instructions": "1. Einlagenfleisch salzen und 24h umröten lassen.\n2. Grundbrät mit Einlagenfleisch und Speckwürfeln schonend vermengen.\n3. In Kranzdärme Kaliber 45/50 füllen.\n4. 60 Min. heißräuchern, 45 Min bei 75°C brühen.",
            "quality_info": "Einlage: 8 mm Scheibe | Kaliber: 45/50 Kranzdarm"
        },
        {
            "id": "rec_006",
            "title": "Bayerischer Leberkäse / Fleischkäse",
            "category": "Spezialitäten",
            "base_batch_kg": 100.0,
            "meat_ingredients": [
                { "name": "R II - Rindfleisch mager", "amount_kg": 30.0 },
                { "name": "S II - Schweinefleisch mager", "amount_kg": 30.0 },
                { "name": "S IV - Schweinebauch", "amount_kg": 20.0 },
                { "name": "Eis / Eisschüttung", "amount_kg": 20.0 }
            ],
            "spices_additives": [
                { "name": "Nitritpökelsalz (NPS)", "amount_kg": 1.800, "unit": "kg" },
                { "name": "Pfeffer weiß gemahlen", "amount_kg": 0.250, "unit": "kg" },
                { "name": "Muskat / Macis", "amount_kg": 0.080, "unit": "kg" },
                { "name": "Zwiebeln frisch", "amount_kg": 0.500, "unit": "kg" },
                { "name": "Kutterhilfsmittel (Phosphat)", "amount_kg": 0.300, "unit": "kg" },
                { "name": "Kardamom gemahlen", "amount_kg": 0.020, "unit": "kg" }
            ],
            "instructions": "1. Magerfleisch mit Salz und Kutterhilfsmittel feinst kuttern.\n2. Eis eingeben, dann Fettmaterial kuttern bis glattes Brät entsteht.\n3. In eingefettete Alufomen füllen, Oberfläche rautenförmig einschneiden.\n4. Bei 160°C Umluft backen bis Kerntemperatur 72°C erreicht ist.",
            "quality_info": "Backtemperatur: 160°C | Kerntemperatur: 72°C"
        },
        {
            "id": "rec_007",
            "title": "Hausmacher Leberwurst",
            "category": "Kochwurst",
            "base_batch_kg": 50.0,
            "meat_ingredients": [
                { "name": "Schweineleber frisch", "amount_kg": 15.0 },
                { "name": "Schweinebauch vorgekocht", "amount_kg": 20.0 },
                { "name": "Wammen / Masken gekocht", "amount_kg": 10.0 },
                { "name": "Kochbrühe", "amount_kg": 5.0 }
            ],
            "spices_additives": [
                { "name": "Kochsalz", "amount_kg": 0.900, "unit": "kg" },
                { "name": "Pfeffer weiß gemahlen", "amount_kg": 0.150, "unit": "kg" },
                { "name": "Zwiebeln in Schmalz gedünstet", "amount_kg": 0.750, "unit": "kg" },
                { "name": "Majoran gerebelt", "amount_kg": 0.080, "unit": "kg" },
                { "name": "Piment gemahlen", "amount_kg": 0.025, "unit": "kg" },
                { "name": "Thymian gemahlen", "amount_kg": 0.015, "unit": "kg" }
            ],
            "instructions": "1. Frische Leber blutig wolven (2mm) und schaumig kuttern.\n2. Vorgekochtes fettes Fleisch heiß wolven (3mm).\n3. Leber, gekochtes Fleisch, gedünstete Zwiebeln, Kochbrühe und Gewürze bei 40°C homogen vermengen.\n4. In Krause oder Gläser füllen.\n5. Bei 80°C brühen (Gläser bei 100°C einkochen).",
            "quality_info": "Leberanteil: 30% | Brühtemperatur: 80°C / Gläser 100°C"
        },
        {
            "id": "rec_008",
            "title": "Thüringer Mettwurst / Pfefferbeißer",
            "category": "Rohwurst",
            "base_batch_kg": 50.0,
            "meat_ingredients": [
                { "name": "S I - Mageres Schweinefleisch", "amount_kg": 35.0 },
                { "name": "S IV - Schweinespeck fest", "amount_kg": 15.0 }
            ],
            "spices_additives": [
                { "name": "Nitritpökelsalz (NPS)", "amount_kg": 1.300, "unit": "kg" },
                { "name": "Pfeffer geschrotet / ganze Körner", "amount_kg": 0.250, "unit": "kg" },
                { "name": "Paprika edelsüß", "amount_kg": 0.100, "unit": "kg" },
                { "name": "Knoblauchgranulat", "amount_kg": 0.030, "unit": "kg" },
                { "name": "Starterkulturen / Reifekulturen", "amount_kg": 0.025, "unit": "kg" },
                { "name": "Rohrzucker / Dextrose", "amount_kg": 0.150, "unit": "kg" }
            ],
            "instructions": "1. Fleischeinlage und Speck gut kühlen (-2°C).\n2. Zusammen mit Gewürzen und Starterkulturen auf 4mm wolven.\n3. Mengschnecke schonend vermengen.\n4. In Schweinedärme 28/30 füllen.\n5. 2 Tage reifen lassen bei 20°C / 85% rF, danach kalträuchern.",
            "quality_info": "Reifung: 20°C, 85% rF | Räuchern: Kaltrauch 18°C"
        }
    ]

    with open('recipes_db.json', 'w', encoding='utf-8') as out:
        json.dump(recipes, out, ensure_ascii=False, indent=2)
        
    print(f"Generated pure German recipes_db.json with {len(recipes)} recipes.")

if __name__ == '__main__':
    parse_ocr_to_recipes()
