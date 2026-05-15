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

var t_no_NO: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Aktiv",
  Activity: "Aktivitet",
  Add: "Legg til",
  AddingDots: "Legger til ...",
  AddComment: "Legg til kommentar",
  Admin: "Admin",
  AdvSearch: "Avansert søk",
  Anonym: "Anonym",
  Away: "Borte",
  Back: "Tilbake",
  BlogN: "Blogg",
  Bookmarks: "Bokmerker",
  Cancel: "Avbryt",
  Categories: "Kategorier",
  Category: "Kategori",
  ChangeV: "Endre",
  ClickToShow: "Klikk for å vise",
  ChangeDots: "Endre ...",
  ChatN: "Chat",
  Chatting: "Chatter",
  CheckYourEmail: "Sjekk e-posten din",
  Close: "Lukk",
  closed: "lukket",
  comments: "kommentarer",   // as in:  "123 comments"
  Continue: "Fortsett",
  Created: "Opprettet",
  Delete: "Slett",
  Deleted: "Slettet",
  DirectMessage: "Direktemelding",
  Discussion: "Diskusjon",
  discussion: "diskusjon",
  done: "ferdig",
  EditV: "Rediger",
  Editing: "Redigerer",
  EmailC: "E-post: ",
  EmailAddress: "E-postadresse",
  EmailAddresses: "E-postadresser",
  EmailSentD: "E-post sendt.",
  Forum: "Forum",
  GetNotifiedAbout: "Bli varslet om",
  GroupsC: "Grupper:",
  Hide: "Skjul",
  Home: "Hjem",
  Idea: "Idé",
  Join: "Bli med",
  KbdShrtcsC: "Tastatursnarveier: ",
  Loading: "Laster...",
  LoadMore: "Last mer ...",
  LogIn: "Logg inn",
  LoggedInAs: "Logget inn som ",
  LogOut: "Logg ut",
  Maybe: "Kanskje",
  Manage: "Administrer",
  Members: "Medlemmer",
  MessageN: "Melding",
  MoreDots: "Mer...",
  Move: "Flytt",
  Name: "Navn",
  NameC: "Navn:",
  NewTopic: "Nytt emne",
  NoCancel: "Nei, avbryt",
  Notifications: "Varslinger",
  NotImplemented: "(Ikke implementert)",
  NotYet: "Ikke ennå",
  NoTitle: "Ingen tittel",
  NoTopics: "Ingen emner.",
  Okay: "OK",
  OkayDots: "OK ...",
  Online: "Pålogget",
  onePerLine: "én per linje",
  PreviewV: "Forhåndsvisning",
  Problem: "Problem",
  progressN: "fremgang",
  Question: "Spørsmål",
  Recent: "Nylige",
  Remove: "Fjern",
  Reopen: "Gjenåpne",
  ReplyV: "Svar",
  Replying: "Svarer",
  Replies: "Svar",
  replies: "svar",
  Save: "Lagre",
  SavingDots: "Lagrer ...",
  SavedDot: "Lagret.",
  Search: "Søk",
  SendMsg: "Send melding",
  ShowPreview: "Vis forhåndsvisning",
  SignUp: "Bli med",  // don't change to "Sign Up" [join_or_signup]
  Solution: "Løsning",
  started: "startet",
  Summary: "Sammendrag",
  Submit: "Send inn",
  Tag: "Knagg",
  Tags: "Knagger",
  Tools: "Verktøy",
  Topics: "Emner",
  TopicTitle: "Emnetittel",
  TopicType: "Emnetype",
  UploadingDots: "Laster opp...",
  Username: "Brukernavn",
  Users: "Brukere",
  Welcome: "Velkommen",
  Wiki: "Wiki",
  Yes: "Ja",
  YesBye: "Ja, hadet",
  YesDoThat: "Ja, gjør det",
  You: "Du",
  you: "du",

  // Trust levels.
  Guest:  "Gjest",
  NewMember: "Nytt medlem",
  BasicMember: "Basismedlem",
  FullMember: "Fullverdig medlem",
  TrustedMember: "Betrodd medlem",
  RegularMember: "Betrodd gjenganger",
  CoreMember: "Kjernemedlem",

  // Periods.
  PastDay: "Siste døgn",
  PastWeek: "Siste uke",
  PastMonth: "Siste måned",
  PastQuarter: "Siste kvartal",
  PastYear: "Siste år",
  AllTime: "Gjennom tidene",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "mnd",  // months
  daysLtr: "d",      // days
  hoursLtr: "t",     // hours
  minsLtr: "m",      // minutes
  secsLtr: "s",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "1 dag siden" : `${numDays} dager siden`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "1 time siden" : `${numHours} timer siden`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "1 minutt siden" : `${numMins} minutter siden`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "1 sekund siden" : `${numSecs} sekunder siden`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "E-post er påkrevd",
    NoSpcs: "Ingen mellomrom, takk",
    InvldAddr: "Ikke en gyldig e-postadresse",
    NoBadChrs: "Ingen rare tegn, takk",

    // Full name input field:
    NotOnlSpcs: "Ikke bare mellomrom, takk",
    NoAt: "Ingen @, takk",

    // Username input field:
    NoDash: "Ingen bindestreker (-), takk",
    DontInclAt: "Ikke ta med @",
    StartEndLtrDgt: "Start og slutt med en bokstav eller et siffer",
    OnlLtrNumEtc: "Bare bokstaver (a-z, A-Z) og tall, samt _ (understrek)",
    // This shown just below the username input:
    UnUnqShrt_1: "Ditt ",
    UnUnqShrt_2: "@brukernavn",
    UnUnqShrt_3: ", unikt og kort",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Må være minst ${minLength} tegn`,
    TooLong: (maxLength: number) => `For lang. Må være maksimalt ${maxLength} tegn`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Hvert innlegg",
    EveryPostInTopic: "Du vil bli varslet om alle nye svar i dette emnet.",
    EveryPostInCat: "Du vil bli varslet om alle nye emner og svar i denne kategorien.",
    EveryPostInTopicsWithTag: "Du vil bli varslet om nye emner med denne knaggen, og alle svar i disse emnene.",
    EveryPostWholeSite: "Du vil bli varslet om alle nye emner og svar, overalt.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Nye emner",
    NewTopicsInCat: "Du vil bli varslet om nye emner i denne kategorien.",
    NewTopicsWithTag: "Du vil bli varslet om nye emner med denne knaggen.",
    NewTopicsWholeSite: "Du vil bli varslet om nye emner, overalt.",

    Tracking: "Sporing",

    Normal: "Normal",
    NormalDescr: "Du vil bli varslet hvis noen snakker til deg, også indirekte, f.eks. et " +
        "svar på et svar til deg.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Dempet",
    HushedDescr: "Du vil bare bli varslet hvis noen snakker direkte til deg.",

    Muted: "Stum",
    MutedTopic: "Ingen varslinger.",
  },


  // Forum intro text

  fi: {
    Edit: "Rediger",
    Hide_1: "Skjul",
    Hide_2: ", klikk ",
    Hide_3: " for å gjenåpne",
  },


  // Forum categories

  fcs: {
    All: "Alle", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Emneliste",

    // Select category dropdown

    from: "fra",
    in: "i",
    AllCats: "Alle kategorier",

    // Topic sort order

    Active: "Aktive først",
    ActiveDescr: "Viser nylig aktive emner først",

    New: "Nye",
    NewDescr: "Viser de nyeste emnene først",

    Top: "Populære",
    TopDescr: "Viser populære emner først",

    // Topic filter dropdown

    AllTopics: "Alle emner",

    ShowAllTopics: "Vis alle emner",
    ShowAllTopicsDescr: "Men ikke slettede emner",

    WaitingTopics: "Venter på svar",
    OnlyWaitingDescr_1: "Viser bare emner ",
    OnlyWaitingDescr_2: "som venter ",
    OnlyWaitingDescr_3: "på en løsning eller på å bli implementert og ferdigstilt",

    YourTopics: "Dine emner",
    AssignedToYou: "Tildelt deg",

    DeletedTopics: "Vis slettede",
    ShowDeleted: "Vis slettede",
    ShowDeletedDescr: "Viser alle emner, inkludert slettede emner",

    // Rightmost buttons

    ViewCategories: "Vis kategorier",
    EditCat: "Rediger kategori",
    CreateCat: "Opprett kategori",
    CreateTopic: "Opprett emne",
    PostIdea: "Post en idé",
    AskQuestion: "Still et spørsmål",
    ReportProblem: "Rapporter et problem",
    CreateMindMap: "Opprett tankekart",
    CreatePage: "Opprett side",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Forklar ikoner...",
    IconExplanation: "Ikonforklaring:",
    ExplGenDisc: "En generell diskusjon.",
    ExplQuestion: "Et spørsmål uten et godtatt svar.",
    ExplAnswer: "Et spørsmål med et godtatt svar.",
    ExplIdea: "En idé / et forslag.",
    ExplProblem: "Et problem.",
    ExplPlanned: "Noe vi planlegger å gjøre eller fikse.",
    ExplDone: "Noe som er gjort eller fikset.",
    ExplClosed: "Emnet er lukket.",
    ExplPinned: "Emnet vises alltid først (kanskje bare i sin egen kategori).",

    PopularTopicsComma: "Populære emner, ",
    TopFirstAllTime: "Viser de mest populære emnene først, gjennom tidene.",
    TopFirstPastDay: "Viser emner som var populære det siste døgnet.",

    CatHasBeenDeleted: "Denne kategorien er slettet",

    TopicsActiveFirst: "Emner, nylig aktive først",
    TopicsNewestFirst: "Emner, nyeste først",

    CreatedOn: "Opprettet den ",
    LastReplyOn: "\nSiste svar den ",
    EditedOn: "\nRedigert den ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "opprettet emnet",
    frequentPoster: "hyppig bidragsyter",
    mostRecentPoster: "siste bidragsyter",

    inC: "i: ",

    TitleFixed: "Dette er fikset",
    TitleDone: "Dette er gjort",
    TitleStarted: "Vi har startet på dette",
    TitleStartedFixing: "Vi har startet å fikse dette",
    TitleUnsolved: "Dette er et uløst problem",
    TitleIdea: "Dette er en idé",
    TitlePlanningFix: "Vi planlegger å fikse dette",
    TitlePlanningDo: "Vi planlegger å gjøre dette",
    TitleChat: "Dette er en chat-kanal",
    TitlePrivateChat: "Dette er en privat chat-kanal",
    TitlePrivateMessage: "En privat melding",
    TitleInfoPage: "Dette er en infoside",
    TitleDiscussion: "En diskusjon",
    IsPinnedGlobally: "\nDen er festet, så den vises først.",
    IsPinnedInCat: "\nDen er festet i sin kategori, så den vises først i kategorien sin.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Nylige emner (de som venter)",
    RecentTopicsInclDel: "Nylige emner (inkludert slettede)",
    RecentTopics: "Nylige emner",
    _replies: " svar",
    _deleted: " (slettet)",
    _defCat: " (standardkategori)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Nylige innlegg",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " pålogget i denne chatten",    // example: "5 online in this chat"
    NumOnlForum: " pålogget i dette forumet",

    // Open left-sidebar button title.
    WatchbBtn: "Dine emner",

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Dine nylige emner, tilknyttede chatter, direktemeldinger",

    // Title shown on user profile pages.
    AbtUsr: "Om bruker",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Tilbake fra brukerprofil",
    BackFromAdm: "Tilbake fra admin-området",

    // Title shown on full text search page.
    SearchPg: "Søkeside",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Legg til ...",
    RecentlyViewed: "Nylig viste emner",
    JoinedChats: "Dine chatter",
    ChatChannels: "Chat-kanaler",
    CreateChat: "Opprett chat-kanal",
    DirectMsgs: "Direktemeldinger",
    NoChats: "Ingen",
    NoDirMsgs: "Ingen",

    // The click-topic dropdown menu:
    TopicActions: "Emnehandlinger",
    ViewPeopleHere: "Se personer her",
    ViewAddRemoveMembers: "Se / legg til / fjern medlemmer",
    ViewChatMembers: "Se chat-medlemmer",
    EditChat: "Rediger chat-beskrivelse",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Forlat denne chatten",
    LeaveThisCommunity: "Forlat dette fellesskapet",
    JoinThisCommunity: "Bli med i dette fellesskapet",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Nylige kommentarer i dette emnet:",
    NoComments: "Ingen kommentarer.",

    YourBookmarks: "Dine bokmerker:",

    UsersOnline: "Brukere pålogget:",
    UsersOnlineForum: "Brukere pålogget i dette forumet:",
    UsersInThisChat: "Brukere i denne chatten:",
    UsersInThisTopic: "Brukere i dette emnet:",

    GettingStartedGuide: "Admin-guide",
    AdminGuide: "Admin-guide",
    Guide: "Guide",

    // How to hide the sidebar.
    CloseShortcutS: "Lukk (tastatursnarvei: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Legg til flere personer",

    // Shown next to one's own username, in a list of users.
    thatsYou: "det er deg",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Bare deg, ser det ut til",
    YouAnd: "Du, og ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " person" : " personer";
      const have = numStrangers === 1 ? "har" : "har";
      return numStrangers + people + " som ikke " + have + " logget inn";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    // MISSING "are sorted by" —> "might be"
    RepliesToTheLeft: "Svarene til venstre kan være sortert etter ",
    bestFirst: "beste-først.",
    ButBelow: "Men nedenfor ",
    insteadBy: " er de samme svarene i stedet sortert etter ",
    newestFirst: "nyeste-først.",

    SoIfLeave: "Så hvis du drar og kommer tilbake senere, vil du finne ",
    allNewReplies: "alle nye svar nedenfor.",
    Click: "Klikk",
    aReplyToReadIt: " på et svar nedenfor for å lese det – fordi bare et utdrag vises nedenfor.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Klikk for å endre status",
    ClickToViewAnswer: "Klikk for å se svar",
    ViewAnswer: "Se svar",
    ChangeStatusC: "Endre status til:",
    ChangeCatC: "Endre kategori:",
    ChangeTopicTypeC: "Endre emnetype:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "et spørsmål",
    hasAccptAns: "har et godtatt svar",
    aProblem: "et problem",
    planToFix: "planlegger å fikse",
    anIdea: "en idé",
    planToDo: "planlegger å utføre",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Dette skjemaet har blitt ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "lukket; du kan ikke lenger fylle det ut og poste det.",

    ThisTopicClosed_1: "Dette emnet har blitt ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". Du kan fortsatt poste kommentarer.",

    ThisPageDeleted: "Denne siden er slettet",
    CatDeldPageToo: "Kategorien er slettet, så denne siden ble også slettet",

    ThreadDeld: "Tråden er slettet",
    CmntDeld: "Kommentaren er slettet",
    PostDeld: "Innlegget er slettet",
    DiscDeld: "Diskusjonen er slettet",
    PageDeld: "Siden er slettet",
    PagePendAppr: "Siden venter på godkjenning",
    TitlePendAppr: "Tittelen venter på godkjenning",
    TextPendingApproval: "Teksten venter på godkjenning",

    TooltipQuestClosedNoAnsw: "Dette spørsmålet er lukket uten noe godtatt svar.",
    TooltipTopicClosed: "Dette emnet er lukket.",

    TooltipQuestSolved: "Dette er et løst spørsmål",
    TooltipQuestUnsolved: "Dette er et uløst spørsmål",

    StatusDone: "Ferdig",
    TooltipProblFixed: "Dette er fikset",
    TooltipDone: "Dette er gjort",

    StatusStarted: "Startet",
    TooltipFixing: "Vi har startet å fikse dette",
    TooltipImplementing: "Vi har startet å gjøre dette",

    StatusPlanned: "Planlagt",
    TooltipProblPlanned: "Vi planlegger å fikse dette",
    TooltipIdeaPlanned: "Vi planlegger å gjøre dette",

    StatusNew: "Nytt",
    StatusNewDtl: "Nytt emne, under diskusjon",
    TooltipUnsProbl: "Dette er et uløst problem",
    TooltipIdea: "Dette er en idé",

    TooltipPersMsg: "Personlig melding",
    TooltipChat: "# betyr chat-kanal",
    TooltipPrivChat: "Dette er en privat chat-kanal",

    TooltipPinnedGlob: "\nFestet globalt.",
    TooltipPinnedCat: "\nFestet i denne kategorien.",

    SolvedClickView_1: "Løst i innlegg #",
    SolvedClickView_2: ", klikk for å se",

    PostHiddenClickShow: "Innlegget er skjult; klikk for å vise",
    ClickSeeMoreRepls: "Vis flere svar",
    ClickSeeMoreComments: "Vis flere kommentarer",
    ClickSeeThisComment: "Klikk for å vise denne kommentaren",
    clickToShow: "klikk for å vise",

    ManyDisagree: "Mange er uenige i dette:",
    SomeDisagree: "Noen er uenige i dette:",

    PendAppr: "Venter på godkjenning",
    CmtPendAppr: "Kommentar venter på godkjenning, postet ",
    CmtBelowPendAppr: (isYour) => (isYour ? "Din" : "") + " kommentar nedenfor venter på godkjenning.",

    _and: " og",

    repliesTo: "svar til",
    InReplyTo: "Som svar til",
    YourReplyTo: "Ditt svar til ",
    YourChatMsg: "Din chat-melding: ",
    YourDraft: "Ditt utkast",
    YourEdits: "Dine endringer: ",
    YourProgrNoteC: "Ditt fremgangsnotat:",
    aProgrNote: "et fremgangsnotat: ",

    ReplyingToC: "Svarer til:",
    ScrollToPrevw_1: "Rull til ",
    ScrollToPrevw_2: "forhåndsvisning",

    UnfinEdits: "Uferdige endringer",
    ResumeEdting: "Fortsett redigering",
    DelDraft: "Slett utkast",

    ClickViewEdits: "Klikk for å se gamle endringer",

    By: "Av ", // ... someones name

    // Discussion ...
    aboutThisIdea: "om hvordan og om vi skal gjennomføre denne idéen",
    aboutThisProbl: "om hvordan og om vi skal fikse dette",

    AddProgrNote: "Legg til fremgangsnotat",
    // Progress ...
    withThisIdea: "med gjennomføring av denne idéen",
    withThisProbl: "med håndtering av dette problemet",
    withThis: "med gjennomføring av dette",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Varslinger om dette emnet:",

    // If is a direct message topic, members listed below this text.
    Msg: "Melding",

    SmrzRepls: "Oppsummer svar",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `Det er ${numReplies} svar. Estimert lesetid: ${minutes} minutter`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Ferdig. Oppsummerte ${numSummarized} svar, av de ${numShownBefore} svarene som tidligere ble vist.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Lukk emne",
    CloseOwnQuestionTooltip: "Lukk dette spørsmålet hvis du ikke trenger svar lenger.",
    CloseOthersQuestionTooltip: "Lukk dette spørsmålet hvis det ikke trenger et svar, f.eks. hvis " +
        "det er utenfor tema eller allerede besvart i et annet emne.",
    CloseToDoTooltip: "Lukk denne oppgaven hvis den ikke trenger å bli gjort eller fikset.",
    CloseTopicTooltip: "Lukk dette emnet hvis det ikke krever ytterligere vurdering.",

    AcceptBtnExpl: "Godta dette som svaret på spørsmålet eller problemet",
    SolutionQ: "Løsning?",
    ClickUnaccept: "Klikk for å angre godkjenning av dette svaret",
    PostAccepted: "Dette innlegget har blitt godtatt som svaret",

    NumLikes: (num: number) => num === 1 ? "1 liker" : num + " liker",
    NumDisagree: (num: number) => num + " uenig",
    NumBury: (num: number) => num === 1 ? "1 nedprioritert" : num + " nedprioriterte",
    NumUnwanted: (num: number) => num === 1 ? "1 uønsket" : num + " uønskede",

    MoreVotes: "Flere stemmer...",
    LikeThis: "Liker dette",
    LinkToPost: "Lenke til dette innlegget",
    Report: "Rapporter",
    ReportThisPost: "Rapporter dette innlegget",
    Admin: "Admin",
    DiscIx: "Diskusjonsindeks",

    Disagree: "Uenig",
    DisagreeExpl: "Klikk her for å uttrykke uenighet med dette innlegget, eller for å advare andre om faktafeil.",
    Bury: "Nedprioriter",
    BuryExpl: "Klikk for å sortere andre innlegg før dette innlegget. Bare forum-ansatte kan se din stemme.",
    Unwanted: "Uønsket",
    UnwantedExpl: "Hvis du ikke vil ha dette innlegget på dette nettstedet. Dette vil redusere tilliten jeg har " +
            "til forfatteren av innlegget. Bare forum-ansatte kan se din stemme.",

    AddTags: "Legg til/fjern knagger",
    UnWikify: "Fjern Wiki-status",
    Wikify: "Gjør til Wiki",
    PinDeleteEtc: "Fest / Slett / Kategori ...",
  },


  // Share dialog

  sd: {
    Copied: "Kopiert.",
    CtrlCToCopy: "Trykk CTRL+C for å kopiere.",
    ClickToCopy: "Klikk for å kopiere lenke.",
  },


  // Chat

  c: {
    About_1: "Dette er ",
    About_2: " chat-kanalen, opprettet av ",
    ScrollUpViewComments: "Rull opp for å se eldre kommentarer",
    Purpose: "Formål:",
    MessageDeleted: "(Melding slettet)",
    JoinThisChat: "Bli med i denne chatten",
    PostMessage: "Post melding",
    AdvancedEditor: "Avansert redigering",
    TypeTitle: "Skriv en tittel – hva handler denne chatten om, med få ord?",
    TypePurpose: "Skriv et formål – kan være lengre enn tittelen, mer beskrivende.",
    TypeHere: "Skriv her. Du kan bruke Markdown og HTML.",
  },


  // My Menu

  mm: {
    NeedsReview: "Trenger vurdering ",
    AdminHelp: "Admin-hjelp ",
    StaffHelp: "Ansatt-hjelp ",
    DraftsEtc: "Utkast, bokmerker, oppgaver",
    MoreNotfs: "Se alle varslinger",
    DismNotfs: "Marker alle som lest",
    ViewProfile: "Se din profil",
    ViewGroups: "Se grupper",
    LogOut: "Logg ut",
    UnhideHelp: "Vis hjelpemeldinger",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Rull til:",
    Scroll: "Rull",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "B",
    Back_2: "akover",
    BackExpl: "Rull tilbake til din forrige posisjon på denne siden",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Toppen av siden",
    PgTopHelp: "Gå til toppen av siden. Tastatursnarvei: 1",
    Repl: "Svar",
    ReplHelp: "Gå til svar-seksjonen. Snarvei: 2",
    Progr: "Fremgang",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Gå til fremgang-seksjonen. Snarvei: 3",
    PgBtm: "Bunnen av siden",
    Btm: "Bunn",
    BtmHelp: "Gå til bunnen av siden. Snarvei: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", og ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " for å rulle tilbake",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Velg brukere",
    AddUsers: "Legg til brukere",
  },


  // About user dialog

  aud: {
    IsMod: "Er moderator.",
    IsAdm: "Er administrator.",
    IsDeld: "Er deaktivert eller slettet.",
    ThisIsGuest: "Dette er en gjestebruker, kan i virkeligheten være hvem som helst.",
    ViewInAdm: "Se i admin-området",
    ViewProfl: "Se profil",
    ViewComments: "Se andre kommentarer",
    RmFromTpc: "Fjern fra emnet",
    EmAdrUnkn: "E-postadresse ukjent – denne gjesten vil ikke bli varslet om svar.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Innstillinger",
    Invites: "Invitasjoner",
    DraftsEtc: "Utkast m.m.",
    About: "Om",
    Privacy: "Personvern",
    Security: "Sikkerhet",
    Account: "Konto",
    Interface: "Grensesnitt",

    // ----- Overview stats

    JoinedC: "Ble med: ",
    PostsMadeC: "Innlegg skrevet: ",
    LastPostC: "Siste innlegg: ",
    LastSeenC: "Sist sett: ",
    TrustLevelC: "Tillitsnivå: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Last opp bilde",
    ChangePhoto: "Endre bilde",
    ImgTooSmall: "Bildet er for lite: bør være minst 100 x 100",

    // ----- Activity

    OnlyStaffCanSee: "Bare ansatte og betrodde kjernemedlemmer kan se dette.",
    OnlyMbrsCanSee: "Bare personer som har vært aktive medlemmer en stund kan se dette.",
    Nothing: "Ingenting å vise",
    Posts: "Innlegg",
    NoPosts: "Ingen innlegg.",
    Topics: "Emner",
    NoTopics: "Ingen emner.",

    // ----- User status

    UserBanned: "Denne brukeren er utestengt",
    UserSuspended: (dateUtc: string) => `Denne brukeren er suspendert frem til ${dateUtc} UTC`,
    ReasonC: "Årsak: ",

    DeactOrDeld: "Har blitt deaktivert eller slettet.",
    isGroup: " (en gruppe)",
    isGuest: " — en gjestebruker, kan være hvem som helst",
    isMod: " – moderator",
    isAdmin: " – administrator",
    you: "(deg)",

    // ----- Notifications page

    NoNotfs: "Ingen varslinger",
    NotfsToYouC: "Varslinger til deg:",
    NotfsToOtherC: (name: string) => `Varslinger til ${name}:`,
    DefNotfsSiteWide: "Standardvarslinger, for hele nettstedet",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "for",

    // ----- Drafts Etc page

    NoDrafts: "Ingen utkast",
    YourDraftsC: "Dine utkast:",
    DraftsByC: (name: string) => `Utkast av ${name}:`,

    // ----- Invites page

    InvitesIntro: "Her kan du invitere folk til å bli med på dette nettstedet. ",
    InvitesListedBelow: "Invitasjoner som du allerede har sendt er oppført nedenfor.",
    NoInvites: "Du har ikke invitert noen ennå.",

    InvitedEmail: "Invitert e-post",
    WhoAccepted: "Medlem som godtok",
    InvAccepted: "Invitasjon godtatt",
    InvSent: "Invitasjon sendt",
    JoinedAlready: "Allerede blitt med",

    SendAnInv: "Inviter folk",
    SendInv: "Send invitasjoner",
    SendInvExpl:
        "Vi sender vennene dine en kort e-post. De klikker på en lenke " +
        "for å bli med umiddelbart, ingen innlogging kreves. " +
        "De vil bli vanlige medlemmer, ikke moderatorer eller administratorer.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Ferdig. Jeg sender dem en e-post.",
    NoOneToInv: "Ingen å invitere.",
    InvNotfLater: "Jeg gir deg beskjed senere når jeg har invitert dem.",
    AlreadyInvSendAgainQ: "Disse har allerede blitt invitert – kanskje du vil invitere dem på nytt?",
    InvErr_1: "Disse resulterte i ",
    InvErr_2: "feil",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Disse har allerede blitt med, så jeg inviterte dem ikke:",
    ResendInvsQ: "Send invitasjoner på nytt til disse personene? De har blitt invitert allerede.",
    InvAgain: "Inviter på nytt",

    // ----- Preferences, About

    AboutYou: "Om deg",
    WebLink: "Eventuell nettside eller side som er din.",

    NotShownCannotChange: "Vises ikke offentlig. Kan ikke endres.",

    // The full name or alias:
    NameOpt: "Navn (valgfritt)",

    NotShown: "Vises ikke offentlig.",

    // The username:
    MayChangeFewTimes: "Du kan bare endre det noen få ganger.",
    notSpecified: "(ikke spesifisert)",
    ChangeUsername_1: "Du kan bare endre brukernavnet ditt noen få ganger.",
    ChangeUsername_2: "Å endre det for ofte kan gjøre andre forvirret – " +
        "de vil ikke vite hvordan de skal @nevne deg.",

    NotfAboutAll: "Bli varslet om hvert nytt innlegg (med mindre du stumstiller emnet eller kategorien)",
    NotfAboutNewTopics: "Bli varslet om nye emner (med mindre du stumstiller kategorien)",

    ActivitySummaryEmails: "E-poster med aktivitetssammendrag",

    EmailSummariesToGroup:
        "Når medlemmer av denne gruppen ikke besøker oss, send dem da " +
        "som standard e-poster med sammendrag av populære emner og andre ting.",
    EmailSummariesToMe:
        "Når jeg ikke besøker oss, send meg " +
        "e-poster med sammendrag av populære emner og andre ting.",

    AlsoIfTheyVisit: "Send dem e-post også hvis de besøker oss regelmessig.",
    AlsoIfIVisit: "Send meg e-post også hvis jeg besøker oss regelmessig.",

    HowOftenWeSend: "Hvor ofte skal vi sende disse e-postene?",
    HowOftenYouWant: "Hvor ofte vil du ha disse e-postene?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Skjul din nylige aktivitet for fremmede og nye medlemmer?",
    HideActivityStrangers_2: "(But not for those who have been active members for a while.)",
    HideActivityAll_1: "Skjul din nylige aktivitet for alle?",
    HideActivityAll_2: "(Unntatt ansatte og betrodde kjernemedlemmer.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "E-postadresser",
    PrimaryDot: "Primær. ",
    VerifiedDot: "Verifisert. ",
    NotVerifiedDot: "Ikke verifisert. ",
    ForLoginWithDot: (provider: string) => `For innlogging med ${provider}. `,
    MakePrimary: "Gjør til primær",
    AddEmail: "Legg til e-postadresse",
    TypeNewEmailC: "Skriv en ny e-postadresse:",
    MaxEmailsInfo: (numMax: number) => `(Du kan ikke legge til mer enn ${numMax} adresser.)`,
    EmailAdded_1: "Lagt til. Vi har sendt deg en verifiserings-e-post — ",
    EmailAdded_2: "sjekk e-postkassen din.",
    SendVerifEmail: "Send verifiserings-e-post",

    EmailStatusExpl:
        "('Primær' betyr at du kan logge inn via denne adressen, og vi sender varsler til den. " +
        "'Verifisert' betyr at du har klikket på en verifiseringslenke i en e-post.)",

    // Password:
    ChangePwdQ: "Endre passord?",
    CreatePwdQ: "Opprett passord?",
    WillGetPwdRstEml: "Du vil få en e-post for å tilbakestille passordet.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Ingen",

    // Logins:
    LoginMethods: "Innloggingsmetoder",
    commaAs: ", som: ",

    // One's data:
    YourContent: "Ditt innhold",
    DownloadPosts: "Last ned innlegg",
    DownloadPostsHelp: "Oppretter en JSON-fil med en kopi av emner og kommentarer du har postet.",
    DownloadPersData: "Last ned personopplysninger",
    DownloadPersDataHelp: "Oppretter en JSON-fil med en kopi av dine personopplysninger, f.eks. navnet ditt " +
        "(hvis du oppga et navn) og e-postadresse.",


    // Delete account:
    DangerZone: "Faresone",
    DeleteAccount: "Slett konto",
    DeleteYourAccountQ:
        "Slett kontoen din? Vi vil fjerne navnet ditt, glemme e-postadressen din, passordet og " +
        "alle nettidentiteter (som Facebook- eller Twitter-innlogging). " +
        "Du vil ikke kunne logge inn igjen. Dette kan ikke angres.",
    DeleteUserQ:
        "Slett denne brukeren? Vi vil fjerne navnet, glemme e-postadressen, passordet og " +
        "nettidentiteter (som Facebook- eller Twitter-innlogging). " +
        "Brukeren vil ikke kunne logge inn igjen. Dette kan ikke angres.",
    YesDelete: "Ja, slett",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Gruppemedlemmer",
    NoMembers: "Ingen medlemmer.",
    MayNotListMembers: "Kan ikke liste medlemmer.",
    AddMembers: "Legg til medlemmer",
    BuiltInCannotModify: "Dette er en innebygd gruppe; den kan ikke endres.",
    NumMembers: (num: number) => `${num} medlemmer`,
    YouAreMember: "Du er et medlem.",
    CustomGroupsC: "Egendefinerte grupper:",
    BuiltInGroupsC: "Innebygde grupper:",
    DeleteGroup: "Slett denne gruppen",
  },


  // Create user dialog

  cud: {
    CreateUser: "Opprett bruker",
    CreateAccount: "Opprett konto",
    EmailC: "E-post:",
    keptPriv: "vil bli holdt privat",
    forNotfsKeptPriv: "for varsler om svar, holdes privat",
    EmailVerifBy_1: "E-posten din har blitt verifisert av ",
    EmailVerifBy_2: ".",
    UsernameC: "Brukernavn:",
    FullNameC: "Fullt navn:",
    optName: "valgfritt",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "Konto opprettet. Du har blitt logget inn.",
    AlmostDone:
        "Nesten ferdig! Du må bare bekrefte e-postadressen din. Vi har " +
        "sendt en e-post til deg. Vennligst klikk på lenken i e-posten for å aktivere " +
        "kontoen din. Du kan lukke denne siden.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Vilkår og personvern",

    Accept_1: "Godtar du våre ",
    TermsOfService: "tjenestevilkår",
    TermsOfUse: "bruksvilkår",
    Accept_2: " og ",
    PrivPol: "personvernerklæring",
    Accept_3_User: "?",
    Accept_3_Owner: " for nettstedseiere?",

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Ja, jeg godtar",
  },


  // Password input

  pwd: {
    PasswordC: "Passord:",
    StrengthC: "Styrke: ",
    FairlyWeak: "Ganske svakt.",
    toShort: "for kort",
    TooShort: (minLength: number) => `For kort. Bør være minst ${minLength} tegn`,
    PlzInclDigit: "Vennligst inkludert et siffer eller spesialtegn",
    TooWeak123abc: "For svakt. Ikke bruk passord som '12345' eller 'abcde'.",
    AvoidInclC: "Unngå å inkludere (deler av) navnet ditt eller e-posten din i passordet:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Siden ble ikke funnet, eller tilgang er nektet.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Du utgir deg for å være noen andre, som kanskje ikke har tilgang til alle deler " +
        "av dette nettstedet.",

    IfYouThinkExistsThen: "Hvis du tror siden eksisterer, logg inn som noen som har tilgang til den. ",
    LoggedInAlready: "(Du er allerede logget inn, men kanskje det er feil konto?) ",
    ElseGoToHome_1: "Ellers kan du ",
    ElseGoToHome_2: "gå til startsiden.",

    CreateAcconut: "Opprett konto",
    ContinueWithDots: "Fortsett med ...",
    SignUp: "Bli med",
    LogIn: "Logg inn",
    LogInWithPwd: "Logg inn med passord",
    CreateAdmAcct: "Opprett admin-konto:",
    AuthRequired: "Autentisering kreves for å få tilgang til dette nettstedet",
    LogInToLike: "Logg inn for å like dette innlegget",
    LogInToSubmit: "Logg inn og send inn",
    LogInToComment: "Logg inn for å skrive en kommentar",
    LogInToCreateTopic: "Logg inn for å opprette emne",

    //AlreadyHaveAcctQ: "You have an account? ",  // MISSING changed "Already have...?" to "You have...?"
    OrLogIn_1: "Eller ",
    OrLogIn_2: "logg inn",
    OrLogIn_3: " i stedet",

    //NewUserQ: "New user? ",
    SignUpInstead_1: "Eller ",
    SignUpInstead_2: "opprett konto",
    SignUpInstead_3: "",

    OrTypeName_1: ", eller bare ",
    OrTypeName_2: "skriv et navn",
    OrTypeName_3: "",

    OrCreateAcctHere: "Eller opprett konto:",
    OrTypeName: "Eller skriv navnet ditt:",
    OrLogIn: "Eller logg inn:",
    YourNameQ: "Ditt navn?",

    BadCreds: "Feil brukernavn eller passord",

    UsernameOrEmailC: "Brukernavn eller e-post:",
    PasswordC: "Passord:",
    ForgotPwd: "Har du glemt passordet ditt?",

    NoPwd: "Du har ennå ikke valgt et passord.",
    CreatePwd: "Opprett passord",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Vennligst fortell oss hva du er bekymret for.",
    ThanksHaveReported: "Takk. Du har rapportert det. Forum-ansatte vil ta en titt.",
    ReportComment: "Rapporter kommentar",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Dette innlegget inneholder personopplysninger, for eksempel noens virkelige navn.",
    OptOffensive: "Dette innlegget inneholder støtende eller fornærmende innhold.",
    OptSpam: "Dette innlegget er uønsket reklame.",
    OptOther: "Varsle ansatte om dette innlegget av en annen grunn.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "Du kan vise hjelpemeldinger igjen hvis du er logget inn, ved å " +
        "klikke på navnet ditt and deretter ",
    YouCanShowAgain_2: "Vis hjelpemeldinger",
  },


  // Editor

  e: {
    SimilarTopicsC: "Lignende emner:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "Beklager, men for øyeblikket kan du bare laste opp én fil om gangen",
    PleaseFinishPost: "Vennligst skriv ferdig innlegget ditt først",
    PleaseFinishChatMsg: "Vennligst skriv ferdig chat-meldingen din først",
    PleaseFinishMsg: "Vennligst skriv ferdig meldingen din først",
    PleaseSaveEdits: "Vennligst lagre dine nåværende endringer først",
    PleaseSaveOrCancel: "Vennligst enten lagre eller avbryt ditt nye emne først",
    CanContinueEditing: "Du kan fortsette å redigere teksten din hvis du åpner redigeringsverktøyet igjen.",
    PleaseDontDeleteAll: "Vennligst ikke slett all tekst. Skriv noe.",
    PleaseWriteSth: "Vennligst skriv noe.",
    PleaseWriteTitle: "Vennligst skriv en emnetittel.",
    PleaseWriteMsgTitle: "Vennligst skriv en meldingstittel.",
    PleaseWriteMsg: "Vennligst skriv en melding.",

    exBold: "fet tekst",
    exEmph: "kursiv tekst",
    exPre: "forhåndsformatert tekst",
    exQuoted: "sitert tekst",
    ExHeading: "Overskrift",

    TitlePlaceholder: "Skriv en tittel – hva handler dette om, i én kort setning?",

    EditPost_1: "Rediger ",
    EditPost_2: "innlegg ",

    TypeChatMsg: "Skriv en chat-melding:",
    YourMsg: "Din melding:",
    CreateTopic: "Opprett nytt emne",
    CreateCustomHtml: "Opprett en egendefinert HTML-side (legg til din egen <h1> tittel)",
    CreateInfoPage: "Opprett en infoside",
    CreateCode: "Opprett en kildekodeside",
    AskQuestion: "Still et spørsmål",
    ReportProblem: "Rapporter et problem",
    SuggestIdea: "Foreslå en idé",
    NewChat: "Chat-tittel og formål",
    NewPrivChat: "Privat chat-tittel og formål",
    AppendComment: "Legg til en kommentar nederst på siden:",

    ReplyTo: "Svar til ",
    ReplyTo_theOrigPost: "det opprinnelige innlegget",
    ReplyTo_post: "innlegg ",
    AddCommentC: "Legg til en kommentar:",

    PleaseSelectPosts: "Vennligst velg ett eller flere innlegg å svare på.",

    Save: "Lagre",
    edits: "endringer",

    PostReply: "Post svar",
    PostComment: "Post kommentar",

    Post: "Post",
    comment: "kommentar",
    question: "spørsmål",

    PostMessage: "Post melding",
    SimpleEditor: "Enkel redigering",

    Send: "Send",
    message: "melding",

    Create: "Opprett",
    page: "side",
    chat: "chat",
    idea: "idé",
    topic: "emne",

    Submit: "Send inn",
    problem: "problem",

    ViewOldEdits: "Se gamle endringer",

    UploadBtnTooltip: "Last opp en fil eller et bilde",
    BoldBtnTooltip: "Gjør teksten fet",
    EmBtnTooltip: "Kursiv",
    QuoteBtnTooltip: "Sitat",
    PreBtnTooltip: "Forhåndsformatert tekst",
    HeadingBtnTooltip: "Overskrift",

    TypeHerePlaceholder: "Skriv her. Du kan bruke Markdown og HTML. Dra og slipp for å lime inn bilder.",

    Maximize: "Maksimer",
    ToNormal: "Tilbake til normal",
    TileHorizontally: "Flis legg horisontalt",

    PreviewC: "Forhåndsvisning:",
    TitleExcl: " (tittel ekskludert)",
    ShowEditorAgain: "Vis redigering igjen",
    Minimize: "Minimer",

    PreviewInfo: "Her kan du forhåndsvise hvordan innlegget ditt vil se ut.",
    CannotType: "Du kan ikke skrive her.",

    LoadingDraftDots: "Laster eventuelt utkast...",
    DraftUnchanged: "Uendret.",
    CannotSaveDraftC: "Kan ikke lagre utkast:",
    DraftSavedBrwsr: "Utkast lagret i nettleseren.",
    DraftSaved: (nr: string | number) => `Utkast ${nr} lagret.`,
    DraftDeleted: (nr: string | number) => `Utkast ${nr} slettet.`,
    WillSaveDraft: (nr: string | number) => `Vil lagre utkast ${nr} ...`,
    SavingDraft: (nr: string | number) => `Lagrer utkast ${nr} ...`,
    DeletingDraft: (nr: string | number) => `Sletter utkast ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Velg kategori",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Velg emnetype:",
    DiscussionExpl: "En diskusjon om noe.",
    QuestionExpl: "Ett svar kan markeres som det godtatte svaret.",
    ProblExpl: "Hvis noe er ødelagt eller ikke fungerer. Kan markeres som fikset/løst.",
    IdeaExpl: "Et forslag. Kan markeres som ferdig/implementert.",
    ChatExpl: "En samtale som kanskje aldri tar slutt.",
    PrivChatExpl: "Bare synlig for personer som blir invitert til chatten.",

    CustomHtml: "Egendefinert HTML-side",
    InfoPage: "Infoside",
    Code: "Kode",
    EmbCmts: "Innebygde kommentarer",
    About: "Om",
    PrivChat: "Privat chat",
    Form: "Skjema",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Ingen flere fellesskap å bli med i.",
    SelCmty: "Velg fellesskap ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "Søk etter hjelp",
    TxtToFind: "Tekst å søke etter",
  },


  // No internet

  ni: {
    NoInet: "Ingen internettforbindelse",
    PlzRefr: "Oppdater siden for å se de siste endringene. (Det var et brudd i forbindelsen)",
    RefrNow: "Oppdater nå",
  },


  PostDeleted: (postNr: number) => `Dette innlegget, nr ${postNr}, har blitt slettet.`,
  NoSuchPost: (postNr: number) => `Det finnes ikke noe innlegg nr ${postNr} på denne siden.`,
  NoPageHere: "Denne siden er slettet, den har aldri eksistert, eller du har ikke tilgang til den.",
  GoBackToLastPage: "Gå tilbake til forrige side",

};
