const HELP_DATA = [
{
  patterns: [
    "Hur påverkar klimatet hur människor lever i landet jämfört med i Sverige?",
    "Vilken klimatzon ligger landet i?",
    "Förklara varför: Beror klimatet på läget på jorden, närhet till hav eller något annat?",
    "Hur påverkar vädret människors vardag (bostäder, mat och kläder)?",
    "Vilka är de största skillnaderna mot det svenska klimatet?"
  ],
  meaning: "Här ska du undersöka hur vädret och temperaturen styr människors liv. Du ska först hitta fakta om klimatet och sedan förklara hur det gör att folk bor, äter och klär sig annorlunda än vi gör i Sverige.",
  concepts: [
    "Klimatzon: Ett stort område på jorden där vädret och temperaturen liknar varandra under lång tid (t.ex. tropiskt eller kallt).",
    "Läge på jorden: Hur nära ekvatorn ett land ligger påverkar hur stark solen är och hur varmt det blir.",
    "Kustklimat: Om ett land ligger nära havet blir det ofta regnigare och jämnare temperatur."
  ],
  next: [
    "Sök: '[Landets namn] klimat och klimatzon'.",
    "Sök: 'Hur bor människor i [Landets namn]' för att se bilder på hus.",
    "Jämför med Sverige: Behöver de vinterjackor och uppvärmda hus, eller behöver de skugga och svala kläder?",
    "Titta på en karta: Ligger landet vid havet eller mitt inne i en stor och torr världsdel?"
  ],
  start: [
    "Landet ligger i den ... klimatzonen, vilket innebär att vädret oftast är...",
    "Eftersom klimatet är så ..., måste människor i det här landet...",
    "En stor skillnad mot Sverige är att man i det här landet bygger husen för att...",
    "Detta beror på att läget på jorden gör att..."
   ]
},{
  patterns: [
    "Hur påverkar naturen och jordens krafter hur människor lever jämfört med i Sverige?",
    "Endogena krafter: Krafter från jordens inre (t.ex. vulkaner, jordbävningar och bergskedjebildning). Ge exempel från ditt land (nu eller historiskt).",
    "Exogena krafter: Krafter som formar jordytan utifrån (t.ex. vind, vatten och erosion). Ge exempel från ditt land.",
    "Jämför: Finns samma krafter i Sverige? Hur påverkar krafterna säkerheten och hur man bygger hus?"
  ],
  meaning: "Här ska du förklara hur både våldsamma krafter inifrån jorden och nötningskrafter utanför jorden formar landet. Du ska också fundera på om människor i ditt land behöver vara mer eller mindre oroliga för naturkatastrofer än vi är i Sverige.",
  concepts: [
    "Endogena krafter: Krafter som kommer inifrån jorden och bygger upp landskapet, till exempel genom vulkanutbrott eller när berg skapas.",
    "Exogena krafter: Krafter som kommer utifrån (från vädret) och nöter ner landskapet, till exempel vind som blåser bort sand eller vatten som gröper ur floder.",
    "Erosion: När jord, sand eller sten flyttas av vind eller rinnande vatten så att marken ändrar form."
  ],
  next: [
    "Sök: '[Landets namn] vulkaner jordbävningar' för att hitta inre krafter.",
    "Sök: '[Landets namn] naturkatastrofer historia' för att se hur människor påverkats förr.",
    "Jämför med Sverige: Har vi aktiva vulkaner eller kraftiga jordskalv här? Varför/varför inte?",
    "Titta på bilder av hus i landet: Ser de extra stadiga ut, eller står de på stolpar för att skydda mot vatten?"
  ],
  start: [
    "Ett exempel på en endogen kraft i mitt land är ... och det har påverkat landet genom att ...",
    "När det gäller exogena krafter kan man se att ... nöter ner eller formar naturen i landet.",
    "Jämfört med Sverige är säkerheten annorlunda eftersom man i mitt land måste bygga hus som tål ...",
    "En stor skillnad mot Sverige är att vi oftast inte behöver tänka på ..."
  ]
},{
  patterns: [
    "Fråga: Var bor människor och varför bor de just där jämfört med i Sverige?",
    "Beskriv var de största städerna ligger. Är landet tät- eller glesbefolkat?",
    "Koppling: Hur hänger befolkningen ihop med klimatet och naturen?",
    "Jämför med varför vi bor där vi bor i Sverige."
  ],
  meaning: "Du ska undersöka mönstret för var människor i landet har byggt sina städer och varför de har valt just de platserna. Du ska också förklara om landet är trångt eller har mycket plats, och jämföra det med hur vi bor i Sverige.",
  concepts: [
    "Befolkning: Alla människor som bor i ett land eller ett område.",
    "Tätbefolkat: När många människor bor på en liten yta, som i en storstad eller i södra Sverige.",
    "Glesbefolkat: När det bor ganska få människor på en stor yta, så att det är långt mellan grannarna (som i norra Sveriges inland)."
  ],
  next: [
    "Sök: '[Landets namn] befolkningstäthet karta' för att se var det är prickigt eller mörkt på kartan.",
    "Sök: 'Största städer i [Landets namn]' och kolla om de ligger vid havet, en flod eller i bergen.",
    "Titta på din klimat-del: Bor folk där det är bra klimat för att odla mat?",
    "Jämför med Sverige: Vi bor mest i söder där det är varmare och lättare att bygga vägar. Är det likadant i ditt land?"
  ],
  start: [
    "I det här landet bor de flesta människor i ... och det beror ofta på att ...",
    "Landet är mer [tät/gles]-befolkat än Sverige och en anledning till det är ...",
    "Naturen påverkar var man bor genom att ...",
    "Precis som i Sverige ser man att människor har valt att bo nära ..."
  ]
}
];