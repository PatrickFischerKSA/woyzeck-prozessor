const scenes = [
  {
    id: 1,
    title: "Freies Feld",
    place: "Vor der Stadt",
    phase: "Auftakt",
    figures: ["Woyzeck", "Andres"],
    summary: "Woyzeck und Andres schneiden Stöcke. Andres singt, Woyzeck hört Stimmen, sieht Zeichen im Boden und fühlt sich von einer unheimlichen Natur bedroht.",
    function: "Exposition von Woyzecks psychischer Überreizung und sozialer Dienstbarkeit.",
    stage: "Karges Außenbild, Geräusche aus der Ferne, abrupter Wechsel zwischen Alltag und Wahn.",
    motifs: ["Wahn", "Natur", "Armut", "Militär"]
  },
  {
    id: 2,
    title: "Die Stadt",
    place: "Marie's Fenster",
    phase: "Begehren",
    figures: ["Marie", "Kind", "Margreth", "Tambourmajor", "Woyzeck"],
    summary: "Marie beobachtet den Zapfenstreich und den Tambourmajor. Margreth verspottet sie, Woyzeck erscheint kurz und berichtet verstört vom Feld.",
    function: "Marie wird als begehrende, beobachtete und sozial kontrollierte Figur eingeführt.",
    stage: "Fenster als Grenze zwischen Innenraum, Straße und öffentlichem Blick.",
    motifs: ["Begehren", "Kontrolle", "Militär", "Familie"]
  },
  {
    id: 3,
    title: "Buden. Lichter. Volk",
    place: "Jahrmarkt",
    phase: "Schaustellung",
    figures: ["Woyzeck", "Marie", "Kind", "Marktschreier", "Volk"],
    summary: "Auf dem Jahrmarkt werden Mensch und Tier als Kuriositäten vorgeführt. Marie lässt sich vom Glanz und vom Blick des Tambourmajors anziehen.",
    function: "Die Welt erscheint als Schauplatz von Vorführung, Trieb, Dressur und sozialer Entwürdigung.",
    stage: "Licht, Lärm, Gedränge und Nummerncharakter; die Szene darf überreizt wirken.",
    motifs: ["Schaustellung", "Tier-Mensch", "Begehren", "Volk"]
  },
  {
    id: 4,
    title: "Kammer I",
    place: "Maries Zimmer",
    phase: "Schuld",
    figures: ["Marie", "Kind", "Woyzeck"],
    summary: "Marie betrachtet Ohrringe, die vermutlich vom Tambourmajor stammen. Woyzeck bemerkt sie, gibt Geld ab und geht; Marie bleibt beschämt zurück.",
    function: "Materielle Not, weibliches Begehren und moralischer Druck werden in einem engen Innenraum verdichtet.",
    stage: "Spiegel, Schmuck und Kind bilden ein klares Dreieck aus Wunsch, Schuld und Alltag.",
    motifs: ["Armut", "Schuld", "Körper", "Familie"]
  },
  {
    id: 5,
    title: "Der Hauptmann. Woyzeck",
    place: "Beim Hauptmann",
    phase: "Demütigung",
    figures: ["Hauptmann", "Woyzeck"],
    summary: "Woyzeck rasiert den Hauptmann. Dieser moralisiert, verspottet Woyzecks uneheliches Kind und genießt seine sprachliche Überlegenheit.",
    function: "Klassengegensatz und bürgerliche Moral werden als Gewaltform sichtbar.",
    stage: "Rasiermesser nahe am Gesicht: äußerlich Dienstleistung, innerlich Bedrohung.",
    motifs: ["Armut", "Moral", "Macht", "Körper"]
  },
  {
    id: 6,
    title: "Kammer II",
    place: "Maries Zimmer",
    phase: "Verführung",
    figures: ["Marie", "Tambourmajor"],
    summary: "Der Tambourmajor tritt zu Marie. Seine Körperlichkeit, Uniform und Grobheit verführen und bedrängen sie zugleich.",
    function: "Das erotische Gegengewicht zu Woyzecks Armut wird körperlich zugespitzt.",
    stage: "Enge Kammer, große Uniformfigur; Nähe soll zugleich attraktiv und aggressiv wirken.",
    motifs: ["Begehren", "Körper", "Gewalt", "Militär"]
  },
  {
    id: 7,
    title: "Auf der Gasse",
    place: "Straße",
    phase: "Verdacht",
    figures: ["Marie", "Woyzeck"],
    summary: "Woyzeck stellt Marie wegen ihrer Untreue zur Rede. Marie weicht aus, provoziert ihn aber auch mit Trotz.",
    function: "Der private Konflikt kippt in Misstrauen, Kränkung und Besitzdenken.",
    stage: "Kurzer harter Schlagabtausch, am besten fast ohne psychologische Auspolsterung.",
    motifs: ["Eifersucht", "Schuld", "Sprache", "Gewalt"]
  },
  {
    id: 8,
    title: "Beim Doktor",
    place: "Studierzimmer / Praxis",
    phase: "Experiment",
    figures: ["Doktor", "Woyzeck"],
    summary: "Der Doktor untersucht Woyzeck als Versuchsperson. Ernährung, Körperfunktionen und Symptome werden zum wissenschaftlichen Spektakel.",
    function: "Wissenschaft erscheint als entmenschlichende Macht über den armen Körper.",
    stage: "Kalte Komik: Fachsprache gegen Woyzecks ausgelaugten Körper.",
    motifs: ["Wissenschaft", "Körper", "Armut", "Macht"]
  },
  {
    id: 9,
    title: "Straße I",
    place: "Straße",
    phase: "Gerücht",
    figures: ["Hauptmann", "Doktor", "Woyzeck"],
    summary: "Hauptmann und Doktor reden über Woyzeck, dann deuten sie ihm Maries Verhältnis zum Tambourmajor an.",
    function: "Die Autoritäten treiben Woyzecks Eifersucht aus Spott und Experimentierlust weiter an.",
    stage: "Zwei Herren kreisen um Woyzeck; der Körper des Untergebenen wird zur Spielfläche.",
    motifs: ["Macht", "Eifersucht", "Wissenschaft", "Moral"]
  },
  {
    id: 10,
    title: "Die Wachstube",
    place: "Kaserne",
    phase: "Unruhe",
    figures: ["Woyzeck", "Andres", "Soldaten"],
    summary: "Woyzeck findet keine Ruhe. Militärischer Alltag, Lieder und Kameraden verdecken seine innere Zuspitzung nur oberflächlich.",
    function: "Die Institution Militär bietet keine Hilfe, sondern verstärkt Gleichförmigkeit und Druck.",
    stage: "Bett, Waffen, Stimmen; Woyzeck wirkt mitten unter Leuten isoliert.",
    motifs: ["Militär", "Wahn", "Isolation", "Körper"]
  },
  {
    id: 11,
    title: "Das Wirtshaus I",
    place: "Tanzlokal",
    phase: "Kränkung",
    figures: ["Marie", "Tambourmajor", "Woyzeck", "Andres", "Volk"],
    summary: "Marie tanzt mit dem Tambourmajor. Woyzeck sieht die öffentliche Bestätigung seines Verdachts.",
    function: "Die Untreue wird aus Woyzecks Sicht zur sozialen Demütigung vor Publikum.",
    stage: "Musik und Tanz sollten nicht schmücken, sondern Woyzecks Wahrnehmung übersteuern.",
    motifs: ["Eifersucht", "Begehren", "Volk", "Körper"]
  },
  {
    id: 12,
    title: "Freies Feld",
    place: "Draußen",
    phase: "Stimmen",
    figures: ["Woyzeck"],
    summary: "Allein draußen hört Woyzeck Stimmen und imperativische Zeichen. Die Welt scheint ihm Mord zuzuflüstern.",
    function: "Wahn und Tatimpuls verbinden sich; die Außenwelt wird zum inneren Befehl.",
    stage: "Weite Bühne, aber enger Kopf: Geräusche wichtiger als Dekor.",
    motifs: ["Wahn", "Natur", "Gewalt", "Isolation"]
  },
  {
    id: 13,
    title: "Nacht",
    place: "Schlafraum",
    phase: "Schlaflosigkeit",
    figures: ["Woyzeck", "Andres"],
    summary: "Woyzeck liegt neben Andres und findet keinen Schlaf. Andres versteht seine Angst nicht und bleibt im Alltäglichen.",
    function: "Woyzecks Isolation wird selbst in körperlicher Nähe zu Andres sichtbar.",
    stage: "Dunkelheit, zwei Körper, eine völlig verschiedene Wahrnehmung der Nacht.",
    motifs: ["Wahn", "Isolation", "Freundschaft", "Körper"]
  },
  {
    id: 14,
    title: "Das Wirtshaus II",
    place: "Wirtshaus",
    phase: "Niederlage",
    figures: ["Woyzeck", "Tambourmajor", "Leute"],
    summary: "Der Tambourmajor prahlt und schlägt Woyzeck nieder. Körperliche Überlegenheit ersetzt jedes Gespräch.",
    function: "Woyzecks soziale und erotische Niederlage wird brutal körperlich besiegelt.",
    stage: "Kurzer Kampf, viel Publikum; Demütigung muss öffentlich spürbar sein.",
    motifs: ["Gewalt", "Körper", "Militär", "Eifersucht"]
  },
  {
    id: 15,
    title: "Kramladen",
    place: "Beim Händler",
    phase: "Tatwerkzeug",
    figures: ["Woyzeck", "Krämer / Jude"],
    summary: "Woyzeck kauft ein Messer. Das Geschäft ist knapp, sachlich und erschreckend alltäglich.",
    function: "Der Mordplan erhält eine konkrete, käufliche Form.",
    stage: "Keine große Musik: Gerade die Nüchternheit macht die Szene hart.",
    motifs: ["Gewalt", "Armut", "Ding", "Entschluss"]
  },
  {
    id: 16,
    title: "Kammer III",
    place: "Maries Zimmer",
    phase: "Gewissen",
    figures: ["Marie", "Kind", "Narr / Idiot"],
    summary: "Marie liest in der Bibel und ringt mit Schuld. Das Kind und der Narr rahmen ihre Angst vor moralischem Urteil.",
    function: "Marie bekommt eine eigene Gewissensszene, nicht nur die Rolle des Auslösers.",
    stage: "Leise Szene: Bibel, Kind und Störung von außen dürfen fragil bleiben.",
    motifs: ["Schuld", "Religion", "Familie", "Sprache"]
  },
  {
    id: 17,
    title: "Kaserne",
    place: "Kaserne",
    phase: "Abschied",
    figures: ["Woyzeck", "Andres"],
    summary: "Woyzeck verteilt Besitz und deutet seinen Entschluss an. Andres bleibt ahnungslos oder will nicht verstehen.",
    function: "Vorbereitung auf die Tat: Woyzeck ordnet die Reste seines Lebens.",
    stage: "Inventar des Armen: wenige Dinge, große Endgültigkeit.",
    motifs: ["Armut", "Entschluss", "Freundschaft", "Isolation"]
  },
  {
    id: 18,
    title: "Der Hof des Doktors",
    place: "Hof / Vorlesung",
    phase: "Vorführung",
    figures: ["Doktor", "Studenten", "Woyzeck"],
    summary: "Der Doktor führt Woyzeck vor Studenten vor. Woyzeck wird endgültig zum Objekt einer kalten Wissenschaft.",
    function: "Die Experimentlogik wird öffentlich und akademisch legitimiert.",
    stage: "Wie eine Unterrichtsdemonstration; Woyzeck steht als lebendes Präparat im Zentrum.",
    motifs: ["Wissenschaft", "Schaustellung", "Körper", "Macht"]
  },
  {
    id: 19,
    title: "Marie vor der Haustür",
    place: "Haustür",
    phase: "Alltag",
    figures: ["Marie", "Mädchen", "Großmutter", "Kind"],
    summary: "Marie sitzt mit Mädchen und Kindern vor der Tür. Die Großmutter erzählt ein düsteres Märchen von einem verlassenen Kind.",
    function: "Volkswelt, Kinderblick und Märchen verdichten die Ausweglosigkeit in poetischer Form.",
    stage: "Das Märchen sollte einfach erzählt werden; seine Kälte erledigt die Wirkung.",
    motifs: ["Märchen", "Familie", "Armut", "Vorzeichen"]
  },
  {
    id: 20,
    title: "Abend. Die Stadt in der Ferne",
    place: "Vor der Stadt",
    phase: "Mord",
    figures: ["Woyzeck", "Marie"],
    summary: "Woyzeck führt Marie hinaus. In der Abendstimmung tötet er sie mit dem Messer.",
    function: "Kulminationspunkt: soziale, psychische und erotische Gewalt entlädt sich in der Tat.",
    stage: "Nicht naturalistisch auswalzen; Distanz, Dämmerung und Stille können stärker sein.",
    motifs: ["Gewalt", "Eifersucht", "Natur", "Tod"]
  },
  {
    id: 21,
    title: "Es kommen Leute",
    place: "Nähe des Tatorts",
    phase: "Nachhall",
    figures: ["Leute", "Woyzeck"],
    summary: "Menschen hören oder ahnen etwas. Woyzeck versucht, sich aus der Situation zu lösen.",
    function: "Der Mord wird sozial wahrnehmbar; die Tat tritt aus der Zweierbeziehung heraus.",
    stage: "Stimmen und Annäherung statt eindeutiger Aufklärung.",
    motifs: ["Volk", "Gerücht", "Gewalt", "Flucht"]
  },
  {
    id: 22,
    title: "Das Wirtshaus III",
    place: "Wirtshaus",
    phase: "Blutspur",
    figures: ["Woyzeck", "Käthe", "Leute"],
    summary: "Woyzeck sucht im Wirtshaus Ablenkung. Blutspuren fallen auf; sein Versuch, normal zu wirken, misslingt.",
    function: "Die Tat kehrt als sichtbares Zeichen an Woyzecks Körper zurück.",
    stage: "Tanz und Verdacht nebeneinander; Blut als kleines, unübersehbares Detail.",
    motifs: ["Schuld", "Körper", "Volk", "Flucht"]
  },
  {
    id: 23,
    title: "Abend. Die Stadt in der Ferne",
    place: "Tatort",
    phase: "Rückkehr",
    figures: ["Woyzeck"],
    summary: "Woyzeck kehrt zum Tatort zurück und sucht nach dem Messer. Der Ort bindet ihn an die Tat.",
    function: "Schuld und Beweislogik verschränken sich; Woyzeck kann nicht entkommen.",
    stage: "Wiederholung des Außenraums, jetzt als innere Falle.",
    motifs: ["Schuld", "Ding", "Natur", "Wahn"]
  },
  {
    id: 24,
    title: "Woyzeck an einem Teich",
    place: "Teich",
    phase: "Tilgung",
    figures: ["Woyzeck"],
    summary: "Woyzeck wirft das Messer ins Wasser und versucht Spuren zu beseitigen. Die Szene bleibt offen zwischen Panik, Reinigung und Untergang.",
    function: "Der Versuch der Auslöschung macht die Schuld erst recht präsent.",
    stage: "Wasser als dunkler Gegenraum: Spiegel, Reinigung, Verschlucken.",
    motifs: ["Wasser", "Schuld", "Tod", "Ding"]
  },
  {
    id: 25,
    title: "Straße II",
    place: "Straße",
    phase: "Fund",
    figures: ["Kinder", "Leute"],
    summary: "Kinder oder Leute erfahren vom Fund der Leiche. Das Ereignis wird zur Nachricht im öffentlichen Raum.",
    function: "Die Tragödie wird alltägliches Stadtgespräch; der soziale Kreislauf läuft weiter.",
    stage: "Rasch, beinahe beiläufig; gerade das macht die Kälte des Schlusses aus.",
    motifs: ["Volk", "Kindheit", "Gerücht", "Tod"]
  },
  {
    id: 26,
    title: "Gerichtsmediziner. Arzt. Richter",
    place: "Gericht / Anatomie",
    phase: "Befund",
    figures: ["Gerichtsmediziner", "Arzt", "Richter", "Barbier"],
    summary: "Autoritäten betrachten den Mord als Fall, Befund und Besonderheit. Marie wird zum Objekt einer nachträglichen Untersuchung.",
    function: "Nach der Gewalt folgt institutionelle Verwertung: Sprache der Akten ersetzt menschliche Trauer.",
    stage: "Trocken, sachlich, fast grotesk; keine Erlösung durch Ordnung.",
    motifs: ["Wissenschaft", "Justiz", "Körper", "Macht"]
  },
  {
    id: 27,
    title: "Der Idiot. Das Kind. Woyzeck",
    place: "Straße / bei Kindern",
    phase: "Rest",
    figures: ["Kind", "Narr / Idiot", "Woyzeck"],
    summary: "Das Kind bleibt zurück. Der Narr spricht mit ihm, Woyzeck nähert sich, doch das Kind wendet sich ab.",
    function: "Der Schluss zeigt nicht Lösung, sondern Verlust, soziale Verlassenheit und zerstörte Zukunft.",
    stage: "Sehr einfach halten: Ein Kind, eine Abwendung, kein Trost.",
    motifs: ["Familie", "Kindheit", "Isolation", "Tod"]
  }
];

const cardGrid = document.querySelector("#cardGrid");
const template = document.querySelector("#sceneCardTemplate");
const searchInput = document.querySelector("#searchInput");
const motifFilter = document.querySelector("#motifFilter");
const figureFilter = document.querySelector("#figureFilter");
const visibleCount = document.querySelector("#visibleCount");
const buildList = document.querySelector("#buildList");
const buildCount = document.querySelector("#buildCount");
const floatingBuildCount = document.querySelector("#floatingBuildCount");
const processorDialog = document.querySelector("#processorDialog");
const openProcessorBtn = document.querySelector("#openProcessorBtn");
const closeProcessorBtn = document.querySelector("#closeProcessorBtn");
const notesInput = document.querySelector("#notesInput");
const modeSelect = document.querySelector("#modeSelect");
const firstSceneSelect = document.querySelector("#firstSceneSelect");
const lastSceneSelect = document.querySelector("#lastSceneSelect");
const pinDetails = document.querySelector("#pinDetails");
const pinGrid = document.querySelector("#pinGrid");
const plotOutput = document.querySelector("#plotOutput");
const interpretationOutput = document.querySelector("#interpretationOutput");
const murderOutput = document.querySelector("#murderOutput");
const stepDirectionSelect = document.querySelector("#stepDirectionSelect");
const stepStartSelect = document.querySelector("#stepStartSelect");
const stepStartLabel = document.querySelector("#stepStartLabel");
const nextStepSelect = document.querySelector("#nextStepSelect");
const nextStepLabel = document.querySelector("#nextStepLabel");
const stepProgress = document.querySelector("#stepProgress");
const stepStoryOutput = document.querySelector("#stepStoryOutput");
const characterSelect = document.querySelector("#characterSelect");
const questionSelect = document.querySelector("#questionSelect");
const customQuestionInput = document.querySelector("#customQuestionInput");
const interviewOutput = document.querySelector("#interviewOutput");
const listenBtn = document.querySelector("#listenBtn");
const speakAnswerBtn = document.querySelector("#speakAnswerBtn");
const stopSpeechBtn = document.querySelector("#stopSpeechBtn");
const speechStatus = document.querySelector("#speechStatus");

let build = JSON.parse(localStorage.getItem("woyzeckBuild") || "[]");
notesInput.value = localStorage.getItem("woyzeckNotes") || "";
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;

const interviewCharacters = [
  "Franz Woyzeck",
  "Marie",
  "Tambourmajor",
  "Doktor",
  "Hauptmann",
  "Andres",
  "Margreth",
  "Narr",
  "Jude",
  "Wirt"
];

const characterAliases = {
  "Franz Woyzeck": ["Woyzeck"],
  Marie: ["Marie"],
  Tambourmajor: ["Tambourmajor"],
  Doktor: ["Doktor"],
  Hauptmann: ["Hauptmann"],
  Andres: ["Andres"],
  Margreth: ["Margreth"],
  Narr: ["Narr / Idiot"],
  Jude: ["Krämer / Jude"],
  Wirt: ["Wirtshaus", "Leute", "Volk"]
};

const characterVoices = {
  "Franz Woyzeck": {
    stand: "Ich bin durch die Szenen getrieben, mehr als dass ich sie beherrsche.",
    want: "Ich will Ruhe, Geld für Marie und das Kind, und dass die Stimmen endlich schweigen.",
    fear: "Ich fürchte, dass alle über mich verfügen: die Herren, der Doktor, das Militär, sogar mein eigener Kopf.",
    murder: "Ich erkläre nichts sauber. Was geschieht, kommt aus Kränkung, Wahn, Armut und aus einer Welt, die mich vorher schon zerlegt hat.",
    relations: "Zu Marie zieht mich Sorge, Liebe und Besitzangst; Andres bleibt nah und doch fern; Hauptmann und Doktor stehen über mir und drücken mich klein.",
    woyzeck: "Ich bin nicht Herr meiner Lage. Ich bin Soldat, Vater, Versuchskörper und einer, der dauernd beweisen soll, dass er noch Mensch ist.",
    marie: "Marie ist Nähe, Zuhause und Schmerz. Gerade weil sie mir so viel bedeutet, wird jeder Blick auf sie zu einer Bedrohung.",
    tambourmajor: "Der Tambourmajor ist das Gegenbild zu mir: Körper, Glanz, Uniform, Kraft. An ihm sehe ich, was mir fehlt und was mich beschämt.",
    doctorCaptain: "Doktor und Hauptmann reden verschieden, aber beide machen mich zum Objekt: der eine moralisch, der andere wissenschaftlich.",
    living: "Meine Lebensumstände lassen kaum Luft. Arbeit, Dienst, Experiment und Armut machen aus jedem Gefühl Druck.",
    poverty: "Armut ist nicht Hintergrund, sie ist täglicher Zwang. Sie bestimmt, was ich esse, was ich ertrage und wie wenig ich widersprechen kann.",
    love: "Liebe ist für mich nicht frei. Sie ist verwickelt mit Angst, Versorgung, Scham und dem Wunsch, endlich nicht allein zu sein.",
    jealousy: "Eifersucht macht aus Angst Gewissheit. Sie verengt meinen Blick, bis ich nur noch Zeichen gegen mich sehe.",
    power: "Macht haben die, die Zeit, Geld, Sprache, Rang und Körperkraft besitzen. Ich habe vor allem Gehorsam gelernt.",
    guilt: "Schuld liegt bei mir, aber nicht nur bei mir. Das Stück zeigt, wie viele Hände vorher Druck aufbauen.",
    body: "Mein Körper gehört mir kaum: Er dient, hungert, wird beobachtet und am Ende wird er zur Maschine der Gewalt.",
    society: "Die Gesellschaft sieht mich von oben, als Fall, Knecht, Sünder oder Sonderling. Selten sieht sie einen Menschen."
  },
  Marie: {
    stand: "Ich stehe zwischen Kind, Armut, Blicken von außen und einem Begehren, das mir kurz ein anderes Leben verspricht.",
    want: "Ich will nicht nur Elend und Pflicht sein. Ich will gesehen werden, ohne gleich verurteilt zu werden.",
    fear: "Ich fürchte die Schande, Woyzecks Blick, die Nachbarinnen und mein eigenes Gewissen.",
    murder: "Die Gewalt trifft mich, aber sie beginnt nicht erst mit dem Messer. Sie wächst aus Besitzdenken, Not, Demütigung und einer Ordnung, in der ich kaum frei handeln kann.",
    relations: "Zu Woyzeck bin ich gebunden durch Kind, Alltag und Sorge. Der Tambourmajor reizt mich, Margreth beobachtet mich, die Stadt urteilt über mich.",
    woyzeck: "Woyzeck ist mir nah, aber seine Nähe wird schwer. Er bringt Geld und Sorge, zugleich Angst, Kontrolle und Verstörung.",
    marie: "Ich bin nicht nur die Schuldige. Ich bin Mutter, Geliebte, Arme, Begehrende und eine Frau, die ständig angesehen und bewertet wird.",
    tambourmajor: "Der Tambourmajor verspricht Glanz und Körperkraft. Aber sein Begehren bleibt grob und macht mich nicht wirklich frei.",
    doctorCaptain: "Doktor und Hauptmann gehören zur Welt der Männer, die über andere sprechen. Auch wenn sie nicht immer direkt bei mir sind, prägt ihre Ordnung mein Leben.",
    living: "Meine Lebensumstände sind eng: Kind, Zimmer, Nachbarschaft, wenig Geld. Jeder Wunsch wird sofort moralisch verdächtig.",
    poverty: "Armut macht Schmuck, Blick und Begehren gefährlich. Was reich wirkt, wird bei mir sofort zur Schuldfrage.",
    love: "Liebe ist bei mir gemischt: Zärtlichkeit, Sehnsucht, Körper, Gewissen und Angst vor dem Urteil.",
    jealousy: "Eifersucht kommt von außen auf mich zu. Sie macht aus meinem Begehren einen Beweis gegen mich.",
    power: "Macht haben die, die mich ansehen, beurteilen oder besitzen wollen. Ich habe nur kurze Momente der Selbstbehauptung.",
    guilt: "Ich spüre Schuld, aber die Schuld ist nicht einfach. Mein Wunsch nach Leben entsteht in einer Lage, die mich kaum schützt.",
    body: "Mein Körper ist begehrt, kontrolliert und verurteilt. An ihm entscheidet die Umwelt über meine Moral.",
    society: "Die Gesellschaft sieht mich schnell als gefallene Frau. Sie sieht weniger meine Armut und mein Ausgeliefertsein."
  },
  Tambourmajor: {
    stand: "Ich trete auf, wo Körper, Uniform und öffentliches Begehren zählen.",
    want: "Ich will glänzen, gewinnen, besitzen, stärker sein.",
    fear: "Ich fürchte wenig; genau das macht mich gefährlich und stumpf.",
    murder: "Ich würde die Schuld von mir weisen. Aber meine Prahlerei und Gewalt verschieben die Kräfte im Stück deutlich.",
    relations: "Marie ist für mich Begehren und Triumph; Woyzeck ist der Unterlegene, an dem ich Stärke zeigen kann.",
    woyzeck: "Woyzeck wirkt auf mich wie einer, den man verdrängen kann. Gerade darin liegt meine Brutalität.",
    marie: "Marie zieht mich an, aber ich sehe sie kaum als freie Person. Ich sehe Körper, Reiz und Besitz.",
    tambourmajor: "Ich bin Auftritt: Uniform, Kraft, Lärm und Selbstgewissheit.",
    doctorCaptain: "Doktor und Hauptmann stehen für andere Formen von Macht. Meine Macht ist direkter: Körper und Rang.",
    living: "Meine Lebensumstände geben mir Bühne und Status. Die Uniform arbeitet für mich.",
    poverty: "Armut sehe ich vor allem bei den anderen. Sie macht Woyzeck klein und mich im Vergleich größer.",
    love: "Liebe nenne ich eher Begehren. Tiefe Verantwortung passt nicht zu meinem Auftreten.",
    jealousy: "Eifersucht interessiert mich, solange sie meinen Sieg bestätigt.",
    power: "Macht ist Körper, Uniform, Lautstärke und öffentliche Wirkung.",
    guilt: "Schuld weise ich ab. Doch mein Verhalten verschärft Demütigung und Gewalt.",
    body: "Mein Körper ist mein Kapital. Ich setze ihn ein wie eine Waffe.",
    society: "Die Gesellschaft bewundert Kraft schneller, als sie fragt, was diese Kraft anrichtet."
  },
  Doktor: {
    stand: "Ich sehe einen interessanten Fall, Symptome, Versuchsanordnung, Material.",
    want: "Ich will Erkenntnis, Ruhm und ein sauberes Experiment.",
    fear: "Ich fürchte vor allem Unordnung in meiner Beobachtung.",
    murder: "Der Mord erscheint mir als Befund. Gerade diese Kälte zeigt, wie sehr Wissenschaft hier Menschlichkeit verlieren kann.",
    relations: "Zu Woyzeck stehe ich als Beobachter und Experimentator. Die anderen Figuren sind für mich eher Kontext als Gegenüber.",
    woyzeck: "Woyzeck ist mein Fall. Dass er Mensch ist, verschwindet gefährlich leicht hinter dem Experiment.",
    marie: "Marie interessiert mich vor allem, wenn sie Woyzecks Symptome und Affekte erklärt. Das ist bereits eine Verengung.",
    tambourmajor: "Der Tambourmajor ist rohe Körperkraft; wissenschaftlich reizt mich eher Woyzecks Abweichung.",
    doctorCaptain: "Der Hauptmann moralisiert, ich analysiere. Beide Formen können Woyzeck klein machen.",
    living: "Meine Lebensumstände sind privilegiert: Ich kann beobachten, statt beobachtet zu werden.",
    poverty: "Armut liefert Versuchspersonen. Das ist der Skandal, den meine Sprache verdeckt.",
    love: "Liebe ist für mich kein Forschungsbegriff, und genau deshalb unterschätze ich ihre Wirkung.",
    jealousy: "Eifersucht wäre ein Symptomkomplex. Als Mensch müsste man anders darüber sprechen.",
    power: "Macht heißt hier: benennen, messen, klassifizieren und über den Körper eines anderen verfügen.",
    guilt: "Meine Schuld liegt in der Kälte des Blicks. Ich sehe Erkenntnis, wo ich Verantwortung sehen müsste.",
    body: "Der Körper ist mein Untersuchungsfeld. Aber im Stück wird sichtbar, wie gewaltsam dieser Blick sein kann.",
    society: "Die Gesellschaft nennt meine Kälte Bildung und Fortschritt. Das macht sie nicht unschuldig."
  },
  Hauptmann: {
    stand: "Ich rede von Tugend, Langsamkeit und Moral, während andere für mich arbeiten.",
    want: "Ich will überlegen bleiben und meine Ordnung bestätigt sehen.",
    fear: "Ich fürchte Unruhe, Hast und alles, was meine moralische Bequemlichkeit stört.",
    murder: "Ich moralisiere die Tat, aber meine Demütigungen gehören zum Druck, der vorher aufgebaut wird.",
    relations: "Zu Woyzeck spreche ich von oben herab; mit dem Doktor teile ich die Lust, andere zu beurteilen.",
    woyzeck: "Woyzeck ist für mich einer, an dem ich Moral demonstrieren kann. Ich übersehe dabei seine Not.",
    marie: "Marie erscheint mir durch die Brille der Moral. Ihre Lage interessiert mich weniger als ihr vermeintlicher Fehltritt.",
    tambourmajor: "Der Tambourmajor ist mir zu körperlich und laut, aber seine Rangordnung gehört zur gleichen Welt.",
    doctorCaptain: "Der Doktor ist mir unheimlich und doch verwandt: Auch er erhebt sich über Woyzeck.",
    living: "Meine Lebensumstände erlauben Langsamkeit und Moralreden. Das ist ein Luxus.",
    poverty: "Armut verwandle ich in eine Tugendfrage. Damit mache ich es mir bequem.",
    love: "Liebe beurteile ich schnell moralisch, ohne ihre Notlage zu verstehen.",
    jealousy: "Eifersucht gilt mir als Unordnung der unteren Leute. Ich sehe nicht, wie meine Worte sie nähren.",
    power: "Macht ist Rang, Sprache, Zeit und die Freiheit, andere zu beschämen.",
    guilt: "Meine Schuld liegt im Spott, der sich als Moral verkleidet.",
    body: "Der Körper des anderen bedient mich. Selbst beim Rasieren bleibe ich der Herr.",
    society: "Die Gesellschaft schützt Leute wie mich, weil unsere Gewalt höflich klingt."
  },
  Andres: {
    stand: "Ich stehe neben Woyzeck und verstehe oft nur den Alltag, nicht den Abgrund.",
    want: "Ich will weiterkommen, schlafen, dienen, überstehen.",
    fear: "Ich fürchte, dass Woyzecks Unruhe ansteckend wird und ich sie nicht fassen kann.",
    murder: "Ich bin kein Täter, aber mein Nicht-Verstehen zeigt, wie allein Woyzeck bleibt."
  },
  Margreth: {
    stand: "Ich sehe, was auf der Straße sichtbar wird, und spreche aus, was die Nachbarschaft denkt.",
    want: "Ich will Abstand halten und doch alles kommentieren.",
    fear: "Ich fürchte Schande, aber auch, selbst zur Zielscheibe zu werden.",
    murder: "Die Gewalt fällt nicht aus dem Himmel. Vorher gibt es Blicke, Gerede und soziale Kontrolle."
  },
  Narr: {
    stand: "Ich sage schief, was die Vernünftigen nicht hören wollen.",
    want: "Ich will spielen, stören, aussprechen, was in der Luft liegt.",
    fear: "Ich fürchte nichts geradeheraus; meine Wahrheit kommt krumm.",
    murder: "Die Gewalt ist für mich ein bitteres Spiel der Erwachsenen. Das Kind bleibt übrig."
  },
  Jude: {
    stand: "Ich bin im Moment des Kaufs wichtig: Dinge wechseln den Besitzer, und ein Messer bekommt Richtung.",
    want: "Ich will handeln, verkaufen, überleben.",
    fear: "Ich fürchte, in der Welt der anderen nur als Funktion und Vorurteil aufzutauchen.",
    murder: "Ich mache die Tat nicht, aber der Kauf macht den Entschluss materiell."
  },
  Wirt: {
    stand: "In meinem Raum wird Öffentlichkeit hergestellt: Tanz, Lärm, Alkohol, Blick und Verdacht.",
    want: "Ich will Betrieb und Ordnung genug, damit der Betrieb weitergeht.",
    fear: "Ich fürchte, dass aus Unterhaltung plötzlich Blut und Verantwortung werden.",
    murder: "Das Wirtshaus erklärt den Mord nicht allein, aber es macht Kränkung und Blutspur öffentlich."
  }
};

function uniqueSorted(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, "de"));
}

function populateFilters() {
  uniqueSorted(scenes.flatMap((scene) => scene.motifs)).forEach((motif) => {
    motifFilter.append(new Option(motif, motif));
  });
  uniqueSorted(scenes.flatMap((scene) => scene.figures)).forEach((figure) => {
    figureFilter.append(new Option(figure, figure));
  });
}

function sceneOption(scene) {
  return new Option(`${scene.id}. ${scene.title}`, scene.id);
}

function populateCombiner() {
  firstSceneSelect.append(new Option("Zufällig", "random"));
  lastSceneSelect.append(new Option("Zufällig", "random"));
  scenes.forEach((scene) => {
    firstSceneSelect.append(sceneOption(scene));
    lastSceneSelect.append(sceneOption(scene));
  });

  scenes.forEach((_, index) => {
    const slot = document.createElement("label");
    slot.className = "pin-slot";
    const select = document.createElement("select");
    select.dataset.position = index;
    select.append(new Option("offen", "open"));
    scenes.forEach((scene) => select.append(sceneOption(scene)));
    select.addEventListener("change", enforceUniquePins);
    slot.append(Object.assign(document.createElement("b"), { textContent: index + 1 }), select);
    pinGrid.append(slot);
  });
}

function populateStepGame() {
  scenes.forEach((scene) => {
    stepStartSelect.append(sceneOption(scene));
  });
  updateNextStepOptions();
}

function populateInterviews() {
  interviewCharacters.forEach((character) => {
    characterSelect.append(new Option(character, character));
  });
}

function sceneMatches(scene) {
  const query = searchInput.value.trim().toLowerCase();
  const haystack = [
    scene.title,
    scene.place,
    scene.phase,
    scene.summary,
    scene.function,
    scene.stage,
    ...scene.figures,
    ...scene.motifs
  ].join(" ").toLowerCase();
  const motifOk = motifFilter.value === "all" || scene.motifs.includes(motifFilter.value);
  const figureOk = figureFilter.value === "all" || scene.figures.includes(figureFilter.value);
  return motifOk && figureOk && (!query || haystack.includes(query));
}

function renderCards() {
  cardGrid.innerHTML = "";
  const filtered = scenes.filter(sceneMatches);
  filtered.forEach((scene) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.dataset.id = scene.id;
    card.querySelector(".scene-number").textContent = scene.id;
    card.querySelector(".scene-phase").textContent = scene.phase;
    card.querySelector("h3").textContent = scene.title;
    card.querySelector(".scene-place").textContent = scene.place;
    card.querySelector(".scene-summary").textContent = scene.summary;
    card.querySelector(".scene-figures").textContent = scene.figures.join(", ");
    card.querySelector(".scene-function").textContent = scene.function;
    card.querySelector(".scene-stage").textContent = scene.stage;
    card.querySelector(".chips").append(...scene.motifs.map((motif) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = motif;
      return chip;
    }));
    card.querySelector(".add-btn").addEventListener("click", () => addScene(scene.id));
    card.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", String(scene.id));
      card.classList.add("dragging");
    });
    card.addEventListener("dragend", () => card.classList.remove("dragging"));
    cardGrid.append(card);
  });
  visibleCount.textContent = `${filtered.length} Karten`;
}

function saveBuild() {
  localStorage.setItem("woyzeckBuild", JSON.stringify(build));
}

function selectedPinMap() {
  const pins = new Map();
  pinGrid.querySelectorAll("select").forEach((select) => {
    if (select.value !== "open") {
      pins.set(Number(select.dataset.position), Number(select.value));
    }
  });
  return pins;
}

function enforceUniquePins(event) {
  const changed = event?.target;
  const used = new Set();
  pinGrid.querySelectorAll("select").forEach((select) => {
    if (select.value === "open") return;
    if (used.has(select.value)) {
      if (select === changed) {
        select.value = "open";
      }
      return;
    }
    used.add(select.value);
  });
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[target]] = [copy[target], copy[index]];
  }
  return copy;
}

function setPin(position, sceneId) {
  const select = pinGrid.querySelector(`select[data-position="${position}"]`);
  if (select) select.value = String(sceneId);
}

function clearPins() {
  pinGrid.querySelectorAll("select").forEach((select) => {
    select.value = "open";
  });
}

function availableSceneIds() {
  const used = new Set(build);
  return scenes.map((scene) => scene.id).filter((id) => !used.has(id));
}

function updateNextStepOptions() {
  const available = availableSceneIds();
  nextStepSelect.innerHTML = "";
  if (!available.length) {
    nextStepSelect.append(new Option("Alle Szenen sind gesetzt", ""));
    nextStepSelect.disabled = true;
    return;
  }
  available.map(sceneById).forEach((scene) => nextStepSelect.append(sceneOption(scene)));
  nextStepSelect.disabled = false;
}

function startStepGame() {
  const startId = Number(stepStartSelect.value);
  build = [startId];
  saveBuild();
  renderBuild();
}

function chooseStep(sceneId = Number(nextStepSelect.value)) {
  if (!sceneId || build.includes(sceneId)) return;
  if (stepDirectionSelect.value === "backward") {
    build.unshift(sceneId);
  } else {
    build.push(sceneId);
  }
  saveBuild();
  renderBuild();
}

function chooseRandomStep() {
  const available = availableSceneIds();
  if (!available.length) return;
  chooseStep(available[Math.floor(Math.random() * available.length)]);
}

function renderStepState() {
  const direction = stepDirectionSelect.value;
  stepStartLabel.textContent = direction === "backward" ? "Schlussszene" : "Anfangsszene";
  nextStepLabel.textContent = direction === "backward" ? "Vorherige Szene" : "Darauffolgende Szene";
  stepProgress.textContent = `${build.length} / ${scenes.length}`;
  updateNextStepOptions();

  const sequence = build.map(sceneById).filter(Boolean);
  if (!sequence.length) {
    stepStoryOutput.textContent = "Starte ein Schrittspiel, dann erscheint hier nach jeder Wahl der aktuelle Stand der Dramenhandlung.";
    return;
  }
  const first = sequence[0];
  const last = sequence[sequence.length - 1];
  const directionText = direction === "backward"
    ? "Du rekonstruierst vom Ende her. Die aktuell bekannte Vorgeschichte führt"
    : "Du erzählst vorwärts. Die aktuell entwickelte Handlung führt";
  const openCount = scenes.length - sequence.length;
  const chain = sequence.map((scene) => scene.phase).join(" → ");
  stepStoryOutput.textContent = `${directionText} von ${formatSceneRef(first)} bis ${formatSceneRef(last)}. Bisherige Bewegungslogik: ${chain}. Noch offen: ${openCount} Szene(n). ${buildMurderExplanation(sequence, sequence.findIndex((scene) => scene.id === 20) + 1 || null)}`;
}

function generateCombination() {
  const mode = modeSelect.value;
  if (mode === "step-forward" || mode === "step-backward") {
    stepDirectionSelect.value = mode === "step-backward" ? "backward" : "forward";
    stepStartSelect.value = mode === "step-backward" && lastSceneSelect.value !== "random"
      ? lastSceneSelect.value
      : firstSceneSelect.value !== "random"
        ? firstSceneSelect.value
        : stepStartSelect.value;
    startStepGame();
    return;
  }

  const result = Array(scenes.length).fill(null);
  const used = new Set();
  const explicitPins = mode === "pinned" || mode === "puzzle" ? selectedPinMap() : new Map();

  function pin(position, sceneId) {
    if (!sceneId || used.has(sceneId)) return;
    if (result[position]) {
      used.delete(result[position]);
    }
    result[position] = sceneId;
    used.add(sceneId);
  }

  if ((mode === "first" || mode === "pinned" || mode === "puzzle") && !explicitPins.has(0)) {
    pin(0, firstSceneSelect.value === "random" ? null : Number(firstSceneSelect.value));
  }
  if ((mode === "last" || mode === "pinned" || mode === "puzzle") && !explicitPins.has(scenes.length - 1)) {
    pin(scenes.length - 1, lastSceneSelect.value === "random" ? null : Number(lastSceneSelect.value));
  }
  explicitPins.forEach((sceneId, position) => pin(position, sceneId));

  const remaining = shuffle(scenes.map((scene) => scene.id).filter((id) => !used.has(id)));
  for (let index = 0; index < result.length; index += 1) {
    if (!result[index]) result[index] = remaining.shift();
  }

  build = result;
  saveBuild();
  renderBuild();
}

function addScene(id) {
  build.push(Number(id));
  saveBuild();
  renderBuild();
}

function moveScene(index, direction) {
  const target = index + direction;
  if (target < 0 || target >= build.length) return;
  [build[index], build[target]] = [build[target], build[index]];
  saveBuild();
  renderBuild();
}

function removeScene(index) {
  build.splice(index, 1);
  saveBuild();
  renderBuild();
}

function renderBuild() {
  buildList.innerHTML = "";
  build.forEach((sceneId, index) => {
    const scene = scenes.find((item) => item.id === sceneId);
    if (!scene) return;
    const item = document.createElement("li");
    item.className = "build-item";
    item.innerHTML = `
      <span class="order">${index + 1}</span>
      <div>
        <strong>${scene.id}. ${scene.title}</strong>
        <span>${scene.phase} · ${scene.motifs.slice(0, 3).join(", ")}</span>
      </div>
      <div class="mini-actions">
        <button type="button" title="Nach oben">↑</button>
        <button type="button" title="Nach unten">↓</button>
        <button type="button" title="Entfernen">×</button>
      </div>
    `;
    const [upBtn, downBtn, removeBtn] = item.querySelectorAll("button");
    upBtn.addEventListener("click", () => moveScene(index, -1));
    downBtn.addEventListener("click", () => moveScene(index, 1));
    removeBtn.addEventListener("click", () => removeScene(index));
    buildList.append(item);
  });
  const countText = `${build.length} ${build.length === 1 ? "Szene" : "Szenen"}`;
  buildCount.textContent = countText;
  floatingBuildCount.textContent = countText;
  renderReading();
  renderStepState();
}

function sceneById(id) {
  return scenes.find((scene) => scene.id === id);
}

function positionOf(id) {
  const index = build.indexOf(id);
  return index === -1 ? null : index + 1;
}

function formatSceneRef(scene) {
  return `${scene.id}. ${scene.title}`;
}

function motifLine(sequence) {
  return uniqueSorted(sequence.flatMap((scene) => scene.motifs)).slice(0, 8).join(", ");
}

function renderReading() {
  const sequence = build.map(sceneById).filter(Boolean);
  if (!sequence.length) {
    plotOutput.textContent = "Generiere oder baue eine Reihenfolge, dann entsteht hier eine Zusammenfassung.";
    interpretationOutput.textContent = "Die Interpretation reagiert auf Anfang, Ende, Mordposition und Motivfolge.";
    murderOutput.textContent = "Sobald Szene 20 enthalten ist, wird erklärt, wie die Montage den Mord lesbar macht.";
    return;
  }

  const first = sequence[0];
  const last = sequence[sequence.length - 1];
  const murderPos = positionOf(20);
  const earlyScenes = sequence.slice(0, 4).map(formatSceneRef).join(" → ");
  const finalScenes = sequence.slice(-4).map(formatSceneRef).join(" → ");
  const murderSentence = murderPos
    ? `Der Mord steht an Position ${murderPos} von ${sequence.length}.`
    : "Die eigentliche Mordscene ist nicht enthalten; die Fassung bleibt als Vor- oder Nachgeschichte offen.";

  plotOutput.textContent = `Die Fassung beginnt mit ${formatSceneRef(first)} und endet mit ${formatSceneRef(last)}. Der erste Block lautet: ${earlyScenes}. Der Schlussblock lautet: ${finalScenes}. ${murderSentence} Dominante Motive dieser Montage sind ${motifLine(sequence)}.`;

  interpretationOutput.textContent = buildInterpretation(sequence, murderPos);
  murderOutput.textContent = buildMurderExplanation(sequence, murderPos);
}

function buildInterpretation(sequence, murderPos) {
  const mariePositions = [2, 4, 6, 7, 11, 16, 19, 20].map((id) => positionOf(id)).filter(Boolean);
  const woyzeckPressurePositions = [1, 5, 8, 9, 10, 12, 13, 14, 17, 18].map((id) => positionOf(id)).filter(Boolean);
  const startsWithMarie = sequence[0].figures.includes("Marie");
  const startsWithWoyzeck = sequence[0].figures.includes("Woyzeck");
  const firstMarie = Math.min(...mariePositions);
  const firstPressure = Math.min(...woyzeckPressurePositions);
  const afterMurderMarie = murderPos ? mariePositions.filter((pos) => pos > murderPos).length : 0;

  let opening = "Die Entwicklung wird als Montage von sozialem Druck, Begehren und zunehmender Wahrnehmungsstörung lesbar.";
  if (startsWithMarie && !startsWithWoyzeck) {
    opening = "Die Fassung setzt zuerst bei Marie an: Woyzecks Geschichte erscheint dadurch stärker als Reaktion auf eine bereits sichtbare Welt aus Blicken, Begehren und sozialem Urteil.";
  } else if (startsWithWoyzeck) {
    opening = "Die Fassung setzt zuerst bei Woyzeck an: Seine Armut, seine Arbeit am eigenen Körper und seine Wahrnehmungsstörung rahmen alles Folgende.";
  }

  const relation = firstMarie < firstPressure
    ? "Marie ist früher profiliert als die Institutionen, die Woyzeck bedrängen; dadurch wirkt der Konflikt zunächst privater und erotischer."
    : "Die Belastung Woyzecks erscheint vor Maries eigener Perspektive; dadurch rückt die Tat stärker in die Logik von Ausbeutung, Krankheit und Demütigung.";

  const marieAfter = afterMurderMarie
    ? `Dass ${afterMurderMarie} Marie-Szene(n) nach dem Mord liegen, erzeugt Rückblenden: Marie bleibt nicht nur Opfer, sondern wird nachträglich als begehrende, schuldempfindliche und sozial beobachtete Figur lesbar.`
    : "Maries Szenen liegen vor allem vor dem Mord; ihre Entwicklung läuft auf die Tat zu und wird weniger als Rückblende gebrochen.";

  return `${opening} ${relation} ${marieAfter}`;
}

function buildMurderExplanation(sequence, murderPos) {
  if (!murderPos) {
    return "Ohne Mordscene erklärt die Reihenfolge den Mord nur indirekt: über Eifersucht, Armut, Körperkontrolle, Wahn und die Gewalt der Institutionen.";
  }

  const before = sequence.slice(0, murderPos - 1);
  const after = sequence.slice(murderPos);
  const beforeMotifs = uniqueSorted(before.flatMap((scene) => scene.motifs));
  const afterMotifs = uniqueSorted(after.flatMap((scene) => scene.motifs));
  const hasWeaponBefore = positionOf(15) && positionOf(15) < murderPos;
  const hasPublicHumiliationBefore = [11, 14].some((id) => positionOf(id) && positionOf(id) < murderPos);
  const hasInstitutionsBefore = [5, 8, 9, 18].some((id) => positionOf(id) && positionOf(id) < murderPos);
  const hasAftermathBefore = [21, 22, 23, 24, 25, 26, 27].some((id) => positionOf(id) && positionOf(id) < murderPos);

  const causeParts = [];
  if (hasInstitutionsBefore) causeParts.push("institutionelle Demütigung");
  if (hasPublicHumiliationBefore) causeParts.push("öffentliche Kränkung");
  if (hasWeaponBefore) causeParts.push("den konkreten Messerentschluss");
  if (beforeMotifs.includes("Wahn")) causeParts.push("Wahnstimmen");
  if (beforeMotifs.includes("Armut")) causeParts.push("ökonomische Not");

  let structure = `Vor dem Mord bündelt die Montage ${causeParts.length ? causeParts.join(", ") : "mehrere lose Spannungssignale"}.`;
  if (murderPos <= 5) {
    structure += " Weil die Tat sehr früh erscheint, wird sie zum Rätsel oder Schockauftakt; die folgenden Szenen erklären nachträglich, wie es dazu kommen konnte.";
  } else if (murderPos >= sequence.length - 4) {
    structure += " Weil die Tat sehr spät erscheint, wirkt die Reihenfolge kausal zugespitzt: Fast alles wird Vorbereitung, Druckaufbau und Verengung.";
  } else {
    structure += " Weil die Tat in der Mitte steht, entsteht eine analytische Zweiteilung aus Vorgeschichte und Nachgeschichte.";
  }
  if (hasAftermathBefore) {
    structure += " Nachspiel- oder Befund-Szenen vor dem Mord machen die Fassung besonders experimentell: Sie zeigen erst Folgen und Spuren, bevor die Tat selbst sichtbar wird.";
  }
  if (afterMotifs.includes("Justiz") || afterMotifs.includes("Wissenschaft")) {
    structure += " Nach dem Mord übernehmen Institutionen die Deutung; das verschiebt die Erklärung vom Einzeltäter zur gesellschaftlichen Fallmachung.";
  }
  return structure;
}

function characterSceneMatch(scene, character) {
  const aliases = characterAliases[character] || [character];
  return aliases.some((alias) => {
    return scene.figures.includes(alias) || scene.title.includes(alias) || scene.place.includes(alias);
  });
}

function inferQuestionKey(questionText) {
  const text = questionText.toLowerCase();
  if (text.includes("woyzeck") || text.includes("franz")) return "woyzeck";
  if (text.includes("marie")) return "marie";
  if (text.includes("tambour")) return "tambourmajor";
  if (text.includes("doktor") || text.includes("hauptmann")) return "doctorCaptain";
  if (text.includes("liebe") || text.includes("lieb")) return "love";
  if (text.includes("eifersucht") || text.includes("eifer")) return "jealousy";
  if (text.includes("macht") || text.includes("herrschaft") || text.includes("gewalt")) return "power";
  if (text.includes("armut") || text.includes("geld") || text.includes("arbeit")) return "poverty";
  if (text.includes("leben") || text.includes("umstand") || text.includes("milieu")) return "living";
  if (text.includes("schuld") || text.includes("gewissen")) return "guilt";
  if (text.includes("körper") || text.includes("leib")) return "body";
  if (text.includes("gesellschaft") || text.includes("leute") || text.includes("stadt")) return "society";
  if (text.includes("angst") || text.includes("furcht")) return "fear";
  if (text.includes("will") || text.includes("wunsch") || text.includes("willst")) return "want";
  if (text.includes("mord") || text.includes("messer") || text.includes("tot")) return "murder";
  if (text.includes("verhältnis") || text.includes("anderen") || text.includes("person")) return "relations";
  return "stand";
}

function fallbackVoice(character, questionKey) {
  const labels = {
    relations: "Meine Beziehungen zeigen, wer Nähe, Druck oder Urteil in dieser Fassung ausübt.",
    woyzeck: "Woyzeck steht hier für den Punkt, an dem Armut, Körperdruck und soziale Demütigung sichtbar werden.",
    marie: "Marie macht sichtbar, wie Begehren, Armut, Schuld und gesellschaftlicher Blick ineinandergreifen.",
    tambourmajor: "Der Tambourmajor bringt Körpermacht, Begehren und öffentliche Kränkung in die Handlung.",
    doctorCaptain: "Doktor und Hauptmann zeigen, wie Institutionen über Menschen sprechen und sie dadurch kleiner machen.",
    living: "Meine Lebensumstände sind kein Hintergrund, sondern bestimmen, was ich sehen, sagen und tun kann.",
    poverty: "Armut verengt Handlungsspielräume und macht moralische Urteile oft grausam einfach.",
    love: "Liebe ist in dieser Welt nie nur privat; sie hängt an Geld, Körper, Angst und Anerkennung.",
    jealousy: "Eifersucht verwandelt Unsicherheit in Verdacht und macht die Zeichen der Welt bedrohlich.",
    power: "Macht zeigt sich daran, wer sprechen, urteilen, besitzen, beobachten oder körperlich auftreten darf.",
    guilt: "Schuld verteilt sich nicht sauber auf eine Person; die Montage zeigt mehrere Schichten von Verantwortung.",
    body: "Der Körper ist nicht frei: Er wird begehrt, gedemütigt, untersucht, eingesetzt oder verletzt.",
    society: "Die Gesellschaft schaut zu, redet mit und macht aus privater Not ein öffentliches Urteil.",
    stand: "Ich antworte aus dem Stand der bisher montierten Szenen, nicht aus einer fertigen Gesamtfassung."
  };
  return labels[questionKey] || labels.stand;
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);
}

function buildInterview() {
  const character = characterSelect.value;
  const customQuestion = customQuestionInput.value.trim();
  const question = customQuestion ? inferQuestionKey(customQuestion) : questionSelect.value;
  const sequence = build.map(sceneById).filter(Boolean);
  const voice = characterVoices[character][question] || fallbackVoice(character, question);
  if (!sequence.length) {
    interviewOutput.textContent = `${character}: Ich kann noch nichts aus dieser Fassung wissen. Es ist noch keine Szene gesetzt.`;
    return;
  }

  const witnessed = sequence.filter((scene) => characterSceneMatch(scene, character));
  const lastWitnessed = witnessed[witnessed.length - 1];
  const murderPos = sequence.findIndex((scene) => scene.id === 20) + 1 || null;
  const murderKnown = murderPos !== null;
  const motifs = motifLine(sequence);
  const knowledge = lastWitnessed
    ? `Mein letzter direkter Stand ist ${formatSceneRef(lastWitnessed)}: ${lastWitnessed.summary}`
    : "Ich bin in dieser Fassung bisher nicht direkt aufgetreten; ich spreche also aus Randwissen, Gerücht und meiner sozialen Rolle.";
  const limit = murderKnown
    ? `Der Mord ist in dieser Montage bereits an Position ${murderPos} gesetzt; alles, was ich sage, steht unter diesem Wissen.`
    : "Der Mord ist in dieser Montage noch nicht gesetzt; ich kann ihn nur als Möglichkeit, Drohung oder blinden Fleck berühren.";
  const asked = customQuestion ? `Auf deine Frage „${escapeHtml(customQuestion)}“ antworte ich so: ` : "";

  interviewOutput.innerHTML = `<strong>${character}:</strong> ${asked}${voice} ${knowledge} ${limit} Die bisherige Handlung wird von ${motifs} bestimmt.`;
  speakInterviewAnswer();
}

function setSpeechStatus(message) {
  speechStatus.textContent = message;
}

function setupSpeechRecognition() {
  if (!SpeechRecognition) {
    listenBtn.disabled = true;
    setSpeechStatus("Spracheingabe wird in diesem Browser nicht unterstützt.");
    return;
  }
  recognition = new SpeechRecognition();
  recognition.lang = "de-CH";
  recognition.interimResults = true;
  recognition.continuous = false;

  recognition.addEventListener("start", () => {
    listenBtn.classList.add("listening");
    setSpeechStatus("Ich höre zu ...");
  });
  recognition.addEventListener("result", (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0].transcript)
      .join(" ")
      .trim();
    customQuestionInput.value = transcript;
    if (event.results[event.results.length - 1].isFinal) {
      setSpeechStatus("Frage erkannt. Antwort wird erzeugt.");
      buildInterview();
    }
  });
  recognition.addEventListener("end", () => {
    listenBtn.classList.remove("listening");
    if (!customQuestionInput.value.trim()) {
      setSpeechStatus("Keine Frage erkannt. Bitte erneut sprechen oder tippen.");
    }
  });
  recognition.addEventListener("error", (event) => {
    listenBtn.classList.remove("listening");
    setSpeechStatus(`Spracheingabe nicht möglich: ${event.error}.`);
  });
}

function startListening() {
  if (!recognition) {
    setSpeechStatus("Spracheingabe wird in diesem Browser nicht unterstützt.");
    return;
  }
  window.speechSynthesis?.cancel();
  try {
    recognition.start();
  } catch {
    recognition.stop();
    setSpeechStatus("Spracheingabe läuft bereits.");
  }
}

function pickGermanVoice() {
  const voices = window.speechSynthesis?.getVoices?.() || [];
  return voices.find((voice) => voice.lang === "de-CH")
    || voices.find((voice) => voice.lang === "de-DE")
    || voices.find((voice) => voice.lang.startsWith("de"))
    || null;
}

function speakInterviewAnswer() {
  if (!("speechSynthesis" in window)) {
    setSpeechStatus("Sprachausgabe wird in diesem Browser nicht unterstützt.");
    return;
  }
  const text = interviewOutput.textContent.trim();
  if (!text || text === "Wähle eine Figur und starte ein Gespräch.") {
    setSpeechStatus("Es gibt noch keine Antwort zum Vorlesen.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-CH";
  utterance.voice = pickGermanVoice();
  utterance.rate = 0.95;
  utterance.pitch = characterSelect.value === "Marie" ? 1.08 : 0.92;
  utterance.addEventListener("start", () => setSpeechStatus("Antwort wird vorgelesen."));
  utterance.addEventListener("end", () => setSpeechStatus("Bereit für die nächste Frage."));
  utterance.addEventListener("error", () => setSpeechStatus("Vorlesen wurde unterbrochen oder ist nicht verfügbar."));
  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  recognition?.abort?.();
  window.speechSynthesis?.cancel();
  listenBtn.classList.remove("listening");
  setSpeechStatus("Gestoppt.");
}

function exportBuild() {
  renderReading();
  const lines = [
    "Woyzeck-Prozessor: Meine Fassung",
    "Textgrundlage: https://buechnerportal.de/werke/woyzeck/",
    "Hinweis: Woyzeck ist als Fragment in mehreren Handschriften überliefert; diese Fassung ist eine didaktische Montage.",
    "",
    ...build.map((id, index) => {
      const scene = scenes.find((item) => item.id === id);
      return `${index + 1}. Szene ${scene.id}: ${scene.title} (${scene.place})\n   Funktion: ${scene.function}\n   Motive: ${scene.motifs.join(", ")}`;
    }),
    "",
    "Regieidee / Begründung:",
    notesInput.value.trim() || "-",
    "",
    "Automatische Auswertung:",
    `Handlung: ${plotOutput.textContent}`,
    `Woyzeck und Marie: ${interpretationOutput.textContent}`,
    `Morderklärung: ${murderOutput.textContent}`,
    "",
    "Schrittmodus-Zwischenhalt:",
    stepStoryOutput.textContent,
    "",
    "Letztes Figurengespräch:",
    interviewOutput.textContent
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "woyzeck-fassung.txt";
  link.click();
  URL.revokeObjectURL(url);
}

buildList.addEventListener("dragover", (event) => {
  event.preventDefault();
  buildList.classList.add("drag-over");
});

buildList.addEventListener("dragleave", () => buildList.classList.remove("drag-over"));

buildList.addEventListener("drop", (event) => {
  event.preventDefault();
  buildList.classList.remove("drag-over");
  const id = Number(event.dataTransfer.getData("text/plain"));
  if (id) addScene(id);
});

[searchInput, motifFilter, figureFilter].forEach((element) => {
  element.addEventListener("input", renderCards);
});

notesInput.addEventListener("input", () => {
  localStorage.setItem("woyzeckNotes", notesInput.value);
});

document.querySelector("#canonicalBtn").addEventListener("click", () => {
  build = scenes.map((scene) => scene.id);
  saveBuild();
  renderBuild();
});

document.querySelector("#clearBuildBtn").addEventListener("click", () => {
  build = [];
  saveBuild();
  renderBuild();
});

document.querySelector("#resetBtn").addEventListener("click", () => {
  searchInput.value = "";
  motifFilter.value = "all";
  figureFilter.value = "all";
  modeSelect.value = "random";
  firstSceneSelect.value = "random";
  lastSceneSelect.value = "random";
  stepDirectionSelect.value = "forward";
  stepStartSelect.value = "1";
  characterSelect.value = "Franz Woyzeck";
  questionSelect.value = "stand";
  customQuestionInput.value = "";
  interviewOutput.textContent = "Wähle eine Figur und starte ein Gespräch.";
  stopSpeech();
  clearPins();
  build = [];
  notesInput.value = "";
  localStorage.removeItem("woyzeckBuild");
  localStorage.removeItem("woyzeckNotes");
  renderCards();
  renderBuild();
});

document.querySelector("#exportBtn").addEventListener("click", exportBuild);
document.querySelector("#printBtn").addEventListener("click", () => window.print());
document.querySelector("#generateBtn").addEventListener("click", generateCombination);
document.querySelector("#refreshReadingBtn").addEventListener("click", renderReading);
document.querySelector("#clearPinsBtn").addEventListener("click", clearPins);
openProcessorBtn.addEventListener("click", () => {
  if (typeof processorDialog.showModal === "function") {
    processorDialog.showModal();
  } else {
    processorDialog.setAttribute("open", "");
  }
});
closeProcessorBtn.addEventListener("click", () => processorDialog.close());
processorDialog.addEventListener("click", (event) => {
  if (event.target === processorDialog) processorDialog.close();
});
document.querySelector("#startStepBtn").addEventListener("click", startStepGame);
document.querySelector("#chooseStepBtn").addEventListener("click", () => chooseStep());
document.querySelector("#randomStepBtn").addEventListener("click", chooseRandomStep);
document.querySelector("#interviewBtn").addEventListener("click", buildInterview);
listenBtn.addEventListener("click", startListening);
speakAnswerBtn.addEventListener("click", speakInterviewAnswer);
stopSpeechBtn.addEventListener("click", stopSpeech);
document.querySelector("#canonicalPinsBtn").addEventListener("click", () => {
  clearPins();
  scenes.forEach((scene, index) => setPin(index, scene.id));
});

modeSelect.addEventListener("change", () => {
  pinDetails.open = modeSelect.value === "pinned" || modeSelect.value === "puzzle";
  if (modeSelect.value === "step-forward") stepDirectionSelect.value = "forward";
  if (modeSelect.value === "step-backward") stepDirectionSelect.value = "backward";
  renderStepState();
});

stepDirectionSelect.addEventListener("change", renderStepState);
characterSelect.addEventListener("change", buildInterview);
questionSelect.addEventListener("change", buildInterview);
customQuestionInput.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    buildInterview();
  }
});

populateFilters();
populateCombiner();
populateStepGame();
populateInterviews();
setupSpeechRecognition();
renderCards();
renderBuild();
