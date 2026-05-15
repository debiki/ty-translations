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

var t_et_EE: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Aktiivne",
  Activity: "Tegevus",
  Add: "Lisa",
  AddingDots: "Lisamine ...",
  AddComment: "Lisa kommentaar",
  Admin: "Admin",
  AdvSearch: "Täpsem otsing",
  Anonym: "Anonüümne",
  Away: "Eemal",
  Back: "Tagasi",
  BlogN: "Blogi",
  Bookmarks: "Järjehoidjad",
  Cancel: "Tühista",
  Categories: "Kategooriad",
  Category: "Kategooria",
  ChangeV: "Muuda",
  ClickToShow: "Klõpsa kuvamiseks",
  ChangeDots: "Muuda ...",
  ChatN: "Vestlus",
  Chatting: "Vestlemine",
  CheckYourEmail: "Kontrolli oma e-posti",
  Close: "Sule",
  closed: "suletud",
  comments: "kommentaari",   // as in:  "123 comments"
  Continue: "Jätka",
  Created: "Loodud",
  Delete: "Kustuta",
  Deleted: "Kustutatud",
  DirectMessage: "Otsesõnum",
  Discussion: "Arutelu",
  discussion: "arutelu",
  done: "tehtud",
  EditV: "Muuda",
  Editing: "Muutmine",
  EmailC: "E-post: ",
  EmailAddress: "E-posti aadress",
  EmailAddresses: "E-posti aadressid",
  EmailSentD: "E-kiri saadetud.",
  Forum: "Foorum",
  GetNotifiedAbout: "Saa teavitusi",
  GroupsC: "Grupid:",
  Hide: "Peida",
  Home: "Avaleht",
  Idea: "Idee",
  Join: "Liitu",
  KbdShrtcsC: "Klaviatuuri otseteed: ",
  Loading: "Laadimine...",
  LoadMore: "Laadi rohkem ...",
  LogIn: "Logi sisse",
  LoggedInAs: "Sisselogitud kui ",
  LogOut: "Logi välja",
  Maybe: "Võib-olla",
  Manage: "Halda",
  Members: "Liikmed",
  MessageN: "Sõnum",
  MoreDots: "Veel...",
  Move: "Liiguta",
  Name: "Nimi",
  NameC: "Nimi:",
  NewTopic: "Uus teema",
  NoCancel: "Ei, tühista",
  Notifications: "Teavitused",
  NotImplemented: "(Pole rakendatud)",
  NotYet: "Veel mitte",
  NoTitle: "Pealkirjata",
  NoTopics: "Teemasid pole.",
  Okay: "Olgu",
  OkayDots: "Olgu ...",
  Online: "Sees",
  onePerLine: "üks real",
  PreviewV: "Eelvaade",
  Problem: "Probleem",
  progressN: "edenemine",
  Question: "Küsimus",
  Recent: "Hiljutised",
  Remove: "Eemalda",
  Reopen: "Ava uuesti",
  ReplyV: "Vasta",
  Replying: "Vastamine",
  Replies: "Vastust",
  replies: "vastust",
  Save: "Salvesta",
  SavingDots: "Salvestamine ...",
  SavedDot: "Salvestatud.",
  Search: "Otsi",
  SendMsg: "Saada sõnum",
  ShowPreview: "Näita eelvaadet",
  SignUp: "Liitu",  // don't change to "Sign Up" [join_or_signup]
  Solution: "Lahendus",
  started: "alustatud",
  Summary: "Kokkuvõte",
  Submit: "Esita",
  Tag: "Silt",
  Tags: "Sildid",
  Tools: "Tööriistad",
  Topics: "Teemad",
  TopicTitle: "Teema pealkiri",
  TopicType: "Teema tüüp",
  UploadingDots: "Üleslaadimine...",
  Username: "Kasutajanimi",
  Users: "Kasutajad",
  Welcome: "Tere tulemast",
  Wiki: "Viki",
  Yes: "Jah",
  YesBye: "Jah, head aega",
  YesDoThat: "Jah, tee seda",
  You: "Sina",
  you: "sina",

  // Trust levels.
  Guest:  "Külaline",
  NewMember: "Uus liige",
  BasicMember: "Tavaliige",
  FullMember: "Täisliige",
  TrustedMember: "Usaldusväärne liige",
  RegularMember: "Usaldusväärne püsiliige",
  CoreMember: "Põhiliige",

  // Periods.
  PastDay: "Viimane ööpäev",
  PastWeek: "Viimane nädal",
  PastMonth: "Viimane kuu",
  PastQuarter: "Viimane kvartal",
  PastYear: "Viimane aasta",
  AllTime: "Kogu aeg",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "k",  // months
  daysLtr: "p",      // days
  hoursLtr: "t",     // hours
  minsLtr: "m",      // minutes
  secsLtr: "s",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "1 päev tagasi" : `${numDays} päeva tagasi`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "1 tund tagasi" : `${numHours} tundi tagasi`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "1 minut tagasi" : `${numMins} minutit tagasi`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "1 sekund tagasi" : `${numSecs} sekundit tagasi`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "E-post on kohustuslik",
    NoSpcs: "Palun ilma tühikuteta",
    InvldAddr: "Vigane e-posti aadress",
    NoBadChrs: "Palun ilma imelike märkideta",

    // Full name input field:
    NotOnlSpcs: "Palun mitte ainult tühikud",
    NoAt: "Palun ilma @ märgita",

    // Username input field:
    NoDash: "Palun ilma sidekriipsudeta (-)",
    DontInclAt: "Ära lisa @ märki",
    StartEndLtrDgt: "Alusta ja lõpeta tähe või numbriga",
    OnlLtrNumEtc: "Ainult tähed (a-z, A-Z), numbrid ja _ (alakriips)",
    // This shown just below the username input:
    UnUnqShrt_1: "Sinu ",
    UnUnqShrt_2: "@kasutajanimi",
    UnUnqShrt_3: ", unikaalne ja lühike",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Peab olema vähemalt ${minLength} tähemärki`,
    TooLong: (maxLength: number) => `Liiga pikk. Peab olema maksimaalselt ${maxLength} tähemärki`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Iga postitus",
    EveryPostInTopic: "Teid teavitatakse kõigist selle teema uutest vastustest.",
    EveryPostInCat: "Teid teavitatakse kõigist selle kategooria uutest teemadest ja vastustest.",
    EveryPostInTopicsWithTag: "Teid teavitatakse uutest selle sildiga teemadest ja kõigist vastustest neis teemades.",
    EveryPostWholeSite: "Teid teavitatakse kõigist uutest teemadest ja vastustest igal pool.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Uued teemad",
    NewTopicsInCat: "Teid teavitatakse selle kategooria uutest teemadest.",
    NewTopicsWithTag: "Teid teavitatakse uutest selle sildiga teemadest.",
    NewTopicsWholeSite: "Teid teavitatakse uutest teemadest igal pool.",

    Tracking: "Jälgimine",

    Normal: "Tavaline",
    NormalDescr: "Teid teavitatakse, kui keegi räägib teiega, ka kaudselt, nt vastus teie vastusele.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Tasane",
    HushedDescr: "Teid teavitatakse ainult siis, kui keegi räägib otse teiega.",

    Muted: "Vaigistatud",
    MutedTopic: "Teavitusi pole.",
  },


  // Forum intro text

  fi: {
    Edit: "Muuda",
    Hide_1: "Peida",
    Hide_2: ", klõpsa ",
    Hide_3: " uuesti avamiseks",
  },


  // Forum categories

  fcs: {
    All: "Kõik", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Teemade loend",

    // Select category dropdown

    from: "kohast",
    in: "kategoorias",
    AllCats: "Kõik kategooriad",

    // Topic sort order

    Active: "Esmalt aktiivsed",
    ActiveDescr: "Näitab esmalt hiljuti aktiivseid teemasid",

    New: "Uued",
    NewDescr: "Näitab esmalt uusi teemasid",

    Top: "Populaarsed",
    TopDescr: "Näitab esmalt populaarseid teemasid",

    // Topic filter dropdown

    AllTopics: "Kõik teemad",

    ShowAllTopics: "Näita kõiki teemasid",
    ShowAllTopicsDescr: "Kuid mitte kustutatud teemasid",

    WaitingTopics: "Ootel teemad",
    OnlyWaitingDescr_1: "Näitab ainult teemasid ",
    OnlyWaitingDescr_2: "ootamas ",
    OnlyWaitingDescr_3: "lahendust või teostamist ja lõpetamist",

    YourTopics: "Sinu teemad",
    AssignedToYou: "Sulle määratud",

    DeletedTopics: "Näita kustutatud",
    ShowDeleted: "Näita kustutatud",
    ShowDeletedDescr: "Näitab kõiki teemasid, sh kustutatud teemasid",

    // Rightmost buttons

    ViewCategories: "Vaata kategooriaid",
    EditCat: "Muuda kategooriat",
    CreateCat: "Loo kategooria",
    CreateTopic: "Loo teema",
    PostIdea: "Postita idee",
    AskQuestion: "Küsi küsimus",
    ReportProblem: "Teata probleemist",
    CreateMindMap: "Loo mõttekaart",
    CreatePage: "Loo leht",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Selgita ikoone...",
    IconExplanation: "Ikoonide selgitus:",
    ExplGenDisc: "Üldine arutelu.",
    ExplQuestion: "Küsimus ilma kinnitatud vastuseta.",
    ExplAnswer: "Küsimus koos kinnitatud vastusega.",
    ExplIdea: "Idee / ettepanek.",
    ExplProblem: "Probleem.",
    ExplPlanned: "Midagi, mida plaanime teha või parandada.",
    ExplDone: "Midagi, mis on tehtud või parandatud.",
    ExplClosed: "Teema suletud.",
    ExplPinned: "Teema on alati loendis esimene (võib-olla ainult oma kategoorias).",

    PopularTopicsComma: "Populaarsed teemad, ",
    TopFirstAllTime: "Näitab esmalt populaarsemaid teemasid läbi aegade.",
    TopFirstPastDay: "Näitab viimase ööpäeva populaarseid teemasid.",

    CatHasBeenDeleted: "See kategooria on kustutatud",

    TopicsActiveFirst: "Teemad, esmalt hiljuti aktiivsed",
    TopicsNewestFirst: "Teemad, esmalt uued",

    CreatedOn: "Loodud ",
    LastReplyOn: "\nViimane vastus ",
    EditedOn: "\nMuudetud ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "loi teema",
    frequentPoster: "sagedane postitaja",
    mostRecentPoster: "viimane postitaja",

    inC: "kohas: ",

    TitleFixed: "See on parandatud",
    TitleDone: "See on tehtud",
    TitleStarted: "Oleme seda alustanud",
    TitleStartedFixing: "Oleme alustanud selle parandamist",
    TitleUnsolved: "See on lahendamata probleem",
    TitleIdea: "See on idee",
    TitlePlanningFix: "Plaanime seda parandada",
    TitlePlanningDo: "Plaanime seda teha",
    TitleChat: "See on vestluskanal",
    TitlePrivateChat: "See on privaatne vestluskanal",
    TitlePrivateMessage: "Privaatsõnum",
    TitleInfoPage: "See on infoleht",
    TitleDiscussion: "Arutelu",
    IsPinnedGlobally: "\nSee on globaalselt kinnitatud, seega on see loendis esimene.",
    IsPinnedInCat: "\nSee on oma kategoorias kinnitatud, seega on see oma kategoorias loendis esimene.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Hiljutised teemad (ootel)",
    RecentTopicsInclDel: "Hiljutised teemad (sh kustutatud)",
    RecentTopics: "Hiljutised teemad",
    _replies: " vastust",
    _deleted: " (kustutatud)",
    _defCat: " (vaikekategooria)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Hiljutised postitused",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " sees selles vestluses",    // example: "5 online in this chat"
    NumOnlForum: " sees selles foorumis",

    // Open left-sidebar button title.
    WatchbBtn: "Sinu teemad",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Sinu hiljutised teemad, liitunud vestlused, otsesõnumid",

    // Title shown on user profile pages.
    AbtUsr: "Kasutajast",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Tagasi kasutajaprofiilist",
    BackFromAdm: "Tagasi admini alast",

    // Title shown on full text search page.
    SearchPg: "Otsinguleht",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Lisa ...",
    RecentlyViewed: "Hiljuti vaadatud teemad",
    JoinedChats: "Liitunud vestlused",
    ChatChannels: "Vestluskanalid",
    CreateChat: "Loo vestluskanal",
    DirectMsgs: "Otsesõnumid",
    NoChats: "Puuduvad",    // meaning: "No chat messages"
    NoDirMsgs: "Puuduvad",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Teema tegevused",
    ViewPeopleHere: "Vaata inimesi siin",
    ViewAddRemoveMembers: "Vaata / lisa / eemalda liikmeid",
    ViewChatMembers: "Vaata vestluse liikmeid",
    EditChat: "Muuda vestluse kirjeldust",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Lahku sellest vestlusest",
    LeaveThisCommunity: "Lahku sellest kogukonnast",
    JoinThisCommunity: "Liitu selle kogukonnaga",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Hiljutised kommentaarid selles teemas:",
    NoComments: "Kommentaare pole.",

    YourBookmarks: "Sinu järjehoidjad:",

    UsersOnline: "Kasutajaid sees:",
    UsersOnlineForum: "Kasutajaid sees selles foorumis:",
    UsersInThisChat: "Kasutajaid selles vestluses:",
    UsersInThisTopic: "Kasutajaid selles teemas:",

    GettingStartedGuide: "Admini juhend", // MISSING in other langs, was: "Getting Started Guide".
    AdminGuide: "Admini juhend",          // ... but what? It's here already, just reuse this transl field
    Guide: "Juhend",

    // How to hide the sidebar.
    CloseShortcutS: "Sule (klaviatuuri otsetee: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Lisa rohkem inimesi",

    // Shown next to one's own username, in a list of users.
    thatsYou: "see oled sina",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Näib, et ainult sina",
    YouAnd: "Sina ja ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " inimene" : " inimest";
      const have = numStrangers === 1 ? "pole" : "pole";
      return numStrangers + people + " kes " + have + " sisse loginud";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    // MISSING "are sorted by" —> "might be"
    RepliesToTheLeft: "Vasakul olevad vastused võivad olla sorteeritud ",
    bestFirst: "parimad-ees.",
    ButBelow: "Kuid allpool ",
    insteadBy: " on samad vastused sorteeritud hoopis ",
    newestFirst: "uusimad-ees.",

    SoIfLeave: "Nii et kui lahkud ja tuled hiljem tagasi, leiad altpoolt ",
    allNewReplies: "kõik uued vastused.",
    Click: "Klõpsa",
    aReplyToReadIt: " allolevale vastusele, et seda lugeda — sest allpool näidatakse ainult väljavõtet.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Klõpsa staatuse muutmiseks",
    ClickToViewAnswer: "Klõpsa vastuse vaatamiseks",
    ViewAnswer: "Vaata vastust",
    ChangeStatusC: "Muuda staatus:",
    ChangeCatC: "Muuda kategooriat:",
    ChangeTopicTypeC: "Muuda teema tüüpi:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "küsimus",
    hasAccptAns: "on kinnitatud vastusega",
    aProblem: "probleem",
    planToFix: "plaanis parandada",
    anIdea: "idee",
    planToDo: "plaanis teostada",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "See vorm on ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "suletud; te ei saa seda enam täita ega postitada.",

    ThisTopicClosed_1: "See teema on ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". Saate siiski postitada kommentaare.",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "See leht on kustutatud",
    CatDeldPageToo: "Kategooria on kustutatud, seega ka see leht kustutati",

    ThreadDeld: "Lõim kustutatud",
    CmntDeld: "Kommentaar kustutatud",
    PostDeld: "Postitus kustutatud",
    DiscDeld: "Arutelu kustutatud",
    PageDeld: "Leht kustutatud",
    PagePendAppr: "Leht ootab kinnitust",
    TitlePendAppr: "Pealkiri ootab kinnitust",
    TextPendingApproval: "Tekst ootab kinnitust",

    TooltipQuestClosedNoAnsw: "See küsimus on suletud ilma kinnitatud vastuseta.",
    TooltipTopicClosed: "See teema on suletud.",

    TooltipQuestSolved: "See on lahendatud küsimus",
    TooltipQuestUnsolved: "See on lahendamata küsimus",

    StatusDone: "Tehtud",
    TooltipProblFixed: "See on parandatud",
    TooltipDone: "See on tehtud",

    StatusStarted: "Alustatud",
    TooltipFixing: "Oleme alustanud selle parandamist",
    TooltipImplementing: "Oleme alustanud selle teostamist",

    StatusPlanned: "Planeeritud",
    TooltipProblPlanned: "Plaanime seda parandada",
    TooltipIdeaPlanned: "Plaanime seda teostada",

    StatusNew: "Uus",
    StatusNewDtl: "Uus teema, arutamisel",
    TooltipUnsProbl: "See on lahendamata probleem",
    TooltipIdea: "See on idee",

    TooltipPersMsg: "Isiklik sõnum",
    TooltipChat: "# tähistab vestluskanalit",
    TooltipPrivChat: "See on privaatne vestluskanal",

    TooltipPinnedGlob: "\nGlobaalselt kinnitatud.",
    TooltipPinnedCat: "\nKinnitatud selles kategoorias.",

    SolvedClickView_1: "Lahendatud postituses #",
    SolvedClickView_2: ", klõpsa vaatamiseks",

    PostHiddenClickShow: "Postitus peidetud; klõpsa kuvamiseks",
    ClickSeeMoreRepls: "Näita rohkem vastuseid",
    ClickSeeMoreComments: "Näita rohkem kommentaare",
    ClickSeeThisComment: "Klõpsa selle kommentaari kuvamiseks",
    clickToShow: "klõpsa kuvamiseks",

    ManyDisagree: "Paljud ei nõustu sellega:",
    SomeDisagree: "Mõned ei nõustu sellega:",

    PendAppr: "Ootab kinnitust",
    CmtPendAppr: "Kommentaar ootab kinnitust, postitatud ",
    CmtBelowPendAppr: (isYour) => (isYour ? "Sinu" : "Allolev") + " kommentaar ootab kinnitust.",

    _and: " ja",

    repliesTo: "vastused kasutajale",
    InReplyTo: "Vastusena kasutajale",
    YourReplyTo: "Sinu vastus kasutajale ",
    YourChatMsg: "Sinu vestlussõnum: ",
    YourDraft: "Sinu mustand",
    YourEdits: "Sinu muudatused: ",
    YourProgrNoteC: "Sinu edenemise märge:",
    aProgrNote: "edenemise märge: ",

    ReplyingToC: "Vastus kasutajale:",
    ScrollToPrevw_1: "Keri ",
    ScrollToPrevw_2: "eelvaateni",

    UnfinEdits: "Lõpetamata muudatused",
    ResumeEdting: "Jätka muutmist",
    DelDraft: "Kustuta mustand",

    ClickViewEdits: "Klõpsa vanade muudatuste vaatamiseks",

    By: "Autor: ", // ... someones name

    // Discussion ...
    aboutThisIdea: "selle idee teostamise kohta",
    aboutThisProbl: "selle parandamise kohta",

    AddProgrNote: "Lisa edenemise märge",
    // Progress ...
    withThisIdea: "selle ideega tegelemisel",
    withThisProbl: "selle probleemiga tegelemisel",
    withThis: "selle tegemisel",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Teavitused selle teema kohta:",

    // If is a direct message topic, members listed below this text.
    Msg: "Sõnum",

    SmrzRepls: "Võta vastused kokku",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `Siin on ${numReplies} vastust. Eeldatav lugemisaeg: ${minutes} minutit`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Valmis. Kokku võetud ${numSummarized} vastust ${numShownBefore}-st varem kuvatud vastusest.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Sule teema",
    CloseOwnQuestionTooltip: "Sule see küsimus, kui sa ei vaja enam vastust.",
    CloseOthersQuestionTooltip: "Sule see küsimus, kui see ei vaja vastust, nt kui see on teemaväline või juba teises teemas vastatud.",
    CloseToDoTooltip: "Sule see ülesanne, kui seda pole vaja teha või parandada.",
    CloseTopicTooltip: "Sule see teema, kui see ei vaja edasist käsitlemist.",

    AcceptBtnExpl: "Kinnita see küsimuse või probleemi vastuseks",
    SolutionQ: "Lahendus?",
    ClickUnaccept: "Klõpsa vastuse kinnituse tühistamiseks",
    PostAccepted: "See postitus on kinnitatud vastuseks",

    NumLikes: (num: number) => num === 1 ? "1 meeldimine" : num + " meeldimist",
    NumDisagree: (num: number) => num + " ei nõustu",
    NumBury: (num: number) => num === 1 ? "1 matmine" : num + " matmist",
    NumUnwanted: (num: number) => num === 1 ? "1 soovimatu" : num + " soovimatut",

    MoreVotes: "Veel hääli...",
    LikeThis: "See meeldib mulle",
    LinkToPost: "Link sellele postitusele",
    Report: "Teata",
    ReportThisPost: "Teata sellest postitusest",
    Admin: "Admin",
    DiscIx: "Arutelude indeks",

    Disagree: "Ei nõustu",
    DisagreeExpl: "Klõpsa siia, et selle postitusega mitte nõustuda või hoiatada teisi faktivigade eest.",
    Bury: "Matta",
    BuryExpl: "Klõpsa, et sorteerida teised postitused selle ette. Ainult foorumi personal näeb sinu häält.",
    Unwanted: "Soovimatu",
    UnwantedExpl: "Kui te ei soovi seda postitust sellel veebilehel. See vähendaks minu usaldust postituse autori vastu. Ainult foorumi personal näeb sinu häält.",

    AddTags: "Lisa/eemalda silte",
    UnWikify: "Tühista Viki",
    Wikify: "Muuda Vikiks",
    PinDeleteEtc: "Kinnita / Kustuta / Kategooria ...",
  },


  // Share dialog

  sd: {
    Copied: "Kopeeritud.",
    CtrlCToCopy: "Vajuta CTRL+C kopeerimiseks.",
    ClickToCopy: "Klõpsa lingi kopeerimiseks.",
  },


  // Chat

  c: {
    About_1: "See on ",
    About_2: " vestluskanal, mille lõi ",
    ScrollUpViewComments: "Keri üles varem postitatud kommentaaride vaatamiseks",
    Purpose: "Eesmärk:",
    MessageDeleted: "(Sõnum kustutatud)",
    JoinThisChat: "Liitu selle vestlusega",
    PostMessage: "Postita sõnum",
    AdvancedEditor: "Täpsem redaktor",
    TypeTitle: "Trüki pealkiri — mille kohta see vestlus on, paari sõnaga?",
    TypePurpose: "Trüki eesmärk — võib olla pikem kui pealkiri, kirjeldavam.",
    TypeHere: "Trüki siia. Võite kasutada Markdowni ja HTML-i.",
  },


  // My Menu

  mm: {
    NeedsReview: "Vajab ülevaatamist ",
    AdminHelp: "Admini abi ",
    StaffHelp: "Personali abi ",
    DraftsEtc: "Mustandid, järjehoidjad, ülesanded",
    MoreNotfs: "Vaata kõiki teavitusi",
    DismNotfs: "Märgi kõik loetuks",
    ViewProfile: "Vaata oma profiili",
    ViewGroups: "Vaata gruppe",
    LogOut: "Logi välja",
    UnhideHelp: "Näita peidetud abiinfot",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Keri siia:",
    Scroll: "Keri",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "T",
    Back_2: "agasi",
    BackExpl: "Keri tagasi oma eelmisele positsioonile sellel lehel",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Lehe algus",
    PgTopHelp: "Mine lehe algusesse. Klaviatuuri otsetee: 1",
    Repl: "Vastused",
    ReplHelp: "Mine vastuste sektsiooni. Otsetee: 2",
    Progr: "Edenemine",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Go to the Progress section. Shortcut: 3",
    PgBtm: "Lehe lõpp",
    Btm: "Lõpp",
    BtmHelp: "Go to the bottom of the page. Shortcut: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: " ja ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " tagasi kerimiseks",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Vali kasutajad",
    AddUsers: "Lisa kasutajaid",
  },


  // About user dialog

  aud: {
    IsMod: "On moderaator.",
    IsAdm: "On administraator.",
    IsDeld: "On deaktiveeritud või kustutatud.",
    ThisIsGuest: "See on külaliskasutaja, võib olla tegelikult ükskõik kes.",
    ViewInAdm: "Vaata admini alas",
    ViewProfl: "Vaata profiili",
    ViewComments: "Vaata teisi kommentaare",
    RmFromTpc: "Eemalda teemast",
    EmAdrUnkn: "E-posti aadress teadmata — seda külalist ei teavitata vastustest.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Eelistused",
    Invites: "Kutsed",
    DraftsEtc: "Mustandid jne",
    About: "Teave",
    Privacy: "Privaatsus",
    Security: "Turvalisus",
    Account: "Konto",
    Interface: "Liides",

    // ----- Overview stats

    JoinedC: "Liitunud: ",
    PostsMadeC: "Postitusi tehtud: ",
    LastPostC: "Viimane postitus: ",
    LastSeenC: "Viimati nähtud: ",
    TrustLevelC: "Usaldustase: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Laadi foto üles",
    ChangePhoto: "Muuda fotot",
    ImgTooSmall: "Pilt on liiga väike: peaks olema vähemalt 100 x 100",

    // ----- Activity

    OnlyStaffCanSee: "Ainult personal ja usaldusväärsed põhiliikmed näevad seda.",
    OnlyMbrsCanSee: "Ainult inimesed, kes on olnud aktiivsed liikmed mõnda aega, näevad seda.",
    Nothing: "Pole midagi näidata",
    Posts: "Postitused",
    NoPosts: "Postitusi pole.",
    Topics: "Teemad",
    NoTopics: "Teemasid pole.",

    // ----- User status

    UserBanned: "See kasutaja on bännitud",
    UserSuspended: (dateUtc: string) => `See kasutaja on peatatud kuni ${dateUtc} UTC`,
    ReasonC: "Põhjus: ",

    DeactOrDeld: "On deaktiveeritud või kustutatud.",
    isGroup: " (grupp)",
    isGuest: " — külaliskasutaja, võib olla ükskõik kes",
    isMod: " – moderaator",
    isAdmin: " – administraator",
    you: "(sina)",

    // ----- Notifications page

    NoNotfs: "Teavitusi pole",
    NotfsToYouC: "Teavitused sulle:",
    NotfsToOtherC: (name: string) => `Teavitused kasutajale ${name}:`,
    DefNotfsSiteWide: "Vaiketeavitused, saidiüleselt",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "kasutajale",

    // ----- Drafts Etc page

    NoDrafts: "Mustandeid pole",
    YourDraftsC: "Sinu mustandid:",
    DraftsByC: (name: string) => `Kasutaja ${name} mustandid:`,

    // ----- Invites page

    InvitesIntro: "Siin saate kutsuda inimesi selle saidiga liituma. ",
    InvitesListedBelow: "Juba saadetud kutsed on loetletud allpool.",
    NoInvites: "Te pole veel kedagi kutsunud.",

    InvitedEmail: "Kutsutud e-post",
    WhoAccepted: "Liitunud liige",
    InvAccepted: "Kutse vastu võetud",
    InvSent: "Kutse saadetud",
    JoinedAlready: "Juba liitunud",

    SendAnInv: "Kutsu inimesi", // was: "Send an Invite",   MISSING I18N all other langs
    SendInv: "Saada kutsed",   // MISSING I18N is just "Send invite" (singularis) in all other langs
    SendInvExpl:  // MISSING I18N changed to pluralis
        "Saadame teie sõpradele lühikese e-kirja. Nad saavad klõpsata linki, " +
        "et kohe liituda, sisselogimist pole vaja. " +
        "Nad saavad tavaliikmeteks, mitte moderaatoriteks ega adminideks.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Valmis. Saadan neile e-kirja.",
    NoOneToInv: "Pole kedagi kutsuda.",
    InvNotfLater: "Teavitan teid hiljem, kui olen nad kutsunud.",
    AlreadyInvSendAgainQ: "Need on juba kutsutud — võib-olla soovid neid uuesti kutsuda?",
    InvErr_1: "Nende tulemuseks oli ",
    InvErr_2: "viga",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Need on juba liitunud, seega ma ei kutsunud neid:",
    ResendInvsQ: "Saada neile inimestele kutsed uuesti? Nad on juba kutsutud.",
    InvAgain: "Kutsu uuesti",

    // ----- Preferences, About

    AboutYou: "Sinu teave",
    WebLink: "Sinu veebisait või leht.",

    NotShownCannotChange: "Ei näidata avalikult. Ei saa muuta.",

    // The full name or alias:
    NameOpt: "Nimi (valikuline)",

    NotShown: "Ei näidata avalikult.",

    // The username:
    MayChangeFewTimes: "Saate seda muuta vaid mõned korrad.",
    notSpecified: "(määramata)",
    ChangeUsername_1: "Saate oma kasutajanime muuta vaid mõned korrad.",
    ChangeUsername_2: "Selle liiga sage muutmine võib teisi segadusse ajada — " +
        "nad ei tea, kuidas teid @mainida.",

    NotfAboutAll: "Ole teavitatud igast uuest postitusest (v.a kui vaigistad teema või kategooria)",
    NotfAboutNewTopics: "Ole teavitatud uutest teemadest (v.a kui vaigistad kategooria)",

    ActivitySummaryEmails: "Tegevuste kokkuvõtte e-kirjad",

    EmailSummariesToGroup:
        "Kui selle grupi liikmed siin ei käi, siis saadetakse neile vaikimisi " +
        "kokkuvõtteid populaarsetest teemadest ja muust.",
    EmailSummariesToMe:
        "Kui ma siin ei käi, siis saatke mulle " +
        "kokkuvõtteid populaarsetest teemadest ja muust.",

    AlsoIfTheyVisit: "Saada neile e-kirju ka siis, kui nad käivad siin regulaarselt.",
    AlsoIfIVisit: "Saada mulle e-kirju ka siis, kui ma käin siin regulaarselt.",

    HowOftenWeSend: "Kui sageli me neid e-kirju saadame?",
    HowOftenYouWant: "Kui sageli sa neid e-kirju soovid?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Peida oma hiljutine tegevus võõraste ja uute liikmete eest?",
    HideActivityStrangers_2: "(Kuid mitte nende eest, kes on olnud aktiivsed liikmed juba mõnda aega.)",
    HideActivityAll_1: "Peida oma hiljutine tegevus kõigi eest?",
    HideActivityAll_2: "(Välja arvatud personal ja usaldusväärsed põhiliikmed.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "E-posti aadressid",
    PrimaryDot: "Peamine. ",
    VerifiedDot: "Kinnitatud. ",
    NotVerifiedDot: "Kinnitamata. ",
    ForLoginWithDot: (provider: string) => `Sisselogimiseks teenusega ${provider}. `,
    MakePrimary: "Määra peamiseks",
    AddEmail: "Lisa e-posti aadress",
    TypeNewEmailC: "Trüki uus e-posti aadress:",
    MaxEmailsInfo: (numMax: number) => `(Te ei saa lisada rohkem kui ${numMax} aadressi.)`,
    EmailAdded_1: "Lisatud. Saatsime teile kinnitusmeili — ",
    EmailAdded_2: "kontrollige oma e-posti postkasti.",
    SendVerifEmail: "Saada kinnitusmeil",

    EmailStatusExpl:
        "('Peamine' tähendab, et saate selle aadressi kaudu sisse logida ja me saadame teavitused sinna. " +
        "'Kinnitatud' tähendab, et klõpsasite kinnituslinki e-posti kinnitamise kirjas.)",

    // Password:
    ChangePwdQ: "Kas muuta parooli?",
    CreatePwdQ: "Kas luua parool?",
    WillGetPwdRstEml: "Saate parooli lähtestamise e-kirja.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Puudub",

    // Logins:
    LoginMethods: "Sisselogimise meetodid",
    commaAs: ", kui: ",

    // One's data:
    YourContent: "Sinu sisu",
    DownloadPosts: "Laadi postitused alla",
    DownloadPostsHelp: "Loob JSON-faili koopiaga teemadest ja kommentaaridest, mida oled postitanud.",
    DownloadPersData: "Laadi isikuandmed alla",
    DownloadPersDataHelp: "Loob JSON-faili koopiaga sinu isikuandmetest, nt sinu nimi " +
        "(kui oled nime määranud) ja e-posti aadress.",


    // Delete account:
    DangerZone: "Ohutsoon",
    DeleteAccount: "Kustuta konto",
    DeleteYourAccountQ:
        "Kustutada oma konto? Eemaldame sinu nime, unustame e-posti aadressi, parooli ja " +
        "kõik võrguidentiteedid (nagu Facebooki või Twitteri sisselogimine). " +
        "Te ei saa enam sisse logida. Seda ei saa tagasi võtta.",
    DeleteUserQ:
        "Kustutada see kasutaja? Eemaldame nime, unustame e-posti aadressi, parooli ja " +
        "võrguidentiteedid (nagu Facebooki või Twitteri sisselogimine). " +
        "Kasutaja ei saa enam sisse logida. Seda ei saa tagasi võtta.",
    YesDelete: "Jah, kustuta",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Grupi liikmed",
    NoMembers: "Liikmeid pole.",
    MayNotListMembers: "Ei tohi liikmeid loetleda.",
    AddMembers: "Lisa liikmeid",
    BuiltInCannotModify: "See on sisseehitatud grupp; seda ei saa muuta.",
    NumMembers: (num: number) => `${num} liiget`,
    YouAreMember: "Olete liige.",
    CustomGroupsC: "Kohandatud grupid:",
    BuiltInGroupsC: "Sisseehitatud grupid:",
    DeleteGroup: "Kustuta see grupp",
  },


  // Create user dialog

  cud: {
    CreateUser: "Loo kasutaja",
    CreateAccount: "Loo konto",
    EmailC: "E-post:",  // REMOVE move to t.EmailC instead
    keptPriv: "hoitakse privaatsena",
    forNotfsKeptPriv: "vastuse teavituste jaoks, hoitakse privaatsena",
    EmailVerifBy_1: "Sinu e-post on kinnitatud teenuse poolt ",
    EmailVerifBy_2: ".",
    UsernameC: "Kasutajanimi:",
    FullNameC: "Täisnimi:",
    optName: "valikuline",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "Konto loodud. Olete sisse logitud.",  // COULD say if verif email sent too?
    AlmostDone:
        "Peaaegu valmis! Peate lihtsalt oma e-posti aadressi kinnitama. Oleme " +
        "saatnud teile e-kirja. Palun klõpsake e-kirjas olevat linki, et aktiveerida " +
        "oma konto. Võite selle lehe sulgeda.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Kasutustingimused ja privaatsus",

    Accept_1: "Kas nõustute meie ",
    TermsOfService: "kasutustingimustega",
    TermsOfUse: "kasutustingimustega",
    Accept_2: " ja ",
    PrivPol: "privaatsuspoliitikaga",
    Accept_3_User: "?",
    Accept_3_Owner: " saidi omanikele?",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Jah, nõustun",
  },


  // Password input

  pwd: {
    PasswordC: "Parool:",
    StrengthC: "Tugevus: ",
    FairlyWeak: "Üsna nõrk.",
    toShort: "liiga lühike",
    TooShort: (minLength: number) => `Liiga lühike. Peaks olema vähemalt ${minLength} tähemärki`,
    PlzInclDigit: "Palun lisa number või sümbol",
    TooWeak123abc: "Liiga nõrk. Ära kasuta paroole nagu '12345' or 'abcde'.",
    AvoidInclC: "Vältige oma nime või e-posti (osade) lisamist parooli:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Lehte ei leitud või juurdepääs keelatud.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Te esinete kellena pärinevana, kellel ei pruugi olla juurdepääsu kõigile " +
        "selle veebilehe osadele.",

    IfYouThinkExistsThen: "If you think the page exists, log in as someone who may access it. ",
    LoggedInAlready: "(Olete juba sisse logitud, aga võib-olla on see vale konto?) ",
    ElseGoToHome_1: "Vastasel juhul saate ",
    ElseGoToHome_2: "minna avalehele.",

    CreateAcconut: "Loo konto",
    ContinueWithDots: "Jätka teenusega ...",
    SignUp: "Liitu",
    LogIn: "Logi sisse",
    LogInWithPwd: "Logi sisse parooliga",
    CreateAdmAcct: "Loo admini konto:",
    AuthRequired: "Selle saidi kasutamiseks on vajalik autentimine",
    LogInToLike: "Logi sisse, et see postitus meeldiks",
    LogInToSubmit: "Logi sisse ja esita",
    LogInToComment: "Logi sisse kommentaari kirjutamiseks",
    LogInToCreateTopic: "Logi sisse teema loomiseks",

    //AlreadyHaveAcctQ: "You have an account? ",  // MISSING changed "Already have...?" to "You have...?"
    OrLogIn_1: "Või ",         // "Or "
    OrLogIn_2: "logi sisse",      // "Log in" (this is a button)
    OrLogIn_3: " asemel",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "Või ",
    SignUpInstead_2: "loo konto", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: ", või lihtsalt ",
    OrTypeName_2: "trüki nimi",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "Või loo konto:",
    OrTypeName: "Või trüki oma nimi:",
    OrLogIn: "Või logi sisse:",
    YourNameQ: "Sinu nimi?",

    BadCreds: "Vale kasutajanimi või parool",

    UsernameOrEmailC: "Kasutajanimi või e-post:",
    PasswordC: "Parool:",
    ForgotPwd: "Kas unustasid parooli?",

    NoPwd: "Te pole veel parooli valinud.",
    CreatePwd: "Loo parool",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Palun öelge meile, mis teile muret teeb.",
    ThanksHaveReported: "Tänan. Olete sellest teatanud. Foorumi personal vaatab selle üle.",
    ReportComment: "Teata kommentaarist",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "See postitus sisaldab isikuandmeid, näiteks kellegi pärisnime.",
    OptOffensive: "See postitus sisaldab solvavat või kuritahtlikku sisu.",
    OptSpam: "See postitus on soovimatu reklaam.",
    OptOther: "Teavita personali sellest postitusest mõnel muul põhjusel.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "Saate abiinfot uuesti kuvada, kui olete sisse logitud, klõpsates " +
        "oma nimele ja seejärel ",
    YouCanShowAgain_2: "Näita peidetud abiinfot",
  },


  // Editor

  e: {
    SimilarTopicsC: "Sarnased teemad:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "Kahjuks saab hetkel üles laadida vaid ühe faili korraga",
    PleaseFinishPost: "Palun lõpeta esmalt oma postituse kirjutamine",
    PleaseFinishChatMsg: "Palun lõpeta esmalt oma vestlussõnumi kirjutamine",
    PleaseFinishMsg: "Palun lõpeta esmalt oma sõnumi kirjutamine",
    PleaseSaveEdits: "Palun salvesta esmalt oma praegused muudatused",
    PleaseSaveOrCancel: "Palun esmalt kas salvesta või tühista oma uus teema",
    CanContinueEditing: "Saate teksti muutmist jätkata, kui avate redaktori uuesti.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Palun ärge kustutage kogu teksti. Kirjutage midagi.",
    PleaseWriteSth: "Palun kirjutage midagi.",
    PleaseWriteTitle: "Palun kirjutage teema pealkiri.",
    PleaseWriteMsgTitle: "Palun kirjutage sõnumi pealkiri.",
    PleaseWriteMsg: "Palun kirjutage sõnum.",

    exBold: "paks tekst",
    exEmph: "rõhutatud tekst",
    exPre: "eelvormindatud tekst",
    exQuoted: "tsiteeritud tekst",
    ExHeading: "Pealkiri",

    TitlePlaceholder: "Trüki pealkiri — mille kohta see on, ühe lühikese lausega?",

    EditPost_1: "Muuda ",
    EditPost_2: "postitust ",

    TypeChatMsg: "Trüki vestlussõnum:",
    YourMsg: "Sinu sõnum:",
    CreateTopic: "Loo uus teema",
    CreateCustomHtml: "Loo kohandatud HTML-leht (lisa oma <h1> pealkiri)",
    CreateInfoPage: "Loo infoleht",
    CreateCode: "Loo lähtekoodi leht",
    AskQuestion: "Küsi küsimus",
    ReportProblem: "Teata probleemist",
    SuggestIdea: "Paku idee",
    NewChat: "Vestluse pealkiri ja eesmärk",  // MISSING, changed from "New chat channel ..." to just "Chat".
    NewPrivChat: "Privaatse vestluse pealkiri ja eesmärk",  // MISSING, changed from "New private chat" to just "Private chat".
    AppendComment: "Lisa kommentaar lehe lõppu:",

    ReplyTo: "Vastus kasutajale ",
    ReplyTo_theOrigPost: "algsele postitusele",
    ReplyTo_post: "postitusele ",
    AddCommentC: "Lisa kommentaar:",   // MISSING, & dupl t.AddComment

    PleaseSelectPosts: "Palun vali vastamiseks üks või mitu postitust.",

    Save: "Salvesta",
    edits: "muudatused",

    PostReply: "Postita vastus",
    PostComment: "Postita kommentaar",

    Post: "Postita",
    comment: "kommentaar",
    question: "küsimus",

    PostMessage: "Postita sõnum",
    SimpleEditor: "Lihtne redaktor",

    Send: "Saada",
    message: "sõnum",

    Create: "Loo",
    page: "leht",
    chat: "vestlus",
    idea: "idee",
    topic: "teema",

    Submit: "Esita",
    problem: "problem",

    ViewOldEdits: "Vaata vanu muudatusi",

    UploadBtnTooltip: "Laadi üles fail või pilt",
    BoldBtnTooltip: "Muuda tekst paksuks",
    EmBtnTooltip: "Rõhuta",
    QuoteBtnTooltip: "Tsiteeri",
    PreBtnTooltip: "Eelvormindatud tekst",
    HeadingBtnTooltip: "Pealkiri",

    TypeHerePlaceholder: "Trüki siia. Võid kasutada Markdowni ja HTML-i. Piltide lisamiseks lohista ja aseta.",

    Maximize: "Maksimeeri",
    ToNormal: "Tagasi tavaliseks",
    TileHorizontally: "Paiguta horisontaalselt",

    PreviewC: "Eelvaade:",
    TitleExcl: " (v.a pealkiri)",
    ShowEditorAgain: "Näita redaktorit uuesti",
    Minimize: "Minimeeri",

    PreviewInfo: "Siin saate vaadata, kuidas teie postitus välja näeb.",
    CannotType: "Te ei saa siia trükkida.",

    LoadingDraftDots: "Mustandi laadimine...",
    DraftUnchanged: "Muutumatu.",
    CannotSaveDraftC: "Ei saa mustandit salvestada:",
    DraftSavedBrwsr: "Mustand salvestatud brauseris.",   // MISSING
    DraftSaved: (nr: string | number) => `Mustand ${nr} salvestatud.`,
    DraftDeleted: (nr: string | number) => `Mustand ${nr} kustutatud.`,
    WillSaveDraft: (nr: string | number) => `Salvestan mustandi ${nr} ...`,
    SavingDraft: (nr: string | number) => `Salvestan mustandit ${nr} ...`,
    DeletingDraft: (nr: string | number) => `Kustutan mustandit ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Vali kategooria",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Vali teema tüüp:",
    DiscussionExpl: "Arutelu millegi üle.",
    QuestionExpl: "Ühe vastuse saab märkida kinnitatud vastuseks.",
    ProblExpl: "Kui midagi on katki või ei tööta. Saab märkida parandatuks/lahendatuks.",
    IdeaExpl: "Ettepanek. Saab märkida tehtuks/teostatuks.",
    ChatExpl: "Võib-olla lõputu vestlus.",
    PrivChatExpl: "Nähtav ainult inimestele, kes kutsutakse vestlusega liituma.",

    CustomHtml: "Kohandatud HTML-leht",
    InfoPage: "Infoleht",
    Code: "Kood",
    EmbCmts: "Pesastatud kommentaarid",
    About: "Teave",
    PrivChat: "Privaatne vestlus",
    Form: "Vorm",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Pole rohkem kogukondi, millega liituda.",
    SelCmty: "Vali kogukond ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "Otsi abi",  // MISSING
    TxtToFind: "Otsitav tekst",
  },


  // No internet

  ni: {
    NoInet: "Interneti-ühendus puudub",
    PlzRefr: "Värskendage lehte viimaste muudatuste nägemiseks. (Ühendus katkeb)",
    RefrNow: "Värskenda kohe",
  },


  PostDeleted: (postNr: number) => `See postitus, nr ${postNr}, on kustutatud.`,
  NoSuchPost: (postNr: number) => `Sellel lehel pole postitust nr ${postNr}.`,
  NoPageHere: "See leht on kustutatud, seda pole kunagi eksisteerinud või teil puudub sellele juurdepääs.",
  GoBackToLastPage: "Mine tagasi viimasele lehele",

};
