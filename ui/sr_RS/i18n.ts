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

var t_sr_RS: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Aktivno",
  Activity: "Aktivnost",
  Add: "Dodaj",
  AddingDots: "Dodavanje ...",
  AddComment: "Dodaj komentar",  // & dupl t.e.AddCommentC
  Admin: "Admin",
  AdvSearch: "Napredna pretraga",
  Anonym: "Anonimno",
  Away: "Odsutan",
  Back: "Nazad",
  BlogN: "Blog",
  Bookmarks: "Obeleživači",
  Cancel: "Otkaži",
  Categories: "Kategorije",
  Category: "Kategorija",
  ChangeV: "Promeni",
  ClickToShow: "Klikni za prikaz",
  ChangeDots: "Promeni ...",
  ChatN: "Ćaskanje",
  Chatting: "Ćaskanje",
  CheckYourEmail: "Proverite svoj e-mail",
  Close: "Zatvori",
  closed: "zatvoreno",
  comments: "komentara",   // as in:  "123 komentara"
  Continue: "Nastavi",
  Created: "Kreirano",
  Delete: "Obriši",
  Deleted: "Obrisano",
  DirectMessage: "Direktna poruka",
  Discussion: "Diskusija",
  discussion: "diskusija",
  done: "završeno",
  EditV: "Uredi",
  Editing: "Uređivanje",
  EmailC: "E-mail: ",   // copy t.cud.EmailC to here
  EmailAddress: "E-mail adresa",
  EmailAddresses: "E-mail adrese",
  EmailSentD: "E-mail poslat.",
  Forum: "Forum",
  GetNotifiedAbout: "Primaj obaveštenja o",
  GroupsC: "Grupe:",
  Hide: "Sakrij",
  Home: "Početna",
  Idea: "Ideja",
  Join: "Pridruži se",
  KbdShrtcsC: "Prečice na tastaturi: ",
  Loading: "Učitavanje...",
  LoadMore: "Učitaj još ...",
  LogIn: "Prijavi se",
  LoggedInAs: "Prijavljeni ste kao ",
  LogOut: "Odjavi se",
  Maybe: "Možda",
  Manage: "Upravljaj",
  Members: "Članovi",
  MessageN: "Poruka",
  MoreDots: "Još...",
  Move: "Premesti",
  Name: "Ime",
  NameC: "Ime:",
  NewTopic: "Nova tema",
  NoCancel: "Ne, otkaži",
  Notifications: "Obaveštenja",
  NotImplemented: "(Nije implementirano)",
  NotYet: "Još ne",
  NoTitle: "Bez naslova",
  NoTopics: "Nema tema.",
  Okay: "U redu",
  OkayDots: "U redu ...",
  Online: "Na mreži",
  onePerLine: "jedno po redu",
  PreviewV: "Pregled",
  Problem: "Problem",
  progressN: "napredak",
  Question: "Pitanje",
  Recent: "Nedavno",
  Remove: "Ukloni",
  Reopen: "Ponovo otvori",
  ReplyV: "Odgovori",
  Replying: "Odgovaranje",
  Replies: "Odgovori",
  replies: "odgovora",
  Save: "Sačuvaj",
  SavingDots: "Čuvanje ...",
  SavedDot: "Sačuvano.",
  Search: "Pretraga",
  SendMsg: "Pošalji poruku",
  ShowPreview: "Prikaži pregled",
  SignUp: "Pridruži se",  // don't change to "Sign Up" [join_or_signup]
  Solution: "Rešenje",
  started: "započeto",
  Summary: "Rezime",
  Submit: "Pošalji",
  Tag: "Oznaka",
  Tags: "Oznake",
  Tools: "Alati",
  Topics: "Teme",
  TopicTitle: "Naslov teme",
  TopicType: "Tip teme",
  UploadingDots: "Otpremanje...",
  Username: "Korisničko ime",
  Users: "Korisnici",
  Welcome: "Dobrodošli",
  Wiki: "Wiki",
  Yes: "Da",
  YesBye: "Da, zdravo",
  YesDoThat: "Da, uradi to",
  You: "Vi",
  you: "vi",

  // Trust levels.
  Guest:  "Gost",
  NewMember: "Novi član",
  BasicMember: "Osnovni član",
  FullMember: "Punopravni član",
  TrustedMember: "Pouzdani član",
  RegularMember: "Pouzdani redovni",  // renamed Regular Member —> Trusted Regular [RENREGLS]
  CoreMember: "Glavni član",

  // Periods.
  PastDay: "Protekli dan",
  PastWeek: "Protekle nedelje",
  PastMonth: "Protekle mesec",
  PastQuarter: "Protekle tromesečje",
  PastYear: "Protekle godine",
  AllTime: "Sve vreme",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "mes",  // months
  daysLtr: "d",      // days
  hoursLtr: "č",     // hours
  minsLtr: "m",      // minutes
  secsLtr: "s",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "pre 1 dan" : `pre ${numDays} dana`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "pre 1 sat" : `pre ${numHours} sati`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "pre 1 minut" : `pre ${numMins} minuta`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "pre 1 sekund" : `pre ${numSecs} sekundi`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "E-mail je obavezan",
    NoSpcs: "Bez razmaka, molim",
    InvldAddr: "Nije ispravna e-mail adresa",
    NoBadChrs: "Bez čudnih znakova, molim",

    // Full name input field:
    NotOnlSpcs: "Ne samo razmaci, molim",
    NoAt: "Bez @, molim",

    // Username input field:
    NoDash: "Bez crtica (-), molim",
    DontInclAt: "Ne uključujte @",
    StartEndLtrDgt: "Počnite i završite slovom ili cifrom",
    OnlLtrNumEtc: "Samo slova (a-z, A-Z), brojevi i _ (donja crta)",
    // This shown just below the username input:
    UnUnqShrt_1: "Vaše ",
    UnUnqShrt_2: "@korisničko_ime",
    UnUnqShrt_3: ", jedinstveno i kratko",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Treba da ima barem ${minLength} znakova`,
    TooLong: (maxLength: number) => `Predugačko. Treba da ima najviše ${maxLength} znakova`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Svaka objava",
    EveryPostInTopic: "Bićete obavešteni o svim novim odgovorima u ovoj temi.",
    EveryPostInCat: "Bićete obavešteni o svim novim temama i odgovorima u ovoj kategoriji.",
    EveryPostInTopicsWithTag: "Bićete obavešteni o novim temama sa ovom oznakom, i svim odgovorima u tim temama.",
    EveryPostWholeSite: "Bićete obavešteni o svim novim temama i odgovorima, bilo gde.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Nove teme",
    NewTopicsInCat: "Bićete obavešteni o novim temama u ovoj kategoriji.",
    NewTopicsWithTag: "Bićete obavešteni o novim temama sa ovom oznakom.",
    NewTopicsWholeSite: "Bićete obavešteni o novim temama, bilo gde.",

    Tracking: "Praćenje",

    Normal: "Normalno",
    NormalDescr: "Bićete obavešteni ako vam se neko obrati, takođe i indirektno, npr. " +
        "odgovor na odgovor vama.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Prigušeno",
    HushedDescr: "Bićete obavešteni samo ako vam se neko direktno obrati.",

    Muted: "Utišano",
    MutedTopic: "Bez obaveštenja.",
  },


  // Forum intro text

  fi: {
    Edit: "Uredi",
    Hide_1: "Sakrij",
    Hide_2: ", kliknite ",
    Hide_3: " da ponovo otvorite",
  },


  // Forum categories

  fcs: {
    All: "Sve", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Lista tema",

    // Select category dropdown

    from: "iz",  // used like so:  "From <Category Name>" or "From All Categories"
    in: "u",      // used like so:  "in <Category Name>" or "in All Categories"
    AllCats: "Sve kategorije",

    // Topic sort order

    Active: "Prvo aktivne",      // didn't add "first" yet to transls
    ActiveDescr: "Prikazuje nedavno aktivne teme prvo",

    New: "Novo",
    NewDescr: "Prikazuje najnovije teme prvo",

    Top: "Popularno",              // didn't rename from Top to Popular in transls
    TopDescr: "Prikazuje popularne teme prvo",

    // Topic filter dropdown

    AllTopics: "Sve teme",

    ShowAllTopics: "Prikaži sve teme",
    ShowAllTopicsDescr: "Ali ne i obrisane teme",

    WaitingTopics: "Teme na čekanju",
    OnlyWaitingDescr_1: "Prikazuje samo teme koje ", // changed "questions" to "topics"
    OnlyWaitingDescr_2: "čekaju ",
    OnlyWaitingDescr_3: "na rešenje ili da budu implementirane i završene",  // rewrote

    YourTopics: "Vaše teme",
    AssignedToYou: "Dodeljeno vama",

    DeletedTopics: "Prikaži obrisano",
    ShowDeleted: "Prikaži obrisano",
    ShowDeletedDescr: "Prikazuje sve teme, uključujući obrisane teme",

    // Rightmost buttons

    ViewCategories: "Pogledaj kategorije",
    EditCat: "Uredi kategoriju",
    CreateCat: "Napravi kategoriju",
    CreateTopic: "Napravi temu",
    PostIdea: "Objavi ideju",
    AskQuestion: "Postavi pitanje",
    ReportProblem: "Prijavi problem",
    CreateMindMap: "Napravi mapu uma",
    CreatePage: "Napravi stranicu",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Objašnjenje ikona...",
    IconExplanation: "Objašnjenje ikona:",
    ExplGenDisc: "Opšta diskusija.",
    ExplQuestion: "Pitanje bez prihvaćenog odgovora.",
    ExplAnswer: "Pitanje sa prihvaćenim odgovorom.",
    ExplIdea: "Ideja / sugestija.",
    ExplProblem: "Problem.",
    ExplPlanned: "Nešto što planiramo da uradimo ili popravimo.",
    ExplDone: "Nešto što je urađeno ili popravljeno.",
    ExplClosed: "Tema zatvorena.",
    ExplPinned: "Tema je uvek prva na listi (možda samo u svojoj kategoriji).",

    PopularTopicsComma: "Popularne teme, ",
    TopFirstAllTime: "Prikazuje najpopularnije teme prvo, sve vreme.",
    TopFirstPastDay: "Prikazuje teme popularne tokom proteklog dana.",

    CatHasBeenDeleted: "Ova kategorija je obrisana",

    TopicsActiveFirst: "Teme, nedavno aktivne prvo",
    TopicsNewestFirst: "Teme, najnovije prvo",

    CreatedOn: "Kreirano ",
    LastReplyOn: "\nPoslednji odgovor ",
    EditedOn: "\nUređeno ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "napravio temu",
    frequentPoster: "čest autor",
    mostRecentPoster: "najnoviji autor",

    inC: "u: ",

    TitleFixed: "Ovo je popravljeno",
    TitleDone: "Ovo je urađeno",
    TitleStarted: "Započeli smo ovo",
    TitleStartedFixing: "Započeli smo popravku ovoga",
    TitleUnsolved: "Ovo je nerešen problem",
    TitleIdea: "Ovo je ideja",
    TitlePlanningFix: "Planiramo da popravimo ovo",
    TitlePlanningDo: "Planiramo da uradimo ovo",
    TitleChat: "Ovo je kanal za ćaskanje",
    TitlePrivateChat: "Ovo je privatni kanal za ćaskanje",
    TitlePrivateMessage: "Privatna poruka",
    TitleInfoPage: "Ovo je informativna stranica",
    TitleDiscussion: "Diskusija",
    IsPinnedGlobally: "\nZakačeno je globalno, pa je prvo na listi.",
    IsPinnedInCat: "\nZakačeno je u svojoj kategoriji, pa je prvo na listi u toj kategoriji.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Nedavne teme (koje čekaju)",
    RecentTopicsInclDel: "Nedavne teme (uključujući obrisane)",
    RecentTopics: "Nedavne teme",
    _replies: " odgovora",
    _deleted: " (obrisano)",
    _defCat: " (podrazumevana kategorija)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Nedavne objave",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " na mreži u ovom ćaskanju",    // example: "5 online in this chat"
    NumOnlForum: " na mreži u ovom forumu",

    // Open left-sidebar button title.
    WatchbBtn: "Vaše teme",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Vaše nedavne teme, pridružena ćaskanja, direktne poruke",

    // Title shown on user profile pages.
    AbtUsr: "O korisniku",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Nazad sa profila korisnika",
    BackFromAdm: "Nazad iz admin dela",

    // Title shown on full text search page.
    SearchPg: "Stranica za pretragu",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Dodaj ...",
    RecentlyViewed: "Nedavno gledane teme",  // " topics"
    JoinedChats: "Pridružena ćaskanja",
    ChatChannels: "Kanali za ćaskanje",
    CreateChat: "Napravi kanal za ćaskanje",
    DirectMsgs: "Direktne poruke",
    NoChats: "Nema",    // meaning: "No chat messages"
    NoDirMsgs: "Nema",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Akcije teme",
    ViewPeopleHere: "Pogledaj ljude ovde",
    ViewAddRemoveMembers: "Pogledaj / dodaj / ukloni članove",
    ViewChatMembers: "Pogledaj članove ćaskanja",
    EditChat: "Uredi opis ćaskanja",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Napusti ovo ćaskanje",
    LeaveThisCommunity: "Napusti ovu zajednicu",
    JoinThisCommunity: "Pridruži se ovoj zajednici",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Nedavni komentari u ovoj temi:",
    NoComments: "Nema komentara.",

    YourBookmarks: "Vaši obeleživači:",

    UsersOnline: "Korisnici na mreži:",
    UsersOnlineForum: "Korisnici na mreži u ovom forumu:",
    UsersInThisChat: "Korisnici u ovom ćaskanju:",
    UsersInThisTopic: "Korisnici u ovoj temi:",

    GettingStartedGuide: "Admin vodič", // in other langs, was: "Getting Started Guide".
    AdminGuide: "Admin vodič",          // ... but what? It's here already, just reuse this transl field
    Guide: "Vodič",

    // How to hide the sidebar.
    CloseShortcutS: "Zatvori (prečica na tastaturi: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Dodaj još ljudi",

    // Shown next to one's own username, in a list of users.
    thatsYou: "to ste vi",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Izgleda da ste samo vi",
    YouAnd: "Vi, i ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " osoba koja" : " osobe koje";
      const have = "";
      return numStrangers + people + " se nisu prijavile";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    // "are sorted by" —> "might be"
    RepliesToTheLeft: "Odgovori levo mogu biti sortirani ",
    bestFirst: "najbolji-prvo.",
    ButBelow: "Ali ispod ",
    insteadBy: " isti odgovori su umesto toga sortirani ",
    newestFirst: "najnoviji-prvo.",

    SoIfLeave: "Pa ako odete i vratite se kasnije, ispod ćete naći ",
    allNewReplies: "sve nove odgovore.",
    Click: "Kliknite",
    aReplyToReadIt: " na odgovor ispod da biste ga pročitali — jer je prikazan samo isečak.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Klikni za promenu statusa",
    ClickToViewAnswer: "Klikni za prikaz odgovora",
    ViewAnswer: "Pogledaj odgovor",
    ChangeStatusC: "Promeni status u:",
    ChangeCatC: "Promeni kategoriju:",
    ChangeTopicTypeC: "Promeni tip teme:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "pitanje",
    hasAccptAns: "ima prihvaćen odgovor",
    aProblem: "problem",
    planToFix: "planiramo da popravimo",
    anIdea: "ideja",
    planToDo: "planiramo da uradimo",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Ova forma je ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "zatvorena; više je ne možete popuniti i objaviti.",

    ThisTopicClosed_1: "Ova tema je ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". I dalje možete slati komentare.",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "Ova stranica je obrisana",
    CatDeldPageToo: "Kategorija obrisana, pa je i ova stranica obrisana",

    ThreadDeld: "Nit obrisana",
    CmntDeld: "Komentar obrisan",
    PostDeld: "Objava obrisana",
    DiscDeld: "Diskusija obrisana",
    PageDeld: "Stranica obrisana",
    PagePendAppr: "Stranica čeka na odobrenje",
    TitlePendAppr: "Naslov čeka na odobrenje",
    TextPendingApproval: "Tekst čeka na odobrenje",

    TooltipQuestClosedNoAnsw: "Ovo pitanje je zatvoreno bez ikakvog prihvaćenog odgovora.",
    TooltipTopicClosed: "Ova tema je zatvorena.",

    TooltipQuestSolved: "Ovo je rešeno pitanje",
    TooltipQuestUnsolved: "Ovo je nerešeno pitanje",

    StatusDone: "Završeno",
    TooltipProblFixed: "Ovo je popravljeno",
    TooltipDone: "Ovo je urađeno",

    StatusStarted: "Započeto",
    TooltipFixing: "Započeli smo popravku ovoga",      // "We're currently" —> "We've started"
    TooltipImplementing: "Započeli smo rad na ovome", //  -""-

    StatusPlanned: "Planirano",
    TooltipProblPlanned: "Planiramo da popravimo ovo",
    TooltipIdeaPlanned: "Planiramo da uradimo ovo",   // or "to implement this"?

    StatusNew: "Novo",
    StatusNewDtl: "Nova tema, u toku diskusije",
    TooltipUnsProbl: "Ovo je nerešen problem",
    TooltipIdea: "Ovo je ideja",

    TooltipPersMsg: "Lična poruka",
    TooltipChat: "# znači kanal za ćaskanje",
    TooltipPrivChat: "Ovo je privatni kanal za ćaskanje",

    TooltipPinnedGlob: "\nZakačeno globalno.",
    TooltipPinnedCat: "\nZakačeno u ovoj kategoriji.",

    SolvedClickView_1: "Rešeno u objavi #",
    SolvedClickView_2: ", klikni za prikaz",

    PostHiddenClickShow: "Objava sakrivena; klikni za prikaz",
    ClickSeeMoreRepls: "Prikaži više odgovora",      // removed "Click to .." but only in en_US
    ClickSeeMoreComments: "Prikaži više komentara",  
    ClickSeeThisComment: "Klikni za prikaz ovog komentara",
    clickToShow: "klikni za prikaz",

    ManyDisagree: "Mnogi se ne slažu sa ovim:",
    SomeDisagree: "Neki se ne slažu sa ovim:",

    PendAppr: "Čeka na odobrenje",
    CmtPendAppr: "Komentar čeka na odobrenje, objavljen ",  // REMOVE  too complicated
    CmtBelowPendAppr: (isYour) => (isYour ? "Vaš" : "Taj") + " komentar ispod čeka na odobrenje.",

    _and: " i",

    repliesTo: "odgovori na",
    InReplyTo: "Kao odgovor na",
    YourReplyTo: "Vaš odgovor na ",  
    YourChatMsg: "Vaša poruka u ćaskanju: ",   
    YourDraft: "Vaš nacrt",    
    YourEdits: "Vaše izmene: ",   
    YourProgrNoteC: "Vaša beleška o napretku:",  
    aProgrNote: "beleška o napretku: ",  

    ReplyingToC: "Odgovaranje na:",    
    ScrollToPrevw_1: "Skroluj do ",  
    ScrollToPrevw_2: "pregleda",     

    UnfinEdits: "Nezavršene izmene",  
    ResumeEdting: "Nastavi uređivanje",  
    DelDraft: "Obriši nacrt",   

    ClickViewEdits: "Klikni za pregled starih izmena",

    By: "Od ", // ... someones name

    // Discussion ...
    aboutThisIdea: "o tome kako i da li raditi na ovoj ideji",
    aboutThisProbl: "o tome kako i da li popraviti ovo",

    AddProgrNote: "Dodaj belešku o napretku",
    // Progress ...
    withThisIdea: "sa radom na ovoj ideji",
    withThisProbl: "sa rešavanjem ovog problema",
    withThis: "sa radom na ovome",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Obaveštenja o ovoj temi:",

    // If is a direct message topic, members listed below this text.
    Msg: "Poruka",

    SmrzRepls: "Sumiraj odgovore",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `Ima ${numReplies} odgovora. Procenjeno vreme čitanja: ${minutes} minuta`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Završeno. Sumirano ${numSummarized} odgovora, od ${numShownBefore} prethodno prikazanih odgovora.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Zatvori temu",  
    CloseOwnQuestionTooltip: "Zatvorite ovo pitanje ako vam više nije potreban odgovor.",
    CloseOthersQuestionTooltip: "Zatvorite ovo pitanje ako mu nije potreban odgovor, npr. ako " +
        "je van teme ili je već odgovoreno u drugoj temi.",
    CloseToDoTooltip: "Zatvorite ovaj zadatak ako ne treba da se uradi ili popravi.",
    CloseTopicTooltip: "Zatvorite ovu temu ako joj nije potrebno dalje razmatranje.",

    AcceptBtnExpl: "Prihvati ovo kao odgovor na pitanje ili problem",
    SolutionQ: "Rešenje?",
    ClickUnaccept: "Klikni da poništiš prihvatanje ovog odgovora",
    PostAccepted: "Ova objava je prihvaćena kao odgovor",

    NumLikes: (num: number) => num === 1 ? "1 Sviđanje" : num + " Sviđanja",
    NumDisagree: (num: number) => num + " Neslaganja",
    NumBury: (num: number) => num === 1 ? "1 Potiskivanje" : num + " Potiskivanja",
    NumUnwanted: (num: number) => num === 1 ? "1 Nepoželjno" : num + " Nepoželjna",

    MoreVotes: "Još glasova...",
    LikeThis: "Sviđa mi se",
    LinkToPost: "Link do ove objave",
    Report: "Prijavi",
    ReportThisPost: "Prijavi ovu objavu",
    Admin: "Admin",
    DiscIx: "Indeks diskusija",

    Disagree: "Ne slažem se",
    DisagreeExpl: "Kliknite ovde da biste se neslagali sa ovom objavom, ili da upozorite druge na činjenične greške.",
    Bury: "Potisni",
    BuryExpl: "Kliknite da biste sortirali druge objave pre ove. Samo osoblje foruma može videti vaš glas.",
    Unwanted: "Nepoželjno",
    UnwantedExpl: "Ako ne želite ovu objavu na ovom sajtu. Ovo bi smanjilo poverenje koje imam " +
            "u autora objave. Samo osoblje foruma može videti vaš glas.",

    AddTags: "Dodaj/ukloni oznake",
    UnWikify: "Poništi Wiki",
    Wikify: "Učini Wiki",
    PinDeleteEtc: "Zakači / Obriši / Kategorija ...",
  },


  // Share dialog

  sd: {
    Copied: "Kopirano.",
    CtrlCToCopy: "Pritisnite CTRL+C za kopiranje.",
    ClickToCopy: "Kliknite za kopiranje linka.",
  },


  // Chat

  c: {
    About_1: "Ovo je ",
    About_2: " kanal za ćaskanje, kreirao ",
    ScrollUpViewComments: "Skrolujte nagore da vidite starije komentare",
    Purpose: "Svrha:",
    MessageDeleted: "(Poruka obrisana)",
    JoinThisChat: "Pridruži se ovom ćaskanju",
    PostMessage: "Objavi poruku",
    AdvancedEditor: "Napredni uređivač",
    TypeTitle: "Unesite naslov — o čemu se radi u ovom ćaskanju, u par reči?",
    TypePurpose: "Unesite svrhu — može biti duže od naslova, opisnije.",
    TypeHere: "Kucajte ovde. Možete koristiti Markdown i HTML.",
  },


  // My Menu

  mm: {
    NeedsReview: "Potrebna revizija ",
    AdminHelp: "Admin pomoć ",
    StaffHelp: "Pomoć osoblja ",
    DraftsEtc: "Nacrti, obeleživači, zadaci",
    MoreNotfs: "Pogledaj sva obaveštenja",
    DismNotfs: "Označi sve kao pročitano",
    ViewProfile: "Pogledaj svoj profil",
    ViewGroups: "Pogledaj grupe",
    LogOut: "Odjavi se",
    UnhideHelp: "Prikaži poruke pomoći",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Skroluj do:",
    Scroll: "Skroluj",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "Nazad",
    Back_2: "",
    BackExpl: "Skrolujte nazad na vašu prethodnu poziciju na ovoj stranici",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Vrh stranice",
    PgTopHelp: "Idite na vrh stranice. Prečica na tastaturi: 1",
    Repl: "Odgovori",
    ReplHelp: "Idite na sekciju sa odgovorima. Prečica: 2",
    Progr: "Napredak",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Idite na sekciju o napretku. Prečica: 3",
    PgBtm: "Dno stranice",
    Btm: "Dno",
    BtmHelp: "Idite na dno stranice. Prečica: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", i ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " za skrolovanje nazad",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Izaberi korisnike",
    AddUsers: "Dodaj korisnike",
  },


  // About user dialog

  aud: {
    IsMod: "Je moderator.",
    IsAdm: "Je administrator.",
    IsDeld: "Je deaktiviran ili obrisan.",
    ThisIsGuest: "Ovo je gostujući korisnik, u stvari može biti bilo ko.",
    ViewInAdm: "Pogledaj u admin delu",
    ViewProfl: "Pogledaj profil",
    ViewComments: "Pogledaj ostale komentare",
    RmFromTpc: "Ukloni iz teme",
    EmAdrUnkn: "E-mail adresa nepoznata — ovaj gost neće biti obavešten o odgovorima.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Podešavanja",
    Invites: "Pozivnice",
    DraftsEtc: "Nacrti itd",
    About: "O meni",
    Privacy: "Privatnost",
    Security: "Bezbednost",
    Account: "Nalog",
    Interface: "Interfejs",

    // ----- Overview stats

    JoinedC: "Pridružio se: ",
    PostsMadeC: "Objavio postova: ",
    LastPostC: "Poslednja objava: ",
    LastSeenC: "Poslednji put viđen: ",
    TrustLevelC: "Nivo poverenja: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Otpremi fotografiju",
    ChangePhoto: "Promeni fotografiju",
    ImgTooSmall: "Slika je premala: treba da bude barem 100 x 100",

    // ----- Activity

    OnlyStaffCanSee: "Samo osoblje i pouzdani glavni članovi mogu ovo videti.",
    OnlyMbrsCanSee: "Samo ljudi koji su aktivni članovi neko vreme mogu ovo videti.",
    Nothing: "Nema šta da se prikaže",
    Posts: "Objave",
    NoPosts: "Nema objava.",
    Topics: "Teme",
    NoTopics: "Nema tema.",

    // ----- User status

    UserBanned: "Ovaj korisnik je banovan",
    UserSuspended: (dateUtc: string) => `Ovaj korisnik je suspendovan do ${dateUtc} UTC`,
    ReasonC: "Razlog: ",

    DeactOrDeld: "Deaktiviran ili obrisan.",
    isGroup: " (grupa)",
    isGuest: " — gostujući korisnik, može biti bilo ko",
    isMod: " – moderator",
    isAdmin: " – administrator",
    you: "(vi)",

    // ----- Notifications page

    NoNotfs: "Nema obaveštenja",
    NotfsToYouC: "Obaveštenja vama:",
    NotfsToOtherC: (name: string) => `Obaveštenja korisniku ${name}:`,
    DefNotfsSiteWide: "Podrazumevana obaveštenja, na nivou sajta",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "za",

    // ----- Drafts Etc page

    NoDrafts: "Nema nacrta",
    YourDraftsC: "Vaši nacrti:",
    DraftsByC: (name: string) => `Nacrti korisnika ${name}:`,

    // ----- Invites page

    InvitesIntro: "Ovde možete pozvati ljude da se pridruže ovom sajtu. ",
    InvitesListedBelow: "Pozivnice koje ste već poslali su izlistane ispod.",
    NoInvites: "Još niste nikoga pozvali.",

    InvitedEmail: "Pozvani e-mail",
    WhoAccepted: "Član koji je prihvatio",
    InvAccepted: "Pozivnica prihvaćena",
    InvSent: "Pozivnica poslata",
    JoinedAlready: "Već se pridružio",

    SendAnInv: "Pozovi ljude", // was: "Send an Invite",
    SendInv: "Pošalji pozivnice",   // is just "Send invite" (singularis) in all other langs
    SendInvExpl:  // changed to pluralis
        "Poslaćemo vašim prijateljima kratak e-mail. Oni će kliknuti na link " +
        "da se odmah pridruže, bez potrebe za prijavom. " +
        "Oni će postati obični članovi, ne moderatori ili admini.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Završeno. Poslaću im e-mail.",
    NoOneToInv: "Nema koga da se pozove.",
    InvNotfLater: "Obavestiću vas kasnije kada ih pozovem.",
    AlreadyInvSendAgainQ: "Ovi su već pozvani — možda biste želeli da ih pozovete ponovo?",
    InvErr_1: "Ovi su rezultirali ",
    InvErr_2: "greškama",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Ovi su se već pridružili, pa ih nisam pozvao:",
    ResendInvsQ: "Ponovo pošalji pozivnice ovim ljudima? Oni su već pozvani.",
    InvAgain: "Pozovi ponovo",

    // ----- Preferences, About

    AboutYou: "O vama",
    WebLink: "Bilo koji vaš sajt ili stranica.",

    NotShownCannotChange: "Nije prikazano javno. Ne može se menjati.",

    // The full name or alias:
    NameOpt: "Ime (opciono)",

    NotShown: "Nije prikazano javno.",

    // The username:
    MayChangeFewTimes: "Možete ga promeniti samo nekoliko puta.",
    notSpecified: "(nije navedeno)",
    ChangeUsername_1: "Možete promeniti svoje korisničko ime samo nekoliko puta.",
    ChangeUsername_2: "Menjanje previše često može zbuniti druge — " +
        "neće znati kako da vas @spomenu.",

    NotfAboutAll: "Budi obavešten o svakoj novoj objavi (osim ako utišate temu ili kategoriju)",
    NotfAboutNewTopics: "Budi obavešten o novim temama (osim ako utišate kategoriju)",

    ActivitySummaryEmails: "E-mailovi sa rezimeom aktivnosti",

    EmailSummariesToGroup:
        "Kada članovi ove grupe ne dolaze ovde, onda im, po defaultu, šaljite " +
        "e-mailom rezime popularnih tema i drugih stvari.",
    EmailSummariesToMe:
        "Kada ne dolazim ovde, šaljite mi e-mailom " +
        "rezime popularnih tema i drugih stvari.",

    AlsoIfTheyVisit: "Šalji im e-mail čak i ako redovno dolaze.",
    AlsoIfIVisit: "Šalji mi e-mail čak i ako redovno dolazim.",

    HowOftenWeSend: "Koliko često da šaljemo ove e-mailove?",
    HowOftenYouWant: "Koliko često želite ove e-mailove?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Sakrijte vašu nedavnu aktivnost od stranaca i novih članova?",
    HideActivityStrangers_2: "(Ali ne od onih koji su aktivni članovi već neko vreme.)",
    HideActivityAll_1: "Sakrijte vašu nedavnu aktivnost od svih?",
    HideActivityAll_2: "(Osim za osoblje i pouzdane glavne članove.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "E-mail adrese",
    PrimaryDot: "Primarna. ",
    VerifiedDot: "Potvrđena. ",
    NotVerifiedDot: "Nije potvrđena. ",
    ForLoginWithDot: (provider: string) => `Za prijavu preko ${provider}. `,
    MakePrimary: "Učini primarnom",
    AddEmail: "Dodaj e-mail adresu",
    TypeNewEmailC: "Unesite novu e-mail adresu:",
    MaxEmailsInfo: (numMax: number) => `(Ne možete dodati više od ${numMax} adresa.)`,
    EmailAdded_1: "Dodato. Poslali smo vam e-mail za potvrdu — ",
    EmailAdded_2: "proverite svoje sanduče.",
    SendVerifEmail: "Pošalji e-mail za potvrdu",

    EmailStatusExpl:
        "('Primarna' znači da se možete prijaviti preko ove adrese, i na nju šaljemo obaveštenja. " +
        "'Potvrđena' znači da ste kliknuli na link za potvrdu u e-mailu.)",

    // Password:
    ChangePwdQ: "Promeni lozinku?",
    CreatePwdQ: "Napravi lozinku?",
    WillGetPwdRstEml: "Dobićete e-mail za resetovanje lozinke.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Nema",

    // Logins:
    LoginMethods: "Metode prijave",
    commaAs: ", kao: ",

    // One's data:
    YourContent: "Vaš sadržaj",
    DownloadPosts: "Preuzmi objave",
    DownloadPostsHelp: "Pravi JSON fajl sa kopijom tema i komentara koje ste objavili.",
    DownloadPersData: "Preuzmi lične podatke",
    DownloadPersDataHelp: "Pravi JSON fajl sa kopijom vaših ličnih podataka, npr. vaše ime " +
        "(ako ste ga naveli) i e-mail adresu.",


    // Delete account:
    DangerZone: "Opasna zona",
    DeleteAccount: "Obriši nalog",
    DeleteYourAccountQ:
        "Obrisati vaš nalog? Uklonićemo vaše ime, zaboraviti e-mail adresu, lozinku i " +
        "sve online identitete (kao što su Facebook ili Twitter prijava). " +
        "Nećete moći ponovo da se prijavite. Ovo se ne može poništiti.",
    DeleteUserQ:
        "Obrisati ovog korisnika? Uklonićemo ime, zaboraviti e-mail adresu, lozinku i " +
        "online identitete (kao što su Facebook ili Twitter prijava). " +
        "Korisnik neće moći ponovo da se prijavi. Ovo se ne može poništiti.",
    YesDelete: "Da, obriši",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Članovi grupe",
    NoMembers: "Nema članova.",
    MayNotListMembers: "Lista članova možda nije dostupna.",
    AddMembers: "Dodaj članove",
    BuiltInCannotModify: "Ovo je ugrađena grupa; ne može se menjati.",
    NumMembers: (num: number) => `${num} članova`,
    YouAreMember: "Vi ste član.",
    CustomGroupsC: "Prilagođene grupe:",
    BuiltInGroupsC: "Ugrađene grupe:",
    DeleteGroup: "Obriši ovu grupu",
  },


  // Create user dialog

  cud: {
    CreateUser: "Napravi korisnika",
    CreateAccount: "Napravi nalog",
    EmailC: "E-mail:",  // REMOVE move to t.EmailC instead
    keptPriv: "biće zadržano kao privatno",
    forNotfsKeptPriv: "za obaveštenja o odgovorima, zadržano kao privatno",
    EmailVerifBy_1: "Vaš e-mail je potvrđen od strane ",
    EmailVerifBy_2: ".",
    UsernameC: "Korisničko ime:",
    FullNameC: "Puno ime:",
    optName: "opciono",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "Nalog je napravljen. Prijavljeni ste.",  // COULD say if verif email sent too?
    AlmostDone:
        "Skoro gotovo! Samo treba da potvrdite svoju e-mail adresu. Mi smo " +
        "poslali e-mail vama. Molimo kliknite na link u e-mailu da aktivirate " +
        "vaš nalog. Možete zatvoriti ovu stranicu.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Uslovi i privatnost",

    Accept_1: "Da li prihvatate naše ",
    TermsOfService: "Uslove korišćenja",
    TermsOfUse: "Uslove upotrebe",
    Accept_2: " i ",
    PrivPol: "Politiku privatnosti",
    Accept_3_User: "?",
    Accept_3_Owner: " za vlasnike sajta?",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Da, prihvatam",
  },


  // Password input

  pwd: {
    PasswordC: "Lozinka:",
    StrengthC: "Jačina: ",
    FairlyWeak: "Prilično slaba.",
    toShort: "prekratka",
    TooShort: (minLength: number) => `Prekratka. Treba da ima barem ${minLength} znakova`,
    PlzInclDigit: "Molimo uključite cifru ili specijalan znak",
    TooWeak123abc: "Preslaba. Ne koristite lozinke kao što su '12345' ili 'abcde'.",
    AvoidInclC: "Izbegavajte uključivanje (delova) vašeg imena ili e-maila u lozinku:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Stranica nije pronađena, ili je pristup odbijen.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Predstavljate se kao neko drugi, ko možda nema pristup svim delovima " +
        "ovog sajta.",

    IfYouThinkExistsThen: "Ako mislite da stranica postoji, prijavite se kao neko ko joj može pristupiti. ",
    LoggedInAlready: "(Već ste prijavljeni, ali možda na pogrešan nalog?) ",
    ElseGoToHome_1: "U suprotnom, možete ",
    ElseGoToHome_2: "otići na početnu stranicu.",

    CreateAcconut: "Napravi nalog",
    ContinueWithDots: "Nastavi sa ...",
    SignUp: "Pridruži se",
    LogIn: "Prijavi se",
    LogInWithPwd: "Prijavi se sa lozinkom",
    CreateAdmAcct: "Napravi admin nalog:",
    AuthRequired: "Potrebna je autentifikacija za pristup ovom sajtu",
    LogInToLike: "Prijavite se da biste označili da vam se sviđa ova objava",
    LogInToSubmit: "Prijavite se i pošaljite",
    LogInToComment: "Prijavite se da biste napisali komentar",
    LogInToCreateTopic: "Prijavite se da biste napravili temu",

    //AlreadyHaveAcctQ: "You have an account? ",  // changed "Already have...?" to "You have...?"
    OrLogIn_1: "Ili se ",         // "Or "
    OrLogIn_2: "Prijavite",      // "Log in" (this is a button)
    OrLogIn_3: " umesto toga",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "Ili ",
    SignUpInstead_2: "Napravite nalog", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: ", ili samo ",
    OrTypeName_2: "unesite ime",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "Ili napravite nalog:",
    OrTypeName: "Ili unesite vaše ime:",
    OrLogIn: "Ili se prijavite:",
    YourNameQ: "Vaše ime?",

    BadCreds: "Pogrešno korisničko ime ili lozinka",

    UsernameOrEmailC: "Korisničko ime ili e-mail:",
    PasswordC: "Lozinka:",
    ForgotPwd: "Da li ste zaboravili lozinku?",

    NoPwd: "Još niste izabrali lozinku.",
    CreatePwd: "Napravi lozinku",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Molimo recite nam šta vas brine.",
    ThanksHaveReported: "Hvala. Prijavili ste ovo. Osoblje foruma će pogledati.",
    ReportComment: "Prijavi komentar",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Ova objava sadrži lične podatke, na primer nečije pravo ime.",
    OptOffensive: "Ova objava sadrži uvredljiv ili pogrdan sadržaj.",
    OptSpam: "Ova objava je neželjena reklama (spam).",
    OptOther: "Obavesti osoblje o ovoj objavi iz nekog drugog razloga.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "Možete ponovo prikazati poruke pomoći, ako ste prijavljeni, tako što ćete " +
        "kliknuti na svoje ime a zatim na ",
    YouCanShowAgain_2: "Prikaži poruke pomoći",
  },


  // Editor

  e: {
    SimilarTopicsC: "Slične teme:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "Izvinite, ali trenutno možete otpremiti samo jedan fajl istovremeno",
    PleaseFinishPost: "Molimo prvo završite pisanje vaše objave",
    PleaseFinishChatMsg: "Molimo prvo završite pisanje vaše poruke u ćaskanju",
    PleaseFinishMsg: "Molimo prvo završite pisanje vaše poruke",
    PleaseSaveEdits: "Molimo prvo sačuvajte vaše trenutne izmene",
    PleaseSaveOrCancel: "Molimo prvo ili sačuvajte ili otkažite vašu novu temu",
    CanContinueEditing: "Možete nastaviti sa uređivanjem teksta ako ponovo otvorite uređivač.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Molimo ne brišite sav tekst. Napišite nešto.",
    PleaseWriteSth: "Molimo napišite nešto.",
    PleaseWriteTitle: "Molimo napišite naslov teme.",
    PleaseWriteMsgTitle: "Molimo napišite naslov poruke.",
    PleaseWriteMsg: "Molimo napišite poruku.",

    exBold: "podebljan tekst",
    exEmph: "istaknut tekst",
    exPre: "preformatiran tekst",
    exQuoted: "citiran tekst",
    ExHeading: "Naslov",

    TitlePlaceholder: "Unesite naslov — o čemu se radi, u jednoj kratkoj rečenici?",

    EditPost_1: "Uredi ",
    EditPost_2: "objavu ",

    TypeChatMsg: "Unesite poruku u ćaskanju:",
    YourMsg: "Vaša poruka:",
    CreateTopic: "Napravi novu temu",
    CreateCustomHtml: "Napravi prilagođenu HTML stranicu (dodajte svoj <h1> naslov)",
    CreateInfoPage: "Napravi informativnu stranicu",
    CreateCode: "Napravi stranicu sa izvornim kodom",
    AskQuestion: "Postavi pitanje",
    ReportProblem: "Prijavi problem",
    SuggestIdea: "Predloži ideju",
    NewChat: "Naslov i svrha ćaskanja",  // changed from "New chat channel ..." to just "Chat".
    NewPrivChat: "Naslov i svrha privatnog ćaskanja",  // changed from "New private chat" to just "Private chat".
    AppendComment: "Dodaj komentar na dno stranice:",

    ReplyTo: "Odgovori na ",
    ReplyTo_theOrigPost: "originalnu objavu",
    ReplyTo_post: "objavu ",
    AddCommentC: "Dodaj komentar:",   // & dupl t.AddComment

    PleaseSelectPosts: "Molimo izaberite jednu ili više objava na koje želite da odgovorite.",

    Save: "Sačuvaj",
    edits: "izmene",

    PostReply: "Objavi odgovor",
    PostComment: "Objavi komentar",

    Post: "Objavi",
    comment: "komentar",
    question: "pitanje",

    PostMessage: "Objavi poruku",
    SimpleEditor: "Jednostavan uređivač",

    Send: "Pošalji",
    message: "poruka",

    Create: "Napravi",
    page: "stranica",
    chat: "ćaskanje",
    idea: "ideja",
    topic: "tema",

    Submit: "Pošalji",
    problem: "problem",

    ViewOldEdits: "Pogledaj stare izmene",

    UploadBtnTooltip: "Otpremi fajl ili sliku",
    BoldBtnTooltip: "Podebljaj tekst",
    EmBtnTooltip: "Istakni",
    QuoteBtnTooltip: "Citiraj",
    PreBtnTooltip: "Preformatiran tekst",
    HeadingBtnTooltip: "Naslov",

    TypeHerePlaceholder: "Kucajte ovde. Možete koristiti Markdown i HTML. Prevucite slike za ubacivanje.",

    Maximize: "Maksimizuj",
    ToNormal: "Vrati na normalno",
    TileHorizontally: "Poređaj horizontalno",

    PreviewC: "Pregled:",
    TitleExcl: " (naslov isključen)",
    ShowEditorAgain: "Prikaži uređivač ponovo",
    Minimize: "Minimizuj",

    PreviewInfo: "Ovde možete videti kako će vaša objava izgledati.",
    CannotType: "Ovde ne možete kucati.",

    LoadingDraftDots: "Učitavanje nacrta...",
    DraftUnchanged: "Nepromenjeno.",
    CannotSaveDraftC: "Ne mogu da sačuvam nacrt:",
    DraftSavedBrwsr: "Nacrt sačuvan u brauzeru.",   
    DraftSaved: (nr: string | number) => `Nacrt ${nr} sačuvan.`,
    DraftDeleted: (nr: string | number) => `Nacrt ${nr} obrisan.`,
    WillSaveDraft: (nr: string | number) => `Čuvanje nacrta ${nr} ...`,
    SavingDraft: (nr: string | number) => `Čuvanje nacrta ${nr} ...`,
    DeletingDraft: (nr: string | number) => `Brisanje nacrta ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Izaberi kategoriju",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Izaberi tip teme:",
    DiscussionExpl: "Diskusija o nečemu.",
    QuestionExpl: "Jedan odgovor se može označiti kao prihvaćen.",
    ProblExpl: "Ako je nešto pokvareno ili ne radi. Može se označiti kao popravljeno/rešeno.",
    IdeaExpl: "Sugestija. Može se označiti kao urađeno/implementirano.",
    ChatExpl: "Razgovor koji se možda nikada ne završava.",
    PrivChatExpl: "Vidljivo samo ljudima koji su pozvani u ćaskanje.",

    CustomHtml: "Prilagođena HTML stranica",
    InfoPage: "Informativna stranica",
    Code: "Kod",
    EmbCmts: "Ugrađeni komentari",
    About: "O nama",
    PrivChat: "Privatno ćaskanje",
    Form: "Forma",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Nema više zajednica kojima se možete pridružiti.",
    SelCmty: "Izaberi zajednicu ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "Potraži pomoć",  
    TxtToFind: "Tekst za pretragu",
  },


  // No internet

  ni: {
    NoInet: "Nema internet konekcije",
    PlzRefr: "Osvežite stranicu da biste videli najnovije izmene. (Došlo je do prekida veze)",
    RefrNow: "Osveži sada",
  },


  PostDeleted: (postNr: number) => `Ta objava, br ${postNr}, je obrisana.`,
  NoSuchPost: (postNr: number) => `Nema objave br ${postNr} na ovoj stranici.`,
  NoPageHere: "Ova stranica je obrisana, ili nikada nije postojala, ili joj ne možete pristupiti.",
  GoBackToLastPage: "Vrati se na poslednju stranicu",

};
