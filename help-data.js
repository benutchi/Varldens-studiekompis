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
  },
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
  },
  {
    patterns: [
      "Fråga: Hur påverkar naturen och jordens krafter hur människor lever jämfört med i Sverige?"
    ],
    meaning: "Här ska du undersöka hur både våldsamma och långsamma förändringar i naturen påverkar människors trygghet och sätt att leva.",
    concepts: [
      "Naturkrafter: Krafter i naturen som ändrar hur jordytan ser ut, till exempel genom rörelser i marken eller väderlek.",
      "Livsvillkor: De förutsättningar som bestämmer hur lätt eller svårt det är att leva på en viss plats."
    ],
    next: [
      "Sök på: 'Naturgeografi i [Landets namn]'.",
      "Jämför med Sverige: Har vi bergskedjor eller stora ökenområden här? Hur påverkar det våra liv?",
      "Fundera: Om naturen i ett område plötsligt förändras, till exempel genom ett jordskalv, hur påverkar det tillgången till el, mat och vägar?"
    ],
    start: [
      "Naturen och jordens krafter påverkar människors liv i landet genom att...",
      "Jämfört med Sverige är naturens påverkan på vardagen..."
    ]
  },
  {
    patterns: [
      "Endogena krafter: Krafter från jordens inre (t.ex. vulkaner, jordbävningar och bergskedjebildning). Ge exempel från ditt land (nu eller historiskt)."
    ],
    meaning: "Du ska hitta exempel på händelser eller platser i landet som skapats av krafter djupt nerifrån jorden.",
    concepts: [
      "Endogena krafter: Inre krafter som bygger upp landskapet. Det händer när plattor i jordskorpan rör sig, vilket skapar berg, vulkanutbrott eller jordskalv."
    ],
    next: [
      "Sök på: '[Landets namn] vulkaner' eller '[Landets namn] jordbävningar'.",
      "Titta på en karta: Finns det bergskedjor i landet? Hur bildades de?",
      "Fundera: Varför har vissa länder många vulkaner medan länder som Sverige nästan aldrig har några kraftiga jordskalv?"
    ],
    start: [
      "Ett exempel på endogena krafter i landet är...",
      "Dessa inre krafter har format landet genom att..."
    ]
  },
  {
    patterns: [
      "Exogena krafter: Krafter som formar jordytan utifrån (t.ex. vind, vatten och erosion). Ge exempel från ditt land."
    ],
    meaning: "Beskriv hur landskapet nöts ner och ändras av väder, vind och rinnande vatten.",
    concepts: [
      "Exogena krafter: Yttre krafter som slipar och nöter ner landskapet. Det kan vara en flod som gräver ut en dal eller vind som blåser bort sand.",
      "Erosion: När material som sten, sand och jord nöts bort och flyttas till en annan plats."
    ],
    next: [
      "Sök på: 'Erosion i [Landets namn]' eller 'Stora floder i [Landets namn]'.",
      "Titta på bilder: Ser man spår av att vatten eller vind har ändrat hur marken ser ut?",
      "Fundera: Om det regnar extremt mycket under en period, hur påverkar de yttre krafterna människors odlingar eller hus?"
    ],
    start: [
      "Exogena krafter märks i landet genom att...",
      "Vinden och vattnet har format landskapet genom att..."
    ]
  },
  {
    patterns: [
      "Jämför: Finns samma krafter i Sverige? Hur påverkar krafterna säkerheten och hur man bygger hus?"
    ],
    meaning: "Här ska du jämföra landets naturkrafter med de vi har i Sverige och förklara hur det styr hur vi bygger våra städer.",
    concepts: [
      "Säkerhet: Hur man planerar samhället för att skydda människor mot naturhändelser.",
      "Byggnadsteknik: Olika sätt att bygga hus så att de tål till exempel markvibrationer eller kraftiga oväder."
    ],
    next: [
      "Sök på: 'Arkitektur och byggnader i [Landets namn]'.",
      "Jämför med Sverige: Behöver vi i Sverige bygga hus som tål kraftiga jordskalv? Varför eller varför inte?",
      "Fundera: Om du skulle rita ett hus som ska stå i ett område med mycket starka vindar, vad skulle vara det viktigaste att tänka på?"
    ],
    start: [
      "En stor skillnad mellan länderna är att man i [Landets namn] måste tänka på...",
      "När det gäller säkerhet så påverkar naturkrafterna byggnaderna genom att..."
    ]
  }
];