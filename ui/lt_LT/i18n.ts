/// <reference path="../../client/app-slim/translations.d.ts"/>

// Note:
// - If the first char in the field name is Uppercase, then the
//   textual value also starts with an Uppercase letter.
//   E.g. `Close: "Close"`, and `close: "close"`.
// - The text value of a field that ends with ...Q, ends with ?. E.g. `DeleteQ: "Delete?"`.
// - The text value of a field that ends with ...C, ends with :. E.g. `PasswordC: "Password:"`.
// - If the field ends with an N, then it's a noun (not a verb). Example:
//   In English, the word "chat" is both a noun and a verb, but in other languages,
//   two different words might be needed — and then there're two fields for the translators
//   `ChatN: "(noun here)"` and `ChatV: "(verb here)"`.
// - If the field ends with an V, then it's a verb (not a noun)

var t: TalkyardTranslations;

var t_lt_LT: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Aktyvus",
  Activity: "Veikla",
  Add: "Pridėti",
  AddingDots: "Pridedama ...",
  AddComment: "Pridėti komentarą",
  Admin: "Admin",
  AdvSearch: "Išplėstinė paieška",
  Anonym: "Anonimas",
  Away: "Atsitraukęs",
  Back: "Atgal",
  BlogN: "Tinklaraštis",
  Bookmarks: "Žymės",
  Cancel: "Atšaukti",
  Categories: "Kategorijos",
  Category: "Kategorija",
  ChangeV: "Pakeisti",
  ClickToShow: "Spustelėkite, norėdami parodyti",
  ChangeDots: "Keisti ...",
  ChatN: "Pokalbiai",
  Chatting: "Susirašinėjama",
  CheckYourEmail: "Patikrinkite savo el. paštą",
  Close: "Uždaryti",
  closed: "uždaryta",
  comments: "komentarai",   // as in:  "123 comments"
  Continue: "Tęsti",
  Created: "Sukurta",
  Delete: "Ištrinti",
  Deleted: "Ištrinta",
  DirectMessage: "Tiesioginė žinutė",
  Discussion: "Diskusija",
  discussion: "diskusija",
  done: "atlikta",
  EditV: "Redaguoti",
  Editing: "Redaguojama",
  EmailC: "El. paštas: ",
  EmailAddress: "El. pašto adresas",
  EmailAddresses: "El. pašto adresai",
  EmailSentD: "El. laiškas išsiųstas.",
  Forum: "Forumas",
  GetNotifiedAbout: "Gauti pranešimus apie",
  GroupsC: "Grupės:",
  Hide: "Paslėpti",
  Home: "Pradžia",
  Idea: "Idėja",
  Join: "Prisijungti",
  KbdShrtcsC: "Klaviatūros trumpiniai: ",
  Loading: "Kraunama...",
  LoadMore: "Įkelti daugiau ...",
  LogIn: "Prisijungti",
  LoggedInAs: "Prisijungta kaip ",
  LogOut: "Atsijungti",
  Maybe: "Galbūt",
  Manage: "Valdyti",
  Members: "Nariai",
  MessageN: "Žinutė",
  MoreDots: "Daugiau...",
  Move: "Perkelti",
  Name: "Vardas",
  NameC: "Vardas:",
  NewTopic: "Nauja tema",
  NoCancel: "Ne, atšaukti",
  Notifications: "Pranešimai",
  NotImplemented: "(Neįgyvendinta)",
  NotYet: "Dar ne",
  NoTitle: "Be pavadinimo",
  NoTopics: "Temų nėra.",
  Okay: "Gerai",
  OkayDots: "Gerai ...",
  Online: "Prisijungęs",
  onePerLine: "po vieną eilutėje",
  PreviewV: "Peržiūrėti",
  Problem: "Problema",
  progressN: "progresas",
  Question: "Klausimas",
  Recent: "Naujausi",
  Remove: "Pašalinti",
  Reopen: "Atidaryti iš naujo",
  ReplyV: "Atsakyti",
  Replying: "Atsakoma",
  Replies: "Atsakymai",
  replies: "atsakymai",
  Save: "Išsaugoti",
  SavingDots: "Saugoma ...",
  SavedDot: "Išsaugota.",
  Search: "Paieška",
  SendMsg: "Siųsti žinutę",
  ShowPreview: "Rodyti peržiūrą",
  SignUp: "Prisijungti",  // don't change to "Sign Up" [join_or_signup]
  Solution: "Sprendimas",
  started: "pradėta",
  Summary: "Santrauka",
  Submit: "Pateikti",
  Tag: "Žyma",
  Tags: "Žymos",
  Tools: "Įrankiai",
  Topics: "Temos",
  TopicTitle: "Temos pavadinimas",
  TopicType: "Temos tipas",
  UploadingDots: "Įkeliama...",
  Username: "Vartotojo vardas",
  Users: "Vartotojai",
  Welcome: "Sveiki atvykę",
  Wiki: "Wiki",
  Yes: "Taip",
  YesBye: "Taip, viso gero",
  YesDoThat: "Taip, darykite tai",
  You: "Jūs",
  you: "jūs",

  // Trust levels.
  Guest:  "Svečias",
  NewMember: "Naujas narys",
  BasicMember: "Pradedantysis narys",
  FullMember: "Pilnateisis narys",
  TrustedMember: "Patikimas narys",
  RegularMember: "Patikimas nuolatinis",  // renamed Regular Member —> Trusted Regular [RENREGLS]
  CoreMember: "Pagrindinis narys",

  // Periods.
  PastDay: "Praėjusi para",
  PastWeek: "Praėjusi savaitė",
  PastMonth: "Praėjęs mėnuo",
  PastQuarter: "Praėjęs ketvirtis",
  PastYear: "Praėję metai",
  AllTime: "Visas laikas",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "mėn",  // months
  daysLtr: "d",      // days
  hoursLtr: "val",     // hours
  minsLtr: "min",      // minutes
  secsLtr: "sek",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) => {
    if (numDays % 10 === 1 && numDays % 100 !== 11) return `prieš ${numDays} dieną`;
    if (numDays % 10 >= 2 && (numDays % 100 < 10 || numDays % 100 >= 20)) return `prieš ${numDays} dienas`;
    return `prieš ${numDays} dienų`;
  },

  hoursAgo: (numHours: number) => {
    if (numHours % 10 === 1 && numHours % 100 !== 11) return `prieš ${numHours} valandą`;
    if (numHours % 10 >= 2 && (numHours % 100 < 10 || numHours % 100 >= 20)) return `prieš ${numHours} valandas`;
    return `prieš ${numHours} valandų`;
  },

  minutesAgo: (numMins: number) => {
    if (numMins % 10 === 1 && numMins % 100 !== 11) return `prieš ${numMins} minutę`;
    if (numMins % 10 >= 2 && (numMins % 100 < 10 || numMins % 100 >= 20)) return `prieš ${numMins} minutes`;
    return `prieš ${numMins} minučių`;
  },

  secondsAgo: (numSecs: number) => {
    if (numSecs % 10 === 1 && numSecs % 100 !== 11) return `prieš ${numSecs} sekundę`;
    if (numSecs % 10 >= 2 && (numSecs % 100 < 10 || numSecs % 100 >= 20)) return `prieš ${numSecs} sekundes`;
    return `prieš ${numSecs} sekundžių`;
  },


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "Reikalingas el. pašto adresas",
    NoSpcs: "Prašome nenaudoti tarpų",
    InvldAddr: "Neteisingas el. pašto adresas",
    NoBadChrs: "Prašome nenaudoti keistų simbolių",

    // Full name input field:
    NotOnlSpcs: "Prašome nepalikti vien tarpų",
    NoAt: "Prašome nenaudoti @",

    // Username input field:
    NoDash: "Prašome nenaudoti brūkšnelių (-)",
    DontInclAt: "Neįtraukite @",
    StartEndLtrDgt: "Pradėkite ir baikite raide arba skaitmeniu",
    OnlLtrNumEtc: "Tik raidės (a-z, A-Z), skaičiai ir _ (pabraukimo brūkšnys)",
    // This shown just below the username input:
    UnUnqShrt_1: "Jūsų ",
    UnUnqShrt_2: "@vartotojovardas",
    UnUnqShrt_3: ", unikalus ir trumpas",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Turėtų būti bent ${minLength} simboliai`,
    TooLong: (maxLength: number) => `Per ilgas. Turėtų būti daugiausiai ${maxLength} simboliai`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Kiekvienas pranešimas",
    EveryPostInTopic: "Jums bus pranešta apie visus naujus atsakymus šioje temoje.",
    EveryPostInCat: "Jums bus pranešta apie visas naujas temas ir atsakymus šioje kategorijoje.",
    EveryPostInTopicsWithTag: "Jums bus pranešta apie naujas temas su šia žyma ir visus atsakymus tose temose.",
    EveryPostWholeSite: "Jums bus pranešta apie visas naujas temas ir atsakymus bet kur.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Naujos temos",
    NewTopicsInCat: "Jums bus pranešta apie naujas temas šioje kategorijoje.",
    NewTopicsWithTag: "Jums bus pranešta apie naujas temas su šia žyma.",
    NewTopicsWholeSite: "Jums bus pranešta apie naujas temas bet kur.",

    Tracking: "Sekimas",

    Normal: "Normalus",
    NormalDescr: "Jums bus pranešta, jei kas nors kreipsis į jus, taip pat netiesiogiai, pvz., atsakymas į atsakymą jums.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Pritildytas",
    HushedDescr: "Jums bus pranešta tik tada, kai kas nors kreipsis tiesiogiai į jus.",

    Muted: "Nutildytas",
    MutedTopic: "Jokių pranešimų.",   // removed "about this topic"
  },


  // Forum intro text

  fi: {
    Edit: "Redaguoti",
    Hide_1: "Paslėpti",
    Hide_2: ", spustelėkite ",
    Hide_3: " norėdami vėl atidaryti",
  },


  // Forum categories

  fcs: {
    All: "Visi", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Temų sąrašas",

    // Select category dropdown

    from: "iš",  // used like so:  "From <Category Name>" or "From All Categories"
    in: "kategorijoje",      // used like so:  "in <Category Name>" or "in All Categories"
    AllCats: "Visos kategorijos",

    // Topic sort order

    Active: "Pirmiausia aktyvios",      // didn't add "first" yet to transls
    ActiveDescr: "Pirmiausia rodo neseniai aktyvias temas",

    New: "Naujos",
    NewDescr: "Pirmiausia rodo naujausias temas",

    Top: "Populiarios",              // didn't rename from Top to Popular in transls
    TopDescr: "Pirmiausia rodo populiarias temas",

    // Topic filter dropdown

    AllTopics: "Visos temos",

    ShowAllTopics: "Rodyti visas temas",
    ShowAllTopicsDescr: "Tačiau ne ištrintas temas",

    WaitingTopics: "Laukiančios temos",          //
    OnlyWaitingDescr_1: "Rodo tik temas, ", // changed "questions" to "topics"
    OnlyWaitingDescr_2: "laukiančias ",
    OnlyWaitingDescr_3: "sprendimo arba įgyvendinimo",  // rewrote

    YourTopics: "Jūsų temos",       //
    AssignedToYou: "Priskirta jums", //

    DeletedTopics: "Rodyti ištrintas",   //
    ShowDeleted: "Rodyti ištrintas",
    ShowDeletedDescr: "Rodo visas temas, įskaitant ištrintas",

    // Rightmost buttons

    ViewCategories: "Peržiūrėti kategorijas",  //
    EditCat: "Redaguoti kategoriją",
    CreateCat: "Sukurti kategoriją",
    CreateTopic: "Sukurti temą",
    PostIdea: "Paskelbti idėją",
    AskQuestion: "Užduoti klausimą",
    ReportProblem: "Pranešti apie problemą",
    CreateMindMap: "Sukurti minčių žemėlapį",
    CreatePage: "Sukurti puslapį",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Piktogramų paaiškinimas...",
    IconExplanation: "Piktogramų paaiškinimas:",
    ExplGenDisc: "Bendra diskusija.",
    ExplQuestion: "Klausimas be priimto atsakymo.",
    ExplAnswer: "Klausimas su priimtu atsakymu.",
    ExplIdea: "Idėja / pasiūlymas.",
    ExplProblem: "Problema.",
    ExplPlanned: "Kažkas, ką planuojame padaryti ar pataisyti.",
    ExplDone: "Kažkas, kas buvo padaryta ar pataisyta.",
    ExplClosed: "Tema uždaryta.",
    ExplPinned: "Tema visada rodoma pirma (galbūt tik savo kategorijoje).",

    PopularTopicsComma: "Populiarios temos, ",
    TopFirstAllTime: "Rodo populiariausias temas per visą laiką.",
    TopFirstPastDay: "Rodo temas, kurios buvo populiarios per pastarąją parą.",

    CatHasBeenDeleted: "Ši kategorija buvo ištrinta",

    TopicsActiveFirst: "Temos, pirmiausia neseniai aktyvios",
    TopicsNewestFirst: "Temos, pirmiausia naujausios",

    CreatedOn: "Sukurta ",
    LastReplyOn: "\nPaskutinis atsakymas ",
    EditedOn: "\nRedaguota ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "sukūrė temą",
    frequentPoster: "dažnas autorius",
    mostRecentPoster: "paskutinis autorius",

    inC: "kategorijoje: ",

    TitleFixed: "Tai buvo sutvarkyta",
    TitleDone: "Tai buvo atlikta",
    TitleStarted: "Mes tai pradėjome",
    TitleStartedFixing: "Mes pradėjome tai tvarkyti",
    TitleUnsolved: "Tai yra neišspręsta problema",
    TitleIdea: "Tai yra idėja",
    TitlePlanningFix: "Mes planuojame tai sutvarkyti",
    TitlePlanningDo: "Mes planuojame tai padaryti",
    TitleChat: "Tai yra pokalbių kanalas",
    TitlePrivateChat: "Tai yra privatus pokalbių kanalas",
    TitlePrivateMessage: "Privati žinutė",
    TitleInfoPage: "Tai yra informacinis puslapis",
    TitleDiscussion: "Diskusija",
    IsPinnedGlobally: "\nJi buvo prisegta, todėl rodoma pirma.",
    IsPinnedInCat: "\nJi buvo prisegta savo kategorijoje, todėl rodoma pirma savo kategorijoje.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Naujausios temos (laukiančios)",
    RecentTopicsInclDel: "Naujausios temos (įskaitant ištrintas)",
    RecentTopics: "Naujausios temos",
    _replies: " atsakymai",
    _deleted: " (ištrinta)",
    _defCat: " (numatytoji kategorija)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Naujausi pranešimai",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " prisijungę šiame pokalbyje",    // example: "5 online in this chat"
    NumOnlForum: " prisijungę šiame forume",

    // Open left-sidebar button title.
    WatchbBtn: "Jūsų temos",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Jūsų naujausios temos, prisijungti pokalbiai, tiesioginės žinutės",

    // Title shown on user profile pages.
    AbtUsr: "Apie vartotoją",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Atgal iš vartotojo profilio",
    BackFromAdm: "Atgal iš administravimo srities",

    // Title shown on full text search page.
    SearchPg: "Paieškos puslapis",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Pridėti ...",
    RecentlyViewed: "Neseniai žiūrėtos temos",  // " topics"
    JoinedChats: "Prisijungti pokalbiai",
    ChatChannels: "Pokalbių kanalai",
    CreateChat: "Sukurti pokalbių kanalą",
    DirectMsgs: "Tiesioginės žinutės",
    NoChats: "Nėra",    // meaning: "No chat messages"
    NoDirMsgs: "Nėra",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Temos veiksmai",
    ViewPeopleHere: "Peržiūrėti čia esančius žmones",
    ViewAddRemoveMembers: "Peržiūrėti / pridėti / pašalinti narius",
    ViewChatMembers: "Peržiūrėti pokalbio narius",
    EditChat: "Redaguoti pokalbio aprašymą",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Išeiti iš šio pokalbio",
    LeaveThisCommunity: "Išeiti iš šios bendruomenės",
    JoinThisCommunity: "Prisijungti prie šios bendruomenės",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Naujausi komentarai šioje temoje:",
    NoComments: "Komentarų nėra.",

    YourBookmarks: "Jūsų žymės:",

    UsersOnline: "Prisijungę vartotojai:",
    UsersOnlineForum: "Prisijungę vartotojai šiame forume:",
    UsersInThisChat: "Vartotojai šiame pokalbyje:",
    UsersInThisTopic: "Vartotojai šioje temoje:",

    GettingStartedGuide: "Administratoriaus vadovas", // in other langs, was: "Getting Started Guide".
    AdminGuide: "Administratoriaus vadovas",          // ... but what? It's here already, just reuse this transl field
    Guide: "Vadovas",

    // How to hide the sidebar.
    CloseShortcutS: "Uždaryti (klaviatūros trumpinys: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Pridėti daugiau žmonių",

    // Shown next to one's own username, in a list of users.
    thatsYou: "tai jūs",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Atrodo, tik jūs",
    YouAnd: "Jūs ir ",
    NumStrangers: (numStrangers: number) => {
      let people;
      if (numStrangers % 10 === 1 && numStrangers % 100 !== 11) people = " asmuo";
      else if (numStrangers % 10 >= 2 && (numStrangers % 100 < 10 || numStrangers % 100 >= 20)) people = " asmenys";
      else people = " asmenų";
      
      let has;
      if (numStrangers % 10 === 1 && numStrangers % 100 !== 11) has = "neprisijungė";
      else has = "neprisijungė"; // Lithuanian "neprisijungė" is the same for sing/plur in this context
      
      return numStrangers + people + ", kurie " + has;
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    // "are sorted by" —> "might be"
    RepliesToTheLeft: "Atsakymai kairėje gali būti surūšiuoti ",
    bestFirst: "pagal geriausius.",
    ButBelow: "Bet žemiau ",
    insteadBy: " tie patys atsakymai yra surūšiuoti ",
    newestFirst: "pagal naujausius.",

    SoIfLeave: "Taigi, jei išeisite ir grįšite vėliau, žemiau rasite ",
    allNewReplies: "visus naujus atsakymus.",
    Click: "Spustelėkite",
    aReplyToReadIt: " atsakymą žemiau, kad jį perskaitytumėte — nes žemiau rodoma tik ištrauka.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Spustelėkite, norėdami pakeisti būseną",
    ClickToViewAnswer: "Spustelėkite, norėdami peržiūrėti atsakymą",
    ViewAnswer: "Peržiūrėti atsakymą",
    ChangeStatusC: "Pakeisti būseną į:",
    ChangeCatC: "Pakeisti kategoriją:",
    ChangeTopicTypeC: "Pakeisti temos tipą:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "klausimas",
    hasAccptAns: "turi priimtą atsakymą",
    aProblem: "problema",
    planToFix: "planuojama sutvarkyti",
    anIdea: "idėja",
    planToDo: "planuojama padaryti",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Ši forma buvo ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "uždaryta; jūs nebegalite jos užpildyti ir paskelbti.",

    ThisTopicClosed_1: "Ši tema buvo ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". Jūs vis tiek galite skelbti komentarus.",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "Šis puslapis buvo ištrintas",
    CatDeldPageToo: "Kategorija ištrinta, todėl šis puslapis taip pat buvo ištrintas",

    ThreadDeld: "Gija ištrinta",
    CmntDeld: "Komentaras ištrintas",
    PostDeld: "Pranešimas ištrintas",
    DiscDeld: "Diskusija ištrinta",
    PageDeld: "Puslapis ištrintas",
    PagePendAppr: "Puslapis laukia patvirtinimo",
    TitlePendAppr: "Pavadinimas laukia patvirtinimo",
    TextPendingApproval: "Tekstas laukia patvirtinimo",

    TooltipQuestClosedNoAnsw: "Šis klausimas buvo uždarytas be jokio priimto atsakymo.",
    TooltipTopicClosed: "Ši tema uždaryta.",

    TooltipQuestSolved: "Tai yra išspręstas klausimas",
    TooltipQuestUnsolved: "Tai yra neišspręstas klausimas",

    StatusDone: "Atlikta",
    TooltipProblFixed: "Tai buvo sutvarkyta",
    TooltipDone: "Tai buvo atlikta",

    StatusStarted: "Pradėta",
    TooltipFixing: "Mes pradėjome tai tvarkyti",      // "We're currently" —> "We've started"
    TooltipImplementing: "Mes pradėjome tai daryti", //  -""-

    StatusPlanned: "Suplanuota",
    TooltipProblPlanned: "Mes planuojame tai sutvarkyti",
    TooltipIdeaPlanned: "Mes planuojame tai padaryti",   // or "to implement this"?

    StatusNew: "Nauja",
    StatusNewDtl: "Nauja tema, diskutuojama",
    TooltipUnsProbl: "Tai yra neišspręsta problema",
    TooltipIdea: "Tai yra idėja",

    TooltipPersMsg: "Asmeninė žinutė",
    TooltipChat: "# reiškia pokalbių kanalą",
    TooltipPrivChat: "Tai yra privatus pokalbių kanalą",

    TooltipPinnedGlob: "\nPrisegta globaliai.",
    TooltipPinnedCat: "\nPrisegta šioje kategorijoje.",

    SolvedClickView_1: "Išspręsta pranešime Nr. ",
    SolvedClickView_2: ", spustelėkite peržiūrai",

    PostHiddenClickShow: "Pranešimas paslėptas; spustelėkite peržiūrai",
    ClickSeeMoreRepls: "Rodyti daugiau atsakymų",      // removed "Click to .." but only in en_US
    ClickSeeMoreComments: "Rodyti daugiau komentarų",  //
    ClickSeeThisComment: "Spustelėkite, norėdami parodyti šį komentarą",
    clickToShow: "spustelėkite peržiūrai",

    ManyDisagree: "Daugelis nesutinka su tuo:",
    SomeDisagree: "Kai kurie nesutinka su tuo:",

    PendAppr: "Laukia patvirtinimo",
    CmtPendAppr: "Komentaras laukia patvirtinimo, paskelbtas ",
    CmtBelowPendAppr: (isYour) => (isYour ? "Jūsų" : "Žemiau esantis") + " komentaras laukia patvirtinimo.",

    _and: " ir",

    repliesTo: "atsakymai į",
    InReplyTo: "Atsakant į",
    YourReplyTo: "Jūsų atsakymas į ",  //
    YourChatMsg: "Jūsų pokalbio žinutė: ",   //
    YourDraft: "Jūsų juodraštis",    //
    YourEdits: "Jūsų redagavimai: ",   //
    YourProgrNoteC: "Jūsų pažangos pastaba:",  //
    aProgrNote: "pažangos pastaba: ",  //

    ReplyingToC: "Atsakoma į:",    //
    ScrollToPrevw_1: "Slinkite į ",  //
    ScrollToPrevw_2: "peržiūrą",     //

    UnfinEdits: "Nebaigti redagavimai",  //
    ResumeEdting: "Tęsti redagavimą",  //
    DelDraft: "Ištrinti juodraštį",   //

    ClickViewEdits: "Spustelėkite, norėdami peržiūrėti senus redagavimus",

    By: "Autorius: ", // ... someones name

    // Discussion ...
    aboutThisIdea: "apie tai, kaip ir ar įgyvendinti šią idėją",
    aboutThisProbl: "apie tai, kaip ir ar sutvarkyti šią problemą",

    AddProgrNote: "Pridėti pažangos pastabą",
    // Progress ...
    withThisIdea: "įgyvendinant šią idėją",
    withThisProbl: "sprendžiant šią problemą",
    withThis: "daranti tai",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Pranešimai apie šią temą:",

    // If is a direct message topic, members listed below this text.
    Msg: "Žinutė",

    SmrzRepls: "Apibendrinti atsakymus",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) => {
        let replStr;
        if (numReplies % 10 === 1 && numReplies % 100 !== 11) replStr = "atsakymas";
        else if (numReplies % 10 >= 2 && (numReplies % 100 < 10 || numReplies % 100 >= 20)) replStr = "atsakymai";
        else replStr = "atsakymų";

        let minStr;
        if (minutes % 10 === 1 && minutes % 100 !== 11) minStr = "minutė";
        else if (minutes % 10 >= 2 && (minutes % 100 < 10 || minutes % 100 >= 20)) minStr = "minutės";
        else minStr = "minučių";

        return `Yra ${numReplies} ${replStr}. Numatomas skaitymo laikas: ${minutes} ${minStr}`;
    },

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Atlikta. Apibendrinti ${numSummarized} atsakymai iš ${numShownBefore} anksčiau rodytų atsakymų.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Uždaryti temą",  //
    CloseOwnQuestionTooltip: "Uždarykite šį klausimą, jei jums nebereikia atsakymo.",
    CloseOthersQuestionTooltip: "Uždarykite šį klausimą, jei į jį nereikia atsakyti, pvz., jei " +
        "jis ne į temą arba jau atsakyta kitoje temoje.",
    CloseToDoTooltip: "Uždarykite šį darbą, jei jo nebereikia atlikti ar pataisyti.",
    CloseTopicTooltip: "Uždarykite šią temą, jei jos nebereikia toliau svarstyti.",

    AcceptBtnExpl: "Priimti tai kaip atsakymą į klausimą ar problemą",
    SolutionQ: "Sprendimas?",
    ClickUnaccept: "Spustelėkite, norėdami atšaukti šio atsakymo priėmimą",
    PostAccepted: "Šis pranešimas buvo priimtas kaip atsakymas",

    NumLikes: (num: number) => {
        if (num % 10 === 1 && num % 100 !== 11) return `${num} Patinka`;
        return `${num} Patinka`; // "Patinka" stays same in most contexts in LT for "Likes"
    },
    NumDisagree: (num: number) => `${num} Nesutinka`,
    NumBury: (num: number) => num === 1 ? "1 Paslėptas" : num + " Paslėpti",
    NumUnwanted: (num: number) => num === 1 ? "1 Nepageidaujamas" : num + " Nepageidaujami",

    MoreVotes: "Daugiau balsų...",
    LikeThis: "Patinka",
    LinkToPost: "Nuoroda į šį pranešimą",
    Report: "Pranešti",
    ReportThisPost: "Pranešti apie šį pranešimą",
    Admin: "Administratorius",
    DiscIx: "Diskusijų indeksas",

    Disagree: "Nesutinku",
    DisagreeExpl: "Spustelėkite čia, jei nesutinkate su šiuo pranešimu arba norite įspėti kitus apie faktines klaidas.",
    Bury: "Paslėpti",
    BuryExpl: "Spustelėkite, norėdami surūšiuoti kitus pranešimus prieš šį pranešimą. Tik forumo darbuotojai gali matyti jūsų balsą.",
    Unwanted: "Nepageidaujamas",
    UnwantedExpl: "Jei nenorite šio pranešimo šioje svetainėje. Tai sumažintų mano pasitikėjimą pranešimo autoriumi. Tik forumo darbuotojai gali matyti jūsų balsą.",

    AddTags: "Pridėti / pašalinti žymas",
    UnWikify: "Atšaukti Wiki būseną",
    Wikify: "Padaryti Wiki",
    PinDeleteEtc: "Prisegti / Ištrinti / Kategorija ...",
  },


  // Share dialog

  sd: {
    Copied: "Nukopijuota.",
    CtrlCToCopy: "Paspauskite CTRL+C, kad nukopijuotumėte.",
    ClickToCopy: "Spustelėkite, norėdami nukopijuoti nuorodą.",
  },


  // Chat

  c: {
    About_1: "Tai yra ",
    About_2: " pokalbių kanalas, kurį sukūrė ",
    ScrollUpViewComments: "Slinkite aukštyn, norėdami pamatyti senesnius komentarus",
    Purpose: "Tikslas:",
    MessageDeleted: "(Žinutė ištrinta)",
    JoinThisChat: "Prisijungti prie šio pokalbio",
    PostMessage: "Paskelbti žinutę",
    AdvancedEditor: "Išplėstinis redaktorius",
    TypeTitle: "Įveskite pavadinimą — apie ką šis pokalbis, keliais žodžiais?",
    TypePurpose: "Įveskite tikslą — gali būti ilgesnis už pavadinimą, aprašomojo pobūdžio.",
    TypeHere: "Rašykite čia. Galite naudoti Markdown ir HTML.",
  },


  // My Menu

  mm: {
    NeedsReview: "Reikia peržiūrėti ",
    AdminHelp: "Admin pagalba ",
    StaffHelp: "Darbuotojų pagalba ",
    DraftsEtc: "Juodraščiai, žymės, užduotys",
    MoreNotfs: "Peržiūrėti visus pranešimus",
    DismNotfs: "Pažymėti visus kaip perskaitytus",
    ViewProfile: "Peržiūrėti savo profilį",
    ViewGroups: "Peržiūrėti grupes",
    LogOut: "Atsijungti",
    UnhideHelp: "Rodyti paslėptus pagalbos pranešimus",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Slinkti į:",
    Scroll: "Slinkti",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "G",
    Back_2: "rįžti",
    BackExpl: "Slinkti atgal į ankstesnę poziciją šiame puslapyje",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Puslapio viršus",
    PgTopHelp: "Eiti į puslapio viršų. Klaviatūros trumpinys: 1",
    Repl: "Atsakymai",
    ReplHelp: "Eiti į atsakymų skiltį. Trumpinys: 2",
    Progr: "Pažanga",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Eiti į pažangos skiltį. Trumpinys: 3",
    PgBtm: "Puslapio apačia",
    Btm: "Apačia",
    BtmHelp: "Eiti į puslapio apačią. Trumpinys: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", ir ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " kad grįžtumėte atgal",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Pasirinkti vartotojus",
    AddUsers: "Pridėti vartotojus",
  },


  // About user dialog

  aud: {
    IsMod: "Yra moderatorius.",
    IsAdm: "Yra administratorius.",
    IsDeld: "Yra deaktyvuotas arba ištrintas.",
    ThisIsGuest: "Tai yra svečias, tai gali būti bet kas.",
    ViewInAdm: "Peržiūrėti administravimo srityje",
    ViewProfl: "Peržiūrėti profilį",
    ViewComments: "Peržiūrėti kitus komentarus",
    RmFromTpc: "Pašalinti iš temos",
    EmAdrUnkn: "El. pašto adresas nežinomas — šis svečias nebus informuotas apie atsakymus.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Nustatymai",
    Invites: "Pakvietimai",
    DraftsEtc: "Juodraščiai ir kt.",
    About: "Apie",
    Privacy: "Privatumas",
    Security: "Saugumas",
    Account: "Paskyra",
    Interface: "Sąsaja",

    // ----- Overview stats

    JoinedC: "Prisijungė: ",
    PostsMadeC: "Paskelbta pranešimų: ",
    LastPostC: "Paskutinis pranešimas: ",
    LastSeenC: "Paskutinį kartą matytas: ",
    TrustLevelC: "Pasitikėjimo lygis: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Įkelti nuotrauką",
    ChangePhoto: "Pakeisti nuotrauką",
    ImgTooSmall: "Nuotrauka per maža: turėtų būti bent 100 x 100",

    // ----- Activity

    OnlyStaffCanSee: "Tik darbuotojai ir patikimi pagrindiniai nariai gali tai matyti.",
    OnlyMbrsCanSee: "Tik žmonės, kurie kurį laiką buvo aktyvūs nariai, gali tai matyti.",
    Nothing: "Nėra ko rodyti",
    Posts: "Pranešimai",
    NoPosts: "Pranešimų nėra.",
    Topics: "Temos",
    NoTopics: "Temų nėra.",

    // ----- User status

    UserBanned: "Šis vartotojas yra užblokuotas",
    UserSuspended: (dateUtc: string) => `Šio vartotojo narystė sustabdyta iki ${dateUtc} UTC`,
    ReasonC: "Priežastis: ",

    DeactOrDeld: "Buvo deaktyvuotas arba ištrintas.",
    isGroup: " (grupė)",
    isGuest: " — svečias, gali būti bet kas",
    isMod: " – moderatorius",
    isAdmin: " – administratorius",
    you: "(jūs)",

    // ----- Notifications page

    NoNotfs: "Pranešimų nėra",
    NotfsToYouC: "Pranešimai jums:",
    NotfsToOtherC: (name: string) => `Pranešimai ${name}:`,
    DefNotfsSiteWide: "Numatytieji pranešimai visoje svetainėje",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "skirta",

    // ----- Drafts Etc page

    NoDrafts: "Juodraščių nėra",
    YourDraftsC: "Jūsų juodraščiai:",
    DraftsByC: (name: string) => `${name} juodraščiai:`,

    // ----- Invites page

    InvitesIntro: "Čia galite pakviesti žmones prisijungti prie šios svetainės. ",
    InvitesListedBelow: "Pakvietimai, kuriuos jau išsiuntėte, yra išvardyti žemiau.",
    NoInvites: "Jūs dar nieko nepakvietėte.",

    InvitedEmail: "Pakviestas el. paštas",
    WhoAccepted: "Narys, kuris priėmė",
    InvAccepted: "Pakvietimas priimtas",
    InvSent: "Pakvietimas išsiųstas",
    JoinedAlready: "Jau prisijungė",

    SendAnInv: "Kviesti žmones", // was: "Send an Invite"
    SendInv: "Siųsti pakvietimus",   // is just "Send invite" (singularis) in all other langs
    SendInvExpl:  // changed to pluralis
        "Mes nusiųsime jūsų draugams trumpą el. laišką. Jie spustelės nuorodą " +
        "ir prisijungs nedelsiant, nereikės jokio prisijungimo. " +
        "Jie taps įprastais nariais, o ne moderatoriais ar administratoriais.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Atlikta. Aš nusiųsiu piems el. laišką.",
    NoOneToInv: "Nėra ko kviesti.",
    InvNotfLater: "Aš jus informuosiu vėliau, kai juos pakviesiu.",
    AlreadyInvSendAgainQ: "Šie asmenys jau buvo pakviesti — galbūt norėtumėte juos pakviesti dar kartą?",
    InvErr_1: "Dėl šių atsirado ",
    InvErr_2: "klaidos",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Šie asmenys jau prisijungė, todėl jų nepakviečiau:",
    ResendInvsQ: "Siųsti pakvietimus šiems žmonėms dar kartą? Jie jau buvo pakviesti.",
    InvAgain: "Kviesti dar kartą",

    // ----- Preferences, About

    AboutYou: "Apie jus",
    WebLink: "Bet kuri jūsų svetainė ar puslapis.",

    NotShownCannotChange: "Nerodoma viešai. Negalima pakeisti.",

    // The full name or alias:
    NameOpt: "Vardas (nebūtina)",

    NotShown: "Nerodoma viešai.",

    // The username:
    MayChangeFewTimes: "Galite jį pakeisti tik kelis kartus.",
    notSpecified: "(nenurodyta)",
    ChangeUsername_1: "Vartotojo vardą galite pakeisti tik kelis kartus.",
    ChangeUsername_2: "Keičiant jį per dažnai, kiti gali sutrikti — " +
        "jie nežinos, kaip jus @paminėti.",

    NotfAboutAll: "Būti informuotam apie kiekvieną naują pranešimą (nebent nutildytumėte temą ar kategoriją)",
    NotfAboutNewTopics: "Būti informuotam apie naujas temas (nebent nutildytumėte kategoriją)",

    ActivitySummaryEmails: "Veiklos santraukos el. laiškai",

    EmailSummariesToGroup:
        "Kai šios grupės nariai čia nesilanko, pagal numatytuosius nustatymus siųskite jiems el. paštu " +
        "populiarių temų ir kitų dalykų santraukas.",
    EmailSummariesToMe:
        "Kai aš čia nesilankau, siųskite man el. paštu " +
        "populiarių temų ir kitų dalykų santraukas.",

    AlsoIfTheyVisit: "Siųskite jiems el. laiškus, net jei jie lankosi čia reguliariai.",
    AlsoIfIVisit: "Siųskite man el. laiškus, net jei lankausi čia reguliariai.",

    HowOftenWeSend: "Kaip dažnai turėtume siųsti šiuos el. laiškus?",
    HowOftenYouWant: "Kaip dažnai norite gauti šiuos el. laiškus?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Paslėpti jūsų naujausią veiklą nuo nepažįstamų ir naujų narių?",
    HideActivityStrangers_2: "(Bet ne nuo tų, kurie kurį laiką buvo aktyvūs nariai.)",
    HideActivityAll_1: "Paslėpti jūsų naujausią veiklą nuo visų?",
    HideActivityAll_2: "(Išskyrus darbuotojus ir patikimus pagrindinius narius.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "El. pašto adresai",
    PrimaryDot: "Pagrindinis. ",
    VerifiedDot: "Patvirtintas. ",
    NotVerifiedDot: "Nepatvirtintas. ",
    ForLoginWithDot: (provider: string) => `Prisijungimui per ${provider}. `,
    MakePrimary: "Padaryti pagrindiniu",
    AddEmail: "Pridėti el. pašto adresą",
    TypeNewEmailC: "Įveskite naują el. pašto adresą:",
    MaxEmailsInfo: (numMax: number) => `(Negalite pridėti daugiau nei ${numMax} adresų.)`,
    EmailAdded_1: "Pridėta. Mes išsiuntėme jums patvirtinimo el. laišką — ",
    EmailAdded_2: "patikrinkite savo el. pašto dėžutę.",
    SendVerifEmail: "Siųsti patvirtinimo el. laišką",

    EmailStatusExpl:
        "('Pagrindinis' reiškia, kad galite prisijungti naudodami šį adresą ir mes siunčiame pranešimus į jį. " +
        "'Patvirtintas' reiškia, kad spustelėjote patvirtinimo nuorodą adreso patvirtinimo el. laiške.)",

    // Password:
    ChangePwdQ: "Pakeisti slaptažodį?",
    CreatePwdQ: "Sukurti slaptažodį?",
    WillGetPwdRstEml: "Gausite slaptažodžio nustatymo iš naujo el. laišką.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Nėra",

    // Logins:
    LoginMethods: "Prisijungimo būdai",
    commaAs: ", kaip: ",

    // One's data:
    YourContent: "Jūsų turinys",
    DownloadPosts: "Atsisiųsti pranešimus",
    DownloadPostsHelp: "Sukuriamas JSON failas su jūsų paskelbtų temų ir komentarų kopija.",
    DownloadPersData: "Atsisiųsti asmens duomenis",
    DownloadPersDataHelp: "Sukuriamas JSON failas su jūsų asmens duomenų kopija, pvz., jūsų vardu " +
        "(jei nurodėte vardą) ir el. pašto adresu.",


    // Delete account:
    DangerZone: "Pavojinga zona",
    DeleteAccount: "Ištrinti paskyrą",
    DeleteYourAccountQ:
        "Ištrinti jūsų paskyrą? Mes pašalinsime jūsų vardą, pamiršime el. pašto adresą, slaptažodį ir " +
        "bet kokias internetines tapatybes (pvz., „Facebook“ ar „Twitter“ prisijungimą). " +
        "Jūs nebegalėsite vėl prisijungti. Tai negali būti atšaukta.",
    DeleteUserQ:
        "Ištrinti šį vartotoją? Mes pašalinsime vardą, pamiršime el. pašto adresą, slaptažodį ir " +
        "internetines tapatybes (pvz., „Facebook“ ar „Twitter“ prisijungimą). " +
        "Vartotojas nebegalės vėl prisijungti. Tai negali būti atšaukta.",
    YesDelete: "Taip, ištrinti",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Grupės nariai",
    NoMembers: "Narių nėra.",
    MayNotListMembers: "Negalima rodyti narių sąrašo.",
    AddMembers: "Pridėti narius",
    BuiltInCannotModify: "Tai yra įmontuota grupė; jos negalima keisti.",
    NumMembers: (num: number) => {
        if (num % 10 === 1 && num % 100 !== 11) return `${num} narys`;
        if (num % 10 >= 2 && (num % 100 < 10 || num % 100 >= 20)) return `${num} nariai`;
        return `${num} narių`;
    },
    YouAreMember: "Jūs esate narys.",
    CustomGroupsC: "Individualios grupės:",
    BuiltInGroupsC: "Įmontuotos grupės:",
    DeleteGroup: "Ištrinti šią grupę",
  },


  // Create user dialog

  cud: {
    CreateUser: "Sukurti vartotoją",
    CreateAccount: "Sukurti paskyrą",
    EmailC: "El. paštas:",  // REMOVE move to t.EmailC instead
    keptPriv: "bus laikomas privačiai",
    forNotfsKeptPriv: "pranešimams apie atsakymus, laikomas privačiai",
    EmailVerifBy_1: "Jūsų el. paštas buvo patvirtintas ",
    EmailVerifBy_2: ".",
    UsernameC: "Vartotojo vardas:",
    FullNameC: "Vardas, pavardė:",
    optName: "nebūtina",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "Paskyra sukurta. Jūs buvote prijungtas.",  // COULD say if verif email sent too?
    AlmostDone:
        "Beveik baigta! Jums tiesiog reikia patvirtinti savo el. pašto adresą. Mes " +
        "išsiuntėme jums el. laišką. Spustelėkite el. laiške esančią nuorodą, kad suaktyvintumėte " +
        "savo paskyrą. Galite uždaryti šį puslapį.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Sąlygos ir privatumas",

    Accept_1: "Ar sutinkate su mūsų ",
    TermsOfService: "Paslaugų teikimo sąlygomis",
    TermsOfUse: "Naudojimo sąlygomis",
    Accept_2: " ir ",
    PrivPol: "Privatumo politika",
    Accept_3_User: "?",
    Accept_3_Owner: " svetainės savininkams?",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Taip, sutinku",
  },


  // Password input

  pwd: {
    PasswordC: "Slaptažodis:",
    StrengthC: "Stiprumas: ",
    FairlyWeak: "Gana silpnas.",
    toShort: "per trumpas",
    TooShort: (minLength: number) => `Per trumpas. Turėtų būti bent ${minLength} simboliai`,
    PlzInclDigit: "Prašome įtraukti skaitmenį arba specialų simbolį",
    TooWeak123abc: "Per silpnas. Nenaudokite slaptažodžių, tokių kaip „12345“ arba „abcde“.",
    AvoidInclC: "Venkite į slaptažodį įtraukti (dalis) savo vardo ar el. pašto adreso:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Puslapis nerastas arba prieiga uždrausta.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Jūs apsimetate kuo nors kitu, kas gali neturėti prieigos prie visų " +
        "šios svetainės dalių.",

    IfYouThinkExistsThen: "Jei manote, kad puslapis egzistuoja, prisijunkite kaip vartotojas, kuris gali jį pasiekti. ",
    LoggedInAlready: "(Jūs jau esate prisijungęs, bet galbūt tai netinkama paskyra?) ",
    ElseGoToHome_1: "Priešingu atveju galite ",
    ElseGoToHome_2: "eiti į pagrindinį puslapį.",

    CreateAcconut: "Sukurti paskyrą",
    ContinueWithDots: "Tęsti su ...",
    SignUp: "Prisijungti",
    LogIn: "Prisijungti",
    LogInWithPwd: "Prisijungti su slaptažodžiu",
    CreateAdmAcct: "Sukurti administratoriaus paskyrą:",
    AuthRequired: "Norint pasiekti šią svetainę, reikalingas tapatybės patvirtinimas",
    LogInToLike: "Prisijunkite, kad pamėgtumėte šį pranešimą",
    LogInToSubmit: "Prisijunkite ir pateikite",
    LogInToComment: "Prisijunkite, kad parašytumėte komentarą",
    LogInToCreateTopic: "Prisijunkite, kad sukurtumėte temą",

    //AlreadyHaveAcctQ: "You have an account? ",  // changed "Already have...?" to "You have...?"
    OrLogIn_1: "Arba ",         // "Or "
    OrLogIn_2: "Prisijunkite",      // "Log in" (this is a button)
    OrLogIn_3: " vietoj to",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "Arba ",
    SignUpInstead_2: "Sukurkite paskyrą", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: ", arba tiesiog ",
    OrTypeName_2: "įveskite vardą",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "Arba sukurkite paskyrą:",
    OrTypeName: "Arba įveskite savo vardą:",
    OrLogIn: "Arba prisijunkite:",
    YourNameQ: "Jūsų vardas?",

    BadCreds: "Neteisingas vartotojo vardas arba slaptažodis",

    UsernameOrEmailC: "Vartotojo vardas arba el. paštas:",
    PasswordC: "Slaptažodis:",
    ForgotPwd: "Pamiršote slaptažodį?",

    NoPwd: "Jūs dar nepasirinkote slaptažodžio.",
    CreatePwd: "Sukurti slaptažodį",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Prašome pasakyti mums, kas jums kelia nerimą.",
    ThanksHaveReported: "Ačiū. Jūs pranešėte apie tai. Forumo darbuotojai peržiūrės.",
    ReportComment: "Pranešti apie komentarą",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Šiame pranešime yra asmens duomenų, pavyzdžiui, kažkieno tikrasis vardas.",
    OptOffensive: "Šiame pranešime yra įžeidžiančio ar nepagarbaus turinio.",
    OptSpam: "Šis pranešimas yra nepageidaujama reklama.",
    OptOther: "Pranešti darbuotojams apie šį pranešimą dėl kokios nors kitos priežasties.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "Pagalbos pranešimus galite rodyti vėl, jei esate prisijungęs, " +
        "spustelėję savo vardą ir tada ",
    YouCanShowAgain_2: "Rodyti paslėptus pagalbos pranešimus",
  },


  // Editor

  e: {
    SimilarTopicsC: "Panašios temos:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "Apgailestaujame, bet šiuo metu vienu metu galite įkelti tik vieną failą",
    PleaseFinishPost: "Pirmiausia pabaikite rašyti savo pranešimą",
    PleaseFinishChatMsg: "Pirmiausia pabaikite rašyti savo pokalbio žinutę",
    PleaseFinishMsg: "Pirmiausia pabaikite rašyti savo žinutę",
    PleaseSaveEdits: "Pirmiausia išsaugokite dabartinius redagavimus",
    PleaseSaveOrCancel: "Pirmiausia išsaugokite arba atšaukite naują temą",
    CanContinueEditing: "Galite tęsti teksto redagavimą, jei vėl atidarysite redaktorių.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Prašome neištrinti viso teksto. Parašykite ką nors.",
    PleaseWriteSth: "Prašome ką nors parašyti.",
    PleaseWriteTitle: "Prašome parašyti temos pavadinimą.",
    PleaseWriteMsgTitle: "Prašome parašyti žinutės pavadinimą.",
    PleaseWriteMsg: "Prašome parašyti žinutę.",

    exBold: "paryškintas tekstas",
    exEmph: "pabrėžtas tekstas",
    exPre: "iš anksto suformatuotas tekstas",
    exQuoted: "cituojamas tekstas",
    ExHeading: "Antraštė",

    TitlePlaceholder: "Įveskite pavadinimą — apie ką tai, vienu trumpu sakiniu?",

    EditPost_1: "Redaguoti ",
    EditPost_2: "pranešimą ",

    TypeChatMsg: "Įveskite pokalbio žinutę:",
    YourMsg: "Jūsų žinutė:",
    CreateTopic: "Sukurti naują temą",
    CreateCustomHtml: "Sukurti individualų HTML puslapį (pridėkite savo <h1> antraštę)",
    CreateInfoPage: "Sukurti informacinį puslapį",
    CreateCode: "Sukurti pradinio kodo puslapį",
    AskQuestion: "Užduoti klausimą",
    ReportProblem: "Pranešti apie problemą",
    SuggestIdea: "Pasiūlyti idėją",
    NewChat: "Pokalbio pavadinimas ir tikslas",  // changed from "New chat channel ..." to just "Chat".
    NewPrivChat: "Privataus pokalbio pavadinimas ir tikslas",  // changed from "New private chat" to just "Private chat".
    AppendComment: "Pridėti komentarą puslapio apačioje:",

    ReplyTo: "Atsakyti į ",
    ReplyTo_theOrigPost: "originalų pranešimą",
    ReplyTo_post: "pranešimą ",
    AddCommentC: "Pridėti komentarą:",   // & dupl t.AddComment

    PleaseSelectPosts: "Pasirinkite vieną ar daugiau pranešimų, į kuriuos norite atsakyti.",

    Save: "Išsaugoti",
    edits: "redagavimai",

    PostReply: "Paskelbti atsakymą",
    PostComment: "Paskelbti komentarą",

    Post: "Paskelbti",
    comment: "komentarą",
    question: "klausimą",

    PostMessage: "Paskelbti žinutę",
    SimpleEditor: "Paprastas redaktorius",

    Send: "Siųsti",
    message: "žinutę",

    Create: "Sukurti",
    page: "puslapį",
    chat: "pokalbį",
    idea: "idėją",
    topic: "temą",

    Submit: "Pateikti",
    problem: "problemą",

    ViewOldEdits: "Peržiūrėti senus redagavimus",

    UploadBtnTooltip: "Įkelti failą ar nuotrauką",
    BoldBtnTooltip: "Padaryti tekstą paryškintą",
    EmBtnTooltip: "Pabrėžti",
    QuoteBtnTooltip: "Cituoti",
    PreBtnTooltip: "Iš anksto suformatuotas tekstas",
    HeadingBtnTooltip: "Antraštė",

    TypeHerePlaceholder: "Rašykite čia. Galite naudoti Markdown ir HTML. Vilkite ir numeskite nuotraukas, kad jas įklijuotumėte.",

    Maximize: "Padidinti",
    ToNormal: "Grįžti į įprastą dydį",
    TileHorizontally: "Išdėstyti horizontaliai",

    PreviewC: "Peržiūra:",
    TitleExcl: " (be pavadinimo)",
    ShowEditorAgain: "Rodyti redaktorių vėl",
    Minimize: "Sumažinti",

    PreviewInfo: "Čia galite pamatyti, kaip atrodys jūsų pranešimas.",
    CannotType: "Čia rašyti negalite.",

    LoadingDraftDots: "Įkeliamas juodraštis...",
    DraftUnchanged: "Nepakeista.",
    CannotSaveDraftC: "Nepavyko išsaugoti juodraščio:",
    DraftSavedBrwsr: "Juodraštis išsaugotas naršyklėje.",   //
    DraftSaved: (nr: string | number) => `Juodraštis ${nr} išsaugotas.`,
    DraftDeleted: (nr: string | number) => `Juodraštis ${nr} ištrintas.`,
    WillSaveDraft: (nr: string | number) => `Bus išsaugotas juodraštis ${nr} ...`,
    SavingDraft: (nr: string | number) => `Saugomas juodraštis ${nr} ...`,
    DeletingDraft: (nr: string | number) => `Trinamas juodraštis ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Pasirinkti kategoriją",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Pasirinkite temos tipą:",
    DiscussionExpl: "Diskusija apie ką nors.",
    QuestionExpl: "Vienas atsakymas gali būti pažymėtas kaip priimtas atsakymas.",
    ProblExpl: "Jei kažkas sugedo ar neveikia. Gali būti pažymėta kaip sutvarkyta/išspręsta.",
    IdeaExpl: "Pasiūlymas. Gali būti pažymėta kaip atlikta/įgyvendinta.",
    ChatExpl: "Galbūt niekada nesibaigiantis pokalbis.",
    PrivChatExpl: "Matoma tik žmonėms, kurie yra pakviesti prisijungti prie pokalbio.",

    CustomHtml: "Individualus HTML puslapis",
    InfoPage: "Informacinis puslapis",
    Code: "Kodas",
    EmbCmts: "Įmontuoti komentarai",
    About: "Apie",
    PrivChat: "Privatus pokalbis",
    Form: "Forma",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Daugiau bendruomenių, prie kurių galima prisijungti, nėra.",
    SelCmty: "Pasirinkti bendruomenę ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "Ieškoti pagalbos",  //
    TxtToFind: "Ieškomas tekstas",
  },


  // No internet

  ni: {
    NoInet: "Nėra interneto ryšio",
    PlzRefr: "Atnaujinkite puslapį, kad pamatytumėte naujausius pakeitimus. (Ryšys buvo nutrūkęs)",
    RefrNow: "Atnaujinti dabar",
  },


  PostDeleted: (postNr: number) => `Tas pranešimas, Nr. ${postNr}, buvo ištrintas.`,
  NoSuchPost: (postNr: number) => `Šiame puslapyje nėra pranešimo Nr. ${postNr}.`,
  NoPageHere: "Šis puslapis buvo ištrintas, niekada neegzistavo arba jūs neturite prieigos prie jo.",
  GoBackToLastPage: "Grįžti į paskutinį puslapį",

};
