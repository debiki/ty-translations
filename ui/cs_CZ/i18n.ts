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

var t_cs_CZ: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Aktivní",
  Activity: "Aktivita",
  Add: "Přidat",
  AddingDots: "Přidávání ...",
  AddComment: "Přidat komentář",
  Admin: "Admin",
  AdvSearch: "Rozšířené vyhledávání",
  Anonym: "Anonym",
  Away: "Nepřítomen",
  Back: "Zpět",
  BlogN: "Blog",
  Bookmarks: "Záložky",
  Cancel: "Zrušit",
  Categories: "Kategorie",
  Category: "Kategorie",
  ChangeV: "Změnit",
  ClickToShow: "Kliknutím zobrazíte",
  ChangeDots: "Změnit ...",
  ChatN: "Chat",
  Chatting: "Chatování",
  CheckYourEmail: "Zkontrolujte si e-mail",
  Close: "Zavřít",
  closed: "uzavřeno",
  comments: "komentáře",   // as in:  "123 comments"
  Continue: "Pokračovat",
  Created: "Vytvořeno",
  Delete: "Smazat",
  Deleted: "Smazáno",
  DirectMessage: "Přímá zpráva",
  Discussion: "Diskuze",
  discussion: "diskuze",
  done: "hotovo",
  EditV: "Upravit",
  Editing: "Upravování",
  EmailC: "E-mail: ",
  EmailAddress: "E-mailová adresa",
  EmailAddresses: "E-mailové adresy",
  EmailSentD: "E-mail odeslán.",
  Forum: "Fórum",
  GetNotifiedAbout: "Dostávat upozornění na",
  GroupsC: "Skupiny:",
  Hide: "Skrýt",
  Home: "Domů",
  Idea: "Nápad",
  Join: "Připojit se",
  KbdShrtcsC: "Klávesové zkratky: ",
  Loading: "Načítání...",
  LoadMore: "Načíst další ...",
  LogIn: "Přihlásit se",
  LoggedInAs: "Přihlášen jako ",
  LogOut: "Odhlásit se",
  Maybe: "Možná",
  Manage: "Spravovat",
  Members: "Členové",
  MessageN: "Zpráva",
  MoreDots: "Více...",
  Move: "Přesunout",
  Name: "Jméno",
  NameC: "Jméno:",
  NewTopic: "Nové téma",
  NoCancel: "Ne, zrušit",
  Notifications: "Upozornění",
  NotImplemented: "(Nerealizováno)",
  NotYet: "Ještě ne",
  NoTitle: "Bez názvu",
  NoTopics: "Žádná témata.",
  Okay: "OK",
  OkayDots: "OK ...",
  Online: "Online",
  onePerLine: "jeden na řádek",
  PreviewV: "Náhled",
  Problem: "Problém",
  progressN: "průběh",
  Question: "Otázka",
  Recent: "Nedávné",
  Remove: "Odstranit",
  Reopen: "Znovu otevřít",
  ReplyV: "Odpovědět",
  Replying: "Odpovídání",
  Replies: "Odpovědi",
  replies: "odpovědi",
  Save: "Uložit",
  SavingDots: "Ukládání ...",
  SavedDot: "Uloženo.",
  Search: "Hledat",
  SendMsg: "Poslat zprávu",
  ShowPreview: "Zobrazit náhled",
  SignUp: "Připojit se",
  Solution: "Řešení",
  started: "zahájeno",
  Summary: "Souhrn",
  Submit: "Odeslat",
  Tag: "Štítek",
  Tags: "Štítky",
  Tools: "Nástroje",
  Topics: "Témata",
  TopicTitle: "Název tématu",
  TopicType: "Typ tématu",
  UploadingDots: "Nahrávání...",
  Username: "Uživatelské jméno",
  Users: "Uživatelé",
  Welcome: "Vítejte",
  Wiki: "Wiki",
  Yes: "Ano",
  YesBye: "Ano, sbohem",
  YesDoThat: "Ano, udělejte to",
  You: "Vy",
  you: "vy",

  // Trust levels.
  Guest:  "Host",
  NewMember: "Nový člen",
  BasicMember: "Základní člen",
  FullMember: "Plný člen",
  TrustedMember: "Důvěryhodný člen",
  RegularMember: "Důvěryhodný stálý člen",
  CoreMember: "Kmenový člen",

  // Periods.
  PastDay: "Poslední den",
  PastWeek: "Poslední týden",
  PastMonth: "Poslední měsíc",
  PastQuarter: "Poslední čtvrtletí",
  PastYear: "Poslední rok",
  AllTime: "Všechny časy",

  // Time ago letters.
  monthsLtr: "měs",
  daysLtr: "d",
  hoursLtr: "h",
  minsLtr: "min",
  secsLtr: "s",

  // Time ago, long text versions.
  daysAgo: (n: number) =>
    n === 1 ? "před 1 dnem" : `před ${n} dny`,

  hoursAgo: (n: number) =>
    n === 1 ? "před 1 hodinou" : `před ${n} hodinami`,

  minutesAgo: (n: number) =>
    n === 1 ? "před 1 minutou" : `před ${n} minutami`,

  secondsAgo: (n: number) =>
    n === 1 ? "před 1 sekundou" : `před ${n} sekundami`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "E-mail je vyžadován",
    NoSpcs: "Prosím bez mezer",
    InvldAddr: "Neplatná e-mailová adresa",
    NoBadChrs: "Prosím bez zvláštních znaků",

    // Full name input field:
    NotOnlSpcs: "Prosím nejen mezery",
    NoAt: "Prosím bez @",

    // Username input field:
    NoDash: "Prosím bez pomlček (-)",
    DontInclAt: "Nezahrnujte @",
    StartEndLtrDgt: "Začněte a skončete písmenem nebo číslicí",
    OnlLtrNumEtc: "Pouze písmena (a-z, A-Z) a čísla a _ (podtržítko)",
    // This shown just below the username input:
    UnUnqShrt_1: "Vaše ",
    UnUnqShrt_2: "@uživatelskéjméno",
    UnUnqShrt_3: ", unikátní a krátké",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Mělo by mít alespoň ${minLength} znaků`,
    TooLong: (maxLength: number) => `Příliš dlouhé. Mělo by mít maximálně ${maxLength} znaků`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Každý příspěvek",
    EveryPostInTopic: "Budete upozorněni na všechny nové odpovědi v tomto tématu.",
    EveryPostInCat: "Budete upozorněni na všechna nová témata a odpovědi v této kategorii.",
    EveryPostInTopicsWithTag: "Budete upozorněni na nová témata s tímto štítkem a všechny odpovědi v těchto tématech.",
    EveryPostWholeSite: "Budete upozorněni na všechna nová témata a odpovědi kdekoli.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Nová témata",
    NewTopicsInCat: "Budete upozorněni na nová témata v této kategorii.",
    NewTopicsWithTag: "Budete upozorněni na nová témata s tímto štítkem.",
    NewTopicsWholeSite: "Budete upozorněni na nová témata kdekoli.",

    Tracking: "Sledování",

    Normal: "Normální",
    NormalDescr: "Budete upozorněni, pokud s vámi někdo mluví, i nepřímo, např. odpověď na odpověď vám.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Ztlumeno",
    HushedDescr: "Budete upozorněni pouze v případě, že s vámi někdo mluví přímo.",

    Muted: "Ztlumeno",
    MutedTopic: "Žádná upozornění.",
  },


  // Forum intro text

  fi: {
    Edit: "Upravit",
    Hide_1: "Skrýt",
    Hide_2: ", klikněte na ",
    Hide_3: " pro znovuotevření",
  },


  // Forum categories

  fcs: {
    All: "Vše", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Seznam témat",

    // Select category dropdown

    from: "z",
    in: "v",
    AllCats: "Všechny kategorie",

    // Topic sort order

    Active: "Aktivní",
    ActiveDescr: "Zobrazuje naposledy aktivní témata jako první",

    New: "Nová",
    NewDescr: "Zobrazuje nejnovější témata jako první",

    Top: "Populární",
    TopDescr: "Zobrazuje populární témata jako první",

    // Topic filter dropdown

    AllTopics: "Všechna témata",

    ShowAllTopics: "Zobrazit všechna témata",
    ShowAllTopicsDescr: "I když ne smazaná témata",

    WaitingTopics: "Čekající témata",
    OnlyWaitingDescr_1: "Zobrazuje pouze témata ",
    OnlyWaitingDescr_2: "čekající ",
    OnlyWaitingDescr_3: "na řešení nebo na realizaci a dokončení",

    YourTopics: "Vaše témata",
    AssignedToYou: "Přiřazeno vám",

    DeletedTopics: "Zobrazit smazané",
    ShowDeleted: "Zobrazit smazané",
    ShowDeletedDescr: "Zobrazuje všechna témata, včetně smazaných témat",

    // Rightmost buttons

    ViewCategories: "Zobrazit kategorie",
    EditCat: "Upravit kategorii",
    CreateCat: "Vytvořit kategorii",
    CreateTopic: "Vytvořit téma",
    PostIdea: "Poslat nápad",
    AskQuestion: "Položit otázku",
    ReportProblem: "Nahlásit problém",
    CreateMindMap: "Vytvořit myšlenkovou mapu",
    CreatePage: "Vytvořit stránku",
  },


  // Forum topic list

  ft: {
    ExplIcons: "Vysvětlení ikon...",
    IconExplanation: "Vysvětlení ikon:",
    ExplGenDisc: "Obecná diskuze.",
    ExplQuestion: "Otázka bez přijaté odpovědi.",
    ExplAnswer: "Otázka s přijatou odpovědí.",
    ExplIdea: "Nápad / návrh.",
    ExplProblem: "Problém.",
    ExplPlanned: "Něco, co plánujeme udělat nebo opravit.",
    ExplDone: "Něco, co bylo hotovo nebo opraveno.",
    ExplClosed: "Téma uzavřeno.",
    ExplPinned: "Téma je vždy uvedeno jako první (možná pouze ve své vlastní kategorii).",

    PopularTopicsComma: "Populární témata, ",
    TopFirstAllTime: "Zobrazuje nejpopulárnější témata za celou dobu.",
    TopFirstPastDay: "Zobrazuje témata populární během posledního dne.",

    CatHasBeenDeleted: "Tato kategorie byla smazána",

    TopicsActiveFirst: "Témata, naposledy aktivní první",
    TopicsNewestFirst: "Témata, nejnovější první",

    CreatedOn: "Vytvořeno dne ",
    LastReplyOn: "\nPoslední odpověď dne ",
    EditedOn: "\nUpraveno dne ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "vytvořil(a) téma",
    frequentPoster: "častý přispěvatel",
    mostRecentPoster: "poslední přispěvatel",

    inC: "v: ",

    TitleFixed: "Toto bylo opraveno",
    TitleDone: "Toto bylo hotovo",
    TitleStarted: "Toto jsme zahájili",
    TitleStartedFixing: "Zahájili jsme opravu",
    TitleUnsolved: "Toto je nevyřešený problém",
    TitleIdea: "Toto je nápad",
    TitlePlanningFix: "Plánujeme to opravit",
    TitlePlanningDo: "Plánujeme to udělat",
    TitleChat: "Toto je chatovací kanál",
    TitlePrivateChat: "Toto je soukromý chatovací kanál",
    TitlePrivateMessage: "Soukromá zpráva",
    TitleInfoPage: "Toto je informační stránka",
    TitleDiscussion: "Diskuze",
    IsPinnedGlobally: "\nBylo připnuto, takže je uvedeno jako první.",
    IsPinnedInCat: "\nBylo připnuto v rámci kategorie, takže je v ní uvedeno jako první.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Nedávná témata (čekající)",
    RecentTopicsInclDel: "Nedávná témata (včetně smazaných)",
    RecentTopics: "Nedávná témata",
    _replies: " odpovědí",
    _deleted: " (smazáno)",
    _defCat: " (výchozí kategorie)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Nedávné příspěvky",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " online v tomto chatu",    // example: "5 online in this chat"
    NumOnlForum: " online v tomto fóru",

    // Open left-sidebar button title.
    WatchbBtn: "Vaše témata",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Vaše nedávná témata, připojené chaty, přímé zprávy",

    // Title shown on user profile pages.
    AbtUsr: "O uživateli",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Zpět z profilu uživatele",
    BackFromAdm: "Zpět z administrace",

    // Title shown on full text search page.
    SearchPg: "Stránka vyhledávání",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Přidat ...",
    RecentlyViewed: "Nedávno zobrazená témata",
    JoinedChats: "Připojené chaty",
    ChatChannels: "Chatovací kanály",
    CreateChat: "Vytvořit chatovací kanál",
    DirectMsgs: "Přímé zprávy",
    NoChats: "Žádné",
    NoDirMsgs: "Žádné",

    // The click-topic dropdown menu:
    TopicActions: "Akce tématu",
    ViewPeopleHere: "Zobrazit lidi zde",
    ViewAddRemoveMembers: "Zobrazit / přidat / odebrat členy",
    ViewChatMembers: "Zobrazit členy chatu",
    EditChat: "Upravit popis chatu",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Opustit tento chat",
    LeaveThisCommunity: "Opustit tuto komunitu",
    JoinThisCommunity: "Připojit se k této komunitě",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Nedávné komentáře v tomto tématu:",
    NoComments: "Žádné komentáře.",

    YourBookmarks: "Vaše záložky:",

    UsersOnline: "Uživatelé online:",
    UsersOnlineForum: "Uživatelé online v tomto fóru:",
    UsersInThisChat: "Uživatelé v tomto chatu:",
    UsersInThisTopic: "Uživatelé v tomto tématu:",

    GettingStartedGuide: "Příručka pro administrátory",
    AdminGuide: "Příručka pro administrátory",
    Guide: "Příručka",

    // How to hide the sidebar.
    CloseShortcutS: "Zavřít (klávesová zkratka: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Přidat další lidi",

    // Shown next to one's own username, in a list of users.
    thatsYou: "to jste vy",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Zdá se, že jen vy",
    YouAnd: "Vy a ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " osoba" : (numStrangers >= 2 && numStrangers <= 4 ? " lidé" : " lidí");
      const have = numStrangers === 1 ? "není přihlášena" : "nejsou přihlášeni";
      return numStrangers + " " + people + ", " + (numStrangers === 1 ? "která" : "kteří") + " " + have;
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    RepliesToTheLeft: "Odpovědi vlevo mohou být seřazeny ",
    bestFirst: "od nejlepších.",
    ButBelow: "Ale níže ",
    insteadBy: " jsou stejné odpovědi místo toho seřazeny ",
    newestFirst: "od nejnovějších.",

    SoIfLeave: "Pokud tedy odejdete a vrátíte se sem později, níže najdete ",
    allNewReplies: "všechny nové odpovědi.",
    Click: "Klikněte na",
    aReplyToReadIt: " odpověď níže, abyste si ji přečetli – níže je zobrazen pouze výňatek.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Kliknutím změníte stav",
    ClickToViewAnswer: "Kliknutím zobrazíte odpověď",
    ViewAnswer: "Zobrazit odpověď",
    ChangeStatusC: "Změnit stav na:",
    ChangeCatC: "Změnit kategorii:",
    ChangeTopicTypeC: "Změnit typ tématu:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "otázka",
    hasAccptAns: "má přijatou odpověď",
    aProblem: "problém",
    planToFix: "plánujeme opravit",
    anIdea: "nápad",
    planToDo: "plánujeme udělat",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Tento formulář byl ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "uzavřen; již jej nemůžete vyplnit a odeslat.",

    ThisTopicClosed_1: "Toto téma bylo ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". Stále můžete posílat komentáře.",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "Tato stránka byla smazána",
    CatDeldPageToo: "Kategorie smazána, takže tato stránka byla také smazána",

    ThreadDeld: "Vlákno smazáno",
    CmntDeld: "Komentář smazán",
    PostDeld: "Příspěvek smazán",
    DiscDeld: "Diskuze smazána",
    PageDeld: "Stránka smazána",
    PagePendAppr: "Stránka čeká na schválení",
    TitlePendAppr: "Název čeká na schválení",
    TextPendingApproval: "Text čeká na schválení",

    TooltipQuestClosedNoAnsw: "Tato otázka byla uzavřena bez jakékoli přijaté odpovědi.",
    TooltipTopicClosed: "Toto téma je uzavřeno.",

    TooltipQuestSolved: "Toto je vyřešená otázka",
    TooltipQuestUnsolved: "Toto je nevyřešená otázka",

    StatusDone: "Hotovo",
    TooltipProblFixed: "Toto bylo opraveno",
    TooltipDone: "Toto bylo hotovo",

    StatusStarted: "Zahájeno",
    TooltipFixing: "Zahájili jsme opravu",
    TooltipImplementing: "Zahájili jsme realizaci",

    StatusPlanned: "Plánováno",
    TooltipProblPlanned: "Plánujeme to opravit",
    TooltipIdeaPlanned: "Plánujeme to udělat",

    StatusNew: "Nové",
    StatusNewDtl: "Nové téma, v diskuzi",
    TooltipUnsProbl: "Toto je nevyřešený problém",
    TooltipIdea: "Toto je nápad",

    TooltipPersMsg: "Osobní zpráva",
    TooltipChat: "# znamená chatovací kanál",
    TooltipPrivChat: "Toto je soukromý chatovací kanál",

    TooltipPinnedGlob: "\nPřipnuto globálně.",
    TooltipPinnedCat: "\nPřipnuto v této kategorii.",

    SolvedClickView_1: "Vyřešeno v příspěvku #",
    SolvedClickView_2: ", kliknutím zobrazíte",

    PostHiddenClickShow: "Příspěvek skryt; kliknutím zobrazíte",
    ClickSeeMoreRepls: "Zobrazit více odpovědí",
    ClickSeeMoreComments: "Zobrazit více komentářů",
    ClickSeeThisComment: "Kliknutím zobrazíte tento komentář",
    clickToShow: "kliknutím zobrazíte",

    ManyDisagree: "Mnozí s tímto nesouhlasí:",
    SomeDisagree: "Někteří s tímto nesouhlasí:",

    PendAppr: "Čeká na schválení",
    CmtPendAppr: "Komentář čeká na schválení, odeslán ",  // REMOVE  too complicated
    CmtBelowPendAppr: (isYour) => (isYour ? "Váš" : "Tento") + " komentář níže čeká na schválení.",

    _and: " a",

    repliesTo: "odpovídá na",
    InReplyTo: "V odpovědi na",
    YourReplyTo: "Vaše odpověď na ",
    YourChatMsg: "Vaše zpráva v chatu: ",
    YourDraft: "Váš koncept",
    YourEdits: "Vaše úpravy: ",
    YourProgrNoteC: "Vaše poznámka o průběhu:",
    aProgrNote: "poznámka o průběhu: ",

    ReplyingToC: "Odpovídání na:",
    ScrollToPrevw_1: "Přejít na ",
    ScrollToPrevw_2: "náhled",

    UnfinEdits: "Nedokončené úpravy",
    ResumeEdting: "Pokračovat v úpravách",
    DelDraft: "Smazat koncept",

    ClickViewEdits: "Kliknutím zobrazíte staré úpravy",

    By: "Od ", // ... someones name

    // Discussion ...
    aboutThisIdea: "o tom, jak a zda realizovat tento nápad",
    aboutThisProbl: "o tom, jak a zda opravit tento problém",

    AddProgrNote: "Přidat poznámku o průběhu",
    // Progress ...
    withThisIdea: "s realizací tohoto nápadu",
    withThisProbl: "s řešením tohoto problému",
    withThis: "s děláním tohoto",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Upozornění na toto téma:",

    // If is a direct message topic, members listed below this text.
    Msg: "Zpráva",

    SmrzRepls: "Shrnout odpovědi",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) => {
      const repls = numReplies === 1 ? "odpověď" : (numReplies >= 2 && numReplies <= 4 ? "odpovědi" : "odpovědí");
      const mins = minutes === 1 ? "minuta" : (minutes >= 2 && minutes <= 4 ? "minuty" : "minut");
      return `Je zde ${numReplies} ${repls}. Odhadovaná doba čtení: ${minutes} ${mins}`;
    },

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Hotovo. Shrnuto ${numSummarized} odpovědí z ${numShownBefore} dříve zobrazených odpovědí.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Uzavřít téma",
    CloseOwnQuestionTooltip: "Zavřete tuto otázku, pokud již nepotřebujete odpověď.",
    CloseOthersQuestionTooltip: "Zavřete tuto otázku, pokud nepotřebuje odpověď, např. pokud je mimo téma nebo již byla zodpovězena v jiném tématu.",
    CloseToDoTooltip: "Zavřete tento úkol, pokud není třeba jej udělat nebo opravit.",
    CloseTopicTooltip: "Zavřete toto téma, pokud již nevyžaduje další pozornost.",

    AcceptBtnExpl: "Přijmout jako odpověď na otázku nebo problém",
    SolutionQ: "Řešení?",
    ClickUnaccept: "Kliknutím zrušíte přijetí této odpovědi",
    PostAccepted: "Tento příspěvek byl přijat jako odpověď",

    NumLikes: (num: number) => num === 1 ? "1 To se mi líbí" : (num >= 2 && num <= 4 ? `${num} To se mi líbí` : `${num} To se mi líbí`),
    NumDisagree: (num: number) => num === 1 ? "1 Nesouhlasím" : (num >= 2 && num <= 4 ? `${num} Nesouhlasí` : `${num} Nesouhlasí`),
    NumBury: (num: number) => num === 1 ? "1 Odložit" : (num >= 2 && num <= 4 ? `${num} Odložit` : `${num} Odložit`),
    NumUnwanted: (num: number) => num === 1 ? "1 Nežádoucí" : (num >= 2 && num <= 4 ? `${num} Nežádoucí` : `${num} Nežádoucí`),

    MoreVotes: "Více hlasů...",
    LikeThis: "To se mi líbí",
    LinkToPost: "Odkaz na tento příspěvek",
    Report: "Nahlásit",
    ReportThisPost: "Nahlásit tento příspěvek",
    Admin: "Admin",
    DiscIx: "Index diskuzí",

    Disagree: "Nesouhlasím",
    DisagreeExpl: "Kliknutím sem vyjádříte nesouhlas s tímto příspěvkem nebo varujete ostatní před faktickými chybami.",
    Bury: "Odložit",
    BuryExpl: "Kliknutím seřadíte ostatní příspěvky před tento příspěvek. Pouze zaměstnanci fóra uvidí váš hlas.",
    Unwanted: "Nežádoucí",
    UnwantedExpl: "Pokud tento příspěvek na tomto webu nechcete. To by snížilo důvěru, kterou mám v autora příspěvku. Pouze zaměstnanci fóra uvidí váš hlas.",

    AddTags: "Přidat/odebrat štítky",
    UnWikify: "Zrušit Wiki",
    Wikify: "Wikify (Wiki)",
    PinDeleteEtc: "Připnout / Smazat / Kategorie ...",
  },


  // Share dialog

  sd: {
    Copied: "Zkopírováno.",
    CtrlCToCopy: "Stisknutím CTRL+C zkopírujete.",
    ClickToCopy: "Kliknutím zkopírujete odkaz.",
  },


  // Chat

  c: {
    About_1: "Toto je chatovací kanál ",
    About_2: ", vytvořený uživatelem ",
    ScrollUpViewComments: "Přejděte nahoru pro zobrazení starších komentářů",
    Purpose: "Účel:",
    MessageDeleted: "(Zpráva smazána)",
    JoinThisChat: "Připojit se k tomuto chatu",
    PostMessage: "Odeslat zprávu",
    AdvancedEditor: "Pokročilý editor",
    TypeTitle: "Napište název – o čem je tento chat, pár slovy?",
    TypePurpose: "Napište účel – může být delší než název, popisnější.",
    TypeHere: "Pište zde. Můžete použít Markdown a HTML.",
  },


  // My Menu

  mm: {
    NeedsReview: "Potřebuje kontrolu ",
    AdminHelp: "Nápověda pro administrátory ",
    StaffHelp: "Nápověda pro zaměstnance ",
    DraftsEtc: "Koncepty, záložky, úkoly",
    MoreNotfs: "Zobrazit všechna upozornění",
    DismNotfs: "Označit vše jako přečtené",
    ViewProfile: "Zobrazit váš profil",
    ViewGroups: "Zobrazit skupiny",
    LogOut: "Odhlásit se",
    UnhideHelp: "Odkrýt nápovědu",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Přejít na:",
    Scroll: "Přejít",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "Z",
    Back_2: "pět",
    BackExpl: "Přejít zpět na předchozí pozici na této stránce",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Nahoru",
    PgTopHelp: "Přejít na začátek stránky. Klávesová zkratka: 1",
    Repl: "Odpovědi",
    ReplHelp: "Přejít na sekci Odpovědi. Klávesová zkratka: 2",
    Progr: "Průběh",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Přejít na sekci Průběh. Klávesová zkratka: 3",
    PgBtm: "Dolů",
    Btm: "Dolů",
    BtmHelp: "Přejít na konec stránky. Klávesová zkratka: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: " a ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " pro návrat zpět",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Vybrat uživatele",
    AddUsers: "Přidat uživatele",
  },


  // About user dialog

  aud: {
    IsMod: "Je moderátor.",
    IsAdm: "Je administrátor.",
    IsDeld: "Je deaktivován nebo smazán.",
    ThisIsGuest: "Toto je hostující uživatel, ve skutečnosti to může být kdokoli.",
    ViewInAdm: "Zobrazit v administraci",
    ViewProfl: "Zobrazit profil",
    ViewComments: "Zobrazit další komentáře",
    RmFromTpc: "Odstranit z tématu",
    EmAdrUnkn: "E-mailová adresa neznámá – tento host nebude upozorněn na odpovědi.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Předvolby",
    Invites: "Pozvánky",
    DraftsEtc: "Koncepty atd.",
    About: "O uživateli",
    Privacy: "Soukromí",
    Security: "Zabezpečení",
    Account: "Účet",
    Interface: "Rozhraní",

    // ----- Overview stats

    JoinedC: "Připojil(a) se: ",
    PostsMadeC: "Počet příspěvků: ",
    LastPostC: "Poslední příspěvek: ",
    LastSeenC: "Naposledy spatřen(a): ",
    TrustLevelC: "Úroveň důvěry: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Nahrát fotku",
    ChangePhoto: "Změnit fotku",
    ImgTooSmall: "Obrázek je příliš malý: měl by mít alespoň 100 x 100",

    // ----- Activity

    OnlyStaffCanSee: "Toto mohou vidět pouze zaměstnanci a důvěryhodní kmenoví členové.",
    OnlyMbrsCanSee: "Toto mohou vidět pouze lidé, kteří jsou aktivními členy po nějakou dobu.",
    Nothing: "Není co zobrazit",
    Posts: "Příspěvky",
    NoPosts: "Žádné příspěvky.",
    Topics: "Témata",
    NoTopics: "Žádná témata.",

    // ----- User status

    UserBanned: "Tento uživatel má ban",
    UserSuspended: (dateUtc: string) => `Tento uživatel je suspendován do ${dateUtc} UTC`,
    ReasonC: "Důvod: ",

    DeactOrDeld: "Byl deaktivován nebo smazán.",
    isGroup: " (skupina)",
    isGuest: " — hostující uživatel, může to být kdokoli",
    isMod: " – moderátor",
    isAdmin: " – administrátor",
    you: "(vy)",

    // ----- Notifications page

    NoNotfs: "Žádná upozornění",
    NotfsToYouC: "Upozornění pro vás:",
    NotfsToOtherC: (name: string) => `Upozornění pro ${name}:`,
    DefNotfsSiteWide: "Výchozí upozornění pro celý web",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "pro",

    // ----- Drafts Etc page

    NoDrafts: "Žádné koncepty",
    YourDraftsC: "Vaše koncepty:",
    DraftsByC: (name: string) => `Koncepty uživatele ${name}:`,

    // ----- Invites page

    InvitesIntro: "Zde můžete pozvat lidi, aby se připojili k tomuto webu. ",
    InvitesListedBelow: "Pozvánky, které jste již odeslali, jsou uvedeny níže.",
    NoInvites: "Zatím jste nikoho nepozvali.",

    InvitedEmail: "Pozvaný e-mail",
    WhoAccepted: "Člen, který přijal",
    InvAccepted: "Pozvánka přijata",
    InvSent: "Pozvánka odeslána",
    JoinedAlready: "Již se připojil",

    SendAnInv: "Pozvat lidi",
    SendInv: "Odeslat pozvánky",
    SendInvExpl:
        "Vašim přátelům pošleme krátký e-mail. Kliknutím na odkaz se okamžitě připojí, není vyžadováno přihlášení. " +
        "Stanou se běžnými členy, nikoli moderátory nebo administrátory.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Hotovo. Pošlu jim e-mail.",
    NoOneToInv: "Není koho pozvat.",
    InvNotfLater: "Upozorním vás později, až je pozvu.",
    AlreadyInvSendAgainQ: "Tito již byli pozváni – možná byste je chtěli pozvat znovu?",
    InvErr_1: "Tyto skončily s ",
    InvErr_2: "chybami",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Tito se již připojili, takže jsem je nepozval:",
    ResendInvsQ: "Znovu odeslat pozvánky těmto lidem? Již byli pozváni.",
    InvAgain: "Pozvat znovu",

    // ----- Preferences, About

    AboutYou: "O vás",
    WebLink: "Jakýkoli váš web nebo stránka.",

    NotShownCannotChange: "Není zobrazeno veřejně. Nelze změnit.",

    // The full name or alias:
    NameOpt: "Jméno (volitelné)",

    NotShown: "Není zobrazeno veřejně.",

    // The username:
    MayChangeFewTimes: "Můžete jej změnit pouze několikrát.",
    notSpecified: "(neuvedeno)",
    ChangeUsername_1: "Uživatelské jméno můžete změnit pouze několikrát.",
    ChangeUsername_2: "Příliš časté změny mohou mást ostatní – " +
        "nebudou vědět, jak vás @označit.",

    NotfAboutAll: "Být upozorněn na každý nový příspěvek (pokud neztišíte téma nebo kategorii)",
    NotfAboutNewTopics: "Být upozorněn na nová témata (pokud neztišíte kategorii)",

    ActivitySummaryEmails: "E-maily se souhrnem aktivity",

    EmailSummariesToGroup:
        "Pokud členové této skupiny nebudou navštěvovat toto místo, pak jim ve výchozím nastavení posílejte e-mailem " +
        "souhrny populárních témat a další věci.",
    EmailSummariesToMe:
        "Když toto místo nenavštívím, posílejte mi e-mailem " +
        "souhrny populárních témat a další věci.",

    AlsoIfTheyVisit: "Posílejte jim e-maily, i když sem chodí pravidelně.",
    AlsoIfIVisit: "Posílejte mi e-maily, i když sem chodím pravidelně.",

    HowOftenWeSend: "Jak často máme tyto e-maily posílat?",
    HowOftenYouWant: "Jak často chcete tyto e-maily dostávat?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Skrýt vaši nedávnou aktivitu před cizími lidmi a novými členy?",
    HideActivityStrangers_2: "(Ale ne před těmi, kteří jsou aktivními členy po nějakou dobu.)",
    HideActivityAll_1: "Skrýt vaši nedávnou aktivitu před všemi?",
    HideActivityAll_2: "(Kromě zaměstnanců a důvěryhodných kmenoví členů.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "E-mailové adresy",
    PrimaryDot: "Primární. ",
    VerifiedDot: "Ověřeno. ",
    NotVerifiedDot: "Neověřeno. ",
    ForLoginWithDot: (provider: string) => `Pro přihlášení přes ${provider}. `,
    MakePrimary: "Nastavit jako primární",
    AddEmail: "Přidat e-mailovou adresu",
    TypeNewEmailC: "Zadejte novou e-mailovou adresu:",
    MaxEmailsInfo: (numMax: number) => `(Nemůžete přidat více než ${numMax} adres.)`,
    EmailAdded_1: "Přidáno. Poslali jsme vám ověřovací e-mail — ",
    EmailAdded_2: "zkontrolujte si svou e-mailovou schránku.",
    SendVerifEmail: "Poslat ověřovací e-mail",

    EmailStatusExpl:
        "('Primární' znamená, že se můžete přihlásit přes tuto adresu a my na ni posíláme upozornění. " +
        "'Ověřeno' znamená, že jste klikli na ověřovací odkaz v e-mailu pro ověření adresy.)",

    // Password:
    ChangePwdQ: "Změnit heslo?",
    CreatePwdQ: "Vytvořit heslo?",
    WillGetPwdRstEml: "Obdržíte e-mail pro resetování hesla.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Žádné",

    // Logins:
    LoginMethods: "Způsoby přihlášení",
    commaAs: ", jako: ",

    // One's data:
    YourContent: "Váš obsah",
    DownloadPosts: "Stáhnout příspěvky",
    DownloadPostsHelp: "Vytvoří soubor JSON s kopií témat a komentářů, které jste vložili.",
    DownloadPersData: "Stáhnout osobní údaje",
    DownloadPersDataHelp: "Vytvoří soubor JSON s kopií vašich osobních údajů, např. vašeho jména " +
        "(pokud jste jej uvedli) a e-mailové adresy.",


    // Delete account:
    DangerZone: "Nebezpečná zóna",
    DeleteAccount: "Smazat účet",
    DeleteYourAccountQ:
        "Smazat váš účet? Odstraníme vaše jméno, zapomeneme vaši e-mailovou adresu, heslo a " +
        "veškeré online identity (jako přihlášení přes Facebook nebo Twitter). " +
        "Již se nebudete moci znovu přihlásit. Tuto akci nelze vzít zpět.",
    DeleteUserQ:
        "Smazat tohoto uživatele? Odstraníme jméno, zapomeneme e-mailovou adresu, heslo and " +
        "online identity (jako přihlášení přes Facebook nebo Twitter). " +
        "Uživatel se již nebude moci znovu přihlásit. Tuto akci nelze vzít zpět.",
    YesDelete: "Ano, smazat",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Členové skupiny",
    NoMembers: "Žádní členové.",
    MayNotListMembers: "Seznam členů nemusí být k dispozici.",
    AddMembers: "Přidat členy",
    BuiltInCannotModify: "Toto je vestavěná skupina; nelze ji upravit.",
    NumMembers: (num: number) => {
        const mbrs = num === 1 ? "člen" : (num >= 2 && num <= 4 ? "členové" : "členů");
        return `${num} ${mbrs}`;
    },
    YouAreMember: "Jste členem.",
    CustomGroupsC: "Vlastní skupiny:",
    BuiltInGroupsC: "Vestavěné skupiny:",
    DeleteGroup: "Smazat tuto skupinu",
  },


  // Create user dialog

  cud: {
    CreateUser: "Vytvořit uživatele",
    CreateAccount: "Vytvořit účet",
    EmailC: "E-mail:",  // REMOVE move to t.EmailC instead
    keptPriv: "bude uchováno v soukromí",
    forNotfsKeptPriv: "pro upozornění na odpovědi, uchováno v soukromí",
    EmailVerifBy_1: "Váš e-mail byl ověřen pomocí ",
    EmailVerifBy_2: ".",
    UsernameC: "Uživatelské jméno:",
    FullNameC: "Celé jméno:",
    optName: "volitelné",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "Účet vytvořen. Byli jste přihlášeni.",  // COULD say if verif email sent too?
    AlmostDone:
        "Téměř hotovo! Musíte jen potvrdit svou e-mailovou adresu. Poslali jsme " +
        "vám e-mail. Klikněte prosím na odkaz v e-mailu pro aktivaci " +
        "vašeho účtu. Tuto stránku můžete zavřít.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Podmínky a soukromí",

    Accept_1: "Přijímáte naše ",
    TermsOfService: "Smluvní podmínky",
    TermsOfUse: "Podmínky použití",
    Accept_2: " a ",
    PrivPol: "Zásady ochrany osobních údajů",
    Accept_3_User: "?",
    Accept_3_Owner: " pro majitele stránek?",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Ano, přijímám",
  },


  // Password input

  pwd: {
    PasswordC: "Heslo:",
    StrengthC: "Síla: ",
    FairlyWeak: "Poměrně slabé.",
    toShort: "příliš krátké",
    TooShort: (minLength: number) => `Příliš krátké. Mělo by mít alespoň ${minLength} znaků`,
    PlzInclDigit: "Prosím zahrňte číslici nebo speciální znak",
    TooWeak123abc: "Příliš slabé. Nepoužívejte hesla jako '12345' nebo 'abcde'.",
    AvoidInclC: "Vyhněte se zahrnutí (částí) svého jména nebo e-mailu do hesla:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Stránka nenalezena nebo přístup odepřen.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Vystupujete jako někdo jiný, kdo nemusí mít přístup ke všem částem tohoto webu.",

    IfYouThinkExistsThen: "Pokud si myslíte, že stránka existuje, přihlaste se jako někdo, kdo k ní má přístup. ",
    LoggedInAlready: "(Již jste přihlášeni, ale možná je to špatný účet?) ",
    ElseGoToHome_1: "Jinak můžete ",
    ElseGoToHome_2: "přejít na domovskou stránku.",

    CreateAcconut: "Vytvořit účet",
    ContinueWithDots: "Pokračovat s ...",
    SignUp: "Připojit se",
    LogIn: "Přihlásit se",
    LogInWithPwd: "Přihlásit se heslem",
    CreateAdmAcct: "Vytvořit administrátorský účet:",
    AuthRequired: "Pro přístup k tomuto webu je vyžadováno ověření",
    LogInToLike: "Přihlaste se, aby se vám tento příspěvek líbil",
    LogInToSubmit: "Přihlaste se a odešlete",
    LogInToComment: "Přihlaste se pro napsání komentáře",
    LogInToCreateTopic: "Přihlaste se pro vytvoření tématu",

    //AlreadyHaveAcctQ: "You have an account? ",
    OrLogIn_1: "Nebo se ",         // "Or "
    OrLogIn_2: "přihlaste",      // "Log in" (this is a button)
    OrLogIn_3: " místo toho",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "Nebo si ",
    SignUpInstead_2: "vytvořte účet", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: ", nebo jen ",
    OrTypeName_2: "zadejte jméno",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "Nebo vytvořit účet:",
    OrTypeName: "Nebo zadejte své jméno:",
    OrLogIn: "Nebo se přihlaste:",
    YourNameQ: "Vaše jméno?",

    BadCreds: "Špatné uživatelské jméno nebo heslo",

    UsernameOrEmailC: "Uživatelské jméno nebo e-mail:",
    PasswordC: "Heslo:",
    ForgotPwd: "Zapomněli jste heslo?",

    NoPwd: "Zatím jste si nezvolili heslo.",
    CreatePwd: "Vytvořit heslo",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Sdělte nám prosím, co vás znepokojuje.",
    ThanksHaveReported: "Díky. Nahlásili jste to. Zaměstnanci fóra se na to podívají.",
    ReportComment: "Nahlásit komentář",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Tento příspěvek obsahuje osobní údaje, například něčí skutečné jméno.",
    OptOffensive: "Tento příspěvek obsahuje urážlivý nebo vulgární obsah.",
    OptSpam: "Tento příspěvek je nevyžádaná reklama.",
    OptOther: "Upozornit zaměstnance na tento příspěvek z jiného důvodu.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "Nápovědu můžete znovu zobrazit, pokud jste přihlášeni, kliknutím na své jméno a poté na ",
    YouCanShowAgain_2: "Odkrýt nápovědu",
  },


  // Editor

  e: {
    SimilarTopicsC: "Podobná témata:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "Omlouváme se, ale v současné době můžete nahrát pouze jeden soubor najednou",
    PleaseFinishPost: "Nejprve prosím dokončete psaní příspěvku",
    PleaseFinishChatMsg: "Nejprve prosím dokončete psaní zprávy v chatu",
    PleaseFinishMsg: "Nejprve prosím dokončete psaní zprávy",
    PleaseSaveEdits: "Nejprve prosím uložte své aktuální úpravy",
    PleaseSaveOrCancel: "Nejprve prosím buď uložte, nebo zrušte své nové téma",
    CanContinueEditing: "Pokud znovu otevřete editor, můžete pokračovat v úpravách textu.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Prosím, nemažte veškerý text. Něco napište.",
    PleaseWriteSth: "Prosím něco napište.",
    PleaseWriteTitle: "Prosím napište název tématu.",
    PleaseWriteMsgTitle: "Prosím napište název zprávy.",
    PleaseWriteMsg: "Prosím napište zprávu.",

    exBold: "tučný text",
    exEmph: "zdůrazněný text",
    exPre: "předformátovaný text",
    exQuoted: "citovaný text",
    ExHeading: "Nadpis",

    TitlePlaceholder: "Napište název – o čem to je, jednou krátkou větou?",

    EditPost_1: "Upravit ",
    EditPost_2: "příspěvek ",

    TypeChatMsg: "Napište zprávu v chatu:",
    YourMsg: "Vaše zpráva:",
    CreateTopic: "Vytvořit nové téma",
    CreateCustomHtml: "Vytvořit vlastní HTML stránku (přidejte vlastní <h1> nadpis)",
    CreateInfoPage: "Vytvořit informační stránku",
    CreateCode: "Vytvořit stránku se zdrojovým kódem",
    AskQuestion: "Položit otázku",
    ReportProblem: "Nahlásit problém",
    SuggestIdea: "Navrhnout nápad",
    NewChat: "Název a účel chatu",
    NewPrivChat: "Název a účel soukromého chatu",
    AppendComment: "Připojit komentář na konec stránky:",

    ReplyTo: "Odpovědět na ",
    ReplyTo_theOrigPost: "původní příspěvek",
    ReplyTo_post: "příspěvek ",
    AddCommentC: "Přidat komentář:",

    PleaseSelectPosts: "Vyberte prosím jeden nebo více příspěvků, na které chcete odpovědět.",

    Save: "Uložit",
    edits: "úpravy",

    PostReply: "Odeslat odpověď",
    PostComment: "Odeslat komentář",

    Post: "Odeslat",
    comment: "komentář",
    question: "otázka",

    PostMessage: "Odeslat zprávu",
    SimpleEditor: "Jednoduchý editor",

    Send: "Poslat",
    message: "zpráva",

    Create: "Vytvořit",
    page: "stránka",
    chat: "chat",
    idea: "nápad",
    topic: "téma",

    Submit: "Odeslat",
    problem: "problém",

    ViewOldEdits: "Zobrazit staré úpravy",

    UploadBtnTooltip: "Nahrát soubor nebo obrázek",
    BoldBtnTooltip: "Tučné písmo",
    EmBtnTooltip: "Zvýraznění",
    QuoteBtnTooltip: "Citace",
    PreBtnTooltip: "Předformátovaný text",
    HeadingBtnTooltip: "Nadpis",

    TypeHerePlaceholder: "Pište zde. Můžete použít Markdown a HTML. Obrázky vkládejte přetažením.",

    Maximize: "Maximalizovat",
    ToNormal: "Zpět do normálu",
    TileHorizontally: "Dlaždice vodorovně",

    PreviewC: "Náhled:",
    TitleExcl: " (bez názvu)",
    ShowEditorAgain: "Znovu zobrazit editor",
    Minimize: "Minimalizovat",

    PreviewInfo: "Zde si můžete prohlédnout náhled, jak bude váš příspěvek vypadat.",
    CannotType: "Zde nelze psát.",

    LoadingDraftDots: "Načítání konceptu...",
    DraftUnchanged: "Beze změny.",
    CannotSaveDraftC: "Nelze uložit koncept:",
    DraftSavedBrwsr: "Koncept uložen v prohlížeči.",
    DraftSaved: (nr: string | number) => `Koncept ${nr} uložen.`,
    DraftDeleted: (nr: string | number) => `Koncept ${nr} smazán.`,
    WillSaveDraft: (nr: string | number) => `Ukládání konceptu ${nr} ...`,
    SavingDraft: (nr: string | number) => `Ukládání konceptu ${nr} ...`,
    DeletingDraft: (nr: string | number) => `Mazání konceptu ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Vybrat kategorii",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Vyberte typ tématu:",
    DiscussionExpl: "Diskuze o něčem.",
    QuestionExpl: "Jedna odpověď může být označena jako přijatá.",
    ProblExpl: "Pokud je něco rozbité nebo nefunguje. Lze označit jako opravené/vyřešené.",
    IdeaExpl: "Návrh. Lze označit jako hotový/realizovaný.",
    ChatExpl: "Možná nikdy nekončící konverzace.",
    PrivChatExpl: "Viditelné pouze pro lidi, kteří jsou pozváni k připojení k chatu.",

    CustomHtml: "Vlastní HTML stránka",
    InfoPage: "Informační stránka",
    Code: "Kód",
    EmbCmts: "Vložené komentáře",
    About: "O webu",
    PrivChat: "Soukromý chat",
    Form: "Formulář",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Žádné další komunity, ke kterým by se dalo připojit.",
    SelCmty: "Vyberte komunitu ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "Hledat nápovědu",
    TxtToFind: "Hledaný text",
  },


  // No internet

  ni: {
    NoInet: "Žádné připojení k internetu",
    PlzRefr: "Obnovte stránku, abyste viděli nejnovější změny. (Došlo k odpojení)",
    RefrNow: "Obnovit nyní",
  },


  PostDeleted: (postNr: number) => `Tento příspěvek, č. ${postNr}, byl smazán.`,
  NoSuchPost: (postNr: number) => `Na této stránce není žádný příspěvek č. ${postNr}.`,
  NoPageHere: "Tato stránka byla smazána, nebo nikdy neexistovala, nebo k ní nemáte přístup.",
  GoBackToLastPage: "Zpět na poslední stránku",

};
