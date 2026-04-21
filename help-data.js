const HELP_DATA = [
  {
    patterns: [
      "Fråga: Hur påverkar klimatet hur människor lever i landet jämfört med i Sverige?"
    ],
    meaning: "Du ska berätta om hur vädret och temperaturen styr människors liv. Tänk på vad som blir annorlunda i vardagen när klimatet inte är som i Sverige.",
    concepts: [
      "Klimat: Hur vädret brukar vara på en plats under en lång tid, till exempel 30 år."
    ],
    next: [
      "Sök på: 'Vardagsliv och klimat i [Landets namn]'.",
      "Jämför med Sverige: Behöver de tänka på helt andra saker än vi gör på grund av vädret?",
      "Fundera: Om du flyttade dit imorgon, vad skulle vara den största skillnaden i hur du planerar din dag?"
    ],
    start: [
      "Klimatet i landet påverkar människors liv genom att...",
      "En stor skillnad mot att leva i Sverige är att man i det här landet måste..."
    ]
  },
  {
    patterns: [
      "Vilken klimatzon ligger landet i?"
    ],
    meaning: "Här ska du peka ut vilken 'klimatfamilj' landet tillhör. Det hjälper dig att förstå vad man kan förvänta sig för väder där.",
    concepts: [
      "Klimatzon: Ett stort område på jorden där naturen och vädret liknar varandra."
    ],
    next: [
      "Titta på en världskarta: Ligger landet nära ekvatorn (mitten) eller långt uppe/nere vid polerna?",
      "Sök på: '[Landets namn] klimatzon'.",
      "Fundera: Stämmer klimatzonen överens med de bilder du har sett från landet tidigare?"
    ],
    start: [
      "Landet ligger i den... klimatzonen.",
      "Det märks att landet tillhör den här zonen eftersom..."
    ]
  },
  {
    patterns: [
      "Förklara varför: Beror klimatet på läget på jorden, närhet till hav eller något annat?"
    ],
    meaning: "Du ska hitta anledningen till att det är just så varmt, kallt eller regnigt som det är. Det finns alltid en naturlig förklaring!",
    concepts: [
      "Läge på jorden: Hur nära ekvatorn man är styr hur mycket värme solen ger.",
      "Närhet till hav: Havet fungerar som ett element som gör att det inte blir för varmt eller för kallt."
    ],
    next: [
      "Sök på: 'Geografi och klimat i [Landets namn]'.",
      "Kolla kartan: Finns det höga berg eller mycket kust som kan påverka vädret?",
      "Fundera: Är landet som en varm bastu eller en kall frys? Vad i naturen skapar den effekten?"
    ],
    start: [
      "Anledningen till att landet har det här klimatet är främst...",
      "Närheten till... gör att klimatet blir..."
    ]
  },
  {
    patterns: [
      "Hur påverkar vädret människors vardag (bostäder, mat och kläder)?"
    ],
    meaning: "Här ska du bli konkret! Berätta hur folk har byggt sina hus och vad de äter för att klara av klimatet.",
    concepts: [
      "Anpassning: Att ändra hur man lever så att det fungerar bra tillsammans med naturen."
    ],
    next: [
      "Sök på bilder: 'Hus i [Landets namn]' och 'Mat i [Landets namn]'.",
      "Kolla kläderna: Vad har folk på sig på bilderna från landet?",
      "Fundera: Varför har de inte snöskovlar eller tjocka dunjackor som vi har i Sverige? (Eller har de det?)"
    ],
    start: [
      "Man kan se på husen i landet att de är byggda för att...",
      "Eftersom det ofta är... äter människorna mycket... som växer bra där."
    ]
  },
  {
    patterns: [
      "Vilka är de största skillnaderna mot det svenska klimatet?"
    ],
    meaning: "Nu ska du ställa ditt land och Sverige bredvid varandra. Vad är det första man skulle märka om man reste mellan länderna?",
    concepts: [
      "Jämförelse: Att titta på likheter och skillnader mellan två saker."
    ],
    next: [
      "Tänk på våra årstider: Har ditt land också snöig vinter och grön sommar?",
      "Kolla temperaturer: Hur kallt är det som mest i Sverige jämfört med i ditt land?",
      "Fundera: Vad skulle en person från ditt land tycka var konstigast med det svenska vädret?"
    ],
    start: [
      "Den största skillnaden mellan länderna är att...",
      "I Sverige har vi... men i det här landet är det istället..."
    ]
  }
];