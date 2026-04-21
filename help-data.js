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
  },
  {
    patterns: [
      "Fråga: Var bor människor och varför bor de just där jämfört med i Sverige?"
    ],
    meaning: "Du ska undersöka mönstret för var i landet befolkningen har samlats och förklara orsakerna till det. Fundera på om det är naturen, historiska händelser eller tillgången till jobb som främst har styrt var städerna hamnat.",
    concepts: [
      "Befolkningstäthet: Detta är ett mått på hur många människor som bor på en viss yta, oftast per kvadratkilometer. Det hjälper oss att se om ett område är trångbott eller om det finns mycket tom yta.",
      "Urbanisering: Begreppet beskriver när människor flyttar från landsbygden in till städerna. Detta händer ofta när industrier växer fram eller när fler vill studera."
    ],
    next: [
      "Sök på en karta över landets befolkningstäthet för att se exakt var det är mest prickigt eller mörkt.",
      "Jämför kartan med Sverige för att se om vi också har stora områden som är nästan helt tomma på folk.",
      "Fundera på om människor i framtiden kommer att tvingas flytta från dessa områden om klimatet förändras drastiskt."
    ],
    start: [
      "De flesta människor i det här landet har valt att bosätta sig i de områden som ligger nära... ",
      "En viktig anledning till att befolkningen är fördelad på det här sättet är att det finns goda möjligheter till..."
    ]
  },
  {
    patterns: [
      "Beskriv var de största städerna ligger. Är landet tät- eller glesbefolkat?"
    ],
    meaning: "Här ska du ge en tydlig bild av landets geografi genom att namnge viktiga städer och förklara hur tätt människor bor. Tänk på om landet känns som en myrstack av människor eller om det är långt mellan grannarna.",
    concepts: [
      "Tätbefolkat: Detta innebär att det bor väldigt många människor nära varandra på en liten yta, vilket är vanligt i stora världsstäder.",
      "Glesbefolkat: När det är långt mellan husen och människorna bor utspridda över ett stort område med mycket natur emellan."
    ],
    next: [
      "Sök efter namnen på de tre största städerna och kontrollera på en karta om de ligger vid kusten eller djupt inne i landet.",
      "Jämför landets invånarantal per kvadratkilometer med Sveriges siffra, som är ungefär 25 personer per kvadratkilometer.",
      "Fundera på vilka problem som kan uppstå för skolor och sjukhus om ett land är extremt glesbefolkat och avstånden är jättelånga."
    ],
    start: [
      "Landets största städer ligger främst placerade i de delar av landet som kännetecknas av... ",
      "Man kan beskriva det här landet som [tät/gles]-befolkat eftersom det i genomsnitt bor... människor på varje kvadratkilometer."
    ]
  },
  {
    patterns: [
      "Koppling: Hur hänger befolkningen ihop med klimatet och naturen?"
    ],
    meaning: "Du ska förklara hur naturens förutsättningar, som höga berg eller extrem värme, bestämmer var det faktiskt går att leva. Fundera på om det finns områden i landet där naturen är så tuff att det är nästan omöjligt att bygga fungerande vägar.",
    concepts: [
      "Naturresurser: Det är saker i naturen som människor behöver för att överleva och bygga ett samhälle, som vatten, skog eller odlingsmark.",
      "Levnadsvillkor: Detta beskriver de omständigheter som avgör hur lätt eller svårt det är att bo och arbeta på en viss plats."
    ],
    next: [
      "Sök efter bilder på landets natur och se om de tomma områdena består av svåråtkomliga berg, öknar eller djupa skogar.",
      "Jämför detta med hur vi i Sverige bor mest i de södra delarna där klimatet är mildare och jorden är bättre för odling.",
      "Fundera på hur modern teknik, som luftkonditionering eller konstgjord bevattning, gör att människor idag kan bo på platser som förr var obeboeliga."
    ],
    start: [
      "Det finns en tydlig koppling mellan var människor bor och hur klimatet ser ut eftersom... ",
      "I de områden där naturen är som svårast, till exempel vid..., ser man att befolkningen är mycket gles på grund av..."
    ]
  },
  {
    patterns: [
      "Jämför med varför vi bor där vi bor i Sverige."
    ],
    meaning: "Här ska du använda dina kunskaper om Sverige som en spegel för att förstå likheter och skillnader med ditt valda land. Fundera på om närheten till vatten och handel har varit lika viktig för städerna i ditt land som för de svenska städerna.",
    concepts: [
      "Infrastruktur: Detta är system av vägar, järnvägar, el och internet som behövs för att människor ska kunna bo och arbeta på en plats.",
      "Migration: Begreppet handlar om när människor flyttar från en plats till en annan, antingen inom ett land eller mellan olika länder."
    ],
    next: [
      "Ta reda på varför de flesta svenskar bor längs kusten eller i närheten av de tre största städerna Stockholm, Göteborg och Malmö.",
      "Jämför dessa svenska orsaker med vad som har lockat människor till de största städerna i det land du undersöker.",
      "Fundera på om det finns några hinder i ditt land, som extrem torka eller höga berg, som vi i Sverige slipper tänka på när vi bygger städer."
    ],
    start: [
      "En likhet mellan länderna är att människor ofta har valt att bosätta sig på platser där det är enkelt att bedriva handel och... ",
      "Något som verkligen skiljer länderna åt är däremot att man i mitt land måste ta hänsyn till... vilket vi sällan behöver i Sverige."
    ]
  },
  {
    patterns: [
      "Fråga: Hur arbetar landet för att miljön ska må bra jämfört med i Sverige?"
    ],
    meaning: "Du ska sammanfatta landets miljöarbete och visa på skillnader mot hur vi i Sverige sköter vår miljö. Fundera på om landets miljöarbete styrs mest av hårda lagar eller om det är människornas egna val som gör störst skillnad.",
    concepts: [
      "Hållbar utveckling: Att leva på ett sätt som gör att jordens resurser räcker även till framtidens människor.",
      "Biologisk mångfald: Att det finns många olika typer av djur och växter i naturen som alla behövs för att ekosystemet ska fungera."
    ],
    next: [
      "Sök efter 'Environmental policies' tillsammans med landets namn för att se vilka lagar som finns.",
      "Jämför hur mycket av landets sopor som återvinns jämfört med Sveriges återvinning.",
      "Fundera på om det är lättare att skydda miljön i ett rikt land än i ett fattigt land."
    ],
    start: [
      "Landet arbetar med miljöfrågor genom att fokusera extra mycket på... ",
      "Det finns stora skillnader mot Sverige, till exempel när det gäller..."
    ]
  },
  {
    patterns: [
      "Vilka är de största miljöproblemen i landet?"
    ],
    meaning: "Här ska du peka ut de mest akuta skadorna på naturen som finns i landet just nu. Fundera på om dessa problem är synliga för ögat, som skräp, eller osynliga, som kemiska gifter i marken.",
    concepts: [
      "Miljöhot: Faror i naturen som skapats av människor och som kan skada djur, växter och människors hälsa.",
      "Utsläpp: Skadliga ämnen som kommer ut i luften, vattnet eller marken från exempelvis bilar och stora fabriker."
    ],
    next: [
      "Sök efter 'Main environmental issues' och landets namn i en sökmotor.",
      "Jämför om landet har samma typ av problem som Sverige, som exempelvis övergödning i haven.",
      "Fundera på vilket av landets miljöproblem som är svårast för politikerna att lösa snabbt."
    ],
    start: [
      "De största miljöutmaningarna som landet står inför idag är... ",
      "Ett av de mest allvarliga problemen är... "
    ]
  },
  {
    patterns: [
      "Förklara varför: Beror problemen på fabriker, jordbruk eller hur människor lever?"
    ],
    meaning: "Här ska du hitta källan till varför miljön skadas genom att titta på landets produktion och människors vardagsliv. Fundera på om det är landets ekonomi och behov av pengar som gör att miljön ofta hamnar i andra hand.",
    concepts: [
      "Industri: Fabriker och företag som tillverkar saker i stor skala, vilket ofta kräver mycket energi och ger utsläpp.",
      "Intensivodling: Ett sätt att använda jordbruksmark så effektivt som möjligt, vilket ofta kräver stora mängder bekämpningsmedel."
    ],
    next: [
      "Ta reda på vilken som är landets största industri och se om den orsakar mycket föroreningar.",
      "Jämför hur mycket landets invånare konsumerar jämfört med en person i Sverige.",
      "Fundera på om människors levnadssätt i städerna skadar miljön mer än vad jordbruket gör på landsbygden."
    ],
    start: [
      "Miljöproblemen i landet beror till stor del på att... ",
      "En annan viktig orsak är hur jordbruket används för att..."
    ]
  },
  {
    patterns: [
      "Konsekvens: Vad leder problemen till för naturen och människorna?"
    ],
    meaning: "Du ska beskriva vad som händer med växter, djur och människor när miljön förstörs i landet. Fundera på om konsekvenserna märks mest för de fattiga människorna i landet eller om alla drabbas lika mycket.",
    concepts: [
      "Ekosystem: Ett område i naturen där djur och växter lever tillsammans och är beroende av varandra.",
      "Hälsoeffekter: Hur miljön påverkar människors kroppar, till exempel genom sjukdomar orsakade av smutsigt vatten eller avgaser."
    ],
    next: [
      "Sök efter information om hur föroreningar påverkar hälsan i just det här landet.",
      "Jämför hur tillgången till rent dricksvatten ser ut i landet jämfört med hur vi har det i Sverige.",
      "Fundera på om naturen i landet kan återhämta sig själv om alla utsläpp stoppades helt idag."
    ],
    start: [
      "För naturen i landet innebär miljöproblemen att... ",
      "Människorna drabbas också hårt eftersom miljöförstöringen leder till..."
    ]
  },
  {
    patterns: [
      "Vad gör landet för att försöka lösa problemen?"
    ],
    meaning: "Du ska beskriva de projekt, lagar eller tekniska lösningar som landet använder för att laga skadorna i naturen. Fundera på om lösningarna främst kommer från landets ledare eller om det är människorna själva som startar miljöprojekt.",
    concepts: [
      "Förnybar energi: Energi som kommer från källor som aldrig tar slut, som solljus, vindkraft och rinnande vatten.",
      "Miljölagstiftning: Regler som bestäms av staten för att tvinga företag och människor att sluta skada naturen."
    ],
    next: [
      "Sök efter specifika miljöprojekt eller naturreservat som finns i det valda landet.",
      "Jämför landets satsningar på grön energi med de satsningar som görs i Sverige.",
      "Fundera på om landets nuvarande lösningar faktiskt räcker till för att rädda naturen på lång sikt."
    ],
    start: [
      "För att förbättra miljöns tillstånd har landet börjat satsa på... ",
      "Ett exempel på en konkret åtgärd som har genomförts är... "
    ]
  }
];