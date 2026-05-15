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

var t_da_DK: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Aktiv",
  Activity: "Aktivitet",
  Add: "Tilføj",
  AddingDots: "Tilføjer ...",
  AddComment: "Tilføj kommentar",
  Admin: "Admin",
  AdvSearch: "Avanceret søgning",
  Anonym: "Anonym",
  Away: "Ikke til stede",
  Back: "Tilbage",
  BlogN: "Blog",
  Bookmarks: "Bogmærker",
  Cancel: "Annuller",
  Categories: "Kategorier",
  Category: "Kategori",
  ChangeV: "Skift",
  ClickToShow: "Klik for at vise",
  ChangeDots: "Skift ...",
  ChatN: "Chat",
  Chatting: "Chatter",
  CheckYourEmail: "Tjek din e-mail",
  Close: "Luk",
  closed: "lukket",
  comments: "kommentarer",   // as in:  "123 comments"
  Continue: "Fortsæt",
  Created: "Oprettet",
  Delete: "Slet",
  Deleted: "Slettet",
  DirectMessage: "Direkte besked",
  Discussion: "Diskussion",
  discussion: "diskussion",
  done: "færdig",
  EditV: "Rediger",
  Editing: "Redigerer",
  EmailC: "E-mail: ",
  EmailAddress: "E-mailadresse",
  EmailAddresses: "E-mailadresser",
  EmailSentD: "E-mail sendt.",
  Forum: "Forum",
  GetNotifiedAbout: "Få besked om",
  GroupsC: "Grupper:",
  Hide: "Skjul",
  Home: "Hjem",
  Idea: "Idé",
  Join: "Deltag",
  KbdShrtcsC: "Tastaturgenveje: ",
  Loading: "Indlæser...",
  LoadMore: "Indlæs flere ...",
  LogIn: "Log ind",
  LoggedInAs: "Logget ind som ",
  LogOut: "Log ud",
  Maybe: "Måske",
  Manage: "Administrer",
  Members: "Medlemmer",
  MessageN: "Besked",
  MoreDots: "Mere...",
  Move: "Flyt",
  Name: "Navn",
  NameC: "Navn:",
  NewTopic: "Nyt emne",
  NoCancel: "Nej, annuller",
  Notifications: "Notifikationer",
  NotImplemented: "(Ikke implementeret)",
  NotYet: "Ikke endnu",
  NoTitle: "Uden titel",
  NoTopics: "Ingen emner.",
  Okay: "Okay",
  OkayDots: "Okay ...",
  Online: "Online",
  onePerLine: "én per linje",
  PreviewV: "Forhåndsvisning",
  Problem: "Problem",
  progressN: "fremskridt",
  Question: "Spørgsmål",
  Recent: "Seneste",
  Remove: "Fjern",
  Reopen: "Genåbn",
  ReplyV: "Svar",
  Replying: "Svarer",
  Replies: "Svar",
  replies: "svar",
  Save: "Gem",
  SavingDots: "Gemmer ...",
  SavedDot: "Gemt.",
  Search: "Søg",
  SendMsg: "Send besked",
  ShowPreview: "Vis forhåndsvisning",
  SignUp: "Deltag",  // don't change to "Sign Up" [join_or_signup]
  Solution: "Løsning",
  started: "startet",
  Summary: "Resumé",
  Submit: "Indsend",
  Tag: "Tag",
  Tags: "Tags",
  Tools: "Værktøjer",
  Topics: "Emner",
  TopicTitle: "Emnetitel",
  TopicType: "Emnetype",
  UploadingDots: "Uploader...",
  Username: "Brugernavn",
  Users: "Brugere",
  Welcome: "Velkommen",
  Wiki: "Wiki",
  Yes: "Ja",
  YesBye: "Ja, farvel",
  YesDoThat: "Ja, gør det",
  You: "Du",
  you: "du",

  // Trust levels.
  Guest:  "Gæst",
  NewMember: "Nyt medlem",
  BasicMember: "Basismedlem",
  FullMember: "Fuldt medlem",
  TrustedMember: "Betroet medlem",
  RegularMember: "Betroet genganger",
  CoreMember: "Kernemedlem",

  // Periods.
  PastDay: "Seneste døgn",
  PastWeek: "Seneste uge",
  PastMonth: "Seneste måned",
  PastQuarter: "Seneste kvartal",
  PastYear: "Seneste år",
  AllTime: "Altid",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "md",  // months
  daysLtr: "d",      // days
  hoursLtr: "t",     // hours
  minsLtr: "m",      // minutes
  secsLtr: "s",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "1 dag siden" : `${numDays} dage siden`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "1 time siden" : `${numHours} timer siden`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "1 minut siden" : `${numMins} minutter siden`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "1 sekund siden" : `${numSecs} sekunder siden`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "E-mail påkrævet",
    NoSpcs: "Ingen mellemrum tak",
    InvldAddr: "Ikke en gyldig e-mailadresse",
    NoBadChrs: "Ingen mærkelige tegn tak",

    // Full name input field:
    NotOnlSpcs: "Ikke kun mellemrum tak",
    NoAt: "Intet @ tak",

    // Username input field:
    NoDash: "Ingen bindestreger (-) tak",
    DontInclAt: "Inkluder ikke @",
    StartEndLtrDgt: "Start og slut med et bogstav eller et ciffer",
    OnlLtrNumEtc: "Kun bogstaver (a-z, A-Z) og tal, samt _ (understregning)",
    // This shown just below the username input:
    UnUnqShrt_1: "Dit ",
    UnUnqShrt_2: "@brugernavn",
    UnUnqShrt_3: ", unikt og kort",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Skal være mindst ${minLength} tegn`,
    TooLong: (maxLength: number) => `For langt. Skal være højst ${maxLength} tegn`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Hvert indlæg",
    EveryPostInTopic: "Du vil få besked om alle nye svar i dette emne.",
    EveryPostInCat: "Du vil få besked om alle nye emner og svar i denne kategori.",
    EveryPostInTopicsWithTag: "Du vil få besked om nye emner med dette tag, og alle svar i disse emner.",
    EveryPostWholeSite: "Du vil få besked om alle nye emner og svar, overalt.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Nye emner",
    NewTopicsInCat: "Du vil få besked om nye emner i denne kategori.",
    NewTopicsWithTag: "Du vil få besked om nye emner med dette tag.",
    NewTopicsWholeSite: "Du vil få besked om nye emner, overalt.",

    Tracking: "Tracker",

    Normal: "Normal",
    NormalDescr: "Du vil få besked hvis nogen taler til dig, også indirekte, f.eks. et " +
        "svar på et svar til dig.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Dæmpet",
    HushedDescr: "Du vil kun få besked hvis nogen taler direkte til dig.",

    Muted: "Lydløs",
    MutedTopic: "Ingen notifikationer.",
  },


  // Forum intro text

  fi: {
    Edit: "Rediger",
    Hide_1: "Skjul",
    Hide_2: ", klik ",
    Hide_3: " for at genåbne",
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

    Active: "Aktiv først",
    ActiveDescr: "Viser nyligt aktive emner først",

    New: "Ny",
    NewDescr: "Viser nyeste emner først",

    Top: "Populær",
    TopDescr: "Viser populære emner først",

    // Topic filter dropdown

    AllTopics: "Alle emner",

    ShowAllTopics: "Vis alle emner",
    ShowAllTopicsDescr: "Dog ikke slettede emner",

    WaitingTopics: "Ventende emner",
    OnlyWaitingDescr_1: "Viser kun emner der ",
    OnlyWaitingDescr_2: "venter ",
    OnlyWaitingDescr_3: "på en løsning eller på at blive implementeret og færdiggjort",

    YourTopics: "Dine emner",
    AssignedToYou: "Tildelt dig",

    DeletedTopics: "Vis slettede",
    ShowDeleted: "Vis slettede",
    ShowDeletedDescr: "Viser alle emner, inklusive slettede emner",

    // Rightmost buttons

    ViewCategories: "Vis kategorier",
    EditCat: "Rediger kategori",
    CreateCat: "Opret kategori",
    CreateTopic: "Opret emne",
    PostIdea: "Indsend en idé",
    AskQuestion: "Stil et spørgsmål",
    ReportProblem: "Rapporter et problem",
    CreateMindMap: "Opret mindmap",
    CreatePage: "Opret side",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Forklar ikoner...",
    IconExplanation: "Ikonforklaring:",
    ExplGenDisc: "En generel diskussion.",
    ExplQuestion: "Et spørgsmål uden et accepteret svar.",
    ExplAnswer: "Et spørgsmål med et accepteret svar.",
    ExplIdea: "En idé / et forslag.",
    ExplProblem: "Et problem.",
    ExplPlanned: "Noget vi planlægger at gøre eller rette.",
    ExplDone: "Noget der er gjort eller rettet.",
    ExplClosed: "Emnet er lukket.",
    ExplPinned: "Emnet er altid listet først (måske kun i sin egen kategori).",

    PopularTopicsComma: "Populære emner, ",
    TopFirstAllTime: "Viser de mest populære emner først, gennem tiden.",
    TopFirstPastDay: "Viser populære emner fra det seneste døgn.",

    CatHasBeenDeleted: "Denne kategori er blevet slettet",

    TopicsActiveFirst: "Emner, nyligt aktive først",
    TopicsNewestFirst: "Emner, nyeste først",

    CreatedOn: "Oprettet den ",
    LastReplyOn: "\nSeneste svar den ",
    EditedOn: "\nRedigeret den ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "oprettede emnet",
    frequentPoster: "hyppig bidragsyder",
    mostRecentPoster: "seneste bidragsyder",

    inC: "i: ",

    TitleFixed: "Dette er blevet rettet",
    TitleDone: "Dette er blevet gjort",
    TitleStarted: "Vi har påbegyndt dette",
    TitleStartedFixing: "Vi har påbegyndt rettelse af dette",
    TitleUnsolved: "Dette er et uløst problem",
    TitleIdea: "Dette er en idé",
    TitlePlanningFix: "Vi planlægger at rette dette",
    TitlePlanningDo: "Vi planlægger at gøre dette",
    TitleChat: "Dette er en chatkanal",
    TitlePrivateChat: "Dette er en privat chatkanal",
    TitlePrivateMessage: "En privat besked",
    TitleInfoPage: "Dette er en informationsside",
    TitleDiscussion: "En diskussion",
    IsPinnedGlobally: "\nDen er blevet fastgjort, så den vises først.",
    IsPinnedInCat: "\nDen er blevet fastgjort i sin kategori, så den vises først i sin kategori.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Seneste emner (dem der venter)",
    RecentTopicsInclDel: "Seneste emner (inklusive slettede)",
    RecentTopics: "Seneste emner",
    _replies: " svar",
    _deleted: " (slettet)",
    _defCat: " (standardkategori)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Seneste indlæg",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " online i denne chat",    // example: "5 online in this chat"
    NumOnlForum: " online i dette forum",

    // Open left-sidebar button title.
    WatchbBtn: "Dine emner",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Dine seneste emner, deltagne chats, direkte beskeder",

    // Title shown on user profile pages.
    AbtUsr: "Om bruger",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Tilbage fra brugerprofil",
    BackFromAdm: "Tilbage fra admin-område",

    // Title shown on full text search page.
    SearchPg: "Søgeside",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Tilføj ...",
    RecentlyViewed: "Nyligt viste emner",
    JoinedChats: "Deltagne chats",
    ChatChannels: "Chatkanaler",
    CreateChat: "Opret chatkanal",
    DirectMsgs: "Direkte beskeder",
    NoChats: "Ingen",    // meaning: "No chat messages"
    NoDirMsgs: "Ingen",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Emnehandlinger",
    ViewPeopleHere: "Se personer her",
    ViewAddRemoveMembers: "Se / tilføj / fjern medlemmer",
    ViewChatMembers: "Se chatmedlemmer",
    EditChat: "Rediger chatbeskrivelse",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Forlad denne chat",
    LeaveThisCommunity: "Forlad dette fællesskab",
    JoinThisCommunity: "Deltag i dette fællesskab",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Seneste kommentarer i dette emne:",
    NoComments: "Ingen kommentarer.",

    YourBookmarks: "Dine bogmærker:",

    UsersOnline: "Brugere online:",
    UsersOnlineForum: "Brugere online i dette forum:",
    UsersInThisChat: "Brugere i denne chat:",
    UsersInThisTopic: "Brugere i dette emne:",

    GettingStartedGuide: "Admin-guide",
    AdminGuide: "Admin-guide",
    Guide: "Guide",

    // How to hide the sidebar.
    CloseShortcutS: "Luk (tastaturgenvej: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Tilføj flere personer",

    // Shown next to one's own username, in a list of users.
    thatsYou: "det er dig",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Kun dig, ser det ud til",
    YouAnd: "Dig, og ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " person" : " personer";
      const have = numStrangers === 1 ? "har" : "har";
      return numStrangers + people + " som ikke " + have + " logget ind";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    RepliesToTheLeft: "Svarene til venstre er måske sorteret efter ",
    bestFirst: "bedste-først.",
    ButBelow: "Men nedenfor ",
    insteadBy: " er de samme svar i stedet sorteret efter ",
    newestFirst: "nyeste-først.",

    SoIfLeave: "Så hvis du forlader siden og kommer tilbage senere, vil du nedenfor finde ",
    allNewReplies: "alle nye svar.",
    Click: "Klik",
    aReplyToReadIt: " på et svar nedenfor for at læse det — fordi der kun vises et uddrag nedenfor.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Klik for at ændre status",
    ClickToViewAnswer: "Klik for at se svar",
    ViewAnswer: "Se svar",
    ChangeStatusC: "Skift status til:",
    ChangeCatC: "Skift kategori:",
    ChangeTopicTypeC: "Skift emnetype:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "et spørgsmål",
    hasAccptAns: "har et accepteret svar",
    aProblem: "et problem",
    planToFix: "planlægger at rette",
    anIdea: "en idé",
    planToDo: "planlægger at gøre",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Denne formular er blevet ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "lukket; du kan ikke længere udfylde og indsende den.",

    ThisTopicClosed_1: "Dette emne er blevet ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". Du kan stadig skrive kommentarer.",

    ThisPageDeleted: "Denne side er blevet slettet",
    CatDeldPageToo: "Kategorien er slettet, så denne side blev også slettet",

    ThreadDeld: "Tråd slettet",
    CmntDeld: "Kommentar slettet",
    PostDeld: "Indlæg slettet",
    DiscDeld: "Diskussion slettet",
    PageDeld: "Side slettet",
    PagePendAppr: "Side afventer godkendelse",
    TitlePendAppr: "Titel afventer godkendelse",
    TextPendingApproval: "Tekst afventer godkendelse",

    TooltipQuestClosedNoAnsw: "Dette spørgsmål er blevet lukket uden et accepteret svar.",
    TooltipTopicClosed: "Dette emne er lukket.",

    TooltipQuestSolved: "Dette er et løst spørgsmål",
    TooltipQuestUnsolved: "Dette er et uløst spørgsmål",

    StatusDone: "Færdig",
    TooltipProblFixed: "Dette er blevet rettet",
    TooltipDone: "Dette er blevet gjort",

    StatusStarted: "Startet",
    TooltipFixing: "Vi har påbegyndt rettelse af dette",
    TooltipImplementing: "Vi har påbegyndt dette",

    StatusPlanned: "Planlagt",
    TooltipProblPlanned: "Vi planlægger at rette dette",
    TooltipIdeaPlanned: "Vi planlægger at gøre dette",

    StatusNew: "Ny",
    StatusNewDtl: "Nyt emne, under diskussion",
    TooltipUnsProbl: "Dette er et uløst problem",
    TooltipIdea: "Dette er en idé",

    TooltipPersMsg: "Personlig besked",
    TooltipChat: "# betyder chatkanal",
    TooltipPrivChat: "Dette er en privat chatkanal",

    TooltipPinnedGlob: "\nFastgjort globalt.",
    TooltipPinnedCat: "\nFastgjort i denne kategori.",

    SolvedClickView_1: "Løst i indlæg #",
    SolvedClickView_2: ", klik for at se",

    PostHiddenClickShow: "Indlæg skjult; klik for at vise",
    ClickSeeMoreRepls: "Vis flere svar",
    ClickSeeMoreComments: "Vis flere kommentarer",
    ClickSeeThisComment: "Klik for at vise denne kommentar",
    clickToShow: "klik for at vise",

    ManyDisagree: "Mange er uenige i dette:",
    SomeDisagree: "Nogle er uenige i dette:",

    PendAppr: "Afventer godkendelse",
    CmtPendAppr: "Kommentar afventer godkendelse, indsendt ",
    CmtBelowPendAppr: (isYour) => (isYour ? "Din" : "Kommentaren") + " nedenfor afventer godkendelse.",

    _and: " og",

    repliesTo: "svar til",
    InReplyTo: "Som svar til",
    YourReplyTo: "Dit svar til ",
    YourChatMsg: "Din chatbesked: ",
    YourDraft: "Dit kladde",
    YourEdits: "Dine redigeringer: ",
    YourProgrNoteC: "Din statusnote:",
    aProgrNote: "en statusnote: ",

    ReplyingToC: "Svarer på:",
    ScrollToPrevw_1: "Rul til ",
    ScrollToPrevw_2: "forhåndsvisning",

    UnfinEdits: "Ufærdige redigeringer",
    ResumeEdting: "Genoptag redigering",
    DelDraft: "Slet kladde",

    ClickViewEdits: "Klik for at se gamle redigeringer",

    By: "Af ", // ... someones name

    // Discussion ...
    aboutThisIdea: "om hvordan og om vi skal udføre denne idé",
    aboutThisProbl: "om hvordan og om vi skal rette dette",

    AddProgrNote: "Tilføj statusnote",
    // Progress ...
    withThisIdea: "med udførelsen af denne idé",
    withThisProbl: "med håndtering af dette problem",
    withThis: "med udførelsen af dette",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Notifikationer om dette emne:",

    // If is a direct message topic, members listed below this text.
    Msg: "Besked",

    SmrzRepls: "Opsummer svar",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `Der er ${numReplies} svar. Estimeret læsetid: ${minutes} minutter`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Færdig. Opsummerede ${numSummarized} svar ud af de ${numShownBefore} svar der tidligere blev vist.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Luk emne",
    CloseOwnQuestionTooltip: "Luk dette spørgsmål hvis du ikke længere har brug for et svar.",
    CloseOthersQuestionTooltip: "Luk dette spørgsmål hvis det ikke kræver et svar, f.eks. hvis " +
        "det er uden for emnet eller allerede besvaret i et andet emne.",
    CloseToDoTooltip: "Luk denne to-do hvis den ikke behøver at blive gjort eller rettet.",
    CloseTopicTooltip: "Luk dette emne hvis det ikke kræver yderligere overvejelse.",

    AcceptBtnExpl: "Accepter dette som svaret på spørgsmålet eller problemet",
    SolutionQ: "Løsning?",
    ClickUnaccept: "Klik for at fortryde accept af dette svar",
    PostAccepted: "Dette indlæg er blevet accepteret som svaret",

    NumLikes: (num: number) => num === 1 ? "1 Synes godt om" : num + " Synes godt om",
    NumDisagree: (num: number) => num + " Uenige",
    NumBury: (num: number) => num === 1 ? "1 Nedton" : num + " Nedtoninger",
    NumUnwanted: (num: number) => num === 1 ? "1 Uønsket" : num + " Uønskede",

    MoreVotes: "Flere stemmer...",
    LikeThis: "Synes godt om",
    LinkToPost: "Link til dette indlæg",
    Report: "Rapporter",
    ReportThisPost: "Rapporter dette indlæg",
    Admin: "Admin",
    DiscIx: "Diskussionsindeks",

    Disagree: "Uenig",
    DisagreeExpl: "Klik her for at erklære dig uenig i dette indlæg, eller for at advare andre om faktuelle fejl.",
    Bury: "Nedton",
    BuryExpl: "Klik for at sortere andre indlæg før dette indlæg. Kun forum-personalet kan se din stemme.",
    Unwanted: "Uønsket",
    UnwantedExpl: "Hvis du ikke ønsker dette indlæg på denne hjemmeside. Dette vil mindske den tillid jeg har " +
            "til indlæggets forfatter. Kun forum-personalet kan se din stemme.",

    AddTags: "Tilføj/fjern tags",
    UnWikify: "Fjern wiki-status",
    Wikify: "Gør til wiki",
    PinDeleteEtc: "Fastgør / Slet / Kategori ...",
  },


  // Share dialog

  sd: {
    Copied: "Kopieret.",
    CtrlCToCopy: "Tryk CTRL+C for at kopiere.",
    ClickToCopy: "Klik for at kopiere link.",
  },


  // Chat

  c: {
    About_1: "Dette er ",
    About_2: " chatkanalen, oprettet af ",
    ScrollUpViewComments: "Rul op for at se ældre kommentarer",
    Purpose: "Formål:",
    MessageDeleted: "(Besked slettet)",
    JoinThisChat: "Deltag i denne chat",
    PostMessage: "Send besked",
    AdvancedEditor: "Avanceret editor",
    TypeTitle: "Skriv en titel — hvad handler denne chat om, med få ord?",
    TypePurpose: "Skriv et formål — kan være længere end titlen, mere beskrivende.",
    TypeHere: "Skriv her. Du kan bruge Markdown og HTML.",
  },


  // My Menu

  mm: {
    NeedsReview: "Mangler gennemsyn ",
    AdminHelp: "Admin-hjælp ",
    StaffHelp: "Personale-hjælp ",
    DraftsEtc: "Kladder, bogmærker, opgaver",
    MoreNotfs: "Se alle notifikationer",
    DismNotfs: "Marker alle som læst",
    ViewProfile: "Se din profil",
    ViewGroups: "Se grupper",
    LogOut: "Log ud",
    UnhideHelp: "Vis hjælpebeskeder igen",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Rul til:",
    Scroll: "Rul",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "B",
    Back_2: "agud",
    BackExpl: "Rul tilbage til din tidligere position på denne side",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Toppen af siden",
    PgTopHelp: "Gå til toppen af siden. Tastaturgenvej: 1",
    Repl: "Svar",
    ReplHelp: "Gå til svar-sektionen. Genvej: 2",
    Progr: "Fremskridt",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Gå til fremskridts-sektionen. Genvej: 3",
    PgBtm: "Bunden af siden",
    Btm: "Bund",
    BtmHelp: "Gå til bunden af siden. Genvej: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", og ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " for at rulle tilbage",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Vælg brugere",
    AddUsers: "Tilføj brugere",
  },


  // About user dialog

  aud: {
    IsMod: "Er moderator.",
    IsAdm: "Er administrator.",
    IsDeld: "Er deaktiveret eller slettet.",
    ThisIsGuest: "Dette er en gæstebruger, det kan i virkeligheden være hvem som helst.",
    ViewInAdm: "Se i admin-område",
    ViewProfl: "Se profil",
    ViewComments: "Se andre kommentarer",
    RmFromTpc: "Fjern fra emne",
    EmAdrUnkn: "E-mailadresse ukendt — denne gæst vil ikke få besked om svar.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Præferencer",
    Invites: "Invitationer",
    DraftsEtc: "Kladder mv.",
    About: "Om",
    Privacy: "Privatliv",
    Security: "Sikkerhed",
    Account: "Konto",
    Interface: "Grænseflade",

    // ----- Overview stats

    JoinedC: "Tilmeldt: ",
    PostsMadeC: "Indlæg skrevet: ",
    LastPostC: "Seneste indlæg: ",
    LastSeenC: "Senest set: ",
    TrustLevelC: "Tillidsniveau: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Upload foto",
    ChangePhoto: "Skift foto",
    ImgTooSmall: "Billede for lille: bør være mindst 100 x 100",

    // ----- Activity

    OnlyStaffCanSee: "Kun personale og betroede kernemedlemmer kan se dette.",
    OnlyMbrsCanSee: "Kun personer der har været aktive medlemmer i et stykke tid kan se dette.",
    Nothing: "Intet at vise",
    Posts: "Indlæg",
    NoPosts: "Ingen indlæg.",
    Topics: "Emner",
    NoTopics: "Ingen emner.",

    // ----- User status

    UserBanned: "Denne bruger er bandlyst",
    UserSuspended: (dateUtc: string) => `Denne bruger er suspenderet indtil ${dateUtc} UTC`,
    ReasonC: "Årsag: ",

    DeactOrDeld: "Er blevet deaktiveret eller slettet.",
    isGroup: " (en gruppe)",
    isGuest: " — en gæstebruger, kan være hvem som helst",
    isMod: " – moderator",
    isAdmin: " – administrator",
    you: "(dig)",

    // ----- Notifications page

    NoNotfs: "Ingen notifikationer",
    NotfsToYouC: "Notifikationer til dig:",
    NotfsToOtherC: (name: string) => `Notifikationer til ${name}:`,
    DefNotfsSiteWide: "Standardnotifikationer, overalt på sitet",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "for",

    // ----- Drafts Etc page

    NoDrafts: "Ingen kladder",
    YourDraftsC: "Dine kladder:",
    DraftsByC: (name: string) => `Kladder af ${name}:`,

    // ----- Invites page

    InvitesIntro: "Her kan du invitere folk til at deltage på dette site. ",
    InvitesListedBelow: "Invitationer du allerede har sendt er listet nedenfor.",
    NoInvites: "Du har ikke inviteret nogen endnu.",

    InvitedEmail: "Inviteret e-mail",
    WhoAccepted: "Medlem der accepterede",
    InvAccepted: "Invitation accepteret",
    InvSent: "Invitation sendt",
    JoinedAlready: "Allerede tilmeldt",

    SendAnInv: "Inviter personer",
    SendInv: "Send invitationer",
    SendInvExpl:
        "Vi sender dine venner en kort e-mail. De kan klikke på et link " +
        "for at deltage med det samme, uden login påkrævet. " +
        "De vil blive normale medlemmer, ikke moderatorer eller administratorer.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Færdig. Jeg sender dem en e-mail.",
    NoOneToInv: "Ingen at invitere.",
    InvNotfLater: "Jeg giver dig besked senere, når jeg har inviteret dem.",
    AlreadyInvSendAgainQ: "Disse er allerede blevet inviteret — måske vil du invitere dem igen?",
    InvErr_1: "Disse resulterede i ",
    InvErr_2: "fejl",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Disse er allerede tilmeldt, så jeg inviterede dem ikke:",
    ResendInvsQ: "Send invitationer til disse personer igen? De er allerede blevet inviteret.",
    InvAgain: "Inviter igen",

    // ----- Preferences, About

    AboutYou: "Om dig",
    WebLink: "Enhver hjemmeside eller side der tilhører dig.",

    NotShownCannotChange: "Vises ikke offentligt. Kan ikke ændres.",

    // The full name or alias:
    NameOpt: "Navn (valgfrit)",

    NotShown: "Vises ikke offentligt.",

    // The username:
    MayChangeFewTimes: "Du kan kun ændre det få gange.",
    notSpecified: "(ikke angivet)",
    ChangeUsername_1: "Du kan kun ændre dit brugernavn få gange.",
    ChangeUsername_2: "At ændre det for ofte kan gøre andre forvirrede — " +
        "de vil ikke vide hvordan de skal @omtale dig.",

    NotfAboutAll: "Bliv underrettet om hvert nyt indlæg (medmindre du dæmper emnet eller kategorien)",
    NotfAboutNewTopics: "Bliv underrettet om nye emner (medmindre du dæmper kategorien)",

    ActivitySummaryEmails: "E-mails med aktivitetsoversigt",

    EmailSummariesToGroup:
        "Når medlemmer af denne gruppe ikke besøger sitet, så send dem som standard " +
        "oversigter over populære emner og andre ting.",
    EmailSummariesToMe:
        "Når jeg ikke besøger sitet, så send mig " +
        "oversigter over populære emner og andre ting.",

    AlsoIfTheyVisit: "Send dem også e-mail selvom they besøger sitet regelmæssigt.",
    AlsoIfIVisit: "Send mig også e-mail selvom jeg besøger sitet regelmæssigt.",

    HowOftenWeSend: "Hvor ofte skal we sende disse e-mails?",
    HowOftenYouWant: "Hvor ofte ønsker du disse e-mails?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Skjul din seneste aktivitet for fremmede og nye medlemmer?",
    HideActivityStrangers_2: "(Men ikke for dem der har været aktive medlemmer i et stykke tid.)",
    HideActivityAll_1: "Skjul din seneste aktivitet for alle?",
    HideActivityAll_2: "(Undtagen personale og betroede kernemedlemmer.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "E-mailadresser",
    PrimaryDot: "Primær. ",
    VerifiedDot: "Verificeret. ",
    NotVerifiedDot: "Ikke verificeret. ",
    ForLoginWithDot: (provider: string) => `For login med ${provider}. `,
    MakePrimary: "Gør til primær",
    AddEmail: "Tilføj e-mailadresse",
    TypeNewEmailC: "Skriv en ny e-mailadresse:",
    MaxEmailsInfo: (numMax: number) => `(Du kan ikke tilføje mere end ${numMax} adresser.)`,
    EmailAdded_1: "Tilføjet. Vi har sendt dig en verifikations-e-mail — ",
    EmailAdded_2: "tjek din indbakke.",
    SendVerifEmail: "Send verifikations-e-mail",

    EmailStatusExpl:
        "('Primær' betyder at du kan logge ind via denne adresse, og we sender notifikationer til den. " +
        "'Verificeret' betyder at du har klikket på et verifikationslink i en e-mail til adresseverifikation.)",

    // Password:
    ChangePwdQ: "Skift adgangskode?",
    CreatePwdQ: "Opret adgangskode?",
    WillGetPwdRstEml: "Du vil få en e-mail til nulstilling af adgangskode.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Ingen",

    // Logins:
    LoginMethods: "Login-metoder",
    commaAs: ", som: ",

    // One's data:
    YourContent: "Dit indhold",
    DownloadPosts: "Download indlæg",
    DownloadPostsHelp: "Opretter en JSON-fil med en kopi af emner og kommentarer du har indsendt.",
    DownloadPersData: "Download personlige data",
    DownloadPersDataHelp: "Opretter en JSON-fil med en kopi af dine personlige data, f.eks. dit navn " +
        "(hvis du har angivet et navn) og e-mailadresse.",


    // Delete account:
    DangerZone: "Farezone",
    DeleteAccount: "Slet konto",
    DeleteYourAccountQ:
        "Slet din konto? Vi fjerner dit navn, glemmer din e-mailadresse, adgangskode og " +
        "enhver online identitet (som Facebook- eller Twitter-login). " +
        "Du vil ikke kunne logge ind igen. Dette kan ikke fortrydes.",
    DeleteUserQ:
        "Slet denne bruger? Vi fjerner navnet, glemmer e-mailadressen, adgangskoden og " +
        "online identiteter (som Facebook- eller Twitter-login). " +
        "Brugeren vil ikke kunne logge ind igen. Dette kan ikke fortrydes.",
    YesDelete: "Ja, slet",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Gruppemedlemmer",
    NoMembers: "Ingen medlemmer.",
    MayNotListMembers: "Må ikke liste medlemmer.",
    AddMembers: "Tilføj medlemmer",
    BuiltInCannotModify: "Dette er en indbygget gruppe; den kan ikke ændres.",
    NumMembers: (num: number) => `${num} medlemmer`,
    YouAreMember: "Du er medlem.",
    CustomGroupsC: "Brugerdefinerede grupper:",
    BuiltInGroupsC: "Indbyggede grupper:",
    DeleteGroup: "Slet denne gruppe",
  },


  // Create user dialog

  cud: {
    CreateUser: "Opret bruger",
    CreateAccount: "Opret konto",
    EmailC: "E-mail:",
    keptPriv: "vil blive holdt privat",
    forNotfsKeptPriv: "for svar-notifikationer, holdes privat",
    EmailVerifBy_1: "Din e-mail er blevet verificeret af ",
    EmailVerifBy_2: ".",
    UsernameC: "Brugernavn:",
    FullNameC: "Fuldt navn:",
    optName: "valgfrit",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "Konto oprettet. Du er blevet logget ind.",
    AlmostDone:
        "Næsten færdig! Du skal blot bekræfte din e-mailadresse. Vi har " +
        "sendt en e-mail til dig. Klik venligst på linket i e-mailen for at aktivere " +
        "din konto. Du kan lukke denne side.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Vilkår og Privatliv",

    Accept_1: "Accepterer du vores ",
    TermsOfService: "Servicevilkår",
    TermsOfUse: "Brugsvilkår",
    Accept_2: " og ",
    PrivPol: "Privatlivspolitik",
    Accept_3_User: "?",
    Accept_3_Owner: " for site-ejere?",

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Ja, jeg accepterer",
  },


  // Password input

  pwd: {
    PasswordC: "Adgangskode:",
    StrengthC: "Styrke: ",
    FairlyWeak: "Ganske svag.",
    toShort: "for kort",
    TooShort: (minLength: number) => `For kort. Bør være mindst ${minLength} tegn`,
    PlzInclDigit: "Inkluder venligst et ciffer eller specialtegn",
    TooWeak123abc: "For svag. Brug ikke adgangskoder som '12345' or 'abcde'.",
    AvoidInclC: "Undgå at inkludere (dele af) dit navn eller din e-mail i adgangskoden:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Siden blev ikke fundet, eller adgang nægtet.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Du udgiver dig for at være en anden, som måske ikke har adgang til alle dele " +
        "af denne hjemmeside.",

    IfYouThinkExistsThen: "Hvis du mener at siden eksisterer, så log ind som en der har adgang til den. ",
    LoggedInAlready: "(Du er allerede logget ind, men måske er det den forkerte konto?) ",
    ElseGoToHome_1: "Ellers kan du ",
    ElseGoToHome_2: "gå til forsiden.",

    CreateAcconut: "Opret konto",
    ContinueWithDots: "Fortsæt med ...",
    SignUp: "Deltag",
    LogIn: "Log ind",
    LogInWithPwd: "Log ind med adgangskode",
    CreateAdmAcct: "Opret admin-konto:",
    AuthRequired: "Autentificering påkrævet for at få adgang til dette site",
    LogInToLike: "Log ind for at synes godt om dette indlæg",
    LogInToSubmit: "Log ind og indsend",
    LogInToComment: "Log ind for at skrive en kommentar",
    LogInToCreateTopic: "Log ind for at oprette emne",

    //AlreadyHaveAcctQ: "You have an account? ",
    OrLogIn_1: "Eller ",
    OrLogIn_2: "Log ind",
    OrLogIn_3: " i stedet",

    //NewUserQ: "New user? ",
    SignUpInstead_1: "Eller ",
    SignUpInstead_2: "Opret konto",
    SignUpInstead_3: "",

    OrTypeName_1: ", eller bare ",
    OrTypeName_2: "skriv et navn",
    OrTypeName_3: "",

    OrCreateAcctHere: "Eller opret konto:",
    OrTypeName: "Eller skriv dit navn:",
    OrLogIn: "Eller log ind:",
    YourNameQ: "Dit navn?",

    BadCreds: "Forkert brugernavn eller adgangskode",

    UsernameOrEmailC: "Brugernavn eller e-mail:",
    PasswordC: "Adgangskode:",
    ForgotPwd: "Har du glemt din adgangskode?",

    NoPwd: "Du har endnu ikke valgt en adgangskode.",
    CreatePwd: "Opret adgangskode",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Fortæl os venligst hvad din bekymring drejer sig om.",
    ThanksHaveReported: "Tak. Du har rapporteret det. Forum-personalet vil tage et kig.",
    ReportComment: "Rapporter kommentar",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Dette indlæg indeholder personlige data, for eksempel nogens rigtige navn.",
    OptOffensive: "Dette indlæg indeholder stødende eller krænkende indhold.",
    OptSpam: "Dette indlæg er uønsket reklame.",
    OptOther: "Underret personalet om dette indlæg af en anden årsag.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "Du kan vise hjælpebeskeder igen, hvis du er logget ind, ved at " +
        "klikke på dit navn og derefter ",
    YouCanShowAgain_2: "Vis hjælpebeskeder igen",
  },


  // Editor

  e: {
    SimilarTopicsC: "Lignende emner:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "Beklager, men i øjeblikket kan du kun uploade én fil ad gangen",
    PleaseFinishPost: "Færdiggør venligst dit indlæg først",
    PleaseFinishChatMsg: "Færdiggør venligst din chatbesked først",
    PleaseFinishMsg: "Færdiggør venligst din besked først",
    PleaseSaveEdits: "Gem venligst dine nuværende redigeringer først",
    PleaseSaveOrCancel: "Gem eller annuller venligst dit nye emne først",
    CanContinueEditing: "Du kan fortsætte med at redigere din tekst, hvis du åbner editoren igen.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Slet venligst ikke al tekst. Skriv noget.",
    PleaseWriteSth: "Skriv venligst noget.",
    PleaseWriteTitle: "Skriv venligst en emnetitel.",
    PleaseWriteMsgTitle: "Skriv venligst en beskedtitel.",
    PleaseWriteMsg: "Skriv venligst en besked.",

    exBold: "fed tekst",
    exEmph: "kursiv tekst",
    exPre: "præformateret tekst",
    exQuoted: "citeret tekst",
    ExHeading: "Overskrift",

    TitlePlaceholder: "Skriv en titel — hvad handler dette om, i én kort sætning?",

    EditPost_1: "Rediger ",
    EditPost_2: "indlæg ",

    TypeChatMsg: "Skriv en chatbesked:",
    YourMsg: "Din besked:",
    CreateTopic: "Opret nyt emne",
    CreateCustomHtml: "Opret en brugerdefinerede HTML-side (tilføj din egen <h1>-titel)",
    CreateInfoPage: "Opret en informationsside",
    CreateCode: "Opret en kildekodeside",
    AskQuestion: "Stil et spørgsmål",
    ReportProblem: "Rapporter et problem",
    SuggestIdea: "Foreslå en idé",
    NewChat: "Chat-titel og formål",
    NewPrivChat: "Privat chat-titel og formål",
    AppendComment: "Tilføj en kommentar i bunden af siden:",

    ReplyTo: "Svar til ",
    ReplyTo_theOrigPost: "det oprindelige indlæg",
    ReplyTo_post: "indlæg ",
    AddCommentC: "Tilføj en kommentar:",

    PleaseSelectPosts: "Vælg venligst et eller flere indlæg at svare på.",

    Save: "Gem",
    edits: "redigeringer",

    PostReply: "Indsend svar",
    PostComment: "Indsend kommentar",

    Post: "Indsend",
    comment: "kommentar",
    question: "spørgsmål",

    PostMessage: "Send besked",
    SimpleEditor: "Simpel editor",

    Send: "Send",
    message: "besked",

    Create: "Opret",
    page: "side",
    chat: "chat",
    idea: "idé",
    topic: "emne",

    Submit: "Indsend",
    problem: "problem",

    ViewOldEdits: "Se gamle redigeringer",

    UploadBtnTooltip: "Upload en fil eller et billede",
    BoldBtnTooltip: "Gør tekst fed",
    EmBtnTooltip: "Kursiv",
    QuoteBtnTooltip: "Citer",
    PreBtnTooltip: "Præformateret tekst",
    HeadingBtnTooltip: "Overskrift",

    TypeHerePlaceholder: "Skriv her. Du kan bruge Markdown og HTML. Træk og slip for at indsætte billeder.",

    Maximize: "Maksimer",
    ToNormal: "Tilbage til normal",
    TileHorizontally: "Vis vandret",

    PreviewC: "Forhåndsvisning:",
    TitleExcl: " (titel udeladt)",
    ShowEditorAgain: "Vis editor igen",
    Minimize: "Minimer",

    PreviewInfo: "Her kan du se en forhåndsvisning af, hvordan dit indlæg vil se ud.",
    CannotType: "Du kan ikke skrive her.",

    LoadingDraftDots: "Indlæser kladde...",
    DraftUnchanged: "Uændret.",
    CannotSaveDraftC: "Kan ikke gemme kladde:",
    DraftSavedBrwsr: "Kladde gemt i browseren.",
    DraftSaved: (nr: string | number) => `Kladde ${nr} gemt.`,
    DraftDeleted: (nr: string | number) => `Kladde ${nr} slettet.`,
    WillSaveDraft: (nr: string | number) => `Vil gemme kladde ${nr} ...`,
    SavingDraft: (nr: string | number) => `Gemmer kladde ${nr} ...`,
    DeletingDraft: (nr: string | number) => `Sletter kladde ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Vælg kategori",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Vælg emnetype:",
    DiscussionExpl: "En diskussion om noget.",
    QuestionExpl: "Ét svar kan markeres som det accepterede svar.",
    ProblExpl: "Hvis noget er i stykker eller ikke virker. Kan markeres som rettet/løst.",
    IdeaExpl: "Et forslag. Kan markeres som gjort/implementeret.",
    ChatExpl: "En måske uendelig samtale.",
    PrivChatExpl: "Kun synlig for personer der bliver inviteret til at deltage i chatten.",

    CustomHtml: "Brugerdefineret HTML-side",
    InfoPage: "Informationsside",
    Code: "Kode",
    EmbCmts: "Indlejrede kommentarer",
    About: "Om",
    PrivChat: "Privat chat",
    Form: "Formular",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Ikke flere fællesskaber at deltage i.",
    SelCmty: "Vælg fællesskab ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "Søg efter hjælp",
    TxtToFind: "Tekst at søge efter",
  },


  // No internet

  ni: {
    NoInet: "Ingen internetforbindelse",
    PlzRefr: "Opdater siden for at se de seneste ændringer. (Der var en afbrydelse)",
    RefrNow: "Opdater nu",
  },


  PostDeleted: (postNr: number) => `Indlægget, nr ${postNr}, er blevet slettet.`,
  NoSuchPost: (postNr: number) => `Der findes intet indlæg nr ${postNr} på denne side.`,
  NoPageHere: "Denne side er blevet slettet, eller den har aldrig eksisteret, eller du har ikke adgang til den.",
  GoBackToLastPage: "Gå tilbage til sidste side",

};
