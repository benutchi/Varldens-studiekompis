const HELP_DATA = [
{
  patterns: [
    "Fråga: Hur påverkar klimatet hur människor lever i landet jämfört med i Sverige?"
  ],
  meaning: "Du ska ge en sammanfattning av hur vädret och temperaturen styr människors liv och vardag i det valda landet.",
  concepts: [
    "Klimat: Hur vädret brukar vara på en plats under en väldigt lång tid (ofta 30 år eller mer)."
  ],
  next: [
    "Tänk först på om landet är mycket varmare eller kallare än Sverige.",
    "Fundera på om de har samma årstider som vi har.",
    "Sök efter: 'Klimat och livsstil i [Landets namn]'."
  ],
  start: [
    "Klimatet i landet gör att människors liv skiljer sig från Sverige genom att...",
    "Eftersom vädret ofta är... så påverkar det hur man lever på så sätt att..."
  ]
}

{
  patterns: [
    "Vilken klimatzon ligger landet i?"
  ],
  meaning: "Du ska peka ut vilken av jordens stora klimatfamiljer som landet tillhör.",
  concepts: [
    "Klimatzon: Ett stort område på jorden med liknande temperatur och nederbörd. De fyra zonerna är tropisk, subtropisk, tempererad och polarzon."
  ],
  next: [
    "Sök: '[Landets namn] klimatzon'.",
    "Titta på en världskarta: Ligger landet nära mitten (Ekvatorn) eller långt uppe vid Nordpolen?",
    "Kolla om landet är så stort att det har flera olika klimatzoner."
  ],
  start: [
    "Landet ligger i den... klimatzonen.",
    "Det här landet tillhör den... zonen eftersom..."
  ]
}

{
  patterns: [
    "Förklara varför: Beror klimatet på läget på jorden, närhet till hav eller något annat?"
  ],
  meaning: "Du ska förklara orsakerna till att landet har just det klimat det har.",
  concepts: [
    "Läge på jorden: Hur nära Ekvatorn landet ligger. Ju närmare Ekvatorn, desto varmare.",
    "Närhet till hav: Havet gör ofta att temperaturen blir jämnare och att det regnar mer.",
    "Höjd över havet: Ju högre upp man kommer (t.ex. i berg), desto kallare blir det."
  ],
  next: [
    "Titta på en karta: Ligger landet vid kusten eller mitt inne i en världsdel?",
    "Kolla om det finns höga bergskedjor i landet.",
    "Sök: 'Varför är det [varmt/kallt/torrt] i [Landets namn]?'."
  ],
  start: [
    "Landets klimat beror främst på att...",
    "En viktig anledning till att det regnar/är varmt är närheten till..."
  ]
}

{
  patterns: [
    "Hur påverkar vädret människors vardag (bostäder, mat och kläder)?"
  ],
  meaning: "Du ska ge konkreta exempel på hur människor har anpassat sina liv efter klimatet.",
  concepts: [
    "Anpassning: Att ändra hur man gör saker (t.ex. hur man bygger hus) för att det ska passa naturen och vädret runt omkring."
  ],
  next: [
    "Sök: 'Traditionella hus i [Landets namn]'. Har de platta tak, spetsiga tak eller står de på stolpar?",
    "Sök: 'Vad äter man i [Landets namn]'. Odlar de mat som behöver mycket sol och vatten?",
    "Titta på bilder av människor i landet: Vilka typer av kläder har de på sig?"
  ],
  start: [
    "Vädret märks tydligt i människors vardag, till exempel genom att husen är byggda för att...",
    "Eftersom det ofta är... äter man mycket... som växer bra i det klimatet."
  ]
}

{
  patterns: [
    "Vilka är de största skillnaderna mot det svenska klimatet?"
  ],
  meaning: "Här ska du använda det du vet om Sveriges väder och jämföra det direkt med ditt land.",
  concepts: [
    "Jämförelse: Att titta på två saker och se vad som är olika och vad som är likt."
  ],
  next: [
    "Tänk på Sveriges fyra årstider: Har ditt land också det, eller är det likadant året om?",
    "Jämför temperaturen: Hur kallt är det i Sverige på vintern jämfört med i ditt land?",
    "Tänk på ljuset: Är det mörkt på vintern i ditt land som det är i Sverige?"
  ],
  start: [
    "Den största skillnaden mot det svenska klimatet är att...",
    "Medan vi i Sverige har fyra tydliga årstider, så har man i [Landets namn] istället..."
  ]
}
];