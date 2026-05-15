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

var t_hu_HU: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Aktív",
  Activity: "Tevékenység",
  Add: "Hozzáadás",
  AddingDots: "Hozzáadás...",
  AddComment: "Hozzászólás hozzáadása",
  Admin: "Admin",
  AdvSearch: "Részletes keresés",
  Anonym: "Anonim",
  Away: "Távol",
  Back: "Vissza",
  BlogN: "Blog",
  Bookmarks: "Könyvjelzők",
  Cancel: "Mégse",
  Categories: "Kategóriák",
  Category: "Kategória",
  ChangeV: "Módosítás",
  ClickToShow: "Kattintson a megjelenítéshez",
  ChangeDots: "Módosítás...",
  ChatN: "Csevegés",
  Chatting: "Csevegés",
  CheckYourEmail: "Ellenőrizze az e-mailjeit",
  Close: "Bezárás",
  closed: "lezárva",
  comments: "hozzászólás",   // as in:  "123 comments"
  Continue: "Folytatás",
  Created: "Létrehozva",
  Delete: "Törlés",
  Deleted: "Törölve",
  DirectMessage: "Közvetlen üzenet",
  Discussion: "Megbeszélés",
  discussion: "megbeszélés",
  done: "kész",
  EditV: "Szerkesztés",
  Editing: "Szerkesztés",
  EmailC: "E-mail: ",
  EmailAddress: "E-mail cím",
  EmailAddresses: "E-mail címek",
  EmailSentD: "E-mail elküldve.",
  Forum: "Fórum",
  GetNotifiedAbout: "Értesítések kérése erről:",
  GroupsC: "Csoportok:",
  Hide: "Elrejtés",
  Home: "Kezdőlap",
  Idea: "Ötlet",
  Join: "Csatlakozás",
  KbdShrtcsC: "Gyorsbillentyűk: ",
  Loading: "Betöltés...",
  LoadMore: "Továbbiak betöltése...",
  LogIn: "Bejelentkezés",
  LoggedInAs: "Bejelentkezve mint ",
  LogOut: "Kijelentkezés",
  Maybe: "Talán",
  Manage: "Kezelés",
  Members: "Tagok",
  MessageN: "Üzenet",
  MoreDots: "Több...",
  Move: "Áthelyezés",
  Name: "Név",
  NameC: "Név:",
  NewTopic: "Új téma",
  NoCancel: "Nem, mégse",
  Notifications: "Értesítések",
  NotImplemented: "(Nincs implementálva)",
  NotYet: "Még nem",
  NoTitle: "Nincs cím",
  NoTopics: "Nincsenek témák.",
  Okay: "OK",
  OkayDots: "OK...",
  Online: "Online",
  onePerLine: "soronként egy",
  PreviewV: "Előnézet",
  Problem: "Probléma",
  progressN: "folyamat",
  Question: "Question",
  Recent: "Legutóbbi",
  Remove: "Eltávolítás",
  Reopen: "Újranyitás",
  ReplyV: "Válasz",
  Replying: "Válaszadás",
  Replies: "Válaszok",
  replies: "válasz",
  Save: "Mentés",
  SavingDots: "Mentés...",
  SavedDot: "Mentve.",
  Search: "Keresés",
  SendMsg: "Üzenet küldése",
  ShowPreview: "Előnézet megjelenítése",
  SignUp: "Csatlakozás",  // don't change to "Sign Up" [join_or_signup]
  Solution: "Megoldás",
  started: "elkezdve",
  Summary: "Összefoglaló",
  Submit: "Küldés",
  Tag: "Címke",
  Tags: "Címkék",
  Tools: "Eszközök",
  Topics: "Témák",
  TopicTitle: "Téma címe",
  TopicType: "Téma típusa",
  UploadingDots: "Feltöltés...",
  Username: "Felhasználónév",
  Users: "Felhasználók",
  Welcome: "Üdvözöljük",
  Wiki: "Wiki",
  Yes: "Igen",
  YesBye: "Igen, viszlát",
  YesDoThat: "Igen, tedd azt",
  You: "Te",
  you: "te",

  // Trust levels.
  Guest:  "Vendég",
  NewMember: "Új tag",
  BasicMember: "Alap tag",
  FullMember: "Teljes jogú tag",
  TrustedMember: "Megbízható tag",
  RegularMember: "Megbízható törzstag",
  CoreMember: "Magtag",

  // Periods.
  PastDay: "Elmúlt nap",
  PastWeek: "Elmúlt hét",
  PastMonth: "Elmúlt hónap",
  PastQuarter: "Elmúlt negyedév",
  PastYear: "Elmúlt év",
  AllTime: "Összes",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "hó",  // months
  daysLtr: "n",      // days
  hoursLtr: "ó",     // hours
  minsLtr: "p",      // minutes
  secsLtr: "mp",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "1 napja" : `${numDays} napja`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "1 órája" : `${numHours} órája`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "1 perce" : `${numMins} perce`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "1 másodperce" : `${numSecs} másodperce`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "E-mail cím megadása kötelező",
    NoSpcs: "Kérjük, ne használjon szóközöket",
    InvldAddr: "Érvénytelen e-mail cím",
    NoBadChrs: "Kérjük, ne használjon különleges karaktereket",

    // Full name input field:
    NotOnlSpcs: "Kérjük, ne csak szóközöket adjon meg",
    NoAt: "Kérjük, ne használjon @ karaktert",

    // Username input field:
    NoDash: "Kérjük, ne használjon kötőjelet (-)",
    DontInclAt: "Ne használja a @ karaktert",
    StartEndLtrDgt: "Betűvel vagy számmal kezdődjön és végződjön",
    OnlLtrNumEtc: "Csak betűket (a-z, A-Z), számokat és _ (aláhúzást) tartalmazhat",
    // This shown just below the username input:
    UnUnqShrt_1: "A ",
    UnUnqShrt_2: "@felhasználóneved",
    UnUnqShrt_3: ", egyedi és rövid",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Legalább ${minLength} karakter hosszúnak kell lennie`,
    TooLong: (maxLength: number) => `Túl hosszú. Legfeljebb ${maxLength} karakter lehet`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Minden hozzászólás",
    EveryPostInTopic: "Értesítést fogsz kapni minden új válaszról ebben a témában.",
    EveryPostInCat: "Értesítést fogsz kapni minden új témáról és válaszról ebben a kategóriában.",
    EveryPostInTopicsWithTag: "Értesítést fogsz kapni minden új, ezzel a címkével ellátott témáról és azok válaszairól.",
    EveryPostWholeSite: "Értesítést fogsz kapni minden új témáról és válaszról bárhol az oldalon.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Új témák",
    NewTopicsInCat: "Értesítést fogsz kapni az új témákról ebben a kategóriában.",
    NewTopicsWithTag: "Értesítést fogsz kapni az új, ezzel a címkével ellátott témákról.",
    NewTopicsWholeSite: "Értesítést fogsz kapni az új témákról bárhol az oldalon.",

    Tracking: "Követés",

    Normal: "Normál",
    NormalDescr: "Értesítést kapsz, ha valaki hozzád beszél, közvetve is, például ha " +
        "valaki válaszol a te válaszodra.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Csendes",
    HushedDescr: "Csak akkor kapsz értesítést, ha valaki közvetlenül hozzád beszél.",

    Muted: "Néma",
    MutedTopic: "Nincsenek értesítések.",   
  },


  // Forum intro text

  fi: {
    Edit: "Szerkesztés",
    Hide_1: "Elrejtés",
    Hide_2: ", kattintson ide: ",
    Hide_3: " az újranyitáshoz",
  },


  // Forum categories

  fcs: {
    All: "Mind", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Témalisták",

    // Select category dropdown

    from: "innen",  
    in: "ebben",      
    AllCats: "Minden kategória",

    // Topic sort order

    Active: "Aktív elöl",      
    ActiveDescr: "A nemrég frissült témákat mutatja elöl",

    New: "Új",
    NewDescr: "A legújabb témákat mutatja elöl",

    Top: "Népszerű",              
    TopDescr: "A népszerű témákat mutatja elöl",

    // Topic filter dropdown

    AllTopics: "Minden téma",

    ShowAllTopics: "Minden téma megjelenítése",
    ShowAllTopicsDescr: "A törölt témák kivételével",

    WaitingTopics: "Várakozó témák",          
    OnlyWaitingDescr_1: "Csak azokat a témákat mutatja, ", 
    OnlyWaitingDescr_2: "amelyek várakoznak ",
    OnlyWaitingDescr_3: "egy megoldásra vagy a megvalósításra",  

    YourTopics: "Témáid",       
    AssignedToYou: "Hozzád rendelve", 

    DeletedTopics: "Töröltek megjelenítése",   
    ShowDeleted: "Töröltek megjelenítése",
    ShowDeletedDescr: "Minden témát mutat, beleértve a törölteket is",

    // Rightmost buttons

    ViewCategories: "Kategóriák megtekintése",  
    EditCat: "Kategória szerkesztése",
    CreateCat: "Kategória létrehozása",
    CreateTopic: "Téma létrehozása",
    PostIdea: "Ötlet beküldése",
    AskQuestion: "Kérdés feltevése",
    ReportProblem: "Probléma bejelentése",
    CreateMindMap: "Gondolattérkép létrehozása",
    CreatePage: "Oldal létrehozása",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Ikonok magyarázata...",
    IconExplanation: "Ikonok magyarázata:",
    ExplGenDisc: "Általános megbeszélés.",
    ExplQuestion: "Egy kérdés, amelyre még nincs elfogadott válasz.",
    ExplAnswer: "Egy kérdés elfogadott válasszal.",
    ExplIdea: "Egy ötlet / javaslat.",
    ExplProblem: "Egy probléma.",
    ExplPlanned: "Valami, amit tervezünk megtenni vagy javítani.",
    ExplDone: "Valami, ami elkészült vagy javítva lett.",
    ExplClosed: "Téma lezárva.",
    ExplPinned: "A téma mindig elöl szerepel (esetleg csak a saját kategóriájában).",

    PopularTopicsComma: "Népszerű témák, ",
    TopFirstAllTime: "A legnépszerűbb témákat mutatja elöl, mindenkori.",
    TopFirstPastDay: "Az elmúlt nap népszerű témáit mutatja.",

    CatHasBeenDeleted: "Ez a kategória törölve lett",

    TopicsActiveFirst: "Témák, a nemrég frissültek elöl",
    TopicsNewestFirst: "Témák, az újak elöl",

    CreatedOn: "Létrehozva ekkor: ",
    LastReplyOn: "\nLegutóbbi válasz ekkor: ",
    EditedOn: "\nSzerkesztve ekkor: ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "létrehozta a témát",
    frequentPoster: "gyakori hozzászóló",
    mostRecentPoster: "legutóbbi hozzászóló",

    inC: "itt: ",

    TitleFixed: "Ez javítva lett",
    TitleDone: "Ez elkészült",
    TitleStarted: "Elkezdtük",
    TitleStartedFixing: "Elkezdtük a javítását",
    TitleUnsolved: "Ez egy megoldatlan probléma",
    TitleIdea: "Ez egy ötlet",
    TitlePlanningFix: "Tervezzük a javítását",
    TitlePlanningDo: "Tervezzük a megvalósítását",
    TitleChat: "Ez egy csevegőcsatorna",
    TitlePrivateChat: "Ez egy privát csevegőcsatorna",
    TitlePrivateMessage: "Egy privát üzenet",
    TitleInfoPage: "Ez egy információs oldal",
    TitleDiscussion: "Megbeszélés",
    IsPinnedGlobally: "\nGlobálisan rögzítve lett, így elöl szerepel a listában.",
    IsPinnedInCat: "\nRögzítve lett a kategóriájában, így elöl szerepel a kategória listájában.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Legutóbbi témák (várakozók)",
    RecentTopicsInclDel: "Legutóbbi témák (töröltekkel együtt)",
    RecentTopics: "Legutóbbi témák",
    _replies: " válasz",
    _deleted: " (törölve)",
    _defCat: " (alapértelmezett kategória)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Legutóbbi hozzászólások",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " online ebben a csevegésben",    // example: "5 online in this chat"
    NumOnlForum: " online ebben a fórumban",

    // Open left-sidebar button title.
    WatchbBtn: "Témáid",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Legutóbbi témáid, csatlakozott csevegések, közvetlen üzenetek",

    // Title shown on user profile pages.
    AbtUsr: "A felhasználóról",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Vissza a felhasználói profilról",
    BackFromAdm: "Vissza az admin felületről",

    // Title shown on full text search page.
    SearchPg: "Keresés oldal",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Hozzáadás...",
    RecentlyViewed: "Legutóbb megtekintett témák",  
    JoinedChats: "Csatlakozott csevegések",
    ChatChannels: "Csevegőcsatornák",
    CreateChat: "Csevegőcsatorna létrehozása",
    DirectMsgs: "Közvetlen üzenetek",
    NoChats: "Nincs",    // meaning: "No chat messages"
    NoDirMsgs: "Nincs",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Műveletek a témával",
    ViewPeopleHere: "Itt lévő emberek megtekintése",
    ViewAddRemoveMembers: "Tagok megtekintése / hozzáadása / eltávolítása",
    ViewChatMembers: "Csevegés tagjainak megtekintése",
    EditChat: "Csevegés leírásának szerkesztése",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Kilépés ebből a csevegésből",
    LeaveThisCommunity: "Kilépés ebből a közösségből",
    JoinThisCommunity: "Csatlakozás ehhez a közösséghez",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Legutóbbi hozzászólások ebben a témában:",
    NoComments: "Nincsenek hozzászólások.",

    YourBookmarks: "Könyvjelzőid:",

    UsersOnline: "Online felhasználók:",
    UsersOnlineForum: "Online felhasználók ebben a fórumban:",
    UsersInThisChat: "Felhasználók ebben a csevegésben:",
    UsersInThisTopic: "Felhasználók ebben a témában:",

    GettingStartedGuide: "Admin útmutató", 
    AdminGuide: "Admin útmutató",          // ... but what? It's here already, just reuse this transl field
    Guide: "Útmutató",

    // How to hide the sidebar.
    CloseShortcutS: "Bezárás (gyorsbillentyű: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "További emberek hozzáadása",

    // Shown next to one's own username, in a list of users.
    thatsYou: "ez te vagy",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Úgy tűnik, csak te",
    YouAnd: "Te és ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " ember" : " ember";
      const have = numStrangers === 1 ? "nincs" : "nincsenek";
      return numStrangers + people + ", aki " + have + " bejelentkezve";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    
    RepliesToTheLeft: "A bal oldali válaszok ",
    bestFirst: "a legjobbak szerint lehetnek rendezve.",
    ButBelow: "De alább ",
    insteadBy: " ugyanazok a válaszok ",
    newestFirst: "a legújabbak szerint vannak rendezve.",

    SoIfLeave: "Így ha elmész, és később visszatérsz, alább megtalálod ",
    allNewReplies: "az összes új választ.",
    Click: "Kattints",
    aReplyToReadIt: " egy válaszra alább az elolvasásához – mert alább csak egy részlet látható.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Kattintson az állapot módosításához",
    ClickToViewAnswer: "Kattintson a válasz megtekintéséhez",
    ViewAnswer: "Válasz megtekintése",
    ChangeStatusC: "Állapot módosítása:",
    ChangeCatC: "Kategória módosítása:",
    ChangeTopicTypeC: "Téma típusának módosítása:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "egy kérdés",
    hasAccptAns: "van elfogadott válasza",
    aProblem: "egy probléma",
    planToFix: "tervezzük a javítását",
    anIdea: "egy ötlet",
    planToDo: "tervezzük a megvalósítását",
  },

  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Ezt az űrlapot ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "lezárták; már nem töltheted ki és nem küldheted be.",

    ThisTopicClosed_1: "Ezt a témát ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". Továbbra is írhatsz hozzászólásokat.",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "Ez az oldal törölve lett",
    CatDeldPageToo: "A kategória törölve lett, így ez az oldal is törlésre került",

    ThreadDeld: "A szál törölve lett",
    CmntDeld: "A hozzászólás törölve lett",
    PostDeld: "A bejegyzés törölve lett",
    DiscDeld: "A megbeszélés törölve lett",
    PageDeld: "Az oldal törölve lett",
    PagePendAppr: "Az oldal jóváhagyásra vár",
    TitlePendAppr: "A cím jóváhagyásra vár",
    TextPendingApproval: "A szöveg jóváhagyásra vár",

    TooltipQuestClosedNoAnsw: "Ezt a kérdést elfogadott válasz nélkül zárták le.",
    TooltipTopicClosed: "Ez a téma le van zárva.",

    TooltipQuestSolved: "Ez egy megoldott kérdés",
    TooltipQuestUnsolved: "Ez egy megoldatlan kérdés",

    StatusDone: "Kész",
    TooltipProblFixed: "Ez javítva lett",
    TooltipDone: "Ez elkészült",

    StatusStarted: "Elkezdve",
    TooltipFixing: "Elkezdtük a javítását",      
    TooltipImplementing: "Elkezdtük a megvalósítását", 

    StatusPlanned: "Tervezve",
    TooltipProblPlanned: "Tervezzük a javítását",
    TooltipIdeaPlanned: "Tervezzük a megvalósítását",   // or "to implement this"?

    StatusNew: "Új",
    StatusNewDtl: "Új téma, megbeszélés alatt",
    TooltipUnsProbl: "Ez egy megoldatlan probléma",
    TooltipIdea: "Ez egy ötlet",

    TooltipPersMsg: "Személyes üzenet",
    TooltipChat: "# means Chat Channel",
    TooltipPrivChat: "Ez egy privát csevegőcsatorna",

    TooltipPinnedGlob: "\nGlobálisan rögzítve.",
    TooltipPinnedCat: "\nRögzítve ebben a kategóriában.",

    SolvedClickView_1: "Megoldva a(z) #",
    SolvedClickView_2: ", kattintson a megtekintéshez",

    PostHiddenClickShow: "Bejegyzés elrejtve; kattintson a megjelenítéshez",
    ClickSeeMoreRepls: "További válaszok megjelenítése",      
    ClickSeeMoreComments: "További hozzászólások megjelenítése",  
    ClickSeeThisComment: "Kattintson a hozzászólás megjelenítéséhez",
    clickToShow: "kattintson a megjelenítéshez",

    ManyDisagree: "Sokan nem értenek egyet ezzel:",
    SomeDisagree: "Néhányan nem értenek egyet ezzel:",

    PendAppr: "Jóváhagyásra vár",
    CmtPendAppr: "Hozzászólás jóváhagyásra vár, beküldve: ",  // REMOVE  too complicated
    CmtBelowPendAppr: (isYour) => (isYour ? "A te" : "A") + " hozzászólásod alább jóváhagyásra vár.",

    _and: " és",

    repliesTo: "válaszok erre:",
    InReplyTo: "Válaszként erre:",
    YourReplyTo: "Válaszod erre: ",  
    YourChatMsg: "Csevegőüzeneted: ",   
    YourDraft: "Piszkozatod",    
    YourEdits: "Szerkesztéseid: ",   
    YourProgrNoteC: "Folyamatjelző megjegyzésed:",  
    aProgrNote: "egy folyamatjelző megjegyz: ",  

    ReplyingToC: "Válaszadás neki:",    
    ScrollToPrevw_1: "Görgess az ",  
    ScrollToPrevw_2: "előnézethez",     

    UnfinEdits: "Befejezetlen szerkesztések",  
    ResumeEdting: "Szerkesztés folytatása",  
    DelDraft: "Piszkozat törlése",   

    ClickViewEdits: "Kattintson a korábbi szerkesztések megtekintéséhez",

    By: "Szerző: ", // ... someones name

    // Discussion ...
    aboutThisIdea: "arról, hogyan és megvalósítsuk-e ezt az ötletet",
    aboutThisProbl: "arról, hogyan és javítsuk-e ezt a problémát",

    AddProgrNote: "Folyamatjelző megjegyzés hozzáadása",
    // Progress ...
    withThisIdea: "ezzel az ötlettel kapcsolatban",
    withThisProbl: "ezzel a problémával kapcsolatban",
    withThis: "ezzel kapcsolatban",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Értesítések erről a témáról:",

    // If is a direct message topic, members listed below this text.
    Msg: "Üzenet",

    SmrzRepls: "Válaszok összefoglalása",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `${numReplies} válasz van. Becsült olvasási idő: ${minutes} perc`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Kész. ${numSummarized} válasz összefoglalva a korábban mutatott ${numShownBefore} válaszból.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Téma lezárása",  
    CloseOwnQuestionTooltip: "Zárd le ezt a kérdést, ha már nincs szükséged válaszra.",
    CloseOthersQuestionTooltip: "Zárd le ezt a kérdést, ha nincs szükség válaszra, például ha " +
        "nem ide való vagy már megválaszolták egy másik témában.",
    CloseToDoTooltip: "Zárd le ezt a feladatot, ha nem kell elvégezni vagy javítani.",
    CloseTopicTooltip: "Zárd le ezt a témát, ha nincs szükség további megbeszélésre.",

    AcceptBtnExpl: "Elfogadás válaszként a kérdésre vagy problémára",
    SolutionQ: "Megoldás?",
    ClickUnaccept: "Kattintson a válasz elfogadásának visszavonásához",
    PostAccepted: "Ez a bejegyzés el lett fogadva válaszként",

    NumLikes: (num: number) => num === 1 ? "1 kedvelés" : num + " kedvelés",
    NumDisagree: (num: number) => num + " egyet nem értés",
    NumBury: (num: number) => num === 1 ? "1 elrejtés" : num + " elrejtés",
    NumUnwanted: (num: number) => num === 1 ? "1 nemkívánatos" : num + " nemkívánatos",

    MoreVotes: "További szavazatok...",
    LikeThis: "Kedvelem",
    LinkToPost: "Link ehhez a bejegyzéshez",
    Report: "Jelentés",
    ReportThisPost: "Bejegyzés jelentése",
    Admin: "Admin",
    DiscIx: "Témák tartalomjegyzéke",

    Disagree: "Nem értek egyet",
    DisagreeExpl: "Kattintson ide, ha nem ért egyet ezzel a bejegyzéssel, vagy ha ténybeli hibákra szeretne figyelmeztetni másokat.",
    Bury: "Elrejtés",
    BuryExpl: "Kattintson ide, hogy más bejegyzések ezelőtt szerepeljenek. Csak a fórum személyzete láthatja a szavazatát.",
    Unwanted: "Nemkívánatos",
    UnwantedExpl: "Ha nem szeretné ezt a bejegyzést ezen a weboldalon látni. Ez csökkentené a szerzőbe vetett bizalmamat. Csak a fórum személyzete láthatja a szavazatát.",

    AddTags: "Címkék hozzáadása/eltávolítása",
    UnWikify: "Wiki-állapot visszavonása",
    Wikify: "Wikisítés",
    PinDeleteEtc: "Rögzítés / Törlés / Kategória ...",
  },


  // Share dialog

  sd: {
    Copied: "Másolva.",
    CtrlCToCopy: "Nyomjon CTRL+C-t a másoláshoz.",
    ClickToCopy: "Kattintson a link másolásához.",
  },


  // Chat

  c: {
    About_1: "Ez a(z) ",
    About_2: " csevegőcsatorna, létrehozta: ",
    ScrollUpViewComments: "Görgessen fel a régebbi hozzászólások megtekintéséhez",
    Purpose: "Cél:",
    MessageDeleted: "(Üzenet törölve)",
    JoinThisChat: "Csatlakozás a csevegéshez",
    PostMessage: "Üzenet küldése",
    AdvancedEditor: "Speciális szerkesztő",
    TypeTitle: "Írjon egy címet – miről szól ez a csevegés, pár szóban?",
    TypePurpose: "Írjon egy célt – lehet hosszabb, mint a cím, leíróbb.",
    TypeHere: "Írjon ide. Használhat Markdown-t és HTML-t.",
  },


  // My Menu

  mm: {
    NeedsReview: "Ellenőrzésre vár ",
    AdminHelp: "Admin segítség ",
    StaffHelp: "Személyzeti segítség ",
    DraftsEtc: "Piszkozatok, könyvjelzők, feladatok",
    MoreNotfs: "Minden értesítés megtekintése",
    DismNotfs: "Összes megjelölése olvasottként",
    ViewProfile: "Profil megtekintése",
    ViewGroups: "Csoportok megtekintése",
    LogOut: "Kijelentkezés",
    UnhideHelp: "Súgóüzenetek megjelenítése",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Görgetés ide:",
    Scroll: "Görgetés",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "V",
    Back_2: "issza",
    BackExpl: "Görgetés vissza a korábbi pozícióhoz az oldalon",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Oldal teteje",
    PgTopHelp: "Ugrás az oldal tetejére. Gyorsbillentyű: 1",
    Repl: "Válaszok",
    ReplHelp: "Ugrás a Válaszok szakaszhoz. Gyorsbillentyű: 2",
    Progr: "Folyamat",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Ugrás a Folyamat szakaszhoz. Gyorsbillentyű: 3",
    PgBtm: "Oldal alja",
    Btm: "Alja",
    BtmHelp: "Ugrás az oldal aljára. Gyorsbillentyű: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", és ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " a visszagörgetéshez",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Felhasználók kiválasztása",
    AddUsers: "Felhasználók hozzáadása",
  },


  // About user dialog

  aud: {
    IsMod: "Moderátor.",
    IsAdm: "Adminisztrátor.",
    IsDeld: "Inaktiválva vagy törölve.",
    ThisIsGuest: "Ez egy vendég felhasználó, bárki lehet.",
    ViewInAdm: "Megtekintés az Admin felületen",
    ViewProfl: "Profil megtekintése",
    ViewComments: "További hozzászólások megtekintése",
    RmFromTpc: "Eltávolítás a témából",
    EmAdrUnkn: "E-mail cím ismeretlen – ez a vendég nem fog értesítést kapni a válaszokról.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Beállítások",
    Invites: "Meghívók",
    DraftsEtc: "Piszkozatok stb.",
    About: "Névjegy",
    Privacy: "Adatvédelem",
    Security: "Biztonság",
    Account: "Fiók",
    Interface: "Felület",

    // ----- Overview stats

    JoinedC: "Csatlakozott: ",
    PostsMadeC: "Bejegyzések: ",
    LastPostC: "Utolsó bejegyzés: ",
    LastSeenC: "Utoljára látva: ",
    TrustLevelC: "Bizalmi szint: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Fotó feltöltése",
    ChangePhoto: "Fotó módosítása",
    ImgTooSmall: "A kép túl kicsi: legalább 100 x 100 pixelnek kell lennie",

    // ----- Activity

    OnlyStaffCanSee: "Csak a személyzet és a megbízható magtagok láthatják ezt.",
    OnlyMbrsCanSee: "Csak azok láthatják ezt, akik egy ideje már aktív tagok.",
    Nothing: "Nincs megjeleníthető tartalom",
    Posts: "Bejegyzések",
    NoPosts: "Nincsenek bejegyzések.",
    Topics: "Témák",
    NoTopics: "Nincsenek témák.",

    // ----- User status

    UserBanned: "Ez a felhasználó ki van tiltva",
    UserSuspended: (dateUtc: string) => `Ez a felhasználó fel van függesztve ${dateUtc} UTC-ig`,
    ReasonC: "Ok: ",

    DeactOrDeld: "Inaktiválva vagy törölve lett.",
    isGroup: " (egy csoport)",
    isGuest: " — vendég felhasználó, bárki lehet",
    isMod: " – moderátor",
    isAdmin: " – adminisztrátor",
    you: "(te)",

    // ----- Notifications page

    NoNotfs: "Nincsenek értesítések",
    NotfsToYouC: "Értesítéseid:",
    NotfsToOtherC: (name: string) => `Értesítések ${name} részére:`,
    DefNotfsSiteWide: "Alapértelmezett értesítések az egész oldalon",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "neki:",

    // ----- Drafts Etc page

    NoDrafts: "Nincsenek piszkozatok",
    YourDraftsC: "Piszkozataid:",
    DraftsByC: (name: string) => `${name} piszkozatai:`,

    // ----- Invites page

    InvitesIntro: "Itt hívhatsz meg embereket az oldalra. ",
    InvitesListedBelow: "A már elküldött meghívók alább láthatók.",
    NoInvites: "Még nem hívtál meg senkit.",

    InvitedEmail: "Meghívott e-mail címe",
    WhoAccepted: "Tag, aki elfogadta",
    InvAccepted: "Meghívó elfogadva",
    InvSent: "Meghívó elküldve",
    JoinedAlready: "Már csatlakozott",

    SendAnInv: "Emberek meghívása", 
    SendInv: "Meghívók küldése",   
    SendInvExpl:  
        "Küldünk egy rövid e-mailt a barátaidnak. Egy linkre kattintva " +
        "azonnal csatlakozhatnak, bejelentkezés nélkül. " +
        "Normál tagok lesznek, nem moderátorok vagy adminisztrátorok.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Kész. Elküldöm nekik az e-mailt.",
    NoOneToInv: "Nincs kit meghívni.",
    InvNotfLater: "Később értesítelek, ha meghívtam őket.",
    AlreadyInvSendAgainQ: "Őket már meghívtad – esetleg újra meg szeretnéd hívni őket?",
    InvErr_1: "Ezek ",
    InvErr_2: "hibát",
    InvErr_3: " eredményeztek:",
    TheseJoinedAlrdyC: "Ők már csatlakoztak, így őket nem hívtam meg:",
    ResendInvsQ: "Újraküldöd a meghívókat ezeknek az embereknek? Ők már kaptak meghívót.",
    InvAgain: "Meghívás újra",

    // ----- Preferences, About

    AboutYou: "Rólad",
    WebLink: "Bármilyen weboldalad vagy oldalad.",

    NotShownCannotChange: "Nem nyilvános. Nem módosítható.",

    // The full name or alias:
    NameOpt: "Név (opcionális)",

    NotShown: "Nem nyilvános.",

    // The username:
    MayChangeFewTimes: "Csak néhányszor módosíthatod.",
    notSpecified: "(nincs megadva)",
    ChangeUsername_1: "Csak néhányszor módosíthatod a felhasználónevedet.",
    ChangeUsername_2: "A túl gyakori módosítás összezavarhat másokat – " +
        "nem fogják tudni, hogyan említsenek meg (@mention).",

    NotfAboutAll: "Értesítés minden új bejegyzésről (kivéve, ha némítod a témát vagy kategóriát)",
    NotfAboutNewTopics: "Értesítés az új témákról (kivéve, ha némítod a kategóriát)",

    ActivitySummaryEmails: "Összefoglaló e-mailek a tevékenységekről",

    EmailSummariesToGroup:
        "Ha a csoport tagjai nem látogatnak ide, alapértelmezés szerint küldjünk nekik " +
        "e-mailben összefoglalót a népszerű témákról és egyéb dolgokról.",
    EmailSummariesToMe:
        "Ha nem látogatok ide, küldjenek nekem e-mailben " +
        "összefoglalót a népszerű témákról és egyéb dolgokról.",

    AlsoIfTheyVisit: "Akkor is küldjünk nekik e-mailt, ha rendszeresen látogatnak ide.",
    AlsoIfIVisit: "Akkor is küldjenek nekem e-mailt, ha rendszeresen látogatok ide.",

    HowOftenWeSend: "Milyen gyakran küldjük ezeket az e-maileket?",
    HowOftenYouWant: "Milyen gyakran szeretnéd ezeket az e-maileket?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Elrejted a legutóbbi tevékenységedet az idegenek és az új tagok elől?",
    HideActivityStrangers_2: "(De nem azok elől, akik egy ideje már aktív tagok.)",
    HideActivityAll_1: "Elrejted a legutóbbi tevékenységedet mindenki elől?",
    HideActivityAll_2: "(Kivéve a személyzetet és a megbízható magtagokat.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "E-mail címek",
    PrimaryDot: "Elsődleges. ",
    VerifiedDot: "Ellenőrizve. ",
    NotVerifiedDot: "Nincs ellenőrizve. ",
    ForLoginWithDot: (provider: string) => `Bejelentkezéshez ezzel: ${provider}. `,
    MakePrimary: "Legyen elsődleges",
    AddEmail: "E-mail cím hozzáadása",
    TypeNewEmailC: "Írj be egy új e-mail címet:",
    MaxEmailsInfo: (numMax: number) => `(Legfeljebb ${numMax} címet adhatsz meg.)`,
    EmailAdded_1: "Hozzáadva. Küldtünk egy ellenőrző e-mailt – ",
    EmailAdded_2: "ellenőrizd a beérkező leveleidet.",
    SendVerifEmail: "Ellenőrző e-mail küldése",

    EmailStatusExpl:
        "('Elsődleges' azt jelenti, hogy ezzel a címmel jelentkezhetsz be, és ide küldjük az értesítéseket. " +
        "'Ellenőrizve' azt jelenti, hogy rákattintottál az ellenőrző linkre az e-mailben.)",

    // Password:
    ChangePwdQ: "Megváltoztatod a jelszavadat?",
    CreatePwdQ: "Létrehozol jelszót?",
    WillGetPwdRstEml: "Kapsz egy e-mailt a jelszó visszaállításához.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Nincs",

    // Logins:
    LoginMethods: "Bejelentkezési módok",
    commaAs: ", mint: ",

    // One's data:
    YourContent: "Tartalmad",
    DownloadPosts: "Bejegyzések letöltése",
    DownloadPostsHelp: "Létrehoz egy JSON fájlt az általad beküldött témák és hozzászólások másolatával.",
    DownloadPersData: "Személyes adatok letöltése",
    DownloadPersDataHelp: "Létrehoz egy JSON fájlt a személyes adataid másolatával, pl. a neveddel " +
        "(ha megadtál nevet) és az e-mail címeddel.",


    // Delete account:
    DangerZone: "Veszélyes zóna",
    DeleteAccount: "Fiók törlése",
    DeleteYourAccountQ:
        "Törlöd a fiókodat? Eltávolítjuk a nevedet, elfelejtjük az e-mail címedet, jelszavadat and " +
        "minden online azonosítódat (például Facebook vagy Twitter bejelentkezés). " +
        "Nem fogsz tudni újra bejelentkezni. Ez a művelet nem vonható vissza.",
    DeleteUserQ:
        "Törlöd ezt a felhasználót? Eltávolítjuk a nevet, elfelejtjük az e-mail címet, jelszót és " +
        "az online azonosítókat (például Facebook vagy Twitter bejelentkezés). " +
        "A felhasználó nem fog tudni újra bejelentkezni. Ez a művelet nem vonható vissza.",
    YesDelete: "Igen, törlés",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Csoporttagok",
    NoMembers: "Nincsenek tagok.",
    MayNotListMembers: "A tagok listázása nem engedélyezett.",
    AddMembers: "Tagok hozzáadása",
    BuiltInCannotModify: "Ez egy beépített csoport; nem módosítható.",
    NumMembers: (num: number) => `${num} tag`,
    YouAreMember: "Tag vagy.",
    CustomGroupsC: "Egyedi csoportok:",
    BuiltInGroupsC: "Beépített csoportok:",
    DeleteGroup: "Csoport törlése",
  },


  // Create user dialog

  cud: {
    CreateUser: "Felhasználó létrehozása",
    CreateAccount: "Fiók létrehozása",
    EmailC: "E-mail:",  // REMOVE move to t.EmailC instead
    keptPriv: "bizalmasan kezeljük",
    forNotfsKeptPriv: "válaszértesítésekhez, bizalmasan kezeljük",
    EmailVerifBy_1: "Az e-mail címedet ellenőrizte: ",
    EmailVerifBy_2: ".",
    UsernameC: "Felhasználónév:",
    FullNameC: "Teljes név:",
    optName: "opcionális",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "Account created. You have been logged in.",  // COULD say if verif email sent too?
    AlmostDone:
        "Már majdnem kész! Csak meg kell erősítened az e-mail címedet. " +
        "Küldtünk neked egy e-mailt. Kattints az e-mailben található linkre " +
        "a fiókod aktiválásához. Ezt az oldalt bezárhatod.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Feltételek és adatvédelem",

    Accept_1: "Elfogadod a ",
    TermsOfService: "Általános Szerződési Feltételeinket",
    TermsOfUse: "Használati feltételeinket",
    Accept_2: " és az ",
    PrivPol: "Adatvédelmi nyilatkozatunkat",
    Accept_3_User: "?",
    Accept_3_Owner: " az oldal tulajdonosai számára?",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Igen, elfogadom",
  },


  // Password input

  pwd: {
    PasswordC: "Jelszó:",
    StrengthC: "Erősség: ",
    FairlyWeak: "Elég gyenge.",
    toShort: "túl rövid",
    TooShort: (minLength: number) => `Túl rövid. Legalább ${minLength} karakter hosszúnak kell lennie`,
    PlzInclDigit: "Kérjük, használjon számot vagy különleges karaktert",
    TooWeak123abc: "Túl gyenge. Ne használjon olyan jelszavakat, mint az '12345' vagy 'abcde'.",
    AvoidInclC: "Kerülje a neve vagy e-mail címe (részleteinek) használatát a jelszóban:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Az oldal nem található, vagy hozzáférés megtagadva.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Éppen valaki más nevében vagy bejelentkezve, akinek lehet, hogy nincs hozzáférése a webhely minden részéhez.",

    IfYouThinkExistsThen: "Ha úgy gondolod, hogy az oldal létezik, jelentkezz be olyanként, aki hozzáférhet. ",
    LoggedInAlready: "(Már be vagy jelentkezve, de talán nem a megfelelő fiókkal?) ",
    ElseGoToHome_1: "Különben ",
    ElseGoToHome_2: "visszatérhetsz a kezdőlapra.",

    CreateAcconut: "Fiók létrehozása",
    ContinueWithDots: "Folytatás ezzel: ...",
    SignUp: "Csatlakozás",
    LogIn: "Bejelentkezés",
    LogInWithPwd: "Bejelentkezés jelszóval",
    CreateAdmAcct: "Adminisztrátori fiók létrehozása:",
    AuthRequired: "A webhely eléréséhez hitelesítés szükséges",
    LogInToLike: "Jelentkezz be a bejegyzés kedveléséhez",
    LogInToSubmit: "Bejelentkezés és beküldés",
    LogInToComment: "Jelentkezz be hozzászólás írásához",
    LogInToCreateTopic: "Jelentkezz be téma létrehozásához",

    //AlreadyHaveAcctQ: "You have an account? ",  
    OrLogIn_1: "Vagy ",         // "Or "
    OrLogIn_2: "jelentkezz be",      // "Log in" (this is a button)
    OrLogIn_3: " inkább",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "Vagy ",
    SignUpInstead_2: "hozz létre fiókot", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: ", vagy csak ",
    OrTypeName_2: "adj meg egy nevet",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "Vagy hozz létre fiókot:",
    OrTypeName: "Vagy add meg a neved:",
    OrLogIn: "Vagy jelentkezz be:",
    YourNameQ: "Mi a neved?",

    BadCreds: "Hibás felhasználónév vagy jelszó",

    UsernameOrEmailC: "Felhasználónév vagy e-mail:",
    PasswordC: "Jelszó:",
    ForgotPwd: "Elfelejtetted a jelszavadat?",

    NoPwd: "Még nem választottál jelszót.",
    CreatePwd: "Jelszó létrehozása",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Kérjük, mondja el, mi aggasztja.",
    ThanksHaveReported: "Köszönjük. Jelentette a tartalmat. A fórum személyzete meg fogja vizsgálni.",
    ReportComment: "Hozzászólás jelentése",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Ez a bejegyzés személyes adatokat tartalmaz, például valaki valódi nevét.",
    OptOffensive: "Ez a bejegyzés sértő vagy bántó tartalmat tartalmaz.",
    OptSpam: "Ez a bejegyzés nemkívánatos hirdetés (spam).",
    OptOther: "Egyéb okból szeretném értesíteni a személyzetet erről a bejegyzésről.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "Ha be vagy jelentkezve, újra megjelenítheted a súgóüzeneteket, ha a nevedre kattintasz, majd a ",
    YouCanShowAgain_2: "Súgóüzenetek megjelenítése gombra",
  },


  // Editor

  e: {
    SimilarTopicsC: "Hasonló témák:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "Sajnáljuk, de jelenleg egyszerre csak egy fájlt tölthet fel",
    PleaseFinishPost: "Kérjük, előbb fejezze be a bejegyzés írását",
    PleaseFinishChatMsg: "Kérjük, előbb fejezze be a csevegőüzenet írását",
    PleaseFinishMsg: "Kérjük, előbb fejezze be az üzenet írását",
    PleaseSaveEdits: "Kérjük, előbb mentse a jelenlegi szerkesztéseit",
    PleaseSaveOrCancel: "Kérjük, előbb mentse vagy szakítsa meg az új témát",
    CanContinueEditing: "Folytathatja a szöveg szerkesztését, ha újra megnyitja a szerkesztőt.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Kérjük, ne törölje az összes szöveget. Írjon valamit.",
    PleaseWriteSth: "Kérjük, írjon valamit.",
    PleaseWriteTitle: "Kérjük, írjon címet a témának.",
    PleaseWriteMsgTitle: "Kérjük, írjon címet az üzenetnek.",
    PleaseWriteMsg: "Kérjük, írjon egy üzenetet.",

    exBold: "félkövér szöveg",
    exEmph: "kiemelt szöveg",
    exPre: "előre formázott szöveg",
    exQuoted: "idézett szöveg",
    ExHeading: "Címsor",

    TitlePlaceholder: "Írjon egy címet – miről szól ez, egy rövid mondatban?",

    EditPost_1: "Szerkesztés: ",
    EditPost_2: "bejegyzés ",

    TypeChatMsg: "Írjon csevegőüzenetet:",
    YourMsg: "Az üzeneted:",
    CreateTopic: "Új téma létrehozása",
    CreateCustomHtml: "Egyedi HTML oldal létrehozása (saját <h1> címmel)",
    CreateInfoPage: "Információs oldal létrehozása",
    CreateCode: "Forráskód oldal létrehozása",
    AskQuestion: "Kérdés feltevése",
    ReportProblem: "Probléma bejelentése",
    SuggestIdea: "Ötlet javaslása",
    NewChat: "Csevegés címe és célja",  
    NewPrivChat: "Privát csevegés címe és célja",  
    AppendComment: "Hozzászólás fűzése az oldal aljához:",

    ReplyTo: "Válasz neki: ",
    ReplyTo_theOrigPost: "az eredeti bejegyzés",
    ReplyTo_post: "bejegyzés: ",
    AddCommentC: "Hozzászólás hozzáadása:",   

    PleaseSelectPosts: "Kérjük, válasszon ki egy vagy több bejegyzést a válaszadáshoz.",

    Save: "Mentés",
    edits: "szerkesztések",

    PostReply: "Válasz beküldése",
    PostComment: "Hozzászólás beküldése",

    Post: "Beküldés",
    comment: "hozzászólás",
    question: "kérdés",

    PostMessage: "Üzenet beküldése",
    SimpleEditor: "Egyszerű szerkesztő",

    Send: "Küldés",
    message: "üzenet",

    Create: "Létrehozás",
    page: "oldal",
    chat: "csevegés",
    idea: "ötlet",
    topic: "téma",

    Submit: "Küldés",
    problem: "probléma",

    ViewOldEdits: "Korábbi szerkesztések megtekintése",

    UploadBtnTooltip: "Fájl vagy kép feltöltése",
    BoldBtnTooltip: "Félkövér szöveg",
    EmBtnTooltip: "Kiemelés",
    QuoteBtnTooltip: "Idézet",
    PreBtnTooltip: "Előre formázott szöveg",
    HeadingBtnTooltip: "Címsor",

    TypeHerePlaceholder: "Írjon ide. Használhat Markdown-t és HTML-t. Képek beillesztéséhez húzza ide őket.",

    Maximize: "Teljes méret",
    ToNormal: "Vissza a normál mérethez",
    TileHorizontally: "Vízszintes elrendezés",

    PreviewC: "Előnézet:",
    TitleExcl: " (cím nélkül)",
    ShowEditorAgain: "Szerkesztő megjelenítése újra",
    Minimize: "Minimalizálás",

    PreviewInfo: "Itt láthatod, hogyan fog kinézni a bejegyzésed.",
    CannotType: "Itt nem tudsz gépelni.",

    LoadingDraftDots: "Piszkozat betöltése...",
    DraftUnchanged: "Változatlan.",
    CannotSaveDraftC: "Piszkozat mentése sikertelen:",
    DraftSavedBrwsr: "Piszkozat mentve a böngészőben.",   
    DraftSaved: (nr: string | number) => `${nr}. piszkozat mentve.`,
    DraftDeleted: (nr: string | number) => `${nr}. piszkozat törölve.`,
    WillSaveDraft: (nr: string | number) => `${nr}. piszkozat mentése...`,
    SavingDraft: (nr: string | number) => `${nr}. piszkozat mentése folyamatban...`,
    DeletingDraft: (nr: string | number) => `${nr}. piszkozat törlése...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Kategória kiválasztása",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Téma típusának kiválasztása:",
    DiscussionExpl: "Megbeszélés valamiről.",
    QuestionExpl: "Egy válasz megjelölhető elfogadott válaszként.",
    ProblExpl: "Ha valami elromlott vagy nem működik. Megjelölhető javítottként/megoldottként.",
    IdeaExpl: "Egy javaslat. Megjelölhető késznek/megvalósítottnak.",
    ChatExpl: "Egy talán soha véget nem érő beszélgetés.",
    PrivChatExpl: "Csak azok láthatják, akiket meghívtak a csevegésbe.",

    CustomHtml: "Egyedi HTML oldal",
    InfoPage: "Információs oldal",
    Code: "Kód",
    EmbCmts: "Beágyazott hozzászólások",
    About: "Névjegy",
    PrivChat: "Privát csevegés",
    Form: "Űrlap",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Nincs több közösség, amelyhez csatlakozhatnál.",
    SelCmty: "Közösség kiválasztása...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "Súgó keresése",  
    TxtToFind: "Keresendő szöveg",
  },


  // No internet

  ni: {
    NoInet: "Nincs internetkapcsolat",
    PlzRefr: "Frissítse az oldalt a legújabb változások megtekintéséhez. (Megszakadt a kapcsolat)",
    RefrNow: "Frissítés most",
  },


  PostDeleted: (postNr: number) => `A(z) ${postNr}. számú bejegyzés törölve lett.`,
  NoSuchPost: (postNr: number) => `Nincs ${postNr}. számú bejegyzés ezen az oldalon.`,
  NoPageHere: "Ez az oldal törölve lett, soha nem is létezett, vagy nincs hozzáférésed hozzá.",
  GoBackToLastPage: "Vissza az előző oldalra",

};
