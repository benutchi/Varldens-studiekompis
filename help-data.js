const HELP_DATA = [
  {
    patterns: [
      "Fråga: Hur påverkar klimatet hur människor lever i landet jämfört med i Sverige?"
    ],
    meaning: "Du ska förklara hur klimatet påverkar hur människor lever och arbetar i landet. Det handlar om hur vädret styr vardagen, precis som årstiderna gör i Sverige.",
    concepts: [
      "Klimat: Det genomsnittliga vädret på en plats under en lång tid, till exempel 30 år. Det visar om ett land är naturligt varmt, kallt eller torrt.",
      "Livsstil: De vanor och levnadssätt människor har, som ofta formas av de naturliga förutsättningarna på platsen."
    ],
    next: [
      "Sök på: 'Vardagsliv och traditioner i [Landets namn]'.",
      "Jämför med Sverige: I Sverige planerar vi mycket efter våra fyra årstider. Gör man det i ditt land också, eller ser dagarna likadana ut året om?",
      "Fundera: Om solen är mycket stark under dagen, hur påverkar det när man arbetar eller går i skolan? Om det regnar mycket, hur påverkar det fritiden?"
    ],
    start: [
      "Klimatet i landet fungerar som en ram för livet eftersom...",
      "När man jämför med Sverige ser man att vädret påverkar människors vardag genom att..."
    ]
  },
  {
    patterns: [
      "Vilken klimatzon ligger landet i?"
    ],
    meaning: "Du ska placera in landet i en av jordens stora klimatzoner. Varje zon har sin egen typiska temperatur, nederbörd och natur.",
    concepts: [
      "Klimatzon: Större områden på jorden med liknande klimat. De delas in i tropisk zon (varmt och fuktigt), subtropisk zon (varmt och torrt), tempererad zon (tydliga årstider) och polarzon (mycket kallt)."
    ],
    next: [
      "Sök på: 'Klimatzon [Landets namn]'.",
      "Titta på en världskarta: Hur långt är det från ditt land till ekvatorn jämfört med Sverige?",
      "Fundera: Vilka typer av växter eller djur finns i den här klimatzonen som inte skulle trivas i Sverige?"
    ],
    start: [
      "Landet tillhör den... klimatzonen, vilket innebär att naturen där oftast är...",
      "Att landet ligger i just denna zon gör att man kan förvänta sig att..."
    ]
  },
  {
    patterns: [
      "Förklara varför: Beror klimatet på läget på jorden, närhet till hav eller något annat?"
    ],
    meaning: "Du ska förklara de geografiska orsakerna till landets klimat. Det handlar om varför det är just så varmt, kallt eller regnigt som det är.",
    concepts: [
      "Breddgrad: Avståndet från ekvatorn. Ju närmare ekvatorn ett land ligger, desto mer värme ger solstrålarna.",
      "Havsströmmar: Strömmar i världshaven som flyttar värme eller kyla, vilket påverkar temperaturen på land.",
      "Topografi: Hur marken ser ut, till exempel om det finns höga bergskedjor som stoppar vindar eller regnmoln."
    ],
    next: [
      "Sök på: 'Geografi och natur i [Landets namn]'.",
      "Kolla på en karta: Ligger landet vid ett hav, eller är det omringat av land och berg?",
      "Fundera: Hur skulle klimatet i landet förändras om det inte låg vid havet eller om bergen inte fanns?"
    ],
    start: [
      "Den viktigaste orsaken till landets klimat är läget på jorden eftersom...",
      "Närheten till havet spelar en stor roll för att det gör att..."
    ]
  },
  {
    patterns: [
      "Hur påverkar vädret människors vardag (bostäder, mat och kläder)?"
    ],
    meaning: "Här ska du beskriva hur människor har anpassat sina hem, sin mat och sina kläder efter landets naturliga förutsättningar.",
    concepts: [
      "Anpassning: Att förändra hur man bygger eller lever så att det fungerar bra tillsammans med det lokala klimatet.",
      "Naturresurser: Material från naturen (till exempel trä, lera eller sten) som människor använder för att bygga hus eller producera mat."
    ],
    next: [
      "Sök på: 'Traditionell mat i [Landets namn]' och 'Arkitektur [Landets namn]'.",
      "Kolla bilder: Vilka material är husen byggda av? Hur ser taken ut för att klara regn eller värme?",
      "Fundera: Varför äter man just den här typen av mat i landet? Finns det en koppling till vad som går att odla i det klimatet?"
    ],
    start: [
      "Man ser tydligt hur vädret har påverkat byggnaderna i landet genom att...",
      "När det gäller mat och kläder märks klimatet på att..."
    ]
  },
  {
    patterns: [
      "Vilka är de största skillnaderna mot det svenska klimatet?"
    ],
    meaning: "Du ska använda Sverige som en jämförelse för att tydliggöra vad som är speciellt med klimatet i ditt valda land.",
    concepts: [
      "Tempererat klimat: Den typ av klimat vi har i Sverige, med fyra tydliga årstider och växlande väder.",
      "Kontraster: Tydliga skillnader mellan två olika saker, till exempel skillnaden mellan torka och regnperioder."
    ],
    next: [
      "Jämför medeltemperaturen: Hur stor är skillnaden mellan en vinterdag i Sverige och i ditt land?",
      "Tänk på årstiderna: Har ditt land fyra årstider som vi, eller styrs året av regnperioder eller ständig värme?",
      "Fundera: Vad skulle en person från det här landet tycka var svårast att vänja sig vid om hen flyttade till Sverige?"
    ],
    start: [
      "Om man jämför med Sveriges klimat är den största skillnaden att...",
      "Något som vi i Sverige är vana vid, men som fungerar annorlunda i [Landets namn], är..."
    ]
  }
];